import isObject from 'lodash/isObject';
import isNumber from 'lodash/isNumber';
import isFunction from 'lodash/isFunction';
import merge from 'lodash/merge';
import {utils} from './utils';

export class Item {

  /* @ngInject */
  constructor(config) {
    this.style = {};
    this.visibility = {};

    config = config || {};

    if (!config.dto) {
      console.error('Item has no DTO', config);
      config.dto = {};
    }

    this.dto = config.dto;
    this.idx = config.idx;
    this.container = config.container;

    this.cubeType = config.styleParams.cubeType || 'fill';
    this.cubeImages = config.styleParams.cubeImages;
    this._cubeRatio = config.styleParams.cubeRatio;
    this.smartCrop = config.styleParams.smartCrop;
    this.cropOnlyFill = config.styleParams.cropOnlyFill;
    this.imageMargin = config.styleParams.imageMargin;
    this.galleryMargin = config.styleParams.galleryMargin;
    this.floatingImages = config.styleParams.floatingImages;
    this.smartCrop = config.styleParams.smartCrop;

    this._groupOffset = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
    this._group = {};
    this.calcPinOffset = () => 0;

    this.resize(1);

  }

  fixMetadataVerticalVideoRatio(metadata) {
    if (metadata.qualities && metadata.qualities[0]) { //fix incorrect width height for vertical videos
      const {qualities} = metadata;
      const {height, width} = qualities[qualities.length - 1];
      metadata.height = height;
      metadata.width = width;
    }
  }

  resize(scaleOrDimensions) {

    let scale = 1;
    if (scaleOrDimensions === false) {
      return;
    } else if (isNumber(scaleOrDimensions)) {
      scale = scaleOrDimensions;
    } else if (isObject(scaleOrDimensions)) {
      if (scaleOrDimensions.width) {
        scale = scaleOrDimensions.width / this.width;
      } else if (scaleOrDimensions.height) {
        scale = scaleOrDimensions.height / this.height;
      }
    }

    this.width *= scale;
    this.height *= scale;

    this.resized = true;

    return this;
  }

  pinToCorner(cornerName, pinOffset = 0) {

    const isTop = cornerName.indexOf('top') >= 0;
    const isLeft = cornerName.indexOf('left') >= 0;

    this.style.top = isTop ? pinOffset : 'auto';
    this.style.bottom = isTop ? 'auto' : pinOffset;
    this.style.left = isLeft ? pinOffset : 'auto';
    this.style.right = isLeft ? 'auto' : pinOffset;

    this.pin = cornerName;
    this.isPinnedTop = isTop;
    this.isPinnedLeft = isLeft;
    this.pinOffset = pinOffset;
    this.calcPinOffset = groupSize => {
      if (pinOffset <= 0) {
        return 0;
      } else {
        //this is used only for 3h/3v group types - to calc the offset of the middle item
        const m = this.imageMargin;
        return ((groupSize - 6 * m) * this.pinOffset + 2 * m);
      }
    };

  }

  pinToMiddle() {

    this.style.top = this.style.bottom = this.style.left = this.style.right = 'auto';

    this.pin = 'middle';
    this.isPinnedMiddle = true;

  }

  setPosition(position) {
    this.style.position = position;
  }

  getPosition(pos) {
    return (parseInt(pos, 10) >= 0 ? pos : 'auto');
  }

  get top() {
    return this.getPosition(this.style.top);
  }

  get left() {
    return this.getPosition(this.style.left);
  }

  get right() {
    return this.getPosition(this.style.right);
  }

  get bottom() {
    return this.getPosition(this.style.bottom);
  }

  set group(group) {
    merge(this._group, group);
  }

  get group() {
    return this._group;
  }

  set offset(offset) {
    merge(this._groupOffset, offset);
  }

  get offset() {
    const offset = {
      top: this._groupOffset.top + (this.isPinnedTop ? this.calcPinOffset(this._group.height) : (this._group.height - this.outerHeight)) || 0,
      left: this._groupOffset.left + (this.isPinnedLeft ? this.calcPinOffset(this._group.width) : (this._group.width - this.outerWidth)) || 0,
      right: (this._groupOffset.right - (this.isPinnedLeft ? (this._group.width - this.outerWidth) : this.calcPinOffset(this._group.width)) || 0) - this.imageMargin * 2,
      bottom: (this._groupOffset.bottom - (this.isPinnedTop ? (this._group.height - this.outerHeight) : this.calcPinOffset(this._group.height)) || 0) - this.imageMargin * 2,
    };
    return offset;
  }

  get transform() {
    if (this.floatingImages > 0) {

      const m = this.imageMargin;
      const g = this.galleryMargin;

      const spaceLeft = (this.offset.left > 0) ? m : g;
      const spaceRight = (this.container.galleryWidth - this.offset.right > 2 * m) ? m : g;
      const spaceUp = (this.offset.top > 0) ? m : g;
      const spaceDown = (this.container.galleryHeight - this.offset.bottom > 2 * m) ? m : g;

      const horizontalShift = utils.hashToInt(this.hash + this.offset.right + 'x', -1 * spaceLeft, spaceRight) * this.floatingImages;
      const verticalShift = utils.hashToInt(this.hash + this.offset.top + 'y', -1 * spaceUp, spaceDown) * this.floatingImages;

      return {
        transform: `translate3d(${horizontalShift}px, ${verticalShift}px, 0)`
      };
    } else {
      return {};
    }

  }

  get id() {
    return this.dto.id || this.dto.photoId || this.dto.itemId;
  }

  set id(id) {
    this.dto.itemId = this.dto.photoId = this.dto.id = id;
  }

  get hash() {
    return this.dto.hash || this.dto.mediaUrl || this.dto.id;
  }

  get maxWidth() {
    return this.dto.width || this.dto.w;
  }
  set maxWidth(w) {
    this.dto.width = w;
  }

  get outerWidth() {
    return this.width + (2 * this.margins);
  }

  get orgWidth() {
    return this.style.width || this.dto.width || this.dto.w || 1; //make sure the width / height is not undefined (crashes the gallery)
  }

  get width() {
    if (this.cubeImages && (this.ratio >= this.cubeRatio)) {
      return this.style.cubedWidth || (this.orgHeight * this.cubeRatio);
    } else {
      return this.orgWidth;
    }
  }

  set width(w) {
    this.style.cubedWidth = this.style.width = Math.max(1, w);
  }

  get outerHeight() {
    return this.height + (2 * this.margins);
  }

  get orgHeight() {
    return this.style.height || this.dto.height || this.dto.h || 1; //make sure the width / height is not undefined (creashes the gallery)
  }

  get height() {
    if (this.cubeImages && (this.ratio < this.cubeRatio)) {
      return this.style.cubedHeight || (this.orgWidth / this.cubeRatio);
    } else {
      return this.orgHeight;
    }
  }

  set height(h) {
    this.style.cubedHeight = this.style.height = Math.max(1, h);
  }

  get maxHeight() {
    return this.dto.height || this.dto.h;
  }
  set maxHeight(h) {
    h = this.dto.height;
  }

  get margins() {
    return this.imageMargin || 0;
  }
  set margins(m) {
    this.imageMargin = m;
  }

  get cubeRatio() {
    let ratio;
    if (isFunction(this._cubeRatio)) {
      ratio = this._cubeRatio();
    } else if (this.cropOnlyFill && this.cubeType === 'fit') {
      ratio = this.ratio;
    } else {
      ratio = this._cubeRatio;
    }

    if (this.smartCrop === true) {
      if (this.isPortrait) {
        return Math.min(ratio, (1 / ratio));
      } else {
        return Math.max(ratio, (1 / ratio));
      }
    } else {
      return ratio;
    }
  }

  set cubeRatio(ratio) {
    this._cubeRatio = ratio;
    this.style.cubedHeight = this.style.cubedWidth = 0;
  }

  get orientation() {
    return ((this.ratio < 0.999) ? 'portrait' : 'landscape'); //make sure that almost square images get the same treatment
  }

  get isPortrait() {
    return this.orientation === 'portrait';
  }

  get isLandscape() {
    return this.orientation === 'landscape';
  }

  get ratio() {
    if (!this.orgRatio) {
      this.orgRatio = this.orgWidth / this.orgHeight;
    }
    return this.orgRatio;
  }

  set ratio(r) {
    this.orgRatio = r;
  }

  get scheme() {
    return {
      id: this.id,
      idx: this.idx,
      type: this.type,
      style: this.style,
      width: this.width,
      maxWidth: this.maxWidth,
      outerWidth: this.outerWidth,
      height: this.height,
      maxHeight: this.maxHeight,
      outerHeight: this.outerHeight,
      margins: this.margins,
      ratio: this.ratio,
      cropRatio: this.cubeRatio,
      isCropped: this.cubeImages,
      cropType: this.cubeType,
      group: this.group,
      offset: this.offset,
      transform: this.transform,
      orientation: this.orientation,
      isPortrait: this.isPortrait,
      isLandscape: this.isLandscape,
      visibility: this.visibility
    };
  }
}

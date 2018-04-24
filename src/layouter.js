import isUndefined from 'lodash/isUndefined';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import fill from 'lodash/fill';
import sum from 'lodash/sum';
import each from 'lodash/each';

import {utils} from './utils';
import {Item} from './item.js';
import {Group} from './group.js';
import {Strip} from './strip.js';
import {Column} from './column.js';

export default class Layouter {

  constructor(layoutParams) {

    this.ready = false;
    this.pointer = 0;
    this.layoutItems = [];

    this.findNeighborItem = this.findNeighborItem.bind(this);

    this.updateParams(layoutParams);
    this.createLayout();
  }

  updateParams(layoutParams) {
    this.srcItems = layoutParams.items;
    this.styleParams = utils.convertStyleParams(layoutParams.styleParams);
    this.container = utils.convertContainer(layoutParams.container, this.styleParams);
    this.showAllItems = layoutParams.showAllItems;
  }

  verifyGalleryState() {
    if (!this.container.galleryWidth) {
      this.ready = false;
      this.reason = 'galleryWidth is undefined or 0';
      return false;
    }

    if (!this.styleParams.gallerySize) {
      this.ready = false;
      this.reason = 'gallerySize is undefined or 0';
      return false;
    }

    return true;
  }

  createLayout(layoutParams) {

    if (!isUndefined(layoutParams)) {
      this.updateParams(layoutParams);
    }

    if (!this.verifyGalleryState()) {
      return false;
    }

    this.pointer = 0;
    this.firstGroup = false;
    this.layoutItems = [];

    let gallerySize = Math.floor(this.styleParams.gallerySize) + Math.ceil(2 * (this.styleParams.imageMargin - this.styleParams.galleryMargin));
    const galleryWidth = Math.floor(this.container.galleryWidth);
    const maxGroupSize = this.maxGroupSize;

    let groupIdx = 1;
    let inStripIdx = 1;
    let item = {};

    let groupItems = [];
    let group;
    const bounds = this.container.bounds || {};

    let strip = new Strip({
      idx: 1,
      container: this.container,
      styleParams: this.styleParams
    });

    let galleryHeight = 0;

    let safetyCounter = 1000000;

    let numOfCols = 1;
    if (this.styleParams.isVertical) {
      if (this.styleParams.fixedColumns > 0) {
        numOfCols = utils.isMobile() ? 1 : this.styleParams.fixedColumns;
      } else {
        numOfCols = Math.ceil(galleryWidth / gallerySize) || 1;
      }
      gallerySize = Math.floor(galleryWidth / numOfCols);
    } else {
      numOfCols = 1;
      // gallerySize = Math.min(this.styleParams.gallerySize, galleryWidth);
    }
    const columns = fill(Array(numOfCols), new Column(gallerySize, this.styleParams.cubeRatio));
    columns[numOfCols - 1].width += (galleryWidth - (gallerySize * numOfCols)); //the last group compensates for half pixels in other groups
    columns[numOfCols - 1].cubeRatio = this.styleParams.cubeRatio * (columns[numOfCols - 1].width / gallerySize); //fix the last group's cube ratio

    while (this.srcItems[this.pointer]) {

      if (isArray(this.srcItems[this.pointer])) {
        console.error({msg: 'no dto', pointer: this.pointer, allItems: this.srcItems});
      }

      //console.log('Creating item #' + this.pointer + ' / ' + this.srcItems.length, this.srcItems[this.pointer]);
      item = new Item({
        idx: this.pointer,
        scrollTop: galleryHeight,
        dto: this.srcItems[this.pointer],
        container: this.container,
        styleParams: this.styleParams
      });

      this.layoutItems[this.pointer] = item;

      //push the image to a group - until its full
      groupItems.push(item);
      if ( //conditions to wait for the next item
      !this.isLastImages //last images in gallery - do not group
      &&
      (groupItems.length < maxGroupSize) //if the group is too small
      ) {
        //wait for more images
        this.pointer++;
        continue;
      }

      group = new Group({
        idx: groupIdx,
        stripIdx: strip.idx,
        inStripIdx,
        top: galleryHeight,
        items: groupItems,
        gallerySize,
        container: this.container,
        styleParams: this.styleParams
      });

      groupIdx++;
      inStripIdx++;

      //prepare the images in the group
      //group = this.wrapGroup(groupImages);
      if (group.realItems.length < maxGroupSize) {
        //console.warn(group.items.length, '<' ,maxGroupSize, 'waiting for more');
        //move the cursor back if the resulted group is smaller than 3
        if (safetyCounter > 0) {
          safetyCounter--;
          this.pointer += (group.items.length - groupItems.length);
        } else {
          console.error('safetyCounter Reached!', this);
        }
      }

      groupItems = [];

      //resize and fit the group in the strip / column
      if (!this.styleParams.isVertical) {

        //---------------------| STRIPS GALLERY |----------------------//

        if (strip.isFull(group, this.isLastImage)) {
          //close the current strip
          strip.lastGroup.isLastGroup = true;
          strip.lastGroup.stripWidth = galleryWidth;
          strip.resizeToHeight((galleryWidth / strip.ratio));
          galleryHeight += strip.height;
          columns[0].addGroups(strip.groups);

          //open a new strip
          strip = new Strip({
            idx: strip.idx + 1,
            container: this.container,
            styleParams: this.styleParams
          });

          //reset the group (this group will be rebuilt)
          inStripIdx = 1;
          this.pointer -= (group.items.length - 1);
          groupIdx--;
          continue;
        }

        //add the group to the (current/new) strip
        group.setTop(galleryHeight);
        group.stripIdx = strip.idx;
        strip.ratio += group.ratio;
        strip.height = Math.min(gallerySize, (galleryWidth / strip.ratio));
        strip.groups.push(group);

        if (this.isLastImage && strip.hasGroups) {
          if (this.styleParams.oneRow) {
            strip.height = this.container.galleryHeight + (this.styleParams.imageMargin - this.styleParams.galleryMargin);
          } else if (gallerySize * 2 < (galleryWidth / strip.ratio)) {
              //stretching the strip to the full width will make it too high - so make it as high as the gallerySize and not stretch
            strip.height = gallerySize;
          } else {
            strip.height = (galleryWidth / strip.ratio);
          }

          strip.lastGroup.isLastGroup = true;
          strip.lastGroup.stripWidth = strip.height * strip.ratio;
          strip.resizeToHeight(strip.height);
          galleryHeight += (strip.height);
          columns[0].addGroups(strip.groups);
        }

      } else {

        //---------------------| COLUMNS GALLERY |----------------------//

        //find the shortest column
        let minCol = 0;
        if (this.styleParams.cubeImages) {
          minCol = this.pointer % numOfCols;
          // galleryHeight = Math.max(galleryHeight, columnsH[minCol]);
        } else {
          let minColH = -1;
          for (let i = 0; i < numOfCols; i++) {
            let colH = columns[i].height;
            if (typeof (colH) === 'undefined') {
              colH = 0;
            }
            if (colH < minColH || minColH < 0) {
              minColH = colH;
              minCol = i;
            }
          }
        }

        columns[minCol] = columns[minCol] || (new Column());

        //resize the group and images
        group.fixItemsRatio(columns[minCol].cubeRatio); //fix last column's items ratio (caused by stretching it to fill the screen)
        this.resizeGroup(group, columns[minCol].width);

        //update the group's position
        group.setTop(columns[minCol].height);
        group.setLeft(minCol * gallerySize);

        //add the image to the column
        columns[minCol].addGroup(group);

        //add the image height to the column
        columns[minCol].height += group.totalHeight;

        if (galleryHeight < columns[minCol].height) {
          galleryHeight = columns[minCol].height;
        }

      }

      //set the group visibility

      if (!this.gotScrollEvent && this.pointer < 10) {
        //until the first scroll event, make sure the first 10 groups are displayed
        group.visible = group.rendered = group.required = true;
      } else {
        group = this.calcVisibilitiesForGroup(group, bounds);
      }

      if (!this.firstGroup) {
        this.firstGroup = group;
      }

      //advance the this.pointer
      this.pointer++;
    }

    //results
    this.lastGroup = group;
    this.strips = strip.idx || 0;
    this.columns = columns.map(col => col.groups);
    this.colWidth = Math.floor(galleryWidth / numOfCols);
    this.height = galleryHeight - (this.styleParams.oneRow ? 0 : (this.styleParams.imageMargin - this.styleParams.galleryMargin) * 2);

    this.calcVisibilities(bounds);

    this.ready = true;
  }

  lastVisibleItemIdx() {
    for (let item, i = this.layoutItems.length - 1; item = this.layoutItems[i]; i--) {
      const isVisible = item.offset.top < (this.container.galleryHeight - 100); //the item must be visible and about the show more button
      if (isVisible) {
        return i;
      }
    }
    return this.layoutItems.length - 1;
  }

  findNeighborItem(itemIdx, dir) {

    const currentItem = this.layoutItems[itemIdx];

    let neighborItem;

    const findClosestItem = (currentItemX, currentItemY, condition) => {

      let minDistance = null;
      let minDistanceItem = {};

      let itemY;
      let itemX;
      let distance;

      // each(slice(this.layoutItems, itemIdx - 50, itemIdx + 50), (item) => {
      each(this.layoutItems, item => {
        itemY = item.offset.top + (item.height / 2);
        itemX = item.offset.left + (item.width / 2);
        distance = Math.sqrt(Math.pow(itemY - currentItemY, 2) + Math.pow(itemX - currentItemX, 2));
        if ((minDistance === null || (distance > 0 && distance < minDistance)) && condition(currentItemX, currentItemY, itemX, itemY)) {
          minDistance = distance;
          minDistanceItem = item;
        }
      });
      return minDistanceItem;
    };

    switch (dir) {
      case 'up':
        neighborItem = findClosestItem(
          (currentItem.offset.left + (currentItem.width / 2)),
          (currentItem.offset.top),
          (curX, curY, itmX, itmY) => itmY < curY
        );
        break;

      case 'left':
        neighborItem = findClosestItem(
          (currentItem.offset.left),
          (currentItem.offset.top + (currentItem.height / 2)),
          (curX, curY, itmX, itmY) => itmX < curX
        );
        break;

      case 'down':
        neighborItem = findClosestItem(
          (currentItem.offset.left + (currentItem.width / 2)),
          (currentItem.offset.bottom),
          (curX, curY, itmX, itmY) => itmY > curY
        );
        break;

      default:
      case 'right':
        neighborItem = findClosestItem(
          (currentItem.offset.right),
          (currentItem.offset.top + (currentItem.height / 2)),
          (curX, curY, itmX, itmY) => itmX > curX
        );
        break;

    }

    if (neighborItem.idx >= 0) {
      if (utils.isDev()) {
        console.log('found neighborItem #' + neighborItem.idx, neighborItem);
      }
      return neighborItem.idx;
    } else {
      console.warn('Could not find offset for itemIdx', itemIdx, dir);
      return itemIdx; //stay on the same item
    }

  }

  calcVisibilities(bounds) {
    for (let column, c = 0; column = this.columns[c]; c++) {
      for (let group, g = 0; group = column[g]; g++) {
        column[g] = this.calcVisibilitiesForGroup(group, bounds);
      }
    }
  }

  //todo - move to the group class
  calcVisibilitiesForGroup(group, bounds) {
    if (this.showAllItems === true) {
      group.onscreen = group.visible = group.rendered = group.required = true;
    } else if (this.styleParams.oneRow) {
      group.onscreen = group.right >= bounds.onscreenTop && group.left <= bounds.onscreenBottom;
      group.visible = group.right >= bounds.visibleTop && group.left <= bounds.visibleBottom;
      group.rendered = group.right >= bounds.renderedTop && group.left <= bounds.renderedBottom;
      group.required = group.right >= bounds.requiredTop && group.left <= bounds.requiredBottom;
    } else {
      group.onscreen = group.bottom >= bounds.onscreenTop && group.top <= bounds.onscreenBottom;
      group.visible = group.bottom >= bounds.visibleTop && group.top <= bounds.visibleBottom;
      group.rendered = group.bottom >= bounds.renderedTop && group.top <= bounds.renderedBottom;
      group.required = group.bottom >= bounds.requiredTop && group.top <= bounds.requiredBottom;
    }
    for (let i = 0; i < group.items.length; i++) {
      group.items[i].visibility = {
        onscreen: group.onscreen,
        visible: group.visible,
        rendered: group.rendered,
        required: group.required
      };
    }
    return group;
  }

  resizeStrip(groups, height) {
    let left = 0;
    let remainder = 0;
    for (let group, g = 0; group = groups[g]; g++) {
      group.setLeft(left);
      // group.left = (left);
      group.width += remainder; //add the remainder from the last group round
      group.resizeToHeight(height);
      remainder = group.width;
      group.round();
      remainder -= group.width;
      left += group.width;
    }
  }

  resizeGroup(group, width) {
    group.resizeToWidth(width);
    group.round();
  }

  get isLastImage() {
    return !this.srcItems[this.pointer + 1];
  }

  get isLastImages() {
    if (this.styleParams.layoutsVersion > 1) {
      //layouts version 2+
      return !this.srcItems[this.pointer + 1];
    } else {
      //Backwards compatibility
      return !this.srcItems[this.pointer + 3];
    }
  }

  get imagesLeft() {
    return this.srcItems.length - this.pointer - 1;
  }

  get maxGroupSize() {
    let _maxGroupSize = 1;
    try {
      const groupTypes = isString(this.styleParams.groupTypes) ? this.styleParams.groupTypes.split(',') : this.styleParams.groupTypes;
      _maxGroupSize = groupTypes.reduce((curSize, groupType) => {
        return Math.max(curSize, parseInt(groupType));
      }, 1);
      _maxGroupSize = Math.min(_maxGroupSize, this.styleParams.groupSize);
    } catch (e) {
      console.error('couldn\'t calculate max group size - returing 3 (?)', e);
      _maxGroupSize = 3;
    }
    return _maxGroupSize;
  }

  get items() {
    return this.layoutItems;
  }
}

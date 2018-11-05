import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.scss';

const CDN_URL = 'https://static.wixstatic.com/media/';

const getImgSize = (item, dimension) => {
  const scale = window.devicePixelRatio;
  return Math.ceil(Math.min(
    scale * item[dimension],
    item[`max${dimension[0].toUpperCase() + dimension.substring(1)}`]
  ));
};

const getImageSrc = item => {
  const h = getImgSize(item, 'height');
  const w = getImgSize(item, 'width');
  return `${CDN_URL}${item.dto.url}/v1/fit/w_${w},h_${h},al_c,q_80/file.jpg`;
};

const getPlaceholderSrc = itemDto => {
  const h = 250;
  const w = 250;
  return `${CDN_URL}${itemDto.url}/v1/fit/w_${w},h_${h},al_c,q_80/file.jpg`;
};

const getImageStyle = item => ({
  top: item.offset.top,
  left: item.offset.left,
  width: item.width,
  height: item.height,
  backgroundImage: `url(${getImageSrc(item)})`
});

const css = layouts => {
  let cssStrs = [];
  Object.entries(layouts).forEach(entry => {
    let cssStr = '';
    const width = entry[0];
    const layout = entry[1];
    const isFirstMediaQuery = cssStrs.length === 0;
    if (layout) {
      cssStr += isFirstMediaQuery ? '' : `@media only screen and (min-width: ${width}px) {`;
      cssStr += `\n.pro-gallery-root-style {
        width: ${width}px;
      }`;
    layout.items.forEach(item => {
        const style = getImageStyle(item);
        cssStr += `\n.pro-gallery-item-${item.id}-style {
          top: ${style.top}px;
          left: ${style.left}px;
          width: ${style.width}px;
          height: ${style.height}px;
        }`;
      });

      cssStr += isFirstMediaQuery ? '' : `}`;
      cssStrs.push(cssStr);
    }
  });

  return cssStrs;
}

const Gallery = ({ layouts, container, items }) => {
  return (
    <div>
      <style>
        {css(layouts)}
      </style>
      <div className={[styles.root, `pro-gallery-root-style`].join(' ')} style={{ height: container.height }}>
        {items.map(item => (
          <div className={[styles.item, `pro-gallery-item-${item.id}-style`].join(' ')} style={{backgroundImage: `url(${getPlaceholderSrc(item)})`}} alt={item.idx}/>
        ))}
      </div>
    </div>
  )
}

Gallery.propTypes = {
  layout: PropTypes.object,
};

export default Gallery;

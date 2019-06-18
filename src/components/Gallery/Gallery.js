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
  const w = getImgSize(item, 'height');
  const h = getImgSize(item, 'width');
  return `${CDN_URL}${item.dto.url}/v1/fill/w_${w},h_${h},al_c,q_80/file.jpg`;
};

const getImageStyle = item => ({
  top: item.offset.top,
  left: item.offset.left,
  width: item.width,
  height: item.height,
  backgroundImage: `url(${getImageSrc(item)})`
});

const Gallery = ({ layout }) => (
  <div className={styles.root} style={{ height: layout.height }}>
    {layout.items.map(item => (
      <div className={styles.item} style={getImageStyle(item)} alt={item.idx}/>
    ))}
  </div>
);

Gallery.propTypes = {
  layout: PropTypes.object,
};

export default Gallery;

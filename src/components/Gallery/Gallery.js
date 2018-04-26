import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.scss';

const CDN_URL = 'https://static.wixstatic.com/media/';
const getImgSize = (item, dimension) => {
  const scale = window.devicePixelRatio;
  return Math.min(
    scale * item.style.height,
    item.dto.metadata[dimension]
  );
};
const getSrc = item => {
  const w = getImgSize(item, 'height');
  const h = getImgSize(item, 'width');
  return `${CDN_URL}${item.dto.url}/v1/fit/w_${w},h_${h},al_c,q_80/file.jpg`;
};

const getStyle = item => ({
  ...item.offset,
  width: item.style.width,
  height: item.style.height,
});

const Gallery = ({ layout }) => (
  <div className={styles.root}>
    {layout.items.map(item => (
      <img className={styles.item} src={getSrc(item)} style={getStyle(item)} alt={item.idx}/>
    ))}
  </div>
);

Gallery.propTypes = {
  layout: PropTypes.object,
};

export default Gallery;

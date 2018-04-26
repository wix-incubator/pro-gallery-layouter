import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.scss';

const CDN_URL = 'https://static.wixstatic.com/media/';

const getImgSize = (item, dimension) => {
  const scale = window.devicePixelRatio;
  return Math.min(
    scale * item.style.height,
    item[`max${dimension[0].toUpperCase() + dimension.substring(1)}`]
  );
};

const getImageSrc = item => {
  const w = getImgSize(item, 'height');
  const h = getImgSize(item, 'width');
  return `${CDN_URL}${item.dto.url}/v1/fit/w_${w},h_${h},al_c,q_80/file.jpg`;
};

const getImageStyle = item => ({
  ...item.offset,
  width: item.style.width,
  height: item.style.height,
});

const Gallery = ({ layout }) => (
  <div className={styles.root} style={{ height: layout.height }}>
    {layout.items.map(item => (
      <img className={styles.item} src={getImageSrc(item)} style={getImageStyle(item)} alt={item.idx}/>
    ))}
  </div>
);

Gallery.propTypes = {
  layout: PropTypes.object,
};

export default Gallery;

import React from 'react';
import SideBar from '../SideBar';
import {ProGallery} from 'pro-gallery-renderer';
import {testImages} from '../../assets/items/test-images';
import './App.scss';

class App extends React.Component {

  constructor() {
    super();

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.resize = this.resize.bind(this);
    this.handleStylesChange = this.handleStylesChange.bind(this);

    this.defaultStateStyles = {
      sampleSize: 100,
      gotStyleParams: false,
      galleryType: -1,
      selectedLayout: 0,
      isVertical: false,
      gallerySize: 320,
      minItemSize: 120,
      groupSize: 3,
      chooseBestGroup: true,
      groupTypes: '1,2h,2v,3t,3b,3l,3r',
      cubeImages: false,
      cubeType: 'fill',
      smartCrop: false,
      fullscreen: true,
      allowSocial: true,
      allowDownload: false,
      allowTitle: true,
      allowDescription: false,
      allowMultishare: false,
      loveButton: true,
      loveCounter: true,
      videoLoop: true,
      videoSpeed: 1,
      videoPlay: 'hover',
      gallerySliderImageRatio: 0,
      galleryImageRatio: 2,
      sharpParams: {
        quality: 90,
        usm: {} // do not apply usm - {usm_r: 0.66, usm_a: 1.00, usm_t: 0.01},
      },
      collageAmount: 0.8,
      collageDensity: 0.8,
      borderRadius: 0,
      boxShadow: 0,
      imageMargin: 5,
      galleryMargin: 0,
      floatingImages: 0,
      viewMode: 'preview',
      galleryHorizontalAlign: 'center',
      galleryTextAlign: 'center',
      galleryVerticalAlign: 'center',
      enableInfiniteScroll: 1,
      itemClick: 'expand',
      cubeRatio: 1, //determine the ratio of the images when using grid (use 1 for squares grid)
      fixedColumns: 0, //determine the number of columns regardless of the screen size (use 0 to ignore)
      oneRow: false, //render the gallery as a single row with horizontal scroll
      showArrows: false,
      isSlideshow: false,
      hasThumbnails: false,
      galleryThumbnailsAlignment: 'bottom',
      thumbnailSpacings: 0,
      gridStyle: 0,
      useCustomButton: false,
      titlePlacement: 'SHOW_ON_HOVER'
    };

    this.state = {
      sampleSize: 100,
      styles: Object.assign({}, this.defaultStateStyles, this.getUrlStyles),
      sidebarWidth: 500,
      container: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };

    console.log('Initial State is', this.state);

    window.addEventListener('resize', this.resize);
  }

  getUrlStyles() {
    var search = location.search.substring(1);
    return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
  }

  setUrlStyles(styles) {

    var str = "?";
    for (var key in styles) {
        if (str != "") {
            str += "&";
        }
        str += key + "=" + encodeURIComponent(styles[key]);
    }

    history.pushState(styles, "Pro Gallery Playground");
  }

  toggleSidebar() {
    this.setState({
      sidebarWidth: !this.state.sidebarWidth * 500 //toggles between 500 and 0
    }, () => {
      window.dispatchEvent(new Event('resize')); //trigger resize event (remove when renderer accepts props)
    });
  }

  resize() {
    this.setState({
      container: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  }

  handleStylesChange(newStyles) {
    const styles = Object.assign({}, newStyles, {at: Date.now()})
    this.setState({styles});
    this.setUrlStyles(styles);
  }

  render() {
    const {sampleSize, styles, container, sidebarWidth} = this.state;
    return (
      <div>
        { sidebarWidth ? <SideBar
          container={{
            width: sidebarWidth,
            height: container.height
          }}
          styles={styles}
          handleStylesChange={this.handleStylesChange}
          /> : null }
        <i className={'toggle-settings glyphicon glyphicon-menu-right ' + (sidebarWidth ? '' : ' closed ')} onClick={this.toggleSidebar}/>
        <div
          className="playground-gallery" style={{
            width: (container.width - sidebarWidth) + 'px'
          }}
                                         >
          <ProGallery
            at={Date.now()}
            items={testImages.slice(0, sampleSize)}
            container={{
              width: (container.width - sidebarWidth),
              height: container.height
            }}
            totalItemsCount={sampleSize}
            styles={this.state.styles}
            />
        </div>
      </div>
    );
  }
}

export default App;

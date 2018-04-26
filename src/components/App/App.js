import React from 'react';
import {Layouter} from 'pro-gallery-layouter';
import SideBar from '../SideBar';
import Gallery from '../Gallery';
import images from '../../constants/images';
import './App.scss';

const getContainerSize = () => ({
  width: document.documentElement.clientWidth,
  height: window.innerHeight,
});

class App extends React.Component {

  constructor() {
    super();

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.resize = this.resize.bind(this);
    this.handleStylesChange = this.handleStylesChange.bind(this);

    this.defaultStyles = {
      sampleSize: 100,
      isVertical: false,
      gallerySize: 320,
      minItemSize: 120,
      groupSize: 3,
      chooseBestGroup: true,
      groupTypes: '1,2h,2v,3t,3b,3l,3r',
      rotatingGroupTypes: '1,2h,2v,3t,3b,3l,3r',
      cubeImages: false,
      cubeType: 'fill',
      smartCrop: false,
      collageDensity: 0.8,
      imageMargin: 5,
      galleryMargin: 0,
      floatingImages: 0,
      cubeRatio: 1,
      fixedColumns: 0,
      oneRow: false,
    };

    this.state = {
      sampleSize: 100,
      styles: Object.assign({}, this.defaultStyles, this.getUrlStyles),
      sidebarWidth: 500,
      container: getContainerSize(),
    };

    this.layouter = new Layouter({
      items: images,
      container: {
        height: this.state.container.height,
        width: this.state.container.width - sidebarWidth,
      },
      styleParams: this.state.styles,
    });

    window.addEventListener('resize', this.resize);
  }

  getUrlStyles() {
    var search = location.search.substring(1);
    return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
  }

  setUrlStyles(styles) {
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
      container: getContainerSize()
    });
  }

  handleStylesChange(newStyles) {
    const styles = Object.assign({}, newStyles, {at: Date.now()});
    this.setState({styles});
    this.setUrlStyles(styles);
  }

  render() {
    const {styles, container, sidebarWidth, sampleSize} = this.state;
    const LayoutParams = {
      items: images.slice(0, sampleSize),
      container: {
        ...container,
        width: container.width - sidebarWidth,
      },
      styleParams: this.state.styles,
    };
    const layout = this.layouter.createLayout(layoutParams);
    console.log("Created a layout!", layout, layoutParams);
    return (
      <div ref={ref => { this.root = ref; }}>
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
          className="playground-gallery"
          style={{ width: `${container.width - sidebarWidth}px` }}
        >
          <Gallery layout={layout}/>
        </div>
      </div>
    );
  }
}

export default App;

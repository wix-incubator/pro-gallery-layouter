import React from 'react';
import {Layouter} from 'pro-gallery-layouter';
import SideBar from '../SideBar';
import Gallery from '../Gallery';
import images from '../../constants/images';
import getScrollbarSize from './get-scrollbar-size';
import './App.scss';

const getContainerSize = () => ({
  width: window.innerWidth,
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
      gallerySize: 89,//320,
      minItemSize: 120,
      groupSize: 3,
      chooseBestGroup: true,
      groupTypes: '1,2h,2v,3t,3b,3l,3r',
      rotatingGroupTypes: '',
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

      // Needed for browsers with static scrollbars
      scrollbarSize: getScrollbarSize(),
      container: getContainerSize(),
    };

    this.layouter = new Layouter(this.getLayoutParams());

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
    console.log('Setting URL styles', styles);
    this.setUrlStyles(styles);
    console.log('Setting state styles', styles);
    this.setState({styles});
  }

  getLayoutParams() {
    const {styles, container, sidebarWidth, scrollbarSize} = this.state;

    return {
      items: images,
      container: {
        height: container.height - scrollbarSize,
        width: container.width - sidebarWidth - scrollbarSize,
      },
      styleParams: styles,
    };
  }

  render() {
    const {styles, container, sidebarWidth} = this.state;
    const layoutParams = this.getLayoutParams();
    const layout = this.layouter.createLayout(layoutParams);

    console.time('Creating a layout...');
    console.log("Created a layout!", layout, layoutParams);
    console.timeEnd('Creating a layout...');

    return layout ? (
      <div ref={ref => { this.root = ref; }} className="playground-container">
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
    ) : (
      <div>
        <h3>Layout creation failed!!</h3>
        <ul>
          {Object.keys(layoutParams.styleParams).map(param => {
            return (
              <li>{params}: {layoutParams.styleParams[param]}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;

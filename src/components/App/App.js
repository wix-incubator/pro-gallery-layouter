import React from 'react';
import {createLayout} from 'pro-gallery-layouter';
import SideBar from '../SideBar';
import Gallery from '../Gallery';
import Sample from '../Sample';
import images from '../../constants/images';
import getScrollbarSize from './get-scrollbar-size';
import './App.scss';

const getContainerSize = (forcedWidth, forcedHeight) => ({
  width: forcedWidth || window.innerWidth,
  height: forcedHeight || window.innerHeight,
});

const maxNumOfItems = 50;
const minWidth = 100;
const maxWidth = 10000;
const int = 10;

class App extends React.Component {

  constructor() {
    super();

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.resize = this.resize.bind(this);
    this.handleStylesChange = this.handleStylesChange.bind(this);

    this.items = images.slice(0, maxNumOfItems);

    this.defaultStyles = {
      sampleSize: 100,
      isVertical: false,
      gallerySize: 400,
      minItemSize: 50,
      groupSize: 3,
      chooseBestGroup: true,
      groupTypes: '1,2h,2v,3t,3b,3l,3r,3v,3h',
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
      groupsPerStrip: 0,
      oneRow: false,
      placeGroupsLtr: false
    };

    this.state = {
      sampleSize: 100,
      styles: Object.assign({}, this.defaultStyles, this.getUrlStyles()),
      sidebarWidth: 500,
      showSample: false,
      // Needed for browsers with static scrollbars
      scrollbarSize: getScrollbarSize(),
      container: getContainerSize(),
    };
    this.setUrlStyles(this.state.styles);

    // window.addEventListener('resize', this.resize);
  }

  getUrlStyles() {
    const strToVal = str => {
      if (parseInt(str) === Number(str)) {
        return Number(str);
      } else if (str === 'true') {
        return true;
      } else if (str === 'false') {
        return false;
      } else {
        return decodeURIComponent(str);
      }
    }
    const search = location.search.substring(1);
    const stylesArr = search.split('&').map(s => s.split('='));
    let styles = {};
    stylesArr.forEach(style => (styles[style[0]] = strToVal(style[1])));
    return styles;
    // const styles = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');

  }

  setUrlStyles(styles) {
    const str = Object.entries(styles).map(style => style.map(i => encodeURIComponent(i)).join('=')).join('&');
    history.pushState(styles, "", location.pathname + '?' + str);
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

  getLayoutParams(forcedContainer) {
    const {styles, container, sidebarWidth, scrollbarSize} = this.state;

    const _container = forcedContainer || container;

    return {
      items: this.items,
      container: {
        height: _container.height - scrollbarSize,
        width: _container.width - sidebarWidth - scrollbarSize,
      },
      styleParams: styles,
    };
  }

  createLayouts() {
    const n = Math.ceil((maxWidth - minWidth) / int);

    this.widths = Array(n).fill(0).map((val, idx) => (idx + 1) * int);
    this.layouts = {};


    console.log(`Creating ${n} layouts (from ${minWidth})px to ${maxWidth}px for ${maxNumOfItems} items)`);
    console.time(`Create ${n} layouts time: `);
    this.widths.forEach(width => {
      console.time('Create layout time: ');
      const container = getContainerSize(width);
      const layoutParams = this.getLayoutParams(container);
      const layout = createLayout(layoutParams);
      console.timeEnd('Create layout time: ');
      // console.log("Created a layout", width, layout);
      this.layouts[width] = layout;
    });
    // console.log("Created the layouts!", this.widths, this.layouts);
    console.timeEnd(`Create ${n} layouts time: `);

    return this.layouts;

  }

  render() {
    const {styles, container, sidebarWidth} = this.state;
    const layoutParams = this.getLayoutParams();
    // console.time('Create layout time: ');
    // const layout = createLayout(layoutParams);
    // console.log("Created a layout!", layout, layoutParams);
    // console.timeEnd('Create layout time: ');
    const layouts = this.createLayouts();

    return layouts ? (
      <div ref={ref => { this.root = ref; }} className="playground-container">
        <Sample
          styleParams={this.state.styles}
          visible={this.state.showSample}
          toggleSample={() => this.setState({showSample: !this.state.showSample})}
        />
        { sidebarWidth ? <SideBar
          container={{
            width: sidebarWidth,
            height: container.height
          }}
          styles={styles}
          handleStylesChange={this.handleStylesChange}
          toggleSample={() => this.setState({showSample: !this.state.showSample})}
          /> : null }
        <i className={'toggle-settings glyphicon glyphicon-menu-right ' + (sidebarWidth ? '' : ' closed ')} onClick={this.toggleSidebar}/>

        <div
          className="playground-gallery"
          style={{ width: `calc(100% - ${sidebarWidth}px)` }}
        >
          <Gallery layouts={layouts} container={container} items={this.items}/>
        </div>
      </div>
    ) : (
      <div>
        <h3>Layout creation failed!!</h3>
        <ul>
          {Object.keys(layoutParams.styleParams).map(param => {
            return (
              <li>{param}: {layoutParams.styleParams[param]}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './SideBar.scss';
import Slider from 'rc-slider';

const getValueFromChangeEvent = event => {
  const { value } = event.target;
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};

class SideBar extends React.Component {

  constructor() {
    super();

    this.handleStyleChange = this.handleStyleChange.bind(this);

  }

  createSlider(name, value = this.props.styles[name], max = 100) {
    const handleChange = value => this.handleStyleChange({
      target: { name, value },
    });

    return (
      <div>
        <div className='slider-container'>
          <Slider value={value} onChange={handleChange} max={max}/>
        </div>
        <input type="number" name={name} value={value} className="form-control slider-helper"/>
      </div>
    );
  }

  mapStyles(field, value) {
    const styles = this.props.styles;
    switch (field) {
      case 'groupTypes':
        const typesArr = styles[field].split(',');
        const typePos = typesArr.indexOf(value);
        if (typePos >= 0) {
          typesArr.splice(typePos, 1);
        } else {
          typesArr.push(value);
        }
        value = typesArr.join(',')
        break;
      case 'collageDensity':
      case 'floatingImages':
        value /= 100;
    }
    return value;
  }

  handleStyleChange(e) {
    const field = e.target.name;
    const value = getValueFromChangeEvent(e);

    console.log('Styles changed!!!', field, value);

    const styles = this.props.styles;
    styles[field] = this.mapStyles(field, value);

    this.props.handleStylesChange(styles);
  }

  render() {

    const {styles} = this.props;

    return (
      <div
        className="playground-settings-container" style={{
          width: this.props.container.width,
          height: this.props.container.height
        }}
      >
        <div className="playground-settings">

          <a className="page-header" href="playground.html?">
            <h1>Layouter Playground</h1>
          </a>

          <form onChange={this.handleStyleChange}>
            <input name="galleryType" type="hidden" className="form-control" value="-1" />

            <h3>
              <small>Layout Settings</small>
            </h3>
            <div className="form-group">
              <label
                data-toggle="tooltip" data-placement="right"
                title="is the gallery built with columns or with rows"
                >Gallery
                Type</label>
              <br/>
              <div className="radio-inline">
                <label>
                  <input type="radio" name="isVertical" value={false} checked={!styles.isVertical} />
                  Rows
                </label>
              </div>
              <div className="radio-inline">
                <label>
                <input type="radio" name="isVertical" value={true} checked={styles.isVertical} />
                  Columns
                </label>
              </div>
            </div>
            <div className="form-group">
              <label
                data-toggle="tooltip" data-placement="right"
                title="The target size of the gallery row / column"
                >Row
                / Column Size (Max Item Size)</label>
                {this.createSlider('gallerySize', styles.gallerySize, 1000)}
            </div>
            <div className="form-group">
              <label
                data-toggle="tooltip" data-placement="right"
                title="The minimum allowed size of each thumbnail (should be smaller than the max size)"
                >Min
                Item
                Size</label>
                {this.createSlider('minItemSize', styles.minItemSize, 1000)}
            </div>
            <div className="form-group">
              <label
                data-toggle="tooltip" data-placement="right"
                title="The fixed number of columns in vertical galleries. Notice: 1) this parameter overrides thumbnail size. 2) use 0 (zero) to ignore this parameter. 3) If this param is active the number of columns in mobile will be 1 (one)"
                >Number
                of
                Columns</label>
                {this.createSlider('fixedColumns', styles.fixedColumns, 10)}
            </div>
            <div className="form-group">
              <label
                data-toggle="tooltip" data-placement="right"
                title="Scroll gallery vertically or horizontally"
                >Scroll Direction</label>
              <br/>

              <div className="radio">
                <label>
                  <input type="radio" name="oneRow" value={false} checked={!styles.oneRow}/>
                  Vertical Scroll
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="oneRow" value={true} checked={styles.oneRow}/>
                  Horizontal Scroll
                </label>
              </div>
            </div>

            <h3>
              <small>Collage Settings</small>
            </h3>
            <input name="groupSize" type="hidden" className="form-control" value={styles.groupSize}/>
            <div className="form-group">
              <label
                data-toggle="tooltip" data-placement="right"
                title="The grouping that will be used to create collages"
                >Allowed Group Types</label>
              <br/>

              <table className="playground-layouts">
                <thead>
                  <tr>
                    <th/>
                    <th>Rows Layouts</th>
                    <th>Columns Layouts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="left">
                    1 Item
                  </td>
                    <td colSpan="2" className="center">
                      <div className="checkbox-inline">
                        <label>
                          <input type="checkbox" name="groupTypes" value="1" checked={styles.groupTypes.indexOf('1') >= 0}/>
                          <table>
                            <tr>
                              <td/>
                            </tr>
                          </table>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="left">
                    2 Items
                  </td>
                    <td className="center">
                      <div className="checkbox-inline">
                        <label>
                          <input type="checkbox" name="groupTypes" value="2v" checked={styles.groupTypes.indexOf('2v') >= 0}/>
                          <table>
                            <tr>
                              <td/>
                            </tr>
                            <tr>
                              <td/>
                            </tr>
                          </table>
                        </label>
                      </div>
                    </td>
                    <td className="center">

                      <div className="checkbox-inline">
                        <label>
                          <input type="checkbox" name="groupTypes" value="2h" checked={styles.groupTypes.indexOf('2h') >= 0}/>
                          <table>
                            <tr>
                              <td/>
                              <td/>
                            </tr>
                          </table>
                        </label>
                      </div>

                    </td>
                  </tr>
                  <tr>
                    <td className="left">
                    3 Items
                  </td>
                    <td className="center">
                      <div className="checkbox-inline">
                        <label>
                          <input type="checkbox" name="groupTypes" value="3t" checked={styles.groupTypes.indexOf('3t') >= 0}/>
                          <table>
                            <tr>
                              <td colSpan="2"/>
                            </tr>
                            <tr>
                              <td/>
                              <td/>
                            </tr>
                          </table>
                        </label>
                      </div>
                      <div className="checkbox-inline">
                        <label>
                          <input type="checkbox" name="groupTypes" value="3b" checked={styles.groupTypes.indexOf('3b') >= 0}/>
                          <table>
                            <tr>
                              <td/>
                              <td/>
                            </tr>
                            <tr>
                              <td colSpan="2"/>
                            </tr>
                          </table>
                        </label>
                      </div>
                      <div className="checkbox-inline">
                        <label>
                          <input type="checkbox" name="groupTypes" value="3v" checked={styles.groupTypes.indexOf('3v') >= 0}/>
                          <table>
                            <tr>
                              <td/>
                            </tr>
                            <tr>
                              <td/>
                            </tr>
                            <tr>
                              <td/>
                            </tr>
                          </table>
                        </label>
                      </div>
                    </td>
                    <td className="center">
                      <div className="checkbox-inline">
                        <label>
                          <input type="checkbox" name="groupTypes" value="3l" checked={styles.groupTypes.indexOf('3l') >= 0}/>
                          <table>
                            <tr>
                              <td rowSpan="2"/>
                              <td/>
                            </tr>
                            <tr>
                              <td/>
                            </tr>
                          </table>
                        </label>
                      </div>
                      <div className="checkbox-inline">
                        <label>
                          <input type="checkbox" name="groupTypes" value="3r" checked={styles.groupTypes.indexOf('3r') >= 0}/>
                          <table>
                            <tr>
                              <td/>
                              <td rowSpan="2"/>
                            </tr>
                            <tr>
                              <td/>
                            </tr>
                          </table>
                        </label>
                      </div>
                      <div className="checkbox-inline">
                        <label>
                          <input type="checkbox" name="groupTypes" value="3h" checked={styles.groupTypes.indexOf('3h') >= 0}/>
                          <table>
                            <tr>
                              <td/>
                              <td/>
                              <td/>
                            </tr>
                          </table>
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="form-group">
              <label
                data-toggle="tooltip" data-placement="right"
                title="Maximal allowed group size"
                >Max Group Size</label>
                {this.createSlider('groupSize', styles.groupSize, 3)}
            </div>

            <div className="form-group">
              <label
                data-toggle="tooltip" data-placement="right"
                title="Choose the best group layouts according to the images proportions"
                >Collage
                Grouping</label>
              <br/>
              <div className="radio-inline">
                <label>
                  <input type="radio" name="chooseBestGroup" value={false} checked={!styles.chooseBestGroup}/>
                  Use all group types
                </label>
              </div>
              <div className="radio-inline">
                <label>
                  <input type="radio" name="chooseBestGroup" value={true} checked={styles.chooseBestGroup}/>
                  Choose best group types for items
                </label>
              </div>
            </div>

            <div className="form-group">
              <label
                data-toggle="tooltip" data-placement="right"
                title="The amount of collaged images that will be created in the gallery"
                >Collage
                Density</label>
                {this.createSlider('collageDensity', styles.collageDensity * 100)}
            </div>

            <h3>
              <small>Crop Settings</small>
            </h3>
            <div className="form-group">
              <label data-toggle="tooltip" data-placement="right" title="Crop images to a fixed ratio">Crop
                Images</label>
              <br/>

              <div className="radio-inline">
                <label>
                  <input type="radio" name="cubeImages" value={false} checked={!styles.cubeImages}/>
                  Do Not Crop
                </label>
              </div>
              <div className="radio-inline">
                <label>
                  <input type="radio" name="cubeImages" value={true}
                  checked={!styles.cubeImages}/>
                  Crop
                </label>
              </div>
            </div>
            <div className="form-group">
              <label
                data-toggle="tooltip" data-placement="right"
                title="The width/height ratio of the crop (e.g. 1, 0.25, 16/9)"
                >Cropped Ratio</label>
              <input name="cubeRatio" type="text" className="form-control" value={styles.cubeRatio}/>
            </div>
            <div className="form-group">
              <label
                data-toggle="tooltip" data-placement="right"
                title="Match the crop ratio to the image orientation (crop portraits vertically and landscapes horizontally)"
                >Smart
                Crop</label>
              <br/>
              <div className="radio-inline">
                <label>
                  <input type="radio" name="smartCrop" value={false} checked={!styles.smartCrop} />
                  Dumb Crop
                </label>
              </div>
              <div className="radio-inline">
                <label>
                  <input type="radio" name="smartCrop" value={true} checked={styles.smartCrop} />
                  Smart Crop
                </label>
              </div>
            </div>
            <div className="form-group">
              <label
                data-toggle="tooltip" data-placement="right"
                title="In crop galleries the image can fill the entire space or fit into it"
                >Crop Fill Method</label>
              <br/>
              <div className="radio-inline">
                <label>
                  <input type="radio" name="cubeType" value='fill' checked={styles.cubeType == 'fill'}/>
                  Fill
                </label>
              </div>
              <div className="radio-inline">
                <label>
                  <input type="radio" name="cubeType" value='fit'
                  checked={styles.cubeType == 'fit'}/>
                  Fit
                </label>
              </div>
            </div>

            <h3>
              <small>Design Settings</small>
            </h3>
            <div className="form-group">
              <label data-toggle="tooltip" data-placement="right" title="The margins between images">Image
                Spacing</label>
              {this.createSlider('imageMargin', styles.imageMargin, 500)}
            </div>
            <div className="form-group">
              <label data-toggle="tooltip" data-placement="right" title="Add spacing below each group (vertical layouts only)">Space below Groups</label>
                {this.createSlider('bottomInfoHeight', styles.bottomInfoHeight, 500)}
            </div>
            <div className="form-group">
              <label data-toggle="tooltip" data-placement="right" title="Add random change to image position">Floating
                Images</label>
                {this.createSlider('floatingImages', styles.floatingImages * 100)}
            </div>

            <h3>
              <small>Advanced Settings</small>
            </h3>
            <div className="form-group">
              <label
                data-toggle="tooltip" data-placement="right"
                title="A fixed order of forced group types (repeats circularly)"
                >Rotating Group Types</label>
              <input name="rotatingGroupTypes" type="text" className="form-control" value={styles.rotatingGroupTypes}/>
            </div>
            <div className="form-group">
              <label
                data-toggle="tooltip" data-placement="right"
                title="A fixed order of crop ratios (repeats circularly)"
                >Rotating Crop Ratios</label>
              <input name="rotatingCropRatios" type="text" className="form-control" value={styles.rotatingCropRatios}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SideBar;

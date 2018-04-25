'use strict';

import Layouter from '../src/layouter.js';
import {testImages} from './images-mock.js';
import _ from 'lodash';
import {expect} from 'chai';
import deepFreeze from 'deep-freeze';
import expectedOffsets from './expectedOffsets';

const getItems = count => deepFreeze(testImages.slice(0, count));
const getGroupCount = layout => layout.columns.reduce(
  (count, column) => count + column.length,
  0
);


describe('Layouter', () => {

  let gallery;
  let layouter;
  let items;
  let container = {};
  let styleParams = {};
  let styleParamsOptions = {};

  const getLayout = layoutParams => layouter.createLayout(layoutParams);

  beforeEach(() => {

    items = getItems();
    styleParams = {
      oneRow: false,
      isVertical: false,
      gallerySize: 200,
      groupSize: 3,
      groupTypes: '1,2h,2v,3t,3b,3l,3r,3v,3h',
      rotatingGroupTypes: '',
      cubeImages: false,
      cubeType: 'fill',
      cubeRatio: 1,
      smartCrop: false,
      chooseBestGroup: true,
      collageAmount: 0.9,
      collageDensity: 0.9,
      minItemSize: 20,
      layoutsVersion: 2,
      galleryMargin: 0,
      imageMargin: 10,
      floatingImages: 0,
      fixedColumns: 0
    };

    styleParamsOptions = {
      oneRow: [true, false],
      isVertical: [true, false],
      gallerySize: [100, 200, 500],
      groupSize: [1, 2, 3],
      groupTypes: ['1,2h,2v,3t,3b,3l,3r,3v,3h', '1,3t,3l,3h', '2h,2v,3t,3v,3h'],
      rotatingGroupTypes: ['', '1,2v,3t'],
      cubeImages: [true, false],
      cubeRatio: [1, 2, 0.5],
      smartCrop: [true, false],
      chooseBestGroup: [true, false],
      collageDensity: [0, 0.6, 1],
      minItemSize: [20, 50, 100],
      imageMargin: [0, 10, 50],
      fixedColumns: [0, 1, 5]
    };

    container = {
      galleryWidth: 1000,
      bounds: {
        visibleTop: 0,
        visibleBottom: 1000,
        renderedTop: 0,
        renderedBottom: 10000
      }
    };

    layouter = new Layouter({items, container, styleParams});
  });

  describe('items', () => {
    it('should not change default layout', () => {

      items = getItems(100);

      const res = {};

      for (const option of Object.entries(styleParamsOptions)) {
        const [styleParam, values] = option;
        for (const value of values) {
          styleParams[styleParam] = value;
          gallery = getLayout({items, container, styleParams});

          const offsets = gallery.items.reduce((str, item) => {
            const os = item.offset;
            const itemStr = `{t:${Math.round(os.top)},l:${Math.round(os.left)},r:${Math.round(os.right)},b:${Math.round(os.bottom)}}`;
            return str + itemStr;
          }, '');

          const spStr = `${styleParam}_${value}`.replace(/[,\.]/g, '');

          res[spStr] = spStr + offsets;
          // console.log(Object.keys(expectedOffsets));
          expect(expectedOffsets[spStr]).to.equal(spStr + offsets);

        }
      }

      // Use these lines to print an expected result
      // for (const a of Object.entries(res)) {
      //   console.log(`${a[0]}: ${a[1]}`);
      // }
      // expect(true).to.be.false;


    });

    it('should include all items in original order', () => {

      styleParams.galleryWidth = 500;
      styleParams.minItemSize = 160;

      for (let size of [10, 50, 100, 250]) {
        size = Math.min(items.length, size);
        items = getItems(size);
        gallery = getLayout({items, container, styleParams});

        const galleryItemIds = _.flatMapDeep(
          gallery.columns,
          column => column.groups.map(group => group.items.map(item => item.id))
        );
        const itemIds = items.map(item => item.photoId);

        expect(galleryItemIds).to.deep.equal(itemIds);
      }
    });
  });

  describe('Style Params', () => {

    //gallerySize
    it('should have taller Strips as gallerySize increases', () => {
      items = getItems(100);
      styleParams.isVertical = false;

      let lastGroupHeight = 0;
      for (const size of [100, 200, 300, 400]) {
        styleParams.gallerySize = size;
        gallery = getLayout({items, container, styleParams});
        const maxGroupHeight = gallery.columns[0].groups.reduce((g, group) => {
          const isLastStrip = (group.stripIdx === gallery.strips.length);
          return (Math.max(g, (isLastStrip ? 0 : group.height)));
        }, 0);

        expect(maxGroupHeight).to.be.above(lastGroupHeight);

        lastGroupHeight = maxGroupHeight;
      }

    });

    //gallerySize
    it('should have all groups in a Columns gallery narrower than gallerySize', () => {
      items = getItems(100);
      styleParams.isVertical = true;
      styleParams.galleryWidth = 1200;

      let lastGroupWidth = 0;
      for (const size of [10, 50, 100, 200, 300, 400]) {
        styleParams.gallerySize = size;
        gallery = getLayout({items, container, styleParams});

        const maxGroupWidth = gallery.columns.reduce((c, column) => {
          return (c && column.groups.reduce((g, group) => {
            return Math.max(g, group.width);
          }, true));
        }, true);

        expect(maxGroupWidth).to.be.above(lastGroupWidth);

        lastGroupWidth = maxGroupWidth;
      }

    });

    //cubeRatio
    it('should have all images in a grid gallery in the required ratio', () => {

      const allowedRounding = 2; //the number of pixels that can change due to rounding

      items = getItems(100);
      styleParams.cubeImages = true;
      styleParams.imageMargin = 0;

      for (const ratio of [0.25, 0.5, 1, 2, 4]) {
        styleParams.cubeRatio = ratio;
        gallery = getLayout({items, container, styleParams});

        const isCroppedCorrectly = gallery.columns[0].groups.reduce((g, group) => {
          return (g && group.isLastGroup || group.items.reduce((i, image) => {  //ignore the last group (it is stretched to fill the galleryWidth)
            const isItemCroppedCorrectly = (((image.width - allowedRounding) / (image.height + allowedRounding)) <= image.cropRatio) && (((image.width + allowedRounding) / (image.height - allowedRounding)) >= image.cropRatio);
            return i && isItemCroppedCorrectly;
          }, true));
        }, true);

        expect(isCroppedCorrectly).to.be.true;
      }
    });

    //fixedColumns
    it('should have fixed number of columns if specified', () => {
      items = getItems(100);
      styleParams.isVertical = true;

      for (const num of [1, 5, 10, 20]) {
        styleParams.fixedColumns = num;
        gallery = getLayout({items, container, styleParams});

        expect(gallery.columns.length).to.equal(num);
      }
    });

    //collageAmount
    it('should have more items in groups when the collageAmount increases', () => {
      const itemCount = 100;
      items = getItems(itemCount);
      const collageAmounts = _.range(0, 11).map(i => i / 10);
      let lastGroupCount = itemCount;
      styleParams.layoutsVersion = 1;

      for (const collageAmount of collageAmounts) {
        styleParams.collageAmount = collageAmount;
        gallery = getLayout({items, container, styleParams});
        const groupCount = getGroupCount(gallery);

        expect(groupCount).not.to.be.above(lastGroupCount);

        lastGroupCount = groupCount;
      }
    });

    //collageDensity
    it('should have more items in groups when the collageDensity increases', () => {
      const itemCount = 100;
      items = getItems(itemCount);

      const collageDensities = _.range(0, 11).map(i => i / 10);
      let lastGroupCount = itemCount;

      for (const collageDensity of collageDensities) {
        styleParams.collageDensity = collageDensity;
        gallery = getLayout({items, container, styleParams});
        const groupCount = getGroupCount(gallery);

        expect(groupCount).not.to.be.above(lastGroupCount);

        lastGroupCount = groupCount;
      }
    });

    //groupSize
    it('should have all groups at maximum groupSize items', () => {
      items = getItems(100);

      for (const size of [1, 2, 3]) {
        styleParams.groupSize = size;
        gallery = getLayout({items, container, styleParams});

        const isWithinSize = gallery.columns[0].groups.reduce((g, group) => {
          const inSize = (group.items.length <= styleParams.groupSize);
          return (g && inSize);
        }, true);

        expect(isWithinSize).to.be.true;
      }

    });

    //groupTypes
    it('should have groups only from the optional groups types ', () => {
      items = getItems(100);

      const groupTypes = ['1', '1,2h,2v', '1,3b,3l,3r', '1,2h,2v,3v,3h', '1,3t,3b', '1,3v,3h', '1,3r,3b,3v,3h', '1,2h,2v,3v,3h,3l,3b']; //groupType '1' must always be an option

      for (const type of groupTypes) {
        styleParams.groupTypes = type;
        gallery = getLayout({items, container, styleParams});

        const isWithinTypes = gallery.columns[0].groups.reduce((g, group) => {
          const inTypes = (styleParams.groupTypes.indexOf(group.type) >= 0);
          return (g && inTypes);
        }, true);

        expect(isWithinTypes).to.be.true;
      }

    });

    //minItemSize
    it('should have all Strips GalleryLayout images larger than minItemSize', () => {

      items = getItems(100);
      styleParams.isVertical = false;

      const minItemSizes = [10, 50, 100, 200, 300, 400];

      for (const size of minItemSizes) {
        styleParams.gallerySize = size * 4; //gallerySize must be greater than minItemSize (otherwise the images' proportions will affect the minDimension)
        styleParams.minItemSize = size;
        gallery = getLayout({items, container, styleParams});

        const minItemSize = gallery.columns[0].groups.reduce((g, group) => {
          return group.items.reduce((i, item) => {
            const minDimension = Math.min(item.width, item.height);
            return Math.min(i, minDimension);
          }, styleParams.minItemSize);
        }, styleParams.minItemSize);

        expect(minItemSize).not.to.be.below(size);
      }

    });

    //minItemSize
    it('should have all Columns GalleryLayout images larger than minItemSize', () => {

      items = getItems(100);
      styleParams.isVertical = true;
      styleParams.galleryWidth = 4000;
      styleParams.imageMargin = 0;
      styleParams.collageDensity = 1;

      const minItemSizes = [10, 50, 100, 200, 300];

      for (const size of minItemSizes) {
        styleParams.gallerySize = size * 8; //gallerySize must be greater than minItemSize (otherwise the images' proportions will affect the minDimension)
        styleParams.minItemSize = size;
        gallery = getLayout({items, container, styleParams});

        const minItemSize = gallery.columns.reduce((c, column) => {
          return (c && column.groups.reduce((g, group) => {
            return (Math.min(g, group.items.reduce((i, item) => {
              const maxDimension = Math.max(item.width, item.height);
              return Math.min(i, maxDimension);
            }, styleParams.minItemSize)));
          }, styleParams.minItemSize));
        }, styleParams.minItemSize);

        expect(minItemSize).not.to.be.below(size);
      }

    });

    // isVertical
    it('should create vertical layouts if isVertical is true', () => {

      items = getItems(100);
      styleParams.gallerySize = 200;
      styleParams.fixedColumns = 0;
      container.galleryWidth = 1000;

      styleParams.isVertical = true;
      gallery = getLayout({items, container, styleParams});
      expect(gallery.columns.length).to.equal(5);

      styleParams.isVertical = false;
      gallery = getLayout({items, container, styleParams});
      expect(gallery.columns.length).to.equal(1);

    });

    // oneRow
    it('should create one long row of items if oneRow is true', () => {

      items = getItems(100);
      container.galleryHeight = 500;

      styleParams.oneRow = false;
      styleParams.imageMargin = 0;

      gallery = getLayout({items, container, styleParams});
      expect(gallery.height).to.be.above(container.galleryHeight);

      styleParams.oneRow = true;
      gallery = getLayout({items, container, styleParams});
      expect(gallery.height).to.equal(container.galleryHeight);

    });

    // rotatingGroupTypes
    it('should have groups from the rotating groups types by their order ', () => {
      items = items.slice(0, 100);
      styleParams.isVertical = false;

      const groupTypes = ['1', '1,2h,2v', '1,3b,1,3r', '1,2h,2v,3v,3h', '1,3t,3b', '1,3v,3h', '1,3r,2h,3v,3h', '2h,2v,3v,3h,3l,3b'];

      for (const type of groupTypes) {
        styleParams.rotatingGroupTypes = type;
        gallery = getLayout({items, container, styleParams});

        const isWithinTypes = gallery.columns[0].groups.reduce((g, group, idx) => {
          const rotatingGroupTypes = styleParams.rotatingGroupTypes.split(',');
          const expectedType = rotatingGroupTypes[idx % rotatingGroupTypes.length];
          const groupType = group.type;
          expect(expectedType).to.equal(groupType);
          const isType = (expectedType === groupType);
          return (g && isType);
        }, true);

        expect(isWithinTypes).to.be.true;
      }

    });

    // cubeImages
    it('should have all images in their original ratio if cubeImages is false', () => {

      const allowedRounding = 2; //the number of pixels that can change due to rounding

      items = getItems(100); //todo - something breaks when using exactly 100 images
      styleParams.cubeImages = false;
      styleParams.imageMargin = 0;
      styleParams.collageDensity = 0.8;

      gallery = getLayout({items, container, styleParams});
      const isOriginalDimensions = gallery.columns[0].groups.reduce((g, group) => {
        return (g && group.isLastGroup || group.items.reduce((i, image) => {  //ignore the last group (it is stretched to fill the galleryWidth)
          const isItemCroppedCorrectly = (((image.width - allowedRounding) / (image.height + allowedRounding)) <= image.maxWidth / image.maxHeight) && (((image.width + allowedRounding) / (image.height - allowedRounding)) >= image.maxWidth / image.maxHeight);
          return i && isItemCroppedCorrectly; //ignore fractions
        }, true));
      }, true);

      expect(isOriginalDimensions).to.be.true;

      styleParams.cubeImages = true;

      gallery = getLayout({items, container, styleParams});
      const isCroppedCorrectly = gallery.columns[0].groups.reduce((g, group) => {
        return (g && group.items.reduce((i, image) => {
          const isItemCroppedCorrectly = (((image.width - allowedRounding) / (image.height + allowedRounding)) <= styleParams.cubeRatio) && (((image.width + allowedRounding) / (image.height - allowedRounding)) >= styleParams.cubeRatio);
          return i && isItemCroppedCorrectly;
        }, true));
      }, true);

      expect(isCroppedCorrectly).to.be.true;
    });

    // smartCrop
    it('should crop images according to their original proportions if smartCrop is true', () => {

      const allowedRounding = 2; //the number of pixels that can change due to rounding

      items = getItems(100);
      styleParams.cubeRatio = 2;
      styleParams.cubeImages = true;
      styleParams.smartCrop = true;
      styleParams.imageMargin = 0;

      gallery = getLayout({items, container, styleParams});
      const isCroppedCorrectly = gallery.columns[0].groups.reduce((g, group) => {
        return (g && group.items.reduce((i, image) => {
          const cropRatio = image.isLandscape ? styleParams.cubeRatio : 1 / styleParams.cubeRatio;
          const isItemCroppedCorrectly = (((image.width - allowedRounding) / (image.height + allowedRounding)) <= cropRatio) && (((image.width + allowedRounding) / (image.height - allowedRounding)) >= cropRatio);
          return i && isItemCroppedCorrectly;
        }, true));
      }, true);

      expect(isCroppedCorrectly).to.be.true;
    });

    // chooseBestGroup
    it('should not allow ugly groups if chooseBestGroup is true ', () => {
      const items = getItems(99);
      styleParams.groupTypes = '3t,3r,3l,3b'; //without 1
      styleParams.groupSize = 3;
      styleParams.collageDensity = 1;
      styleParams.minItemSize = 10;
      styleParams.gallerySize = 1000;

      for (const chooseBestGroup of [true, false]) {
        styleParams.chooseBestGroup = chooseBestGroup;

        gallery = getLayout({items, container, styleParams});
        const isWithinTypes = gallery.columns[0].groups.reduce((g, group) => {
          const groupType = group.type;
          const isType = (groupType !== '1'); //if ChoooseBestGroup is true, some group will have to be single
          return (g && isType);
        }, true);

        expect(isWithinTypes).to.not.equal(chooseBestGroup);
      }

    });

    // imageMargin (between groups)
    it('should have spaces between groups equal to imageMargin', () => {

      items = getItems(100);
      styleParams.galleryWidth = 4000;
      styleParams.gallerySize = 500;
      styleParams.groupSize = 1;

      for (const margin of [10, 50, 100, 200]) {

        styleParams.imageMargin = margin;
        gallery = getLayout({items, container, styleParams});

        let lastItem = false;
        let marginDiff = 0;
        const totalMarginDiff = gallery.items.reduce((i, item) => {
          if (lastItem) {
            let realMargin;
            if (lastItem.offset.top === item.offset.top) {
              realMargin = Math.round(item.offset.left - lastItem.offset.right);
            } else {
              realMargin = Math.round(item.offset.top - lastItem.offset.bottom);
            }
            marginDiff = Math.abs(realMargin - margin * 2);
            expect(marginDiff).to.be.below(1);
          }
          lastItem = item;
          return i + Math.floor(marginDiff);
        }, 0);

        expect(totalMarginDiff).to.be.below(1);
      }

    });

    // imageMargin (within groups)
    //TODO fix this test once the playground is complete
/*     it('should have spaces between items in a group equal to imageMargin', () => {

      items = getItems(100);
      styleParams.galleryWidth = 4000;
      styleParams.gallerySize = 500;
      styleParams.groupSize = 3;
      styleParams.groupTypes = '3b';

      for (const margin of [10]) {

        styleParams.imageMargin = margin;
        gallery = getLayout({items, container, styleParams});

        let marginDiff = 0;
        const totalMarginDiff = gallery.columns[0].reduce((g, group) => {
          let lastItem = false;
          const groupMarginDiff = group.items.reduce((i, item) => {
            if (lastItem) {
              let realMargin;
              if (lastItem.offset.top < item.offset.top) {
                realMargin = Math.round(item.offset.top - lastItem.offset.bottom);
              } else {
                realMargin = Math.round(item.offset.left - lastItem.offset.right);
              }
              marginDiff = Math.abs(realMargin - margin * 2);
              if (marginDiff > 1) {
                console.log(margin);
                console.log(lastItem.offset, item.offset);
                console.log(group.type, group.width, group.height);
                console.log(group.items.map(item => Object.assign({}, item.offset, {width: item.width, height: item.height})));
              }
              expect(marginDiff).to.be.below(3);
            }
            lastItem = item;
            return i + Math.floor(marginDiff);
          }, 0);
          return g + groupMarginDiff;
        }, 0);

        expect(totalMarginDiff).to.be.below(1);
      }

    });
 */

  });
});

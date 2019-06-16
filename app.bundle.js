/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	__webpack_require__.p = typeof window !== 'undefined' && window.__STATICS_BASE_URL__ || __webpack_require__.p;
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 111);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ 196)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 3 */
/*!**************************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 75);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 4 */
/*!*********************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ 189);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ 193);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 75);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 5 */
/*!********************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/extends.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ 160);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 6 */
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_core.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/*!************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/createClass.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 100);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 8 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ 72)('wks');
var uid = __webpack_require__(/*! ./_uid */ 49);
var Symbol = __webpack_require__(/*! ./_global */ 15).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 9 */
/*!*******************************************!*\
  !*** ../node_modules/classnames/index.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 10 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 11 */
/*!********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_global.js ***!
  \********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 12 */
/*!******************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_core.js ***!
  \******************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 13 */
/*!*****************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_wks.js ***!
  \*****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ 56)('wks');
var uid = __webpack_require__(/*! ./_uid */ 44);
var Symbol = __webpack_require__(/*! ./_global */ 11).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 14 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_export.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 15);
var core = __webpack_require__(/*! ./_core */ 6);
var ctx = __webpack_require__(/*! ./_ctx */ 66);
var hide = __webpack_require__(/*! ./_hide */ 28);
var has = __webpack_require__(/*! ./_has */ 23);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 15 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_global.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 16 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-dp.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 29);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 95);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 67);
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ 17) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 17 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_descriptors.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ 31)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 18 */
/*!***********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_object-dp.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 32);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 83);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 51);
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ 19) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 19 */
/*!*************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_descriptors.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ 34)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 20 */
/*!*****************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_has.js ***!
  \*****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 21 */
/*!*************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 22 */
/*!**********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/babel-runtime/helpers/createClass.js ***!
  \**********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 135);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 23 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_has.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 24 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-iobject.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ 98);
var defined = __webpack_require__(/*! ./_defined */ 69);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 25 */
/*!***************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 100);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 26 */
/*!******************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_hide.js ***!
  \******************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 18);
var createDesc = __webpack_require__(/*! ./_property-desc */ 41);
module.exports = __webpack_require__(/*! ./_descriptors */ 19) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 27 */
/*!************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_to-iobject.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ 86);
var defined = __webpack_require__(/*! ./_defined */ 53);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 28 */
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_hide.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 16);
var createDesc = __webpack_require__(/*! ./_property-desc */ 35);
module.exports = __webpack_require__(/*! ./_descriptors */ 17) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 29 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_an-object.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 30);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 30 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_is-object.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 31 */
/*!*********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_fails.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 32 */
/*!***********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_an-object.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 33);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 33 */
/*!***********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_is-object.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 34 */
/*!*******************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_fails.js ***!
  \*******************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 35 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_property-desc.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 36 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-object.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ 69);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 37 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iterators.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 38 */
/*!************************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 39 */
/*!************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/babel-runtime/core-js/object/assign.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ 115), __esModule: true };

/***/ }),
/* 40 */
/*!********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_export.js ***!
  \********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 11);
var core = __webpack_require__(/*! ./_core */ 12);
var ctx = __webpack_require__(/*! ./_ctx */ 117);
var hide = __webpack_require__(/*! ./_hide */ 26);
var has = __webpack_require__(/*! ./_has */ 20);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 41 */
/*!***************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_property-desc.js ***!
  \***************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 42 */
/*!*************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_object-keys.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 85);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 57);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 43 */
/*!*********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_library.js ***!
  \*********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 44 */
/*!*****************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_uid.js ***!
  \*****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 45 */
/*!************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_object-pie.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 46 */
/*!***********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_iterators.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 47 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-keys.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 97);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 73);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 48 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_library.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 49 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_uid.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 50 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-pie.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 51 */
/*!**************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_to-primitive.js ***!
  \**************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ 33);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 52 */
/*!*****************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_cof.js ***!
  \*****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 53 */
/*!*********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_defined.js ***!
  \*********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 54 */
/*!************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_to-integer.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 55 */
/*!************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_shared-key.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ 56)('keys');
var uid = __webpack_require__(/*! ./_uid */ 44);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 56 */
/*!********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_shared.js ***!
  \********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ 12);
var global = __webpack_require__(/*! ./_global */ 11);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ 43) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 57 */
/*!***************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \***************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 58 */
/*!*************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_object-gops.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 59 */
/*!***********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/babel-runtime/core-js/get-iterator.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 123), __esModule: true };

/***/ }),
/* 60 */
/*!*******************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \*******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ 18).f;
var has = __webpack_require__(/*! ./_has */ 20);
var TAG = __webpack_require__(/*! ./_wks */ 13)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 61 */
/*!**************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/dist/src/utils.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = undefined;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 62);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 39);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 21);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 22);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Utils = function () {
  function Utils() {
    (0, _classCallCheck3.default)(this, Utils);

    this._hash2int = {};
  }

  (0, _createClass3.default)(Utils, [{
    key: 'stripSlashes',
    value: function stripSlashes(str) {
      var newStr = '';
      if (typeof str === 'string') {
        newStr = str.replace(/\\\//g, '/').replace(/\\'/g, '\'').replace(/\\"/g, '"').replace(/\\0/g, '\0').replace(/\\\\/g, '\\');
      }
      return newStr;
    }
  }, {
    key: 'parseStringObject',
    value: function parseStringObject(sObj) {
      if (typeof sObj !== 'string') {
        return sObj;
      }

      var stripedObj = this.stripSlashes(sObj);
      //eslint-disable-next-line
      if (typeof sObj === 'string' && /^[\],:{}\s]*$/.test(stripedObj.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        //this is a json
        try {
          return JSON.parse(stripedObj);
        } catch (e) {
          // console.error('Parse object error: Catched ', e);
        }
      }
      return stripedObj;
    }
  }, {
    key: 'hashToInt',
    value: function hashToInt(str, min, max) {
      var int = 0;

      if (typeof str === 'undefined' || str.length === 0) {
        return int;
      }

      if (!this._hash2int[str]) {
        for (var i = 0; i < str.length; i++) {
          int += str.charCodeAt(i);
        }
        this._hash2int[str] = int;
      }

      if (typeof min === 'undefined' || typeof max === 'undefined') {
        return this._hash2int[str];
      } else {
        return this._hash2int[str] % (max - min + 1) + min;
      }
    }
  }, {
    key: 'insertIfDefined',
    value: function insertIfDefined(obj, field, value) {
      if (typeof value !== 'undefined') {
        obj[field] = value;
      }
    }
  }, {
    key: 'convertStyleParams',
    value: function convertStyleParams(styleParams) {

      //default styleParams
      var convertedStyleParams = (0, _assign2.default)({
        cubeImages: false,
        cubeType: 'fill',
        cubeRatio: 1,
        rotatingCropRatios: '',
        smartCrop: false,
        imageMargin: 10,
        galleryMargin: 0,
        floatingImages: 0,
        chooseBestGroup: true,
        groupSize: 3,
        groupTypes: '1,2h,2v,3h,3v,3t,3b,3l,3r',
        rotatingGroupTypes: '',
        isVertical: true,
        minItemSize: 120,
        oneRow: false,
        gallerySize: 500,
        collageDensity: 50,
        fixedColumns: 0,
        columnWidths: ''
      }, styleParams);

      this.insertIfDefined(convertedStyleParams, 'cubeImages', convertedStyleParams.cropItems);
      this.insertIfDefined(convertedStyleParams, 'cubeType', convertedStyleParams.cropType);
      this.insertIfDefined(convertedStyleParams, 'cubeRatio', convertedStyleParams.cropRatio);
      this.insertIfDefined(convertedStyleParams, 'rotatingCropRatios', Array.isArray(convertedStyleParams.rotatingCropRatios) ? convertedStyleParams.rotatingCropRatios.join(',') : undefined);
      this.insertIfDefined(convertedStyleParams, 'smartCrop', convertedStyleParams.smartCrop);
      this.insertIfDefined(convertedStyleParams, 'imageMargin', convertedStyleParams.itemSpacing);
      this.insertIfDefined(convertedStyleParams, 'galleryMargin', convertedStyleParams.layoutSpacing);
      this.insertIfDefined(convertedStyleParams, 'floatingImages', convertedStyleParams.randomSpacings);
      this.insertIfDefined(convertedStyleParams, 'chooseBestGroup', convertedStyleParams.smartGrouping);
      this.insertIfDefined(convertedStyleParams, 'groupSize', convertedStyleParams.itemsPerGroup);
      this.insertIfDefined(convertedStyleParams, 'groupTypes', Array.isArray(convertedStyleParams.allowedGroupTypes) ? convertedStyleParams.allowedGroupTypes.join(',') : undefined);
      this.insertIfDefined(convertedStyleParams, 'rotatingGroupTypes', Array.isArray(convertedStyleParams.rotatingGroupTypes) ? convertedStyleParams.rotatingGroupTypes.join(',') : undefined);
      this.insertIfDefined(convertedStyleParams, 'isVertical', convertedStyleParams.isColumnsLayout);
      this.insertIfDefined(convertedStyleParams, 'minItemSize', convertedStyleParams.minItemSize);
      this.insertIfDefined(convertedStyleParams, 'oneRow', convertedStyleParams.isVerticalScroll);
      this.insertIfDefined(convertedStyleParams, 'gallerySize', convertedStyleParams.rowSize || convertedStyleParams.columnSize);
      this.insertIfDefined(convertedStyleParams, 'collageDensity', convertedStyleParams.collageDensity);
      this.insertIfDefined(convertedStyleParams, 'fixedColumns', convertedStyleParams.fixedColumns);
      this.insertIfDefined(convertedStyleParams, 'columnWidths', Array.isArray(convertedStyleParams.columnWidths) ? convertedStyleParams.columnWidths.join(',') : undefined);

      return convertedStyleParams;
    }
  }, {
    key: 'convertContainer',
    value: function convertContainer(container, styleParams) {
      var convertedContainer = (0, _extends3.default)({
        bounds: {}
      }, container);
      // galleryWidth is a value calculated prior to the layouter. if it exists it is stronger than width. if galleryWidth doesnt exist width(the total container width) is used instead but it then requieres adding margin calculations. Same is true for the height.
      // this is mostly true for "galleries" containing more than one "gallery" such as thumbnails where teh thumbnails are also a gallery and both are contained within container.width/height and have their own galleryWidth/Height
      if (container.width >= 0 && !(container.galleryWidth >= 0)) {
        convertedContainer.galleryWidth = container.width + ((styleParams.imageMargin || 0) - (styleParams.galleryMargin || 0)) * 2;
        delete convertedContainer.width;
      }
      if (container.height >= 0 && !(container.galleryHeight >= 0)) {
        convertedContainer.galleryHeight = container.height + ((styleParams.imageMargin || 0) - (styleParams.galleryMargin || 0));
        delete convertedContainer.height;
      }
      if (styleParams.externalInfoHeight >= 0 && styleParams.oneRow) {
        convertedContainer.galleryHeight -= styleParams.externalInfoHeight;
      }

      return convertedContainer;
    }
  }]);
  return Utils;
}();

var utils = exports.utils = new Utils();
//# sourceMappingURL=utils.js.map

/***/ }),
/* 62 */
/*!******************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/babel-runtime/helpers/extends.js ***!
  \******************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ 39);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 63 */
/*!*************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/dist/src/item.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = undefined;

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 39);

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 138);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 21);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 22);

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(/*! ./utils */ 61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = exports.Item = function () {

  /* @ngInject */
  function Item(config) {
    (0, _classCallCheck3.default)(this, Item);

    this.style = {};
    this.visibility = {};

    config = config || {};

    if (!config.dto) {
      console.error('Item has no DTO', config);
      config.dto = {};
    }

    this.config = config;
    this.dto = config.dto;
    this.idx = config.idx;
    this.inGroupIdx = config.inGroupIdx;
    this.container = config.container;
    this.cubeType = 'fill';

    if (config.styleParams) {
      var _config = config,
          styleParams = _config.styleParams;

      this.cubeType = styleParams.cubeType;
      this.cubeImages = styleParams.cubeImages;
      this._cubeRatio = styleParams.cubeRatio;
      this.rotatingCropRatios = styleParams.rotatingCropRatios;
      this.smartCrop = styleParams.smartCrop;
      this.cropOnlyFill = styleParams.cropOnlyFill;
      this.imageMargin = styleParams.imageMargin;
      this.galleryMargin = styleParams.galleryMargin;
      this.floatingImages = styleParams.floatingImages;
      this.smartCrop = styleParams.smartCrop;
    }

    this._groupOffset = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
    this._group = {};
    this.calcPinOffset = function () {
      return 0;
    };

    this.resize(1);
  }

  (0, _createClass3.default)(Item, [{
    key: 'fixMetadataVerticalVideoRatio',
    value: function fixMetadataVerticalVideoRatio(metadata) {
      if (metadata.qualities && metadata.qualities[0]) {
        //fix incorrect width height for vertical videos
        var qualities = metadata.qualities;
        var _qualities = qualities[qualities.length - 1],
            height = _qualities.height,
            width = _qualities.width;

        metadata.height = height;
        metadata.width = width;
      }
    }
  }, {
    key: 'resize',
    value: function resize(scaleOrDimensions) {

      var scale = 1;
      if (scaleOrDimensions === false) {
        return;
      } else if (scaleOrDimensions > 0) {
        scale = scaleOrDimensions;
      } else if ((typeof scaleOrDimensions === 'undefined' ? 'undefined' : (0, _typeof3.default)(scaleOrDimensions)) === 'object') {
        if (scaleOrDimensions.width) {
          var w = Math.max(1, scaleOrDimensions.width);
          scale = w / this.width;
        } else if (scaleOrDimensions.height) {
          var h = Math.max(1, scaleOrDimensions.height);
          scale = h / this.height;
        }
      }

      this.width *= scale;
      this.height *= scale;

      this.resized = true;

      return this;
    }
  }, {
    key: 'pinToCorner',
    value: function pinToCorner(cornerName) {
      var _this = this;

      var pinAfter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


      var isTop = cornerName.indexOf('top') >= 0;
      var isLeft = cornerName.indexOf('left') >= 0;

      this.style.top = isTop ? 0 : 'auto';
      this.style.bottom = isTop ? 'auto' : 0;
      this.style.left = isLeft ? 0 : 'auto';
      this.style.right = isLeft ? 'auto' : 0;

      this.pin = cornerName;
      this.isPinnedTop = isTop;
      this.isPinnedLeft = isLeft;
      this.pinAfter = pinAfter;
      this.pinAfterType = isTop ? 'top' : isLeft ? 'left' : '';
      this.calcPinOffset = function (groupSize, dir) {
        if (!_this.pinAfter) {
          return 0;
        } else if (_this.pin === dir) {
          //this is used only for 3h/3v group types - to calc the offset of the middle item
          var m = _this.imageMargin;
          // return ((groupSize - 6 * m) * this.pinOffset + 2 * m);
          if (dir === 'top') {
            return _this.pinAfter.height + 2 * m;
          } else if (dir === 'left') {
            return _this.pinAfter.width + 2 * m;
          } else {
            return 0;
          }
          // return ((groupSize - 6 * m) * this.pinOffset + 4 * m);
        } else {
          return 0;
        }
      };
    }
  }, {
    key: 'setPosition',
    value: function setPosition(position) {
      this.style.position = position;
    }
  }, {
    key: 'getPosition',
    value: function getPosition(pos) {
      return parseInt(pos, 10) >= 0 ? pos : 'auto';
    }
  }, {
    key: 'top',
    get: function get() {
      return this.getPosition(this.style.top);
    }
  }, {
    key: 'left',
    get: function get() {
      return this.getPosition(this.style.left);
    }
  }, {
    key: 'right',
    get: function get() {
      return this.getPosition(this.style.right);
    }
  }, {
    key: 'bottom',
    get: function get() {
      return this.getPosition(this.style.bottom);
    }
  }, {
    key: 'group',
    set: function set(group) {
      (0, _assign2.default)(this._group, group);
    },
    get: function get() {
      return this._group;
    }
  }, {
    key: 'groupOffset',
    set: function set(offset) {
      (0, _assign2.default)(this._groupOffset, offset);
    }
  }, {
    key: 'offset',
    get: function get() {
      var offset = {
        top: this._groupOffset.top + (this.isPinnedTop ? this.calcPinOffset(this._group.height, 'top') : this._group.height - this.outerHeight) || 0,
        left: this._groupOffset.left + (this.isPinnedLeft ? this.calcPinOffset(this._group.width, 'left') : this._group.width - this.outerWidth) || 0
      };
      offset.right = offset.left + this.width;
      offset.bottom = offset.top + this.height;
      return offset;
    }
  }, {
    key: 'transform',
    get: function get() {
      if (this.floatingImages > 0) {

        var m = this.imageMargin;
        var g = this.galleryMargin;

        var spaceLeft = this.offset.left > 0 ? m : g;
        var spaceRight = this.container.galleryWidth - this.offset.right > 2 * m ? m : g;
        var spaceUp = this.offset.top > 0 ? m : g;
        var spaceDown = this.container.galleryHeight - this.offset.bottom > 2 * m ? m : g;

        var horizontalShift = _utils.utils.hashToInt(this.hash + this.offset.right + 'x', -1 * spaceLeft, spaceRight) * this.floatingImages;
        var verticalShift = _utils.utils.hashToInt(this.hash + this.offset.top + 'y', -1 * spaceUp, spaceDown) * this.floatingImages;

        return {
          transform: 'translate3d(' + horizontalShift + 'px, ' + verticalShift + 'px, 0)'
        };
      } else {
        return {};
      }
    }
  }, {
    key: 'id',
    get: function get() {
      return this.dto.id || this.dto.photoId || this.dto.itemId;
    },
    set: function set(id) {
      this.dto.itemId = this.dto.photoId = this.dto.id = id;
    }
  }, {
    key: 'hash',
    get: function get() {
      return this.dto.hash || this.dto.mediaUrl || this.dto.id;
    }
  }, {
    key: 'maxWidth',
    get: function get() {
      return this.dto.width || this.dto.w;
    },
    set: function set(w) {
      this.dto.width = w;
    }
  }, {
    key: 'outerWidth',
    get: function get() {
      return this.width + 2 * this.margins;
    }
  }, {
    key: 'orgWidth',
    get: function get() {
      return this.style.width || this.dto.width || this.dto.w || 1; //make sure the width / height is not undefined (crashes the gallery)
    }
  }, {
    key: 'width',
    get: function get() {
      var width = void 0;
      if (this.cubeImages && this.ratio >= this.cubeRatio) {
        width = this.style.cubedWidth || this.orgHeight * this.cubeRatio;
      } else {
        width = this.orgWidth;
      }
      return Math.max(width, 1);
    },
    set: function set(w) {
      this.style.cubedWidth = this.style.width = Math.max(1, w);
    }
  }, {
    key: 'outerHeight',
    get: function get() {
      return this.height + 2 * this.margins;
    }
  }, {
    key: 'orgHeight',
    get: function get() {
      return this.style.height || this.dto.height || this.dto.h || 1; //make sure the width / height is not undefined (creashes the gallery)
    }
  }, {
    key: 'height',
    get: function get() {
      var height = void 0;
      if (this.cubeImages && this.ratio < this.cubeRatio) {
        height = this.style.cubedHeight || this.orgWidth / this.cubeRatio;
      } else {
        height = this.orgHeight;
      }
      return Math.max(height, 1);
    },
    set: function set(h) {
      this.style.cubedHeight = this.style.height = Math.max(1, h);
    }
  }, {
    key: 'maxHeight',
    get: function get() {
      return this.dto.height || this.dto.h;
    },
    set: function set(h) {
      h = this.dto.height;
    }
  }, {
    key: 'margins',
    get: function get() {
      return this.imageMargin || 0;
    },
    set: function set(m) {
      this.imageMargin = m;
    }
  }, {
    key: 'cubeRatio',
    get: function get() {
      var _this2 = this;

      var ratio = void 0;
      if (this.rotatingCropRatios && this.rotatingCropRatios.length > 0) {
        var cropRatiosArr = String(this.rotatingCropRatios).split(',');
        ratio = cropRatiosArr[this.idx % cropRatiosArr.length];
      }
      if (!ratio && typeof this._cubeRatio === 'function') {
        ratio = this._cubeRatio();
      }
      if (!ratio && this.cropOnlyFill && this.cubeType === 'fit') {
        ratio = this.ratio;
      }

      if (!ratio) {
        ratio = this._cubeRatio || this.ratio;
      }

      if (this.dynamicCropRatios !== null && typeof ratio === 'string') {
        if (!this.dynamicCropRatios) {
          var dynamicCropRegex = /^\d*\.?\d*(%|px)\/\d*\.?\d*(%|px)$/;
          var match = dynamicCropRegex.exec(ratio);
          if (match) {
            console.error(match);
            this.dynamicCropRatios = ratio.split('/').map(function (val, idx) {
              if (val.indexOf('%') > 0) {
                return {
                  type: '%',
                  val: parseFloat(val.replace('%', '')) / 100,
                  dim: idx === 0 ? 'galleryWidth' : 'galleryHeight'
                };
              } else {
                return {
                  type: 'px',
                  val: parseInt(val.replace('px', ''))
                };
              }
            });
          } else {
            this.dynamicCropRatios = null;
          }
        }
        if (this.dynamicCropRatios) {
          var dynamicCropRatio = this.dynamicCropRatios.map(function (r) {
            if (r.type === '%') {
              var dim = _this2.container[r.dim] + (r.dim === 'galleryHeight' ? _this2.imageMargin : 0);
              var relativeDim = r.val * dim - 2 * _this2.imageMargin;
              return relativeDim;
            } else {
              return r.val;
            }
          });
          ratio = dynamicCropRatio[0] / dynamicCropRatio[1];
        }
      }

      ratio = Number(ratio);

      if (this.smartCrop === true) {
        if (this.isPortrait) {
          return Math.min(ratio, 1 / ratio);
        } else {
          return Math.max(ratio, 1 / ratio);
        }
      } else {
        return ratio;
      }
    },
    set: function set(ratio) {
      if (typeof this._cubeRatio === 'number') {
        this._cubeRatio = ratio;
        this.style.cubedHeight = this.style.cubedWidth = 0;
      }
    }
  }, {
    key: 'orientation',
    get: function get() {
      return this.ratio < 0.999 ? 'portrait' : 'landscape'; //make sure that almost square images get the same treatment
    }
  }, {
    key: 'isPortrait',
    get: function get() {
      return this.orientation === 'portrait';
    }
  }, {
    key: 'isLandscape',
    get: function get() {
      return this.orientation === 'landscape';
    }
  }, {
    key: 'ratio',
    get: function get() {
      if (!this.orgRatio) {
        this.orgRatio = this.orgWidth / this.orgHeight;
      }
      return this.orgRatio;
    },
    set: function set(r) {
      this.orgRatio = r;
    }
  }, {
    key: 'scheme',
    get: function get() {
      return {
        id: this.id,
        idx: this.idx,
        inGroupIdx: this.inGroupIdx,
        dto: this.dto,
        type: this.type,
        style: this.style,
        width: this.width,
        maxWidth: this.maxWidth,
        outerWidth: this.outerWidth,
        height: this.height,
        maxHeight: this.maxHeight,
        outerHeight: this.outerHeight,
        margins: this.margins,
        ratio: this.ratio,
        cropRatio: this.cubeRatio,
        isCropped: this.cubeImages,
        cropType: this.cubeType,
        group: this.group,
        offset: this.offset,
        groupOffset: this._groupOffset,
        transform: this.transform,
        orientation: this.orientation,
        isPortrait: this.isPortrait,
        isLandscape: this.isLandscape,
        visibility: this.visibility
      };
    }
  }]);
  return Item;
}();
//# sourceMappingURL=item.js.map

/***/ }),
/* 64 */
/*!*********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_wks-ext.js ***!
  \*********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ 13);


/***/ }),
/* 65 */
/*!************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_wks-define.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 11);
var core = __webpack_require__(/*! ./_core */ 12);
var LIBRARY = __webpack_require__(/*! ./_library */ 43);
var wksExt = __webpack_require__(/*! ./_wks-ext */ 64);
var defineProperty = __webpack_require__(/*! ./_object-dp */ 18).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 66 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_ctx.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ 163);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 67 */
/*!****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-primitive.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ 30);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 68 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_cof.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 69 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_defined.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 70 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-integer.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 71 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_shared-key.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ 72)('keys');
var uid = __webpack_require__(/*! ./_uid */ 49);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 72 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_shared.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ 6);
var global = __webpack_require__(/*! ./_global */ 15);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ 48) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 73 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 74 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gops.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 75 */
/*!*******************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ 169);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ 179);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 76 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-create.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ 29);
var dPs = __webpack_require__(/*! ./_object-dps */ 173);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 73);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 71)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ 96)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ 174).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 77 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ 16).f;
var has = __webpack_require__(/*! ./_has */ 23);
var TAG = __webpack_require__(/*! ./_wks */ 8)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 78 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks-ext.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ 8);


/***/ }),
/* 79 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks-define.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 15);
var core = __webpack_require__(/*! ./_core */ 6);
var LIBRARY = __webpack_require__(/*! ./_library */ 48);
var wksExt = __webpack_require__(/*! ./_wks-ext */ 78);
var defineProperty = __webpack_require__(/*! ./_object-dp */ 16).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 80 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gopd.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ 50);
var createDesc = __webpack_require__(/*! ./_property-desc */ 35);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 24);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 67);
var has = __webpack_require__(/*! ./_has */ 23);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 95);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ 17) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 81 */
/*!******************************************!*\
  !*** ../node_modules/warning/warning.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),
/* 82 */
/*!*****************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/dist/src/layouter.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 39);

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 59);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 21);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 22);

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(/*! ./utils */ 61);

var _item = __webpack_require__(/*! ./item.js */ 63);

var _group = __webpack_require__(/*! ./group.js */ 94);

var _strip = __webpack_require__(/*! ./strip.js */ 152);

var _column = __webpack_require__(/*! ./column.js */ 153);

var _layoutsStore = __webpack_require__(/*! ./layoutsStore.js */ 154);

var _layoutsStore2 = _interopRequireDefault(_layoutsStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layouter = function () {
  function Layouter(layoutParams) {
    (0, _classCallCheck3.default)(this, Layouter);


    this.ready = false;
    this.pointer = 0;
    this.layoutItems = [];

    this.findNeighborItem = this.findNeighborItem.bind(this);

    this.updateParams(layoutParams);

    if (this.createLayoutOnInit !== false) {
      this.createLayout(layoutParams);
    }
  }

  (0, _createClass3.default)(Layouter, [{
    key: 'updateParams',
    value: function updateParams(layoutParams) {
      this.srcItems = layoutParams.items;
      this.styleParams = _utils.utils.convertStyleParams(layoutParams.styleParams);
      this.container = _utils.utils.convertContainer(layoutParams.container, this.styleParams);

      var options = layoutParams.options || {};
      this.useExistingLayout = !!options.useExistingLayout;
      this.createLayoutOnInit = options.createLayoutOnInit;
      this.showAllItems = !!options.showAllItems || !!layoutParams.showAllItems;
      this.skipVisibilitiesCalc = !!options.skipVisibilitiesCalc;
      this.useLayoutStore = !!options.useLayoutStore;
    }
  }, {
    key: 'verifyGalleryState',
    value: function verifyGalleryState() {
      if (!this.container.galleryWidth) {
        this.ready = false;
        this.reason = 'galleryWidth is undefined or 0';
        return false;
      }

      if (!this.styleParams.gallerySize) {
        this.ready = false;
        this.reason = 'gallerySize is undefined or 0';
        return false;
      }

      return true;
    }
  }, {
    key: 'calcNumberOfColumns',
    value: function calcNumberOfColumns(galleryWidth, gallerySize) {
      var numOfCols = 1;
      if (this.styleParams.isVertical) {
        if (this.styleParams.fixedColumns > 0) {
          numOfCols = this.styleParams.fixedColumns;
        } else if (this.styleParams.columnWidths) {
          numOfCols = this.styleParams.columnWidths.split(',').length;
        } else {
          numOfCols = Math.ceil(galleryWidth / gallerySize) || 1;
        }
      } else {
        numOfCols = 1;
      }
      return numOfCols;
    }
  }, {
    key: 'findShortestColumn',
    value: function findShortestColumn(columns, groupIdx) {
      var minCol = columns[0];
      if (this.styleParams.placeGroupsLtr) {
        minCol = columns[groupIdx % columns.length];
      } else {
        var minColH = -1;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(columns), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var column = _step.value;

            var colH = column.height;
            if (colH < minColH || minColH < 0) {
              minColH = colH;
              minCol = column;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      return minCol;
    }
  }, {
    key: 'saveExistingLayout',
    value: function saveExistingLayout() {
      if (this.useLayoutStore) {
        _layoutsStore2.default.layout = {
          pointer: this.pointer,
          layoutItems: this.layoutItems,
          groups: this.groups,
          strips: this.strips,
          groupIdx: this.groupIdx,
          groupItems: this.groupItems,
          group: this.group,
          strip: this.strip,
          gallerySize: this.gallerySize,
          galleryHeight: this.galleryHeight,
          columns: this.columns
        };
      }
    }
  }, {
    key: 'prepareLayoutParams',
    value: function prepareLayoutParams() {
      var _this = this;

      if (this.useExistingLayout && this.pointer > 0) {

        if (this.useLayoutStore) {
          (0, _assign2.default)(this, _layoutsStore2.default.layout);
        } else {

          if (this.styleParams.isVertical) {

            //---------------------| COLUMNS GALLERY |----------------------//
            //remove items from the last 3 groups;
            var lastGroups = this.groups.slice(-3);
            lastGroups.forEach(function (group) {
              var column = _this.columns[group.columnIdx];
              if (column) {
                column.height -= group.totalHeight;
                column.groups.splice(-1, 1);
              }
              _this.groups.splice(-1, 1);
              group.items.forEach(function () {
                _this.layoutItems.splice(-1, 1);
                _this.pointer--;
              });
              _this.groupIdx--;
            });
          } else {

            //---------------------| STRIPS GALLERY |----------------------//
            //remove items from the last 2 strips;
            var lastStrips = this.strips.slice(-2);
            if (lastStrips) {
              lastStrips.forEach(function (lastStrip) {
                if (lastStrip) {
                  _this.strips.splice(-1, 1);
                  var groups = lastStrip.groups;
                  groups.forEach(function (group) {
                    _this.groups.splice(-1, 1);
                    group.items.forEach(function () {
                      _this.layoutItems.splice(-1, 1);
                      _this.pointer--;
                    });
                    _this.groupIdx--;
                  });
                }
              });
              this.galleryHeight = this.strips.reduce(function (totalHeight, strip) {
                return totalHeight += strip.height;
              }, 0);
              // this.strip = this.strips[this.strips.length - 1];
              this.strip = new _strip.Strip({
                idx: this.strips.length,
                container: this.container,
                groupsPerStrip: this.styleParams.groupsPerStrip,
                oneRow: this.styleParams.oneRow,
                gallerySize: this.gallerySize
              });
            }
          }

          this.groupItems = [];
        }

        this.item = {};
        this.maxLoops = this.srcItems.length * 10;
      } else {

        this.pointer = 0;
        this.firstGroup = false;
        this.layoutItems = [];
        this.groups = [];
        this.strips = [];

        if (this.styleParams.forceFullHeight) {
          this.gallerySize = Math.sqrt(this.container.galleryHeight * this.container.galleryWidth / this.srcItems.length);
        } else {
          var gallerySizeVal = void 0;
          if (typeof this.styleParams.gallerySize === 'function') {
            gallerySizeVal = this.styleParams.gallerySize();
          } else {
            gallerySizeVal = this.styleParams.gallerySize;
          }
          this.gallerySize = Math.floor(gallerySizeVal) + Math.ceil(2 * (this.styleParams.imageMargin - this.styleParams.galleryMargin));
        }

        this.galleryWidth = Math.floor(this.container.galleryWidth);
        this.maxGroupSize = this.getMaxGroupSize();

        this.groupIdx = 0;
        this.item = {};

        this.groupItems = [];
        this.group;
        this.bounds = this.container.bounds || {};

        this.strip = new _strip.Strip({
          idx: 1,
          container: this.container,
          groupsPerStrip: this.styleParams.groupsPerStrip,
          oneRow: this.styleParams.oneRow,
          gallerySize: this.gallerySize
        });

        this.galleryHeight = 0;

        this.numOfCols = this.calcNumberOfColumns(this.galleryWidth, this.gallerySize);
        this.gallerySize = this.styleParams.isVertical ? Math.floor(this.galleryWidth / this.numOfCols) : this.gallerySize;

        var _styleParams = this.styleParams,
            columnWidths = _styleParams.columnWidths,
            cubeRatio = _styleParams.cubeRatio;


        var columnWidthsArr = columnWidths && columnWidths.length > 0 ? columnWidths.split(',') : false;
        this.columns = Array(this.numOfCols).fill(0).map(function (column, idx) {
          return new _column.Column(idx, columnWidthsArr ? columnWidthsArr[idx] : _this.gallerySize, _this.styleParams.cubeRatio);
        });
        this.columns[this.numOfCols - 1].width += this.galleryWidth - this.columns.reduce(function (sum, col) {
          return col.width + sum;
        }, 0); //the last group compensates for half pixels in other groups
        this.columns[this.numOfCols - 1].cubeRatio = cubeRatio * (this.columns[this.numOfCols - 1].width / this.gallerySize); //fix the last group's cube ratio

        this.maxLoops = this.srcItems.length * 10;
      }
    }
  }, {
    key: 'createLayout',
    value: function createLayout(layoutParams) {

      if (typeof layoutParams !== 'undefined') {
        this.updateParams(layoutParams);
      }

      if (!this.verifyGalleryState()) {
        return false;
      }

      this.prepareLayoutParams();

      while (this.srcItems[this.pointer]) {

        if (this.imagesLeft === 6) {
          this.saveExistingLayout();
        }

        this.maxLoops--;
        if (this.maxLoops <= 0) {
          console.error('Cannot create layout, maxLoops reached!!!');
          return false;
        }

        this.item = new _item.Item({
          idx: this.pointer,
          inGroupIdx: this.groupItems.length + 1,
          scrollTop: this.galleryHeight,
          dto: this.srcItems[this.pointer],
          container: this.container,
          styleParams: this.styleParams
        });

        this.layoutItems[this.pointer] = this.item;

        //push the image to a group - until its full
        this.groupItems.push(this.item);
        if (this.groupItems.length < this.maxGroupSize && this.srcItems[this.pointer + 1]) {
          this.pointer++;
          continue;
        }

        this.group = new _group.Group({
          idx: this.groupIdx,
          stripIdx: this.strip.idx,
          inStripIdx: this.strip.groups.length + 1,
          top: this.galleryHeight,
          items: this.groupItems,
          isLastItems: this.isLastImages,
          gallerySize: this.gallerySize,
          showAllItems: this.showAllItems,
          container: this.container,
          styleParams: this.styleParams
        });
        this.groups[this.groupIdx] = this.group;

        //take back the pointer in case the group was created with less items
        this.pointer += this.group.realItems.length - this.groupItems.length;

        this.groupIdx++;
        this.groupItems = [];

        //resize and fit the group in the strip / column
        if (!this.styleParams.isVertical) {

          //---------------------| STRIPS GALLERY |----------------------//

          if (this.strip.isFull(this.group, this.isLastImage)) {
            //close the current strip
            this.strip.resizeToHeight(this.galleryWidth / this.strip.ratio);
            this.strip.setWidth(this.galleryWidth);
            this.galleryHeight += this.strip.height;
            this.columns[0].addGroups(this.strip.groups);
            this.strips.push(this.strip);

            //open a new strip
            this.strip = new _strip.Strip({
              idx: this.strip.idx + 1,
              container: this.container,
              groupsPerStrip: this.styleParams.groupsPerStrip,
              oneRow: this.styleParams.oneRow,
              gallerySize: this.gallerySize
            });

            //reset the group (this group will be rebuilt)
            this.pointer -= this.group.realItems.length - 1;
            this.groupIdx--;
            continue;
          }

          //add the group to the (current/new) strip
          this.group.setTop(this.galleryHeight);
          this.strip.ratio += this.group.ratio;
          // this.strip.height = Math.min(gallerySize, (galleryWidth / this.strip.ratio));
          this.strip.height = this.galleryWidth / this.strip.ratio;
          this.strip.setWidth(this.galleryWidth);
          this.strip.addGroup(this.group);

          if (this.isLastImage && this.strip.hasGroups) {
            if (this.styleParams.oneRow) {
              this.strip.height = this.container.galleryHeight + (this.styleParams.imageMargin - this.styleParams.galleryMargin);
            } else if (this.gallerySize * 1.5 < this.strip.height) {
              //stretching the this.strip to the full width will make it too high - so make it as high as the gallerySize and not stretch
              this.strip.height = this.gallerySize;
              this.strip.markAsIncomplete();
            }

            this.strip.resizeToHeight(this.strip.height);
            this.galleryHeight += this.strip.height;
            this.columns[0].addGroups(this.strip.groups);
            this.strips.push(this.strip);
          }
        } else {

          //---------------------| COLUMNS GALLERY |----------------------//

          //find the shortest column
          var minCol = this.findShortestColumn(this.columns, this.groups.length - 1);

          //resize the group and images
          this.group.fixItemsRatio(minCol.cubeRatio); //fix last column's items ratio (caused by stretching it to fill the screen)
          this.group.resizeToWidth(minCol.width);
          this.group.round();

          //update the group's position
          this.group.setTop(minCol.height);
          this.group.setLeft(minCol.idx * this.gallerySize);

          //add the image to the column
          minCol.addGroup(this.group);

          //add the image height to the column
          minCol.height += this.group.totalHeight;

          if (this.galleryHeight < minCol.height) {
            this.galleryHeight = minCol.height;
          }
        }

        //set the group visibility

        if (!this.skipVisibilitiesCalc && !this.gotScrollEvent && this.pointer < 10) {
          //until the first scroll event, make sure the first 10 groups are displayed
          this.group.calcVisibilities(true);
        } else {
          this.group.calcVisibilities(this.bounds);
        }

        if (!this.firstGroup) {
          this.firstGroup = this.group;
        }

        this.pointer++;
      }

      if (this.styleParams.forceFullHeight) {
        var stretchRatio = this.container.galleryHeight / this.galleryHeight;
        this.items.map(function (item) {
          item.cubeImages = true;
          item.cubeRatio = item.ratio = item.width / (item.height * stretchRatio);
          item.height *= stretchRatio;
          return item;
        });
        this.groups.map(function (group) {
          group.height *= stretchRatio;
          group.setTop(group.top * stretchRatio);
          group.resizeItems();
          return group;
        });
      }

      //results
      this.lastGroup = this.group;
      this.colWidth = Math.floor(this.galleryWidth / this.numOfCols);
      this.height = this.galleryHeight - (this.styleParams.imageMargin - this.styleParams.galleryMargin) * 2;

      if (!this.skipVisibilitiesCalc) {
        this.calcVisibilities(this.bounds);
      }

      this.ready = true;

      return this.scheme;
    }
  }, {
    key: 'calcVisibilities',
    value: function calcVisibilities(bounds) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(this.columns), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var column = _step2.value;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = (0, _getIterator3.default)(column.groups), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var group = _step3.value;

              group.calcVisibilities(bounds);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return this.scheme;
    }
  }, {
    key: 'lastVisibleItemIdxInHeight',
    value: function lastVisibleItemIdxInHeight(height) {
      for (var i = this.items.length - 1; i >= 0; i--) {
        var item = this.items[i];
        var isVisible = item.offset.top < height;
        if (isVisible) {
          return i;
        }
      }
      return this.items.length - 1;
    }
  }, {
    key: 'lastVisibleItemIdx',
    value: function lastVisibleItemIdx() {
      //the item must be visible and about the show more button
      return this.lastVisibleItemIdxInHeight(this.container.galleryHeight - 100);
    }
  }, {
    key: 'findNeighborItem',
    value: function findNeighborItem(itemIdx, dir) {
      var _this2 = this;

      var currentItem = this.layoutItems[itemIdx];

      var neighborItem = void 0;

      var findClosestItem = function findClosestItem(currentItemX, currentItemY, condition) {

        var minDistance = null;
        var minDistanceItem = {};

        var itemY = void 0;
        var itemX = void 0;
        var distance = void 0;

        // each(slice(this.layoutItems, itemIdx - 50, itemIdx + 50), (item) => {
        _this2.layoutItems.forEach(function (item) {
          itemY = item.offset.top + item.height / 2;
          itemX = item.offset.left + item.width / 2;
          distance = Math.sqrt(Math.pow(itemY - currentItemY, 2) + Math.pow(itemX - currentItemX, 2));
          if ((minDistance === null || distance > 0 && distance < minDistance) && condition(currentItemX, currentItemY, itemX, itemY)) {
            minDistance = distance;
            minDistanceItem = item;
          }
        });
        return minDistanceItem;
      };

      switch (dir) {
        case 'up':
          neighborItem = findClosestItem(currentItem.offset.left + currentItem.width / 2, currentItem.offset.top, function (curX, curY, itmX, itmY) {
            return itmY < curY;
          });
          break;

        case 'left':
          neighborItem = findClosestItem(currentItem.offset.left, currentItem.offset.top + currentItem.height / 2, function (curX, curY, itmX) {
            return itmX < curX;
          });
          break;

        case 'down':
          neighborItem = findClosestItem(currentItem.offset.left + currentItem.width / 2, currentItem.offset.bottom, function (curX, curY, itmX, itmY) {
            return itmY > curY;
          });
          break;

        default:
        case 'right':
          neighborItem = findClosestItem(currentItem.offset.right, currentItem.offset.top + currentItem.height / 2, function (curX, curY, itmX) {
            return itmX > curX;
          });
          break;

      }

      if (neighborItem.idx >= 0) {
        return neighborItem.idx;
      } else {
        console.warn('Could not find offset for itemIdx', itemIdx, dir);
        return itemIdx; //stay on the same item
      }
    }
  }, {
    key: 'getMaxGroupSize',
    value: function getMaxGroupSize() {
      var _maxGroupSize = 1;
      try {
        var groupTypes = typeof this.styleParams.groupTypes === 'string' && this.styleParams.groupTypes.length > 0 ? this.styleParams.groupTypes.split(',') : this.styleParams.groupTypes;
        _maxGroupSize = groupTypes.reduce(function (curSize, groupType) {
          return Math.max(curSize, parseInt(groupType));
        }, 1);
        _maxGroupSize = Math.min(_maxGroupSize, this.styleParams.groupSize);
      } catch (e) {
        console.error('couldn\'t calculate max group size - returing 3 (?)', e);
        _maxGroupSize = 3;
      }
      return _maxGroupSize;
    }
  }, {
    key: 'isLastImage',
    get: function get() {
      return !this.srcItems[this.pointer + 1];
    }
  }, {
    key: 'isLastImages',
    get: function get() {
      if (this.styleParams.layoutsVersion > 1) {
        //layouts version 2+
        return !this.srcItems[this.pointer + 1];
      } else {
        //Backwards compatibility
        return !this.srcItems[this.pointer + 3];
      }
    }
  }, {
    key: 'imagesLeft',
    get: function get() {
      return this.srcItems.length - this.pointer - 1;
    }
  }, {
    key: 'items',
    get: function get() {
      return this.layoutItems;
    }
  }, {
    key: 'scheme',
    get: function get() {
      return {
        items: this.items.map(function (item) {
          return item.scheme;
        }),
        groups: this.groups.map(function (group) {
          return group.scheme;
        }),
        strips: this.strips.map(function (strip) {
          return strip.scheme;
        }),
        columns: this.columns.map(function (column) {
          return column.scheme;
        }),
        height: this.height
      };
    }
  }]);
  return Layouter;
}();

exports.default = Layouter;
//# sourceMappingURL=layouter.js.map

/***/ }),
/* 83 */
/*!****************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \****************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ 19) && !__webpack_require__(/*! ./_fails */ 34)(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 84)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 84 */
/*!************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_dom-create.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 33);
var document = __webpack_require__(/*! ./_global */ 11).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 85 */
/*!**********************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \**********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ 20);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 27);
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 120)(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 55)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 86 */
/*!*********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_iobject.js ***!
  \*********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ 52);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 87 */
/*!***********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_to-object.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ 53);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 88 */
/*!*****************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*****************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ 124);
var global = __webpack_require__(/*! ./_global */ 11);
var hide = __webpack_require__(/*! ./_hide */ 26);
var Iterators = __webpack_require__(/*! ./_iterators */ 46);
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ 13)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 89 */
/*!*************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_iter-define.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ 43);
var $export = __webpack_require__(/*! ./_export */ 40);
var redefine = __webpack_require__(/*! ./_redefine */ 90);
var hide = __webpack_require__(/*! ./_hide */ 26);
var Iterators = __webpack_require__(/*! ./_iterators */ 46);
var $iterCreate = __webpack_require__(/*! ./_iter-create */ 127);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 60);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 130);
var ITERATOR = __webpack_require__(/*! ./_wks */ 13)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 90 */
/*!**********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_redefine.js ***!
  \**********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ 26);


/***/ }),
/* 91 */
/*!***************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_object-create.js ***!
  \***************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ 32);
var dPs = __webpack_require__(/*! ./_object-dps */ 128);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 57);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 55)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ 84)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ 129).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 92 */
/*!********************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ 131)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ 89)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 93 */
/*!*************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_object-gopn.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 85);
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ 57).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 94 */
/*!**************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/dist/src/group.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = undefined;

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 59);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 62);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 21);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 22);

var _createClass3 = _interopRequireDefault(_createClass2);

var _item = __webpack_require__(/*! ./item.js */ 63);

var _utils = __webpack_require__(/*! ./utils */ 61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GROUP_TYPES_BY_RATIOS_V = {
  lll: '1,2h',
  llp: '1,3r',
  lpl: '1,2h',
  pll: '1,2h,3l',
  lpp: '1,2h,3r,3h',
  plp: '1,2h,3l,3r,3h',
  ppl: '1,2h,3l,3h',
  ppp: '1,2h,3l,3r,3h'
};

var GROUP_TYPES_BY_RATIOS_H = {
  lll: '1,2v,3t,3b,3v',
  llp: '1,2v,3t,3v',
  lpl: '1,2v,3t,3b,3v',
  pll: '1,2v,3b,3v',
  lpp: '1,2v,3t',
  plp: '1,2v',
  ppl: '1,3b',
  ppp: '1,2h'
};

var GROUP_SIZES_BY_MAX_SIZE = {
  1: [[1]],
  2: [[1], [1, 2], [2]],
  3: [[1], [1, 2], [1, 2, 3], [2, 3], [3]]
};

var Group = exports.Group = function () {
  function Group(config) {
    (0, _classCallCheck3.default)(this, Group);

    this.idx = config.idx;
    this.stripIdx = config.stripIdx;
    this.inStripIdx = config.inStripIdx;
    this.items = config.items;
    this.top = config.top;
    this.showAllItems = config.showAllItems;
    this.isLastItems = config.isLastItems;
    this.dummyItems = [];
    this.gallerySize = config.gallerySize;

    if (config.styleParams) {
      var styleParams = config.styleParams;

      this.oneRow = styleParams.oneRow;
      this.cubeType = styleParams.cubeType;
      this.cubeImages = styleParams.cubeImages;
      this.isVertical = styleParams.isVertical;
      this.minItemSize = styleParams.minItemSize;
      this.collageAmount = styleParams.collageAmount;
      this.collageDensity = styleParams.collageDensity;
      this.groupTypes = styleParams.groupTypes;
      this.rotatingGroupTypes = styleParams.rotatingGroupTypes;
      this.chooseBestGroup = styleParams.chooseBestGroup;
      this.layoutsVersion = styleParams.layoutsVersion;
      this.externalInfoHeight = styleParams.externalInfoHeight;
      this.imageMargin = styleParams.imageMargin;
    }

    this.visible = true;
    this.rendered = true;
    this.required = true;

    //prepare the group
    var forcedGroupSize = this.items.length;

    //todo - check if minItem size is really working
    while (!this.isWithinMinItemSize && forcedGroupSize > 0) {
      this.placeItems(forcedGroupSize);
      this.resize();
      forcedGroupSize--;
    }
  }

  (0, _createClass3.default)(Group, [{
    key: 'resize',
    value: function resize() {
      if (this.isVertical) {
        this.resizeToWidth(this.gallerySize);
      } else {
        this.resizeToHeight(this.gallerySize);
      }
      this.setLeft(this.left);
      this.setTop(this.top);
    }
  }, {
    key: 'safeGetItem',
    value: function safeGetItem(idx) {
      if (this.items[idx]) {
        return this.items[idx];
      } else if (this.dummyItems[idx]) {
        return this.dummyItems[idx];
      } else {
        var item = new _item.Item((0, _extends3.default)({}, this.items[this.items.length - 1].config));

        // const item = {...(this.items[this.items.length - 1])};
        // item.id += 'dummy';
        item.idx = this.idx * (idx + 1) + 1;
        item.type = 'dummy';
        this.dummyItems[idx] = item;
        return item;
      }
    }
  }, {
    key: 'fixItemsRatio',
    value: function fixItemsRatio(ratio) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {

        for (var _iterator = (0, _getIterator3.default)(this.items), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          item.cubeRatio = ratio;
          item.resize(1);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'round',
    value: function round() {

      //round all sizes to full pixels

      if (this.isLastGroup && !this.oneRow) {
        this.width = this.stripWidth - this.left;
      } else {
        this.width = Math.round(this.width);
      }
      this.height = Math.round(this.height);

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(this.items), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          item.width = Math.round(item.width);
          item.height = Math.round(item.height);
          item.group = {
            width: this.width,
            height: this.height
          };
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var m = this.imageMargin * 2;

      switch (this.type) {
        default:
        case '1':
          this.safeGetItem(0).width = this.width - m;
          this.safeGetItem(0).height = this.height - m;
          break;
        case '2v':
          this.safeGetItem(0).width = this.safeGetItem(1).width = this.width - m;
          this.safeGetItem(0).height = this.height - this.safeGetItem(1).height - 2 * m;
          break;
        case '2h':
          this.safeGetItem(0).height = this.safeGetItem(1).height = this.height - m;
          this.safeGetItem(0).width = this.width - this.safeGetItem(1).width - 2 * m;
          break;
        case '3t':
          this.safeGetItem(0).width = this.width - m;
          this.safeGetItem(0).height = this.height - this.safeGetItem(1).height - 2 * m;
          this.safeGetItem(1).width = this.width - this.safeGetItem(2).width - 2 * m;
          this.safeGetItem(2).height = this.safeGetItem(1).height;
          break;
        case '3b':
          this.safeGetItem(0).width = this.width - this.safeGetItem(1).width - 2 * m;
          this.safeGetItem(1).height = this.safeGetItem(0).height;
          this.safeGetItem(2).height = this.height - this.safeGetItem(1).height - 2 * m;
          this.safeGetItem(2).width = this.width - m;
          break;
        case '3l':
          this.safeGetItem(1).height = this.height - this.safeGetItem(2).height - 2 * m;
          this.safeGetItem(2).width = this.safeGetItem(1).width;
          this.safeGetItem(0).width = this.width - this.safeGetItem(1).width - 2 * m;
          this.safeGetItem(0).height = this.height - m;
          break;
        case '3r':
          this.safeGetItem(0).height = this.height - this.safeGetItem(1).height - 2 * m;
          this.safeGetItem(1).width = this.safeGetItem(0).width;
          this.safeGetItem(2).width = this.width - this.safeGetItem(1).width - 2 * m;
          this.safeGetItem(2).height = this.height - m;
          break;
        case '3v':
          this.safeGetItem(0).width = this.width - m;
          this.safeGetItem(1).width = this.width - m;
          this.safeGetItem(2).width = this.width - m;
          this.safeGetItem(2).height = this.height - this.safeGetItem(0).height - this.safeGetItem(1).height - 3 * m;
          break;
        case '3h':
          this.safeGetItem(0).height = this.height - m;
          this.safeGetItem(1).height = this.height - m;
          this.safeGetItem(2).height = this.height - m;
          this.safeGetItem(2).width = this.width - this.safeGetItem(0).width - this.safeGetItem(1).width - 3 * m;
          break;
      }
    }
  }, {
    key: 'getGroupType',
    value: function getGroupType(forcedGroupSize) {

      //---------| Override with specifically defined rotating group types (ignores everything else)
      if (this.rotatingGroupTypes) {
        var groupTypesArr = String(this.rotatingGroupTypes).split(',');
        return groupTypesArr[this.idx % groupTypesArr.length];

        // } else if (this.isLastItems) {
        //   return this.groupTypes.split(',')[0] || '1';
      } else {
        //isVertical - is the gallery vertical (pinterest style) or horizontal (flickr style)

        //---------| Find the best groupType for each ratios case
        //optional types:
        //  1   => single photo
        //  2v  => 2 photos one above the other
        //  2h  => 2 photos one alongside the other
        //  3b  => 3 photos - one large at the bottom and two small on top, one alongside the other
        //  3t  => 3 photos - one large on top and two small at the bottom, one alongside the other
        //  3l  => 3 photos - one large on the left and two small on the right, one above the other
        //  3r  => 3 photos - one large on the right and two small on the left, one above the other

        //define optional ratios for each type:
        //  1   => all
        //  2v  => lll,llp,ppp     (horizontal only)
        //  2h  => ppp,ppl,lll     (vertical only)
        //  3b  => lll,lpl,pll,ppl (horizontal only)
        //  3t  => lll,lpl,llp,lpp (horizontal only)
        //  3l  => ppp,plp,ppl,pll (vertical only)
        //  3r  => ppp,plp,lpp,llp (vertical only)

        var isV = this.isVertical;
        var optionalTypes = void 0; //optional groupTypes (separated by ,). 1 is always optional

        if (this.chooseBestGroup) {

          //map the group to l=landscape and p=portrait
          //create a string to state the images group's type
          var ratios = this.items.map(function (item) {
            return item.orientation.slice(0, 1);
          }).join('');
          optionalTypes = (isV ? GROUP_TYPES_BY_RATIOS_V : GROUP_TYPES_BY_RATIOS_H)[ratios];
        } else if (this.items.length === 3 || forcedGroupSize === 3) {
          optionalTypes = isV ? '1,2h,3l,3r,3h' : '1,2v,3t,3b,3v';
        }

        if (this.items.length === 2 || forcedGroupSize === 2) {
          optionalTypes = isV ? '1,2h' : '1,2v';
        }
        if (this.items.length === 1 || forcedGroupSize === 1) {
          optionalTypes = '1';
        }

        var groupTypes = optionalTypes.length > 0 ? optionalTypes.split(',') : [];

        //---------| Override with specifically defined group types
        if (this.groupTypes) {

          // let groupTypesArr = union(['1'], this.groupTypes.split(','));
          var _groupTypesArr = this.groupTypes.split(',');

          if (_groupTypesArr.length > 1) {
            groupTypes = groupTypes.filter(function (gt) {
              return _groupTypesArr.indexOf(gt) >= 0;
            });

            if (groupTypes.length === 0) {
              //there is no match between required group types and the optional ones - use
              groupTypes = ['1'];
            }
          } else {
            groupTypes = _groupTypesArr;
          }
        }

        //---------| Calc collage density
        if (this.layoutsVersion > 1 && this.collageDensity >= 0) {
          //th new calculation of the collage amount

          var collageDensity = this.collageDensity;

          //use the collage amount to determine the optional groupsize
          var maxGroupType = parseInt(groupTypes[groupTypes.length - 1]);
          var optionalGroupSizes = GROUP_SIZES_BY_MAX_SIZE[maxGroupType];
          var targetGroupSizes = optionalGroupSizes[Math.floor(collageDensity * (optionalGroupSizes.length - 1))];
          // seed += ((collageDensity * 1.5) - 0.75) * numOfOptions;

          groupTypes = groupTypes.filter(function (groupType) {
            return targetGroupSizes.indexOf(parseInt(groupType)) >= 0;
          });

          if (groupTypes.length === 0) {
            groupTypes = ['1'];
          }
        }

        var seed = this.calculateRandomSeed(groupTypes.length);

        //---------| Final group type to render according to:
        // - the number of options
        // - the collageAmount (if 0 - always renders 1 image, if 1 always renders the max amount)
        // - random seed (determined by the hash)
        return groupTypes[seed] || '1';
      }
    }
  }, {
    key: 'calculateRandomSeed',
    value: function calculateRandomSeed(numOfOptions) {
      var seed = void 0;
      if (this.isVertical) {
        //vertical galleries random is not relevant (previous group is in another column)
        seed = _utils.utils.hashToInt(this.items[0].hash) % numOfOptions;
      } else {
        seed = (this.inStripIdx + this.stripIdx) % numOfOptions;
      }

      if (this.layoutsVersion === 1 && this.collageAmount >= 0) {
        //backwards compatibility
        seed += (this.collageAmount - 0.5) * numOfOptions;
      }

      return Math.round(Math.min(Math.max(0, seed), numOfOptions - 1));
    }
  }, {
    key: 'placeItems',
    value: function placeItems(forcedGroupSize) {

      this.type = this.getGroupType(forcedGroupSize);

      //---------| Render the images by the groupType
      var items = [];
      var item = void 0;
      var w = 0;
      var h = 0;

      switch (this.type) {
        default:
        case '1':

          item = this.safeGetItem(0);
          item.pinToCorner('top-left');
          items.push(item);
          w = item.width;
          h = item.height;

          break;

        case '2v':

          item = this.safeGetItem(0);
          item.pinToCorner('top-left');
          items.push(item);
          w = item.width;
          h = item.height;

          item = this.safeGetItem(1);
          item.pinToCorner('bottom-left');
          item.resize(w / item.width);
          h += item.height;
          items.push(item);

          break;

        case '2h':

          item = this.safeGetItem(0);
          item.pinToCorner('top-left');
          item.innerOffset = [0, 0];
          items.push(item);
          w = item.width;
          h = item.height;

          item = this.safeGetItem(1);
          item.pinToCorner('top-right');
          item.innerOffset = [0, 0];
          item.resize(h / item.height);
          w += item.width;
          items.push(item);

          break;

        case '3b':

          item = this.safeGetItem(0);
          item.pinToCorner('top-left');
          items.push(item);
          w = item.width;
          h = item.height;

          item = this.safeGetItem(1);
          item.pinToCorner('top-right');
          item.resize(h / item.height);
          w += item.width;
          items.push(item);

          item = this.safeGetItem(2);
          item.pinToCorner('bottom-left');
          item.resize(w / item.width);
          h += item.height;
          items.push(item);

          break;

        case '3t':

          item = this.safeGetItem(1);
          item.pinToCorner('bottom-left');
          items.push(item);
          w = item.width;
          h = item.height;

          item = this.safeGetItem(2);
          item.pinToCorner('bottom-right');
          item.resize(h / item.height);
          w += item.width;
          items.push(item);

          item = this.safeGetItem(0);
          item.pinToCorner('top-left');
          item.resize(w / item.width);
          h += item.height;
          items = [item].concat(items);

          break;

        case '3r':

          item = this.safeGetItem(0);
          item.pinToCorner('top-left');
          items.push(item);
          w = item.width;
          h = item.height;

          item = this.safeGetItem(1);
          item.pinToCorner('bottom-left');
          item.resize(w / item.width);
          h += item.height;
          items.push(item);

          item = this.safeGetItem(2);
          item.pinToCorner('top-right');
          item.resize(h / item.height);
          w += item.width;
          items.push(item);

          break;

        case '3l':

          item = this.safeGetItem(1);
          item.pinToCorner('top-right');
          items.push(item);
          w = item.width;
          h = item.height;

          item = this.safeGetItem(2);
          item.pinToCorner('bottom-right');
          item.resize(w / item.width);
          h += item.height;
          items.push(item);

          item = this.safeGetItem(0);
          item.pinToCorner('top-left');
          item.resize(h / item.height);
          w += item.width;
          items = [item].concat(items);

          break;

        case '3v':

          item = this.safeGetItem(0);
          item.pinToCorner('top-left');
          item.setPosition('relative');
          items.push(item);
          w = item.width;
          h = item.height;

          item = this.safeGetItem(2);
          item.pinToCorner('bottom-left');
          item.setPosition('relative');
          item.resize(w / item.width);
          h += item.height;
          items.push(item);

          //the middle item must be last to position it in the middle (h must be full height)
          item = this.safeGetItem(1);
          item.setPosition('relative');
          item.resize(w / item.width);
          h += item.height;
          item.pinToCorner('top', items[0]);
          items = [items[0], item, items[1]];

          break;

        case '3h':

          item = this.safeGetItem(0);
          item.pinToCorner('top-left');
          item.setPosition('relative');
          items.push(item);
          w = item.width;
          h = item.height;

          item = this.safeGetItem(2);
          item.pinToCorner('top-right');
          item.setPosition('relative');
          item.resize(h / item.height);
          w += item.width;
          items.push(item);

          //the middle item must be last to position it in the middle (w must be full width)
          item = this.safeGetItem(1);
          item.setPosition('relative');
          item.resize(h / item.height);
          w += item.width;
          item.pinToCorner('left', items[0]);
          items = [items[0], item, items[1]];

          break;
      }

      this.width = w;
      this.height = h;
      this.items = items;
      this.placed = true;
    }
  }, {
    key: 'resizeToHeight',
    value: function resizeToHeight(height) {
      this.height = height;
      this.width = this.getWidthByHeight(height);
      this.resizeItems();
    }
  }, {
    key: 'resizeToWidth',
    value: function resizeToWidth(width) {
      this.width = width;
      this.height = this.getHeightByWidth(width);

      this.resizeItems();
    }
  }, {
    key: 'resizeItems',
    value: function resizeItems() {
      var _this = this;

      var items = ['3b', '3r'].indexOf(this.type) >= 0 ? this.items.slice().reverse() : this.items;
      items.forEach(function (item, i) {
        item.resize(_this.getItemDimensions(items, i));
        item.group = {
          top: _this.top,
          left: _this.left,
          width: _this.width,
          height: _this.height
        };
        item.groupOffset = {
          bottom: _this.top + _this.height,
          right: _this.left + _this.width
        };
      });
    }
  }, {
    key: 'getItemDimensions',
    value: function getItemDimensions(items, idx) {
      var m = this.imageMargin * 2;
      switch (this.type) {
        default:
        case '1':
        case '2v':
        case '3v':
          {
            var w = this.width - m;
            return {
              width: w
            };
          }
        case '2h':
        case '3h':
          {
            var h = this.height - m;
            return {
              height: h
            };
          }
        case '3t':
        case '3b':
          if (idx === 0) {
            var _w = this.width - m;
            return {
              width: _w
            };
          } else {
            var _h = this.height - items[0].height - 2 * m;
            return {
              height: _h
            };
          }
        case '3r':
        case '3l':
          if (idx === 0) {
            var _h2 = this.height - m;
            return {
              height: _h2
            };
          } else {
            var _w2 = this.width - items[0].width - 2 * m;
            return {
              width: _w2
            };
          }
      }
    }
  }, {
    key: 'getHeightByWidth',
    value: function getHeightByWidth(W) {
      var Rg = 1;
      var Rm = 1;
      var M = this.imageMargin * 2;
      var R = this.items.map(function (item) {
        return item.width / item.height;
      });
      switch (this.type) {
        // ---------------------------------
        // GENERAL FORMULA:
        // ---------------------------------
        // Rg = Group ratio [layout specific calculation]
        // M = margin space between items ( = margin around item * 2)
        // Rm = Margin ratio [layout specific calculation]
        // ---------------------------------
        // | H = W * R + M * Rm |
        // ---------------------------------
        //    const H = W * Rg + M * (Vi - Hi * Rg);

        default:
        case '1':
          Rg = 1 / R[0];
          Rm = 1 - Rg;
          break;
        case '2h':
          Rg = 1 / (R[0] + R[1]);
          Rm = 1 - 2 * Rg;
          break;
        case '2v':
          Rg = 1 / R[0] + 1 / R[1];
          Rm = 2 - Rg;
          break;
        case '3h':
          Rg = 1 / (R[0] + R[1] + R[2]);
          Rm = 1 - 3 * Rg;
          break;
        case '3v':
          Rg = 1 / R[0] + 1 / R[1] + 1 / R[2];
          Rm = 3 - Rg;
          break;
        case '3t':
          Rg = 1 / (R[2] + R[1]) + 1 / R[0];
          Rm = 2 - 2 / (R[2] + R[1]) + 1 / R[0];
          break;
        case '3b':
          Rg = 1 / (R[0] + R[1]) + 1 / R[2];
          Rm = 2 - 2 / (R[0] + R[1]) + 1 / R[2];
          break;
        case '3l':
          Rg = (R[1] + R[2]) / (R[0] * R[1] + R[1] * R[2] + R[0] * R[2]);
          Rm = 2 - Rg * (2 + R[0]);
          break;
        case '3r':
          Rg = (R[0] + R[1]) / (R[0] * R[1] + R[1] * R[2] + R[0] * R[2]);
          Rm = 2 - Rg * (2 + R[2]);
          break;
      }
      var H = W * Rg + M * Rm;

      return H;
    }
  }, {
    key: 'getWidthByHeight',
    value: function getWidthByHeight(H) {
      var Rg = 1;
      var Rm = 1;
      var M = this.imageMargin * 2;
      var R = this.items.map(function (item) {
        return item.width / item.height;
      });
      switch (this.type) {
        // ---------------------------------
        // GENERAL FORMULA:
        // ---------------------------------
        // Rh = Group ratio [layout specific calculation]
        // M = margin space between items ( = margin around item * 2)
        // Rm = Margin ratio [layout specific calculation]
        // ---------------------------------
        // | W = H * Rg + M * Rm |
        // ---------------------------------
        default:
        case '1':
          Rg = R[0];
          Rm = 1 - Rg;
          break;
        case '2h':
          Rg = R[0] + R[1];
          Rm = 2 - Rg;
          break;
        case '2v':
          Rg = 1 / (1 / R[0] + 1 / R[1]);
          Rm = 1 - 2 * Rg;
          break;
        case '3h':
          Rg = R[0] + R[1] + R[2];
          Rm = 3 - Rg;
          break;
        case '3v':
          Rg = 1 / (1 / R[0] + 1 / R[1] + 1 / R[2]);
          Rm = 1 - 3 * Rg;
          break;
        case '3t':
          Rg = 1 / (1 / (R[2] + R[1]) + 1 / R[0]);
          Rm = (2 / (R[2] + R[1]) + 1 / R[0] - 2) * Rg;
          break;
        case '3b':
          Rg = 1 / (1 / (R[0] + R[1]) + 1 / R[2]);
          Rm = (2 / (R[0] + R[1]) + 1 / R[2] - 2) * Rg;
          break;
        case '3l':
          Rg = (R[0] * R[1] + R[1] * R[2] + R[0] * R[2]) / (R[1] + R[2]);
          Rm = 2 + R[0] - 2 * Rg;
          break;
        case '3r':
          Rg = (R[0] * R[1] + R[1] * R[2] + R[0] * R[2]) / (R[0] + R[1]);
          Rm = 2 + R[2] - 2 * Rg;
          break;
      }
      var W = H * Rg + M * Rm;

      return W;
    }
  }, {
    key: 'setTop',
    value: function setTop(top) {
      this.top = top || 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(this.items), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = _step3.value;

          item.groupOffset = {
            top: top,
            bottom: top + this.height
          };
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: 'setLeft',
    value: function setLeft(left) {
      this.left = left || 0;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = (0, _getIterator3.default)(this.items), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var item = _step4.value;

          item.groupOffset = {
            left: left,
            right: left + this.width
          };
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: 'calcVisibilities',
    value: function calcVisibilities(bounds) {
      if (bounds === true || this.showAllItems === true) {
        this.onscreen = this.visible = this.rendered = this.required = true;
      } else if (this.oneRow) {
        this.onscreen = this.right >= bounds.onscreenTop && this.left <= bounds.onscreenBottom;
        this.visible = this.right >= bounds.visibleTop && this.left <= bounds.visibleBottom;
        this.rendered = this.right >= bounds.renderedTop && this.left <= bounds.renderedBottom;
        this.required = this.right >= bounds.requiredTop && this.left <= bounds.requiredBottom;
      } else {
        this.onscreen = this.bottom >= bounds.onscreenTop && this.top <= bounds.onscreenBottom;
        this.visible = this.bottom >= bounds.visibleTop && this.top <= bounds.visibleBottom;
        this.rendered = this.bottom >= bounds.renderedTop && this.top <= bounds.renderedBottom;
        this.required = this.bottom >= bounds.requiredTop && this.top <= bounds.requiredBottom;
      }
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].visibility = {
          onscreen: this.onscreen,
          visible: this.visible,
          rendered: this.rendered,
          required: this.required
        };
      }
    }
  }, {
    key: 'id',
    get: function get() {
      return 'g' + this.idx + '_' + (this.items[0] || {}).id;
    }
  }, {
    key: 'ratio',
    get: function get() {
      var w = this.width;
      var h = this.height;
      return w / h;
    }
  }, {
    key: 'totalHeight',
    get: function get() {
      return this.height + (this.externalInfoHeight || 0);
    }
  }, {
    key: 'bottom',
    get: function get() {
      return this.top + this.height;
    }
  }, {
    key: 'right',
    get: function get() {
      return this.left + this.width;
    }
  }, {
    key: 'items',
    set: function set(items) {
      this._items = items;
    },
    get: function get() {
      return this._items;
    }
  }, {
    key: 'realItems',
    get: function get() {
      return this._items.filter(function (item) {
        return item.type !== 'dummy';
      });
    }
  }, {
    key: 'isWithinMinItemSize',
    get: function get() {
      var _this2 = this;

      if (this.items.length === 0 || !this.placed) {
        return false;
      }
      if (this.items.length === 1) {
        return true;
      } else {
        return this.items.reduce(function (i, item) {
          var isInSize = Math.min(item.width, item.height) >= _this2.minItemSize;
          return i && isInSize;
        }, true);
      }
    }
  }, {
    key: 'scheme',
    get: function get() {
      return {
        id: this.id,
        idx: this.idx,
        stripIdx: this.stripIdx,
        inStripIdx: this.inStripIdx,
        isLastGroup: this.isLastGroup,
        items: this.items.map(function (item) {
          return item.scheme;
        }),
        type: this.type,
        width: this.width,
        height: this.height,
        totalHeight: this.totalHeight,
        ratio: this.ratio,
        top: this.top,
        left: this.left,
        right: this.right,
        bottom: this.bottom,
        visible: this.visible,
        rendered: this.rendered,
        required: this.required
      };
    }
  }]);
  return Group;
}();
//# sourceMappingURL=group.js.map

/***/ }),
/* 95 */
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ 17) && !__webpack_require__(/*! ./_fails */ 31)(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 96)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 96 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_dom-create.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 30);
var document = __webpack_require__(/*! ./_global */ 15).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 97 */
/*!************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ 23);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 24);
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 165)(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 71)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 98 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iobject.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ 68);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 99 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-length.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ 70);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 100 */
/*!***********************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 167), __esModule: true };

/***/ }),
/* 101 */
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ 171)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ 102)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 102 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-define.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ 48);
var $export = __webpack_require__(/*! ./_export */ 14);
var redefine = __webpack_require__(/*! ./_redefine */ 103);
var hide = __webpack_require__(/*! ./_hide */ 28);
var Iterators = __webpack_require__(/*! ./_iterators */ 37);
var $iterCreate = __webpack_require__(/*! ./_iter-create */ 172);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 77);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 104);
var ITERATOR = __webpack_require__(/*! ./_wks */ 8)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 103 */
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_redefine.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ 28);


/***/ }),
/* 104 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gpo.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ 23);
var toObject = __webpack_require__(/*! ./_to-object */ 36);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 71)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 105 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gopn.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 97);
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ 73).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 106 */
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 107 */
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 108 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-sap.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ 14);
var core = __webpack_require__(/*! ./_core */ 6);
var fails = __webpack_require__(/*! ./_fails */ 31);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 109 */
/*!******************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(/*! ../core-js/array/from */ 208);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 110 */
/*!**************************************************!*\
  !*** ../node_modules/component-indexof/index.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),
/* 111 */
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ 10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(/*! ./components/App */ 112);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),
/* 112 */
/*!*********************************!*\
  !*** ./components/App/index.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(/*! ./App */ 113);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_App).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 113 */
/*!*******************************!*\
  !*** ./components/App/App.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _proGalleryLayouter = __webpack_require__(/*! pro-gallery-layouter */ 114);

var _SideBar = __webpack_require__(/*! ../SideBar */ 156);

var _SideBar2 = _interopRequireDefault(_SideBar);

var _Gallery = __webpack_require__(/*! ../Gallery */ 219);

var _Gallery2 = _interopRequireDefault(_Gallery);

var _Sample = __webpack_require__(/*! ../Sample */ 222);

var _Sample2 = _interopRequireDefault(_Sample);

var _images = __webpack_require__(/*! ../../constants/images */ 231);

var _images2 = _interopRequireDefault(_images);

var _getScrollbarSize = __webpack_require__(/*! ./get-scrollbar-size */ 232);

var _getScrollbarSize2 = _interopRequireDefault(_getScrollbarSize);

__webpack_require__(/*! ./App.scss */ 233);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getContainerSize = function getContainerSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.toggleSidebar = _this.toggleSidebar.bind(_this);
    _this.resize = _this.resize.bind(_this);
    _this.handleStylesChange = _this.handleStylesChange.bind(_this);

    _this.defaultStyles = {
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

    _this.state = {
      sampleSize: 100,
      styles: Object.assign({}, _this.defaultStyles, _this.getUrlStyles()),
      sidebarWidth: 500,
      showSample: false,
      // Needed for browsers with static scrollbars
      scrollbarSize: (0, _getScrollbarSize2.default)(),
      container: getContainerSize()
    };
    _this.setUrlStyles(_this.state.styles);

    window.addEventListener('resize', _this.resize);
    return _this;
  }

  _createClass(App, [{
    key: 'getUrlStyles',
    value: function getUrlStyles() {
      var strToVal = function strToVal(str) {
        if (parseInt(str) === Number(str)) {
          return Number(str);
        } else if (str === 'true') {
          return true;
        } else if (str === 'false') {
          return false;
        } else {
          return decodeURIComponent(str);
        }
      };
      var search = location.search.substring(1);
      var stylesArr = search.split('&').map(function (s) {
        return s.split('=');
      });
      var styles = {};
      stylesArr.forEach(function (style) {
        return styles[style[0]] = strToVal(style[1]);
      });
      return styles;
      // const styles = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    }
  }, {
    key: 'setUrlStyles',
    value: function setUrlStyles(styles) {
      var str = Object.entries(styles).map(function (style) {
        return style.map(function (i) {
          return encodeURIComponent(i);
        }).join('=');
      }).join('&');
      history.pushState(styles, "", location.pathname + '?' + str);
    }
  }, {
    key: 'toggleSidebar',
    value: function toggleSidebar() {
      this.setState({
        sidebarWidth: !this.state.sidebarWidth * 500 //toggles between 500 and 0
      }, function () {
        window.dispatchEvent(new Event('resize')); //trigger resize event (remove when renderer accepts props)
      });
    }
  }, {
    key: 'resize',
    value: function resize() {
      this.setState({
        container: getContainerSize()
      });
    }
  }, {
    key: 'handleStylesChange',
    value: function handleStylesChange(newStyles) {
      var styles = Object.assign({}, newStyles, { at: Date.now() });
      console.log('Setting URL styles', styles);
      this.setUrlStyles(styles);
      console.log('Setting state styles', styles);
      this.setState({ styles: styles });
    }
  }, {
    key: 'getLayoutParams',
    value: function getLayoutParams() {
      var _state = this.state,
          styles = _state.styles,
          container = _state.container,
          sidebarWidth = _state.sidebarWidth,
          scrollbarSize = _state.scrollbarSize;


      return {
        items: _images2.default,
        container: {
          height: container.height - scrollbarSize,
          width: container.width - sidebarWidth - scrollbarSize
        },
        styleParams: styles
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state2 = this.state,
          styles = _state2.styles,
          container = _state2.container,
          sidebarWidth = _state2.sidebarWidth;

      var layoutParams = this.getLayoutParams();
      console.time('Create layout time: ');
      var layout = (0, _proGalleryLayouter.createLayout)(layoutParams);
      console.log("Created a layout!", layout, layoutParams);
      console.timeEnd('Create layout time: ');

      return layout ? _react2.default.createElement(
        'div',
        { ref: function ref(_ref) {
            _this2.root = _ref;
          }, className: 'playground-container' },
        _react2.default.createElement(_Sample2.default, {
          styleParams: this.state.styles,
          visible: this.state.showSample,
          toggleSample: function toggleSample() {
            return _this2.setState({ showSample: !_this2.state.showSample });
          }
        }),
        sidebarWidth ? _react2.default.createElement(_SideBar2.default, {
          container: {
            width: sidebarWidth,
            height: container.height
          },
          styles: styles,
          handleStylesChange: this.handleStylesChange,
          toggleSample: function toggleSample() {
            return _this2.setState({ showSample: !_this2.state.showSample });
          }
        }) : null,
        _react2.default.createElement('i', { className: 'toggle-settings glyphicon glyphicon-menu-right ' + (sidebarWidth ? '' : ' closed '), onClick: this.toggleSidebar }),
        _react2.default.createElement(
          'div',
          {
            className: 'playground-gallery',
            style: { width: container.width - sidebarWidth + 'px' }
          },
          _react2.default.createElement(_Gallery2.default, { layout: layout })
        )
      ) : _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Layout creation failed!!'
        ),
        _react2.default.createElement(
          'ul',
          null,
          Object.keys(layoutParams.styleParams).map(function (param) {
            return _react2.default.createElement(
              'li',
              null,
              param,
              ': ',
              layoutParams.styleParams[param]
            );
          })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 114 */
/*!**************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/dist/src/index.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _layouter = __webpack_require__(/*! ./layouter */ 82);

var _layouter2 = _interopRequireDefault(_layouter);

var _item = __webpack_require__(/*! ./item */ 63);

var _group = __webpack_require__(/*! ./group */ 94);

var _createLayout = __webpack_require__(/*! ./create-layout */ 155);

var _createLayout2 = _interopRequireDefault(_createLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Layouter: _layouter2.default,
  Group: _group.Group,
  Item: _item.Item,
  createLayout: _createLayout2.default
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 115 */
/*!*********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/fn/object/assign.js ***!
  \*********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ 116);
module.exports = __webpack_require__(/*! ../../modules/_core */ 12).Object.assign;


/***/ }),
/* 116 */
/*!******************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ 40);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ 119) });


/***/ }),
/* 117 */
/*!*****************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_ctx.js ***!
  \*****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ 118);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 118 */
/*!************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_a-function.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 119 */
/*!***************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_object-assign.js ***!
  \***************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ 42);
var gOPS = __webpack_require__(/*! ./_object-gops */ 58);
var pIE = __webpack_require__(/*! ./_object-pie */ 45);
var toObject = __webpack_require__(/*! ./_to-object */ 87);
var IObject = __webpack_require__(/*! ./_iobject */ 86);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ 34)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 120 */
/*!****************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_array-includes.js ***!
  \****************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ 27);
var toLength = __webpack_require__(/*! ./_to-length */ 121);
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 122);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 121 */
/*!***********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_to-length.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ 54);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 122 */
/*!*******************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \*******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 54);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 123 */
/*!********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/fn/get-iterator.js ***!
  \********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ 88);
__webpack_require__(/*! ../modules/es6.string.iterator */ 92);
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 132);


/***/ }),
/* 124 */
/*!*******************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \*******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 125);
var step = __webpack_require__(/*! ./_iter-step */ 126);
var Iterators = __webpack_require__(/*! ./_iterators */ 46);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 27);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ 89)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 125 */
/*!********************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 126 */
/*!***********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_iter-step.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 127 */
/*!*************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_iter-create.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ 91);
var descriptor = __webpack_require__(/*! ./_property-desc */ 41);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 60);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ 26)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 13)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 128 */
/*!************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_object-dps.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 18);
var anObject = __webpack_require__(/*! ./_an-object */ 32);
var getKeys = __webpack_require__(/*! ./_object-keys */ 42);

module.exports = __webpack_require__(/*! ./_descriptors */ 19) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 129 */
/*!******************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_html.js ***!
  \******************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ 11).document;
module.exports = document && document.documentElement;


/***/ }),
/* 130 */
/*!************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_object-gpo.js ***!
  \************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ 20);
var toObject = __webpack_require__(/*! ./_to-object */ 87);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 55)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 131 */
/*!***********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_string-at.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 54);
var defined = __webpack_require__(/*! ./_defined */ 53);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 132 */
/*!******************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/core.get-iterator.js ***!
  \******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 32);
var get = __webpack_require__(/*! ./core.get-iterator-method */ 133);
module.exports = __webpack_require__(/*! ./_core */ 12).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 133 */
/*!*************************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \*************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ 134);
var ITERATOR = __webpack_require__(/*! ./_wks */ 13)('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ 46);
module.exports = __webpack_require__(/*! ./_core */ 12).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 134 */
/*!*********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_classof.js ***!
  \*********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ 52);
var TAG = __webpack_require__(/*! ./_wks */ 13)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 135 */
/*!*********************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/babel-runtime/core-js/object/define-property.js ***!
  \*********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 136), __esModule: true };

/***/ }),
/* 136 */
/*!******************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/fn/object/define-property.js ***!
  \******************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ 137);
var $Object = __webpack_require__(/*! ../../modules/_core */ 12).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 137 */
/*!***************************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \***************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 40);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 19), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ 18).f });


/***/ }),
/* 138 */
/*!*****************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/babel-runtime/helpers/typeof.js ***!
  \*****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ 139);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ 141);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 139 */
/*!**************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \**************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ 140), __esModule: true };

/***/ }),
/* 140 */
/*!***********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ 92);
__webpack_require__(/*! ../../modules/web.dom.iterable */ 88);
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ 64).f('iterator');


/***/ }),
/* 141 */
/*!*****************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/babel-runtime/core-js/symbol.js ***!
  \*****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ 142), __esModule: true };

/***/ }),
/* 142 */
/*!********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/fn/symbol/index.js ***!
  \********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ 143);
__webpack_require__(/*! ../../modules/es6.object.to-string */ 149);
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ 150);
__webpack_require__(/*! ../../modules/es7.symbol.observable */ 151);
module.exports = __webpack_require__(/*! ../../modules/_core */ 12).Symbol;


/***/ }),
/* 143 */
/*!***********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/es6.symbol.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ 11);
var has = __webpack_require__(/*! ./_has */ 20);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 19);
var $export = __webpack_require__(/*! ./_export */ 40);
var redefine = __webpack_require__(/*! ./_redefine */ 90);
var META = __webpack_require__(/*! ./_meta */ 144).KEY;
var $fails = __webpack_require__(/*! ./_fails */ 34);
var shared = __webpack_require__(/*! ./_shared */ 56);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 60);
var uid = __webpack_require__(/*! ./_uid */ 44);
var wks = __webpack_require__(/*! ./_wks */ 13);
var wksExt = __webpack_require__(/*! ./_wks-ext */ 64);
var wksDefine = __webpack_require__(/*! ./_wks-define */ 65);
var enumKeys = __webpack_require__(/*! ./_enum-keys */ 145);
var isArray = __webpack_require__(/*! ./_is-array */ 146);
var anObject = __webpack_require__(/*! ./_an-object */ 32);
var isObject = __webpack_require__(/*! ./_is-object */ 33);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 27);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 51);
var createDesc = __webpack_require__(/*! ./_property-desc */ 41);
var _create = __webpack_require__(/*! ./_object-create */ 91);
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ 147);
var $GOPD = __webpack_require__(/*! ./_object-gopd */ 148);
var $DP = __webpack_require__(/*! ./_object-dp */ 18);
var $keys = __webpack_require__(/*! ./_object-keys */ 42);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ 93).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ 45).f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ 58).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ 43)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ 26)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 144 */
/*!******************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_meta.js ***!
  \******************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ 44)('meta');
var isObject = __webpack_require__(/*! ./_is-object */ 33);
var has = __webpack_require__(/*! ./_has */ 20);
var setDesc = __webpack_require__(/*! ./_object-dp */ 18).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ 34)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 145 */
/*!***********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_enum-keys.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ 42);
var gOPS = __webpack_require__(/*! ./_object-gops */ 58);
var pIE = __webpack_require__(/*! ./_object-pie */ 45);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 146 */
/*!**********************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_is-array.js ***!
  \**********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ 52);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 147 */
/*!*****************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \*****************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ 27);
var gOPN = __webpack_require__(/*! ./_object-gopn */ 93).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 148 */
/*!*************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/_object-gopd.js ***!
  \*************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ 45);
var createDesc = __webpack_require__(/*! ./_property-desc */ 41);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 27);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 51);
var has = __webpack_require__(/*! ./_has */ 20);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 83);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ 19) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 149 */
/*!*********************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \*********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),
/* 150 */
/*!**************************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \**************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 65)('asyncIterator');


/***/ }),
/* 151 */
/*!**********************************************************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \**********************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 65)('observable');


/***/ }),
/* 152 */
/*!**************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/dist/src/strip.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Strip = undefined;

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 59);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 21);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 22);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Strip = exports.Strip = function () {
  function Strip(config) {
    (0, _classCallCheck3.default)(this, Strip);

    this.ratio = 0;
    this.groups = [];
    this.width = 0;
    this.height = 0;
    this.isFullWidth = true;

    this.idx = config.idx;
    this.groupsPerStrip = config.groupsPerStrip;
    this.oneRow = config.oneRow;
    this.gallerySize = config.gallerySize;
    this.container = config.container;
  }

  (0, _createClass3.default)(Strip, [{
    key: "addGroup",
    value: function addGroup(group) {
      if (this.hasGroups) {
        this.lastGroup.isLastGroup = false;
      }
      this.groups.push(group);
      group.stripIdx = this.idx;
      this.lastGroup.isLastGroup = true;
      this.lastGroup.stripWidth = this.height * this.ratio;
    }
  }, {
    key: "markAsIncomplete",
    value: function markAsIncomplete() {
      //prevent from the last group to be streched
      this.isFullWidth = false;
      this.lastGroup.isLastGroup = false;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.width = width;
      if (this.hasGroups) {
        this.lastGroup.stripWidth = width;
      }
    }
  }, {
    key: "resizeToHeight",
    value: function resizeToHeight(height) {
      this.height = height;
      var left = 0;
      var remainder = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.groups), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var group = _step.value;

          group.setLeft(left);
          // group.left = (left);
          group.width += remainder; //add the remainder from the last group round
          group.resizeToHeight(height);
          remainder = group.width;
          group.round();
          remainder -= group.width;
          left += group.width;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "isFull",
    value: function isFull(newGroup, isLastImage) {

      if (!this.hasGroups) {
        return false;
      }

      var groupsPerStrip = this.groupsPerStrip,
          oneRow = this.oneRow,
          gallerySize = this.gallerySize;


      if (groupsPerStrip > 0) {
        return this.groups.length >= groupsPerStrip;
      }

      var galleryWidth = this.container.galleryWidth;


      var isStripSmallEnough = void 0;
      if (oneRow) {
        isStripSmallEnough = false; //onerow layout is one long strip
      } else {
        var withNewGroup = galleryWidth / (this.ratio + newGroup.ratio) - gallerySize; //start a new strip BEFORE adding the current group
        var withoutNewGroup = galleryWidth / this.ratio - gallerySize; //start a new strip AFTER adding the current group
        if (isNaN(withNewGroup) || isNaN(withoutNewGroup)) {
          isStripSmallEnough = false;
        } else if (withoutNewGroup < 0) {
          //the strip is already too small
          isStripSmallEnough = true;
        } else if (withNewGroup < 0) {
          //adding the new group makes is small enough
          // check if adding the new group makes the strip TOO small
          //so - without the new group, the strip is larger than the required size - but adding the new group might make it too small
          isStripSmallEnough = Math.abs(withoutNewGroup) < Math.abs(withNewGroup);
        } else {
          isStripSmallEnough = false;
        }

        if (isStripSmallEnough && isLastImage) {
          //if it is the last image - prefer adding it to the last strip rather putting it on a new strip
          isStripSmallEnough = Number(Math.abs(withoutNewGroup)) < Math.abs(withNewGroup);
        }
      }

      return isStripSmallEnough;
    }
  }, {
    key: "hasGroups",
    get: function get() {
      return this.groups.length > 0;
    }
  }, {
    key: "lastGroup",
    get: function get() {
      return this.groups[this.groups.length - 1];
    }
  }, {
    key: "scheme",
    get: function get() {
      return {
        idx: this.idx,
        groups: this.groups.map(function (group) {
          return group.scheme;
        }),
        width: this.width,
        height: this.height,
        ratio: this.ratio,
        isFullWidth: this.isFullWidth
      };
    }
  }]);
  return Strip;
}();
//# sourceMappingURL=strip.js.map

/***/ }),
/* 153 */
/*!***************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/dist/src/column.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = undefined;

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 21);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 22);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Column = exports.Column = function () {
  function Column(idx, width, cubeRatio) {
    (0, _classCallCheck3.default)(this, Column);

    this.idx = idx;
    this.groups = [];
    this.height = 0;
    this.width = width;
    this.cubeRatio = cubeRatio;
  }

  (0, _createClass3.default)(Column, [{
    key: "addGroup",
    value: function addGroup(group) {
      this.addGroups([group]);
    }
  }, {
    key: "addGroups",
    value: function addGroups(groups) {
      var _this = this;

      this.groups = this.groups.concat(groups);
      groups.forEach(function (group) {
        return group.columnIdx = _this.idx;
      });
    }
  }, {
    key: "scheme",
    get: function get() {
      return {
        idx: this.idx,
        groups: this.groups.map(function (group) {
          return group.scheme;
        }),
        width: this.width,
        height: this.height
      };
    }
  }]);
  return Column;
}();
//# sourceMappingURL=column.js.map

/***/ }),
/* 154 */
/*!*********************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/dist/src/layoutsStore.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 62);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 21);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 22);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutsStore = function () {
  function LayoutsStore() {
    (0, _classCallCheck3.default)(this, LayoutsStore);
  }

  (0, _createClass3.default)(LayoutsStore, [{
    key: "layout",
    set: function set(_layout) {
      this._layout = (0, _extends3.default)({}, _layout);
    },
    get: function get() {
      return this._layout;
    }
  }]);
  return LayoutsStore;
}();

exports.default = new LayoutsStore();
//# sourceMappingURL=layoutsStore.js.map

/***/ }),
/* 155 */
/*!**********************************************************************!*\
  !*** ../node_modules/pro-gallery-layouter/dist/src/create-layout.js ***!
  \**********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createLayout;

var _layouter = __webpack_require__(/*! ./layouter */ 82);

var _layouter2 = _interopRequireDefault(_layouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createLayout() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(_layouter2.default, [null].concat(args)))().createLayout();
}
//# sourceMappingURL=create-layout.js.map

/***/ }),
/* 156 */
/*!*************************************!*\
  !*** ./components/SideBar/index.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SideBar = __webpack_require__(/*! ./SideBar */ 157);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SideBar).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 157 */
/*!***************************************!*\
  !*** ./components/SideBar/SideBar.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./SideBar.scss */ 158);

var _rcSlider = __webpack_require__(/*! rc-slider */ 159);

var _rcSlider2 = _interopRequireDefault(_rcSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getValueFromChangeEvent = function getValueFromChangeEvent(event) {
  var value = event.target.value;

  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};

var SideBar = function (_React$Component) {
  _inherits(SideBar, _React$Component);

  function SideBar() {
    _classCallCheck(this, SideBar);

    var _this = _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this));

    _this.handleStyleChange = _this.handleStyleChange.bind(_this);
    _this.toggleSample = _this.toggleSample.bind(_this);

    return _this;
  }

  _createClass(SideBar, [{
    key: 'createSlider',
    value: function createSlider(name) {
      var _this2 = this;

      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.styles[name];
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

      var handleChange = function handleChange(value) {
        return _this2.handleStyleChange({
          target: { name: name, value: value }
        });
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'slider-container' },
          _react2.default.createElement(_rcSlider2.default, { value: value, onChange: handleChange, max: max })
        ),
        _react2.default.createElement('input', { type: 'number', name: name, value: value, className: 'form-control slider-helper' })
      );
    }
  }, {
    key: 'mapStyles',
    value: function mapStyles(field, value) {
      var styles = this.props.styles;
      switch (field) {
        case 'groupTypes':
          var typesArr = styles[field].split(',');
          var typePos = typesArr.indexOf(String(value));
          if (typePos >= 0) {
            typesArr.splice(typePos, 1);
          } else {
            typesArr.push(value);
          }
          value = typesArr.join(',');
          break;
        case 'collageDensity':
        case 'floatingImages':
          value /= 100;
      }
      return value;
    }
  }, {
    key: 'toggleSample',
    value: function toggleSample() {
      this.props.toggleSample();
    }
  }, {
    key: 'handleStyleChange',
    value: function handleStyleChange(e) {
      var field = e.target.name;
      var value = getValueFromChangeEvent(e);

      console.log('Styles changed!!!', field, value);

      var styles = this.props.styles;
      styles[field] = this.mapStyles(field, value);

      this.props.handleStylesChange(styles);
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = this.props.styles;


      return _react2.default.createElement(
        'div',
        {
          className: 'playground-settings-container', style: {
            width: this.props.container.width,
            height: this.props.container.height
          }
        },
        _react2.default.createElement(
          'div',
          { className: 'playground-settings' },
          _react2.default.createElement(
            'a',
            { className: 'page-header', href: '/' },
            _react2.default.createElement(
              'h1',
              null,
              'Layouter Playground'
            )
          ),
          _react2.default.createElement(
            'form',
            { onChange: this.handleStyleChange },
            _react2.default.createElement('input', { name: 'galleryType', type: 'hidden', className: 'form-control', value: '-1' }),
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement(
                'small',
                null,
                'Layout Settings'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'is the gallery built with columns or with rows'
                },
                'Gallery Type'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'isVertical', value: false, checked: !styles.isVertical }),
                  'Rows'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'isVertical', value: true, checked: styles.isVertical }),
                  'Columns'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'The target size of the gallery row / column'
                },
                'Row / Column Size (Max Item Size)'
              ),
              this.createSlider('gallerySize', styles.gallerySize, 1000)
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'The minimum allowed size of each thumbnail (should be smaller than the max size)'
                },
                'Min Item Size'
              ),
              this.createSlider('minItemSize', styles.minItemSize, 1000)
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'The fixed number of columns in vertical galleries. Notice: 1) this parameter overrides thumbnail size. 2) use 0 (zero) to ignore this parameter. 3) If this param is active the number of columns in mobile will be 1 (one)'
                },
                'Number of Columns'
              ),
              this.createSlider('fixedColumns', styles.fixedColumns, 10)
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'The fixed number of groups per row in a Rows gallery'
                },
                'Groups per Row'
              ),
              this.createSlider('groupsPerStrip', styles.groupsPerStrip, 10)
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'place groups in columns from left to right instead of finding the shortest column'
                },
                'Place Groups in Columns'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'placeGroupsLtr', value: false, checked: !styles.placeGroupsLtr }),
                  'In the Shortest Column'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'placeGroupsLtr', value: true, checked: styles.placeGroupsLtr }),
                  'Left to Right'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'Scroll gallery vertically or horizontally'
                },
                'Scroll Direction'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'radio' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'oneRow', value: false, checked: !styles.oneRow }),
                  'Vertical Scroll'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'oneRow', value: true, checked: styles.oneRow }),
                  'Horizontal Scroll'
                )
              )
            ),
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement(
                'small',
                null,
                'Collage Settings'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'Maximal allowed group size'
                },
                'Max Group Size'
              ),
              this.createSlider('groupSize', styles.groupSize, 3)
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'The grouping that will be used to create collages'
                },
                'Allowed Group Types'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'table',
                { className: 'playground-layouts' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement('th', null),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Rows Layouts'
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Columns Layouts'
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      { className: 'left' },
                      '1 Item'
                    ),
                    _react2.default.createElement(
                      'td',
                      { colSpan: '2', className: 'center' },
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '1', checked: styles.groupTypes.indexOf('1') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      { className: 'left' },
                      '2 Items'
                    ),
                    _react2.default.createElement(
                      'td',
                      { className: 'center' },
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '2v', checked: styles.groupTypes.indexOf('2v') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'td',
                      { className: 'center' },
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '2h', checked: styles.groupTypes.indexOf('2h') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null),
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      { className: 'left' },
                      '3 Items'
                    ),
                    _react2.default.createElement(
                      'td',
                      { className: 'center' },
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '3t', checked: styles.groupTypes.indexOf('3t') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', { colSpan: '2' })
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null),
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '3b', checked: styles.groupTypes.indexOf('3b') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null),
                              _react2.default.createElement('td', null)
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', { colSpan: '2' })
                            )
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '3v', checked: styles.groupTypes.indexOf('3v') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'td',
                      { className: 'center' },
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '3l', checked: styles.groupTypes.indexOf('3l') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', { rowSpan: '2' }),
                              _react2.default.createElement('td', null)
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '3r', checked: styles.groupTypes.indexOf('3r') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null),
                              _react2.default.createElement('td', { rowSpan: '2' })
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'checkbox-inline' },
                        _react2.default.createElement(
                          'label',
                          null,
                          _react2.default.createElement('input', { type: 'checkbox', name: 'groupTypes', value: '3h', checked: styles.groupTypes.indexOf('3h') >= 0 }),
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement('td', null),
                              _react2.default.createElement('td', null),
                              _react2.default.createElement('td', null)
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'Choose the best group layouts according to the images proportions'
                },
                'Collage Grouping'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'chooseBestGroup', value: false, checked: !styles.chooseBestGroup }),
                  'Use all group types'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'chooseBestGroup', value: true, checked: styles.chooseBestGroup }),
                  'Choose best group types for items'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'A fixed order of forced group types (repeats circularly)'
                },
                'Rotating Group Types (advanced)'
              ),
              _react2.default.createElement('input', { name: 'rotatingGroupTypes', type: 'text', className: 'form-control', value: styles.rotatingGroupTypes })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'The amount of collaged images that will be created in the gallery'
                },
                'Collage Density'
              ),
              this.createSlider('collageDensity', styles.collageDensity * 100)
            ),
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement(
                'small',
                null,
                'Crop Settings'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'Crop images to a fixed ratio' },
                'Crop Images'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'cubeImages', value: false, checked: !styles.cubeImages }),
                  'Do Not Crop'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'cubeImages', value: true, checked: styles.cubeImages }),
                  'Crop'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'Match the crop ratio to the image orientation (crop portraits vertically and landscapes horizontally)'
                },
                'Smart Crop'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'smartCrop', value: false, checked: !styles.smartCrop }),
                  'Dumb Crop'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'radio-inline' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'radio', name: 'smartCrop', value: true, checked: styles.smartCrop }),
                  'Smart Crop'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'The width/height ratio of the crop (e.g. 1, 0.25, 16/9)'
                },
                'Single Crop Ratio'
              ),
              _react2.default.createElement('input', { name: 'cubeRatio', type: 'text', className: 'form-control', value: styles.cubeRatio })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                {
                  'data-toggle': 'tooltip', 'data-placement': 'right',
                  title: 'A fixed order of crop ratios (repeats circularly)'
                },
                'Rotating Crop Ratios (advanced)'
              ),
              _react2.default.createElement('input', { name: 'rotatingCropRatios', type: 'text', className: 'form-control', value: styles.rotatingCropRatios })
            ),
            _react2.default.createElement(
              'label',
              { 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'Stretch/shrink images to the container height' },
              'Stretch Images to Full Height'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'div',
              { className: 'radio-inline' },
              _react2.default.createElement(
                'label',
                null,
                _react2.default.createElement('input', { type: 'radio', name: 'forceFullHeight', value: false, checked: !styles.forceFullHeight }),
                'Do Not Stretch'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'radio-inline' },
              _react2.default.createElement(
                'label',
                null,
                _react2.default.createElement('input', { type: 'radio', name: 'forceFullHeight', value: true, checked: styles.forceFullHeight }),
                'Stretch'
              )
            ),
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement(
                'small',
                null,
                'Design Settings'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'The margins between images' },
                'Image Spacing'
              ),
              this.createSlider('imageMargin', styles.imageMargin, 500)
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'Add spacing below each group (vertical layouts only)' },
                'Space below Groups'
              ),
              this.createSlider('bottomInfoHeight', styles.bottomInfoHeight, 500)
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'Add random change to image position' },
                'Floating Images'
              ),
              this.createSlider('floatingImages', styles.floatingImages * 100)
            )
          ),
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(
              'small',
              null,
              'All Done?'
            )
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-success btn-block', onClick: this.toggleSample },
            'Get Code Sample'
          )
        )
      );
    }
  }]);

  return SideBar;
}(_react2.default.Component);

exports.default = SideBar;

/***/ }),
/* 158 */
/*!*****************************************!*\
  !*** ./components/SideBar/SideBar.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rcSliderTooltipZoomDownIn":"components-SideBar-SideBar__rcSliderTooltipZoomDownIn__1sMWw","rcSliderTooltipZoomDownOut":"components-SideBar-SideBar__rcSliderTooltipZoomDownOut__2RUVQ"};

/***/ }),
/* 159 */
/*!**********************************************************!*\
  !*** ../node_modules/rc-slider/es/index.js + 45 modules ***!
  \**********************************************************/
/*! exports provided: default, Range, Handle, createSliderWithTooltip */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./components/SideBar/SideBar.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__(7);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__(4);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: external "React"
var external__React_ = __webpack_require__(0);
var external__React__default = /*#__PURE__*/__webpack_require__.n(external__React_);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/warning/warning.js
var warning = __webpack_require__(81);
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// CONCATENATED MODULE: ../node_modules/rc-slider/es/common/Track.js

/* eslint-disable react/prop-types */


var Track_Track = function Track(props) {
  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      offset = props.offset,
      length = props.length,
      style = props.style;


  var positonStyle = vertical ? {
    bottom: offset + '%',
    height: length + '%'
  } : {
    left: offset + '%',
    width: length + '%'
  };

  var elStyle = extends_default()({}, style, positonStyle);
  return included ? external__React__default.a.createElement('div', { className: className, style: elStyle }) : null;
};

/* harmony default export */ var common_Track = (Track_Track);
// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(38);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(25);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/get.js
var get = __webpack_require__(198);
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// EXTERNAL MODULE: ../node_modules/add-dom-event-listener/lib/index.js
var lib = __webpack_require__(205);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: external "ReactDOM"
var external__ReactDOM_ = __webpack_require__(10);
var external__ReactDOM__default = /*#__PURE__*/__webpack_require__.n(external__ReactDOM_);

// CONCATENATED MODULE: ../node_modules/rc-util/es/Dom/addEventListener.js



function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = external__ReactDOM__default.a.unstable_batchedUpdates ? function run(e) {
    external__ReactDOM__default.a.unstable_batchedUpdates(cb, e);
  } : cb;
  return lib_default()(target, eventType, callback, option);
}
// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__(9);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ../node_modules/rc-slider/es/common/Steps.js







var Steps_calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  warning_default()(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat).sort(function (a, b) {
    return a - b;
  });
  if (dots && step) {
    for (var i = min; i <= max; i += step) {
      if (points.indexOf(i) === -1) {
        points.push(i);
      }
    }
  }
  return points;
};

var Steps_Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;

  var range = max - min;
  var elements = Steps_calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = Math.abs(point - min) / range * 100 + '%';

    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? extends_default()({ bottom: offset }, dotStyle) : extends_default()({ left: offset }, dotStyle);
    if (isActived) {
      style = extends_default()({}, style, activeDotStyle);
    }

    var pointClassName = classnames_default()((_classNames = {}, defineProperty_default()(_classNames, prefixCls + '-dot', true), defineProperty_default()(_classNames, prefixCls + '-dot-active', isActived), _classNames));

    return external__React__default.a.createElement('span', { className: pointClassName, style: style, key: point });
  });

  return external__React__default.a.createElement(
    'div',
    { className: prefixCls + '-step' },
    elements
  );
};

Steps_Steps.propTypes = {
  prefixCls: prop_types_default.a.string,
  activeDotStyle: prop_types_default.a.object,
  dotStyle: prop_types_default.a.object,
  min: prop_types_default.a.number,
  max: prop_types_default.a.number,
  upperBound: prop_types_default.a.number,
  lowerBound: prop_types_default.a.number,
  included: prop_types_default.a.bool,
  dots: prop_types_default.a.bool,
  step: prop_types_default.a.number,
  marks: prop_types_default.a.object,
  vertical: prop_types_default.a.bool
};

/* harmony default export */ var common_Steps = (Steps_Steps);
// CONCATENATED MODULE: ../node_modules/rc-slider/es/common/Marks.js






var Marks_Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min,
      onClickLabel = _ref.onClickLabel;

  var marksKeys = Object.keys(marks);

  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = typeof markPoint === 'object' && !external__React__default.a.isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;
    if (!markLabel && markLabel !== 0) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = classnames_default()((_classNames = {}, defineProperty_default()(_classNames, className + '-text', true), defineProperty_default()(_classNames, className + '-text-active', isActive), _classNames));

    var bottomStyle = {
      marginBottom: '-50%',
      bottom: (point - min) / range * 100 + '%'
    };

    var leftStyle = {
      left: (point - min) / range * 100 + '%',
      transform: 'translateX(-50%)',
      msTransform: 'translateX(-50%)'
    };

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? extends_default()({}, style, markPoint.style) : style;
    return external__React__default.a.createElement(
      'span',
      {
        className: markClassName,
        style: markStyle,
        key: point,
        onMouseDown: function onMouseDown(e) {
          return onClickLabel(e, point);
        },
        onTouchStart: function onTouchStart(e) {
          return onClickLabel(e, point);
        }
      },
      markLabel
    );
  });

  return external__React__default.a.createElement(
    'div',
    { className: className },
    elements
  );
};

Marks_Marks.propTypes = {
  className: prop_types_default.a.string,
  vertical: prop_types_default.a.bool,
  marks: prop_types_default.a.object,
  included: prop_types_default.a.bool,
  upperBound: prop_types_default.a.number,
  lowerBound: prop_types_default.a.number,
  max: prop_types_default.a.number,
  min: prop_types_default.a.number,
  onClickLabel: prop_types_default.a.func
};

/* harmony default export */ var common_Marks = (Marks_Marks);
// CONCATENATED MODULE: ../node_modules/rc-slider/es/Handle.js












var Handle_Handle = function (_React$Component) {
  inherits_default()(Handle, _React$Component);

  function Handle() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck_default()(this, Handle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, (_ref = Handle.__proto__ || Object.getPrototypeOf(Handle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      clickFocused: false
    }, _this.setHandleRef = function (node) {
      _this.handle = node;
    }, _this.handleMouseUp = function () {
      if (document.activeElement === _this.handle) {
        _this.setClickFocus(true);
      }
    }, _this.handleMouseDown = function () {
      // fix https://github.com/ant-design/ant-design/issues/15324
      _this.focus();
    }, _this.handleBlur = function () {
      _this.setClickFocus(false);
    }, _this.handleKeyDown = function () {
      _this.setClickFocus(false);
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  createClass_default()(Handle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // mouseup won't trigger if mouse moved out of handle,
      // so we listen on document here.
      this.onMouseUpListener = addEventListenerWrap(document, 'mouseup', this.handleMouseUp);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.onMouseUpListener) {
        this.onMouseUpListener.remove();
      }
    }
  }, {
    key: 'setClickFocus',
    value: function setClickFocus(focused) {
      this.setState({ clickFocused: focused });
    }
  }, {
    key: 'clickFocus',
    value: function clickFocus() {
      this.setClickFocus(true);
      this.focus();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.handle.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.handle.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          vertical = _props.vertical,
          offset = _props.offset,
          style = _props.style,
          disabled = _props.disabled,
          min = _props.min,
          max = _props.max,
          value = _props.value,
          tabIndex = _props.tabIndex,
          restProps = objectWithoutProperties_default()(_props, ['prefixCls', 'vertical', 'offset', 'style', 'disabled', 'min', 'max', 'value', 'tabIndex']);

      var className = classnames_default()(this.props.className, defineProperty_default()({}, prefixCls + '-handle-click-focused', this.state.clickFocused));

      var postionStyle = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
      var elStyle = extends_default()({}, style, postionStyle);

      var _tabIndex = tabIndex || 0;
      if (disabled || tabIndex === null) {
        _tabIndex = null;
      }

      return external__React__default.a.createElement('div', extends_default()({
        ref: this.setHandleRef,
        tabIndex: _tabIndex
      }, restProps, {
        className: className,
        style: elStyle,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown

        // aria attribute
        , role: 'slider',
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-disabled': !!disabled
      }));
    }
  }]);

  return Handle;
}(external__React__default.a.Component);

/* harmony default export */ var es_Handle = (Handle_Handle);


Handle_Handle.propTypes = {
  prefixCls: prop_types_default.a.string,
  className: prop_types_default.a.string,
  vertical: prop_types_default.a.bool,
  offset: prop_types_default.a.number,
  style: prop_types_default.a.object,
  disabled: prop_types_default.a.bool,
  min: prop_types_default.a.number,
  max: prop_types_default.a.number,
  value: prop_types_default.a.number,
  tabIndex: prop_types_default.a.number
};
// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(109);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ../node_modules/rc-util/es/KeyCode.js
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33, // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35, // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36, // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40, // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45, // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46, // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63, // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91, // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186, // needs localization
  /**
   * DASH
   */
  DASH: 189, // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187, // needs localization
  /**
   * COMMA
   */
  COMMA: 188, // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190, // needs localization
  /**
   * SLASH
   */
  SLASH: 191, // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192, // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222, // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219, // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220, // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221, // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229
};

/*
 whether text and modified key is entered at the same time.
 */
KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey ||
  // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  }

  // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.
  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;
    default:
      return true;
  }
};

/*
 whether character is entered.
 */
KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  }

  // Safari sends zero key code for non-latin characters.
  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;
    default:
      return false;
  }
};

/* harmony default export */ var es_KeyCode = (KeyCode);
// CONCATENATED MODULE: ../node_modules/rc-slider/es/utils.js




function isDev() {
  return "development" !== 'production';
}

function isEventFromHandle(e, handles) {
  try {
    return Object.keys(handles).some(function (key) {
      return e.target === Object(external__ReactDOM_["findDOMNode"])(handles[key]);
    });
  } catch (error) {
    return false;
  }
}

function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;

  return value < min || value > max;
}

function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}

function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min,
      max = _ref2.max;

  var points = Object.keys(marks).map(parseFloat);
  if (step !== null) {
    var maxSteps = Math.floor((max - min) / step);
    var steps = Math.min((val - min) / step, maxSteps);
    var closestStep = Math.round(steps) * step + min;
    points.push(closestStep);
  }
  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, toConsumableArray_default()(diffs)))];
}

function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;
  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }
  return precision;
}

function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : window.pageXOffset + coords.left + coords.width * 0.5;
}

function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }
  if (val >= max) {
    return max;
  }
  return val;
}

function ensureValuePrecision(val, props) {
  var step = props.step;

  var closestPoint = isFinite(getClosestPoint(val, props)) ? getClosestPoint(val, props) : 0; // eslint-disable-line
  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}

function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}

function calculateNextValue(func, value, props) {
  var operations = {
    increase: function increase(a, b) {
      return a + b;
    },
    decrease: function decrease(a, b) {
      return a - b;
    }
  };

  var indexToGet = operations[func](Object.keys(props.marks).indexOf(JSON.stringify(value)), 1);
  var keyToGet = Object.keys(props.marks)[indexToGet];

  if (props.step) {
    return operations[func](value, props.step);
  } else if (!!Object.keys(props.marks).length && !!props.marks[keyToGet]) {
    return props.marks[keyToGet];
  }
  return value;
}

function getKeyboardValueMutator(e) {
  switch (e.keyCode) {
    case es_KeyCode.UP:
    case es_KeyCode.RIGHT:
      return function (value, props) {
        return calculateNextValue('increase', value, props);
      };

    case es_KeyCode.DOWN:
    case es_KeyCode.LEFT:
      return function (value, props) {
        return calculateNextValue('decrease', value, props);
      };

    case es_KeyCode.END:
      return function (value, props) {
        return props.max;
      };
    case es_KeyCode.HOME:
      return function (value, props) {
        return props.min;
      };
    case es_KeyCode.PAGE_UP:
      return function (value, props) {
        return value + props.step * 2;
      };
    case es_KeyCode.PAGE_DOWN:
      return function (value, props) {
        return value - props.step * 2;
      };

    default:
      return undefined;
  }
}
// CONCATENATED MODULE: ../node_modules/rc-slider/es/common/createSlider.js


















function noop() {}

function createSlider(Component) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    inherits_default()(ComponentEnhancer, _Component);

    function ComponentEnhancer(props) {
      classCallCheck_default()(this, ComponentEnhancer);

      var _this = possibleConstructorReturn_default()(this, (ComponentEnhancer.__proto__ || Object.getPrototypeOf(ComponentEnhancer)).call(this, props));

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        var isVertical = _this.props.vertical;
        var position = getMousePosition(isVertical, e);
        if (!isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.removeDocumentEvents();
        _this.onStart(position);
        _this.addDocumentMouseEvents();
      };

      _this.onTouchStart = function (e) {
        if (isNotTouchEvent(e)) return;

        var isVertical = _this.props.vertical;
        var position = getTouchPosition(isVertical, e);
        if (!isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentTouchEvents();
        pauseEvent(e);
      };

      _this.onFocus = function (e) {
        var _this$props = _this.props,
            onFocus = _this$props.onFocus,
            vertical = _this$props.vertical;

        if (isEventFromHandle(e, _this.handlesRefs)) {
          var handlePosition = getHandleCenterPosition(vertical, e.target);
          _this.dragOffset = 0;
          _this.onStart(handlePosition);
          pauseEvent(e);
          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        _this.onEnd();
        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseUp = function () {
        if (_this.handlesRefs[_this.prevMovedHandleIndex]) {
          _this.handlesRefs[_this.prevMovedHandleIndex].clickFocus();
        }
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();
          return;
        }
        var position = getMousePosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onTouchMove = function (e) {
        if (isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();
          return;
        }

        var position = getTouchPosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && isEventFromHandle(e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.onClickMarkLabel = function (e, value) {
        e.stopPropagation();
        _this.onChange({ value: value });
        _this.setState({ value: value }, function () {
          return _this.onEnd(true);
        });
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      if (isDev()) {
        var step = props.step,
            max = props.max,
            min = props.min;

        var isPointDiffEven = isFinite(max - min) ? (max - min) % step === 0 : true; // eslint-disable-line
        warning_default()(step && Math.floor(step) === step ? isPointDiffEven : true, 'Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)', max - min, step);
      }
      _this.handlesRefs = {};
      return _this;
    }

    createClass_default()(ComponentEnhancer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        // Snapshot testing cannot handle refs, so be sure to null-check this.
        this.document = this.sliderRef && this.sliderRef.ownerDocument;

        var _props = this.props,
            autoFocus = _props.autoFocus,
            disabled = _props.disabled;

        if (autoFocus && !disabled) {
          this.focus();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (get_default()(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'componentWillUnmount', this)) get_default()(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'componentWillUnmount', this).call(this);
        this.removeDocumentEvents();
      }
    }, {
      key: 'getSliderStart',
      value: function getSliderStart() {
        var slider = this.sliderRef;
        var rect = slider.getBoundingClientRect();

        return this.props.vertical ? rect.top : rect.left + window.pageXOffset;
      }
    }, {
      key: 'getSliderLength',
      value: function getSliderLength() {
        var slider = this.sliderRef;
        if (!slider) {
          return 0;
        }

        var coords = slider.getBoundingClientRect();
        return this.props.vertical ? coords.height : coords.width;
      }
    }, {
      key: 'addDocumentTouchEvents',
      value: function addDocumentTouchEvents() {
        // just work for Chrome iOS Safari and Android Browser
        this.onTouchMoveListener = addEventListenerWrap(this.document, 'touchmove', this.onTouchMove);
        this.onTouchUpListener = addEventListenerWrap(this.document, 'touchend', this.onEnd);
      }
    }, {
      key: 'addDocumentMouseEvents',
      value: function addDocumentMouseEvents() {
        this.onMouseMoveListener = addEventListenerWrap(this.document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = addEventListenerWrap(this.document, 'mouseup', this.onEnd);
      }
    }, {
      key: 'removeDocumentEvents',
      value: function removeDocumentEvents() {
        /* eslint-disable no-unused-expressions */
        this.onTouchMoveListener && this.onTouchMoveListener.remove();
        this.onTouchUpListener && this.onTouchUpListener.remove();

        this.onMouseMoveListener && this.onMouseMoveListener.remove();
        this.onMouseUpListener && this.onMouseUpListener.remove();
        /* eslint-enable no-unused-expressions */
      }
    }, {
      key: 'focus',
      value: function focus() {
        if (!this.props.disabled) {
          this.handlesRefs[0].focus();
        }
      }
    }, {
      key: 'blur',
      value: function blur() {
        var _this2 = this;

        if (!this.props.disabled) {
          Object.keys(this.handlesRefs).forEach(function (key) {
            if (_this2.handlesRefs[key] && _this2.handlesRefs[key].blur) {
              _this2.handlesRefs[key].blur();
            }
          });
        }
      }
    }, {
      key: 'calcValue',
      value: function calcValue(offset) {
        var _props2 = this.props,
            vertical = _props2.vertical,
            min = _props2.min,
            max = _props2.max;

        var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
      }
    }, {
      key: 'calcValueByPos',
      value: function calcValueByPos(position) {
        var pixelOffset = position - this.getSliderStart();
        var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
        return nextValue;
      }
    }, {
      key: 'calcOffset',
      value: function calcOffset(value) {
        var _props3 = this.props,
            min = _props3.min,
            max = _props3.max;

        var ratio = (value - min) / (max - min);
        return ratio * 100;
      }
    }, {
      key: 'saveHandle',
      value: function saveHandle(index, handle) {
        this.handlesRefs[index] = handle;
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames;

        var _props4 = this.props,
            prefixCls = _props4.prefixCls,
            className = _props4.className,
            marks = _props4.marks,
            dots = _props4.dots,
            step = _props4.step,
            included = _props4.included,
            disabled = _props4.disabled,
            vertical = _props4.vertical,
            min = _props4.min,
            max = _props4.max,
            children = _props4.children,
            maximumTrackStyle = _props4.maximumTrackStyle,
            style = _props4.style,
            railStyle = _props4.railStyle,
            dotStyle = _props4.dotStyle,
            activeDotStyle = _props4.activeDotStyle;

        var _get$call = get_default()(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'render', this).call(this),
            tracks = _get$call.tracks,
            handles = _get$call.handles;

        var sliderClassName = classnames_default()(prefixCls, (_classNames = {}, defineProperty_default()(_classNames, prefixCls + '-with-marks', Object.keys(marks).length), defineProperty_default()(_classNames, prefixCls + '-disabled', disabled), defineProperty_default()(_classNames, prefixCls + '-vertical', vertical), defineProperty_default()(_classNames, className, className), _classNames));
        return external__React__default.a.createElement(
          'div',
          {
            ref: this.saveSlider,
            className: sliderClassName,
            onTouchStart: disabled ? noop : this.onTouchStart,
            onMouseDown: disabled ? noop : this.onMouseDown,
            onMouseUp: disabled ? noop : this.onMouseUp,
            onKeyDown: disabled ? noop : this.onKeyDown,
            onFocus: disabled ? noop : this.onFocus,
            onBlur: disabled ? noop : this.onBlur,
            style: style
          },
          external__React__default.a.createElement('div', {
            className: prefixCls + '-rail',
            style: extends_default()({}, maximumTrackStyle, railStyle)
          }),
          tracks,
          external__React__default.a.createElement(common_Steps, {
            prefixCls: prefixCls,
            vertical: vertical,
            marks: marks,
            dots: dots,
            step: step,
            included: included,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: max,
            min: min,
            dotStyle: dotStyle,
            activeDotStyle: activeDotStyle
          }),
          handles,
          external__React__default.a.createElement(common_Marks, {
            className: prefixCls + '-mark',
            onClickLabel: disabled ? noop : this.onClickMarkLabel,
            vertical: vertical,
            marks: marks,
            included: included,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: max,
            min: min
          }),
          children
        );
      }
    }]);

    return ComponentEnhancer;
  }(Component), _class.displayName = 'ComponentEnhancer(' + Component.displayName + ')', _class.propTypes = extends_default()({}, Component.propTypes, {
    min: prop_types_default.a.number,
    max: prop_types_default.a.number,
    step: prop_types_default.a.number,
    marks: prop_types_default.a.object,
    included: prop_types_default.a.bool,
    className: prop_types_default.a.string,
    prefixCls: prop_types_default.a.string,
    disabled: prop_types_default.a.bool,
    children: prop_types_default.a.any,
    onBeforeChange: prop_types_default.a.func,
    onChange: prop_types_default.a.func,
    onAfterChange: prop_types_default.a.func,
    handle: prop_types_default.a.func,
    dots: prop_types_default.a.bool,
    vertical: prop_types_default.a.bool,
    style: prop_types_default.a.object,
    minimumTrackStyle: prop_types_default.a.object, // just for compatibility, will be deperecate
    maximumTrackStyle: prop_types_default.a.object, // just for compatibility, will be deperecate
    handleStyle: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.arrayOf(prop_types_default.a.object)]),
    trackStyle: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.arrayOf(prop_types_default.a.object)]),
    railStyle: prop_types_default.a.object,
    dotStyle: prop_types_default.a.object,
    activeDotStyle: prop_types_default.a.object,
    autoFocus: prop_types_default.a.bool,
    onFocus: prop_types_default.a.func,
    onBlur: prop_types_default.a.func
  }), _class.defaultProps = extends_default()({}, Component.defaultProps, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(_ref) {
      var index = _ref.index,
          restProps = objectWithoutProperties_default()(_ref, ['index']);

      delete restProps.dragging;
      if (restProps.value === null) {
        return null;
      }

      return external__React__default.a.createElement(es_Handle, extends_default()({}, restProps, { key: index }));
    },

    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _temp;
}
// CONCATENATED MODULE: ../node_modules/rc-slider/es/Slider.js





/* eslint-disable react/prop-types */







var Slider_Slider = function (_React$Component) {
  inherits_default()(Slider, _React$Component);

  function Slider(props) {
    classCallCheck_default()(this, Slider);

    var _this = possibleConstructorReturn_default()(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.onEnd = function (force) {
      var dragging = _this.state.dragging;

      _this.removeDocumentEvents();
      if (dragging || force) {
        _this.props.onAfterChange(_this.getValue());
      }
      _this.setState({ dragging: false });
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;

    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    if (isDev()) {
      warning_default()(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecated, please use trackStyle instead.');
      warning_default()(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecated, please use railStyle instead.');
    }
    return _this;
  }

  createClass_default()(Slider, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

      var prevValue = this.state.value;
      var value = nextProps.value !== undefined ? nextProps.value : prevValue;
      var nextValue = this.trimAlignValue(value, nextProps);
      if (nextValue === prevValue) return;

      this.setState({ value: nextValue });
      if (isValueOutOfRange(value, nextProps)) {
        this.props.onChange(nextValue);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      var nextState = state.value > this.props.max ? extends_default()({}, state, { value: this.props.max }) : state;
      if (isNotControlled) {
        this.setState(nextState);
      }

      var changedValue = nextState.value;
      props.onChange(changedValue);
    }
  }, {
    key: 'onStart',
    value: function onStart(position) {
      this.setState({ dragging: true });
      var props = this.props;
      var prevValue = this.getValue();
      props.onBeforeChange(prevValue);

      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;

      if (value === prevValue) return;

      this.prevMovedHandleIndex = 0;

      this.onChange({ value: value });
    }
  }, {
    key: 'onMove',
    value: function onMove(e, position) {
      pauseEvent(e);
      var oldValue = this.state.value;

      var value = this.calcValueByPos(position);
      if (value === oldValue) return;

      this.onChange({ value: value });
    }
  }, {
    key: 'onKeyboard',
    value: function onKeyboard(e) {
      var valueMutator = getKeyboardValueMutator(e);

      if (valueMutator) {
        pauseEvent(e);
        var state = this.state;
        var oldValue = state.value;
        var mutatedValue = valueMutator(oldValue, this.props);
        var value = this.trimAlignValue(mutatedValue);
        if (value === oldValue) return;

        this.onChange({ value: value });
        this.props.onAfterChange(value);
        this.onEnd();
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'getLowerBound',
    value: function getLowerBound() {
      return this.props.min;
    }
  }, {
    key: 'getUpperBound',
    value: function getUpperBound() {
      return this.state.value;
    }
  }, {
    key: 'trimAlignValue',
    value: function trimAlignValue(v) {
      var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (v === null) {
        return null;
      }

      var mergedProps = extends_default()({}, this.props, nextProps);
      var val = ensureValueInRange(v, mergedProps);
      return ensureValuePrecision(val, mergedProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          vertical = _props.vertical,
          included = _props.included,
          disabled = _props.disabled,
          minimumTrackStyle = _props.minimumTrackStyle,
          trackStyle = _props.trackStyle,
          handleStyle = _props.handleStyle,
          tabIndex = _props.tabIndex,
          min = _props.min,
          max = _props.max,
          handleGenerator = _props.handle;
      var _state = this.state,
          value = _state.value,
          dragging = _state.dragging;

      var offset = this.calcOffset(value);
      var handle = handleGenerator({
        className: prefixCls + '-handle',
        prefixCls: prefixCls,
        vertical: vertical,
        offset: offset,
        value: value,
        dragging: dragging,
        disabled: disabled,
        min: min,
        max: max,
        index: 0,
        tabIndex: tabIndex,
        style: handleStyle[0] || handleStyle,
        ref: function ref(h) {
          return _this2.saveHandle(0, h);
        }
      });

      var _trackStyle = trackStyle[0] || trackStyle;
      var track = external__React__default.a.createElement(common_Track, {
        className: prefixCls + '-track',
        vertical: vertical,
        included: included,
        offset: 0,
        length: offset,
        style: extends_default()({}, minimumTrackStyle, _trackStyle)
      });

      return { tracks: track, handles: handle };
    }
  }]);

  return Slider;
}(external__React__default.a.Component);

Slider_Slider.propTypes = {
  defaultValue: prop_types_default.a.number,
  value: prop_types_default.a.number,
  disabled: prop_types_default.a.bool,
  autoFocus: prop_types_default.a.bool,
  tabIndex: prop_types_default.a.number,
  min: prop_types_default.a.number,
  max: prop_types_default.a.number
};


/* harmony default export */ var es_Slider = (createSlider(Slider_Slider));
// EXTERNAL MODULE: ../node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(217);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);

// CONCATENATED MODULE: ../node_modules/rc-slider/es/Range.js







/* eslint-disable react/prop-types */








var Range_Range = function (_React$Component) {
  inherits_default()(Range, _React$Component);

  function Range(props) {
    classCallCheck_default()(this, Range);

    var _this = possibleConstructorReturn_default()(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this, props));

    _this.onEnd = function (force) {
      var handle = _this.state.handle;

      _this.removeDocumentEvents();

      if (handle !== null || force) {
        _this.props.onAfterChange(_this.getValue());
      }

      _this.setState({
        handle: null
      });
    };

    var count = props.count,
        min = props.min,
        max = props.max;

    var initialValue = Array.apply(undefined, toConsumableArray_default()(Array(count + 1))).map(function () {
      return min;
    });
    var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
    var value = props.value !== undefined ? props.value : defaultValue;
    var bounds = value.map(function (v, i) {
      return _this.trimAlignValue(v, i);
    });
    var recent = bounds[0] === max ? 0 : bounds.length - 1;

    _this.state = {
      handle: null,
      recent: recent,
      bounds: bounds
    };
    return _this;
  }

  createClass_default()(Range, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;
      if (this.props.min === nextProps.min && this.props.max === nextProps.max && shallowequal_default()(this.props.value, nextProps.value)) {
        return;
      }

      var bounds = this.state.bounds;

      var value = nextProps.value || bounds;
      var nextBounds = value.map(function (v, i) {
        return _this2.trimAlignValue(v, i, nextProps);
      });
      if (nextBounds.length === bounds.length && nextBounds.every(function (v, i) {
        return v === bounds[i];
      })) return;

      this.setState({ bounds: nextBounds });

      if (value.some(function (v) {
        return isValueOutOfRange(v, nextProps);
      })) {
        var newValues = value.map(function (v) {
          return ensureValueInRange(v, nextProps);
        });
        this.props.onChange(newValues);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      if (isNotControlled) {
        this.setState(state);
      } else {
        var controlledState = {};

        ['handle', 'recent'].forEach(function (item) {
          if (state[item] !== undefined) {
            controlledState[item] = state[item];
          }
        });

        if (Object.keys(controlledState).length) {
          this.setState(controlledState);
        }
      }

      var data = extends_default()({}, this.state, state);
      var changedValue = data.bounds;
      props.onChange(changedValue);
    }
  }, {
    key: 'onStart',
    value: function onStart(position) {
      var props = this.props;
      var state = this.state;
      var bounds = this.getValue();
      props.onBeforeChange(bounds);

      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;

      var closestBound = this.getClosestBound(value);
      this.prevMovedHandleIndex = this.getBoundNeedMoving(value, closestBound);

      this.setState({
        handle: this.prevMovedHandleIndex,
        recent: this.prevMovedHandleIndex
      });

      var prevValue = bounds[this.prevMovedHandleIndex];
      if (value === prevValue) return;

      var nextBounds = [].concat(toConsumableArray_default()(state.bounds));
      nextBounds[this.prevMovedHandleIndex] = value;
      this.onChange({ bounds: nextBounds });
    }
  }, {
    key: 'onMove',
    value: function onMove(e, position) {
      pauseEvent(e);
      var state = this.state;

      var value = this.calcValueByPos(position);
      var oldValue = state.bounds[state.handle];
      if (value === oldValue) return;

      this.moveTo(value);
    }
  }, {
    key: 'onKeyboard',
    value: function onKeyboard(e) {
      var valueMutator = getKeyboardValueMutator(e);

      if (valueMutator) {
        pauseEvent(e);
        var state = this.state,
            props = this.props;
        var bounds = state.bounds,
            handle = state.handle;

        var oldValue = bounds[handle === null ? state.recent : handle];
        var mutatedValue = valueMutator(oldValue, props);
        var value = this.trimAlignValue(mutatedValue);
        if (value === oldValue) return;
        var isFromKeyboardEvent = true;
        this.moveTo(value, isFromKeyboardEvent);
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.bounds;
    }
  }, {
    key: 'getClosestBound',
    value: function getClosestBound(value) {
      var bounds = this.state.bounds;

      var closestBound = 0;
      for (var i = 1; i < bounds.length - 1; ++i) {
        if (value >= bounds[i]) {
          closestBound = i;
        }
      }
      if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
        closestBound += 1;
      }
      return closestBound;
    }
  }, {
    key: 'getBoundNeedMoving',
    value: function getBoundNeedMoving(value, closestBound) {
      var _state = this.state,
          bounds = _state.bounds,
          recent = _state.recent;

      var boundNeedMoving = closestBound;
      var isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];

      if (isAtTheSamePoint && bounds[recent] === bounds[closestBound]) {
        boundNeedMoving = recent;
      }

      if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
        boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
      }
      return boundNeedMoving;
    }
  }, {
    key: 'getLowerBound',
    value: function getLowerBound() {
      return this.state.bounds[0];
    }
  }, {
    key: 'getUpperBound',
    value: function getUpperBound() {
      var bounds = this.state.bounds;

      return bounds[bounds.length - 1];
    }

    /**
     * Returns an array of possible slider points, taking into account both
     * `marks` and `step`. The result is cached.
     */

  }, {
    key: 'getPoints',
    value: function getPoints() {
      var _props = this.props,
          marks = _props.marks,
          step = _props.step,
          min = _props.min,
          max = _props.max;

      var cache = this._getPointsCache;
      if (!cache || cache.marks !== marks || cache.step !== step) {
        var pointsObject = extends_default()({}, marks);
        if (step !== null) {
          for (var point = min; point <= max; point += step) {
            pointsObject[point] = point;
          }
        }
        var points = Object.keys(pointsObject).map(parseFloat);
        points.sort(function (a, b) {
          return a - b;
        });
        this._getPointsCache = { marks: marks, step: step, points: points };
      }
      return this._getPointsCache.points;
    }
  }, {
    key: 'moveTo',
    value: function moveTo(value, isFromKeyboardEvent) {
      var _this3 = this;

      var state = this.state,
          props = this.props;

      var nextBounds = [].concat(toConsumableArray_default()(state.bounds));
      var handle = state.handle === null ? state.recent : state.handle;
      nextBounds[handle] = value;
      var nextHandle = handle;
      if (props.pushable !== false) {
        this.pushSurroundingHandles(nextBounds, nextHandle);
      } else if (props.allowCross) {
        nextBounds.sort(function (a, b) {
          return a - b;
        });
        nextHandle = nextBounds.indexOf(value);
      }
      this.onChange({
        recent: nextHandle,
        handle: nextHandle,
        bounds: nextBounds
      });
      if (isFromKeyboardEvent) {
        // known problem: because setState is async,
        // so trigger focus will invoke handler's onEnd and another handler's onStart too early,
        // cause onBeforeChange and onAfterChange receive wrong value.
        // here use setState callback to hack，but not elegant
        this.props.onAfterChange(nextBounds);
        this.setState({}, function () {
          _this3.handlesRefs[nextHandle].focus();
        });
        this.onEnd();
      }
    }
  }, {
    key: 'pushSurroundingHandles',
    value: function pushSurroundingHandles(bounds, handle) {
      var value = bounds[handle];
      var threshold = this.props.pushable;

      threshold = Number(threshold);

      var direction = 0;
      if (bounds[handle + 1] - value < threshold) {
        direction = +1; // push to right
      }
      if (value - bounds[handle - 1] < threshold) {
        direction = -1; // push to left
      }

      if (direction === 0) {
        return;
      }

      var nextHandle = handle + direction;
      var diffToNext = direction * (bounds[nextHandle] - value);
      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // revert to original value if pushing is impossible
        bounds[handle] = bounds[nextHandle] - direction * threshold;
      }
    }
  }, {
    key: 'pushHandle',
    value: function pushHandle(bounds, handle, direction, amount) {
      var originalValue = bounds[handle];
      var currentValue = bounds[handle];
      while (direction * (currentValue - originalValue) < amount) {
        if (!this.pushHandleOnePoint(bounds, handle, direction)) {
          // can't push handle enough to create the needed `amount` gap, so we
          // revert its position to the original value
          bounds[handle] = originalValue;
          return false;
        }
        currentValue = bounds[handle];
      }
      // the handle was pushed enough to create the needed `amount` gap
      return true;
    }
  }, {
    key: 'pushHandleOnePoint',
    value: function pushHandleOnePoint(bounds, handle, direction) {
      var points = this.getPoints();
      var pointIndex = points.indexOf(bounds[handle]);
      var nextPointIndex = pointIndex + direction;
      if (nextPointIndex >= points.length || nextPointIndex < 0) {
        // reached the minimum or maximum available point, can't push anymore
        return false;
      }
      var nextHandle = handle + direction;
      var nextValue = points[nextPointIndex];
      var threshold = this.props.pushable;

      var diffToNext = direction * (bounds[nextHandle] - nextValue);
      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // couldn't push next handle, so we won't push this one either
        return false;
      }
      // push the handle
      bounds[handle] = nextValue;
      return true;
    }
  }, {
    key: 'trimAlignValue',
    value: function trimAlignValue(v, handle) {
      var nextProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var mergedProps = extends_default()({}, this.props, nextProps);
      var valInRange = ensureValueInRange(v, mergedProps);
      var valNotConflict = this.ensureValueNotConflict(handle, valInRange, mergedProps);
      return ensureValuePrecision(valNotConflict, mergedProps);
    }
  }, {
    key: 'ensureValueNotConflict',
    value: function ensureValueNotConflict(handle, val, _ref) {
      var allowCross = _ref.allowCross,
          thershold = _ref.pushable;

      var state = this.state || {};
      var bounds = state.bounds;

      handle = handle === undefined ? state.handle : handle;
      thershold = Number(thershold);
      /* eslint-disable eqeqeq */
      if (!allowCross && handle != null && bounds !== undefined) {
        if (handle > 0 && val <= bounds[handle - 1] + thershold) {
          return bounds[handle - 1] + thershold;
        }
        if (handle < bounds.length - 1 && val >= bounds[handle + 1] - thershold) {
          return bounds[handle + 1] - thershold;
        }
      }
      /* eslint-enable eqeqeq */
      return val;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state2 = this.state,
          handle = _state2.handle,
          bounds = _state2.bounds;
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          vertical = _props2.vertical,
          included = _props2.included,
          disabled = _props2.disabled,
          min = _props2.min,
          max = _props2.max,
          handleGenerator = _props2.handle,
          trackStyle = _props2.trackStyle,
          handleStyle = _props2.handleStyle,
          tabIndex = _props2.tabIndex;


      var offsets = bounds.map(function (v) {
        return _this4.calcOffset(v);
      });

      var handleClassName = prefixCls + '-handle';
      var handles = bounds.map(function (v, i) {
        var _classNames;

        var _tabIndex = tabIndex[i] || 0;
        if (disabled || tabIndex[i] === null) {
          _tabIndex = null;
        }
        return handleGenerator({
          className: classnames_default()((_classNames = {}, defineProperty_default()(_classNames, handleClassName, true), defineProperty_default()(_classNames, handleClassName + '-' + (i + 1), true), _classNames)),
          prefixCls: prefixCls,
          vertical: vertical,
          offset: offsets[i],
          value: v,
          dragging: handle === i,
          index: i,
          tabIndex: _tabIndex,
          min: min,
          max: max,
          disabled: disabled,
          style: handleStyle[i],
          ref: function ref(h) {
            return _this4.saveHandle(i, h);
          }
        });
      });

      var tracks = bounds.slice(0, -1).map(function (_, index) {
        var _classNames2;

        var i = index + 1;
        var trackClassName = classnames_default()((_classNames2 = {}, defineProperty_default()(_classNames2, prefixCls + '-track', true), defineProperty_default()(_classNames2, prefixCls + '-track-' + i, true), _classNames2));
        return external__React__default.a.createElement(common_Track, {
          className: trackClassName,
          vertical: vertical,
          included: included,
          offset: offsets[i - 1],
          length: offsets[i] - offsets[i - 1],
          style: trackStyle[index],
          key: i
        });
      });

      return { tracks: tracks, handles: handles };
    }
  }]);

  return Range;
}(external__React__default.a.Component);

Range_Range.displayName = 'Range';
Range_Range.propTypes = {
  autoFocus: prop_types_default.a.bool,
  defaultValue: prop_types_default.a.arrayOf(prop_types_default.a.number),
  value: prop_types_default.a.arrayOf(prop_types_default.a.number),
  count: prop_types_default.a.number,
  pushable: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.number]),
  allowCross: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  tabIndex: prop_types_default.a.arrayOf(prop_types_default.a.number),
  min: prop_types_default.a.number,
  max: prop_types_default.a.number
};
Range_Range.defaultProps = {
  count: 1,
  allowCross: true,
  pushable: false,
  tabIndex: []
};


/* harmony default export */ var es_Range = (createSlider(Range_Range));
// CONCATENATED MODULE: ../node_modules/rc-util/es/Dom/contains.js
function contains(root, n) {
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}
// CONCATENATED MODULE: ../node_modules/rc-util/es/ContainerRender.js








var ContainerRender_ContainerRender = function (_React$Component) {
  inherits_default()(ContainerRender, _React$Component);

  function ContainerRender() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck_default()(this, ContainerRender);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, (_ref = ContainerRender.__proto__ || Object.getPrototypeOf(ContainerRender)).call.apply(_ref, [this].concat(args))), _this), _this.removeContainer = function () {
      if (_this.container) {
        external__ReactDOM__default.a.unmountComponentAtNode(_this.container);
        _this.container.parentNode.removeChild(_this.container);
        _this.container = null;
      }
    }, _this.renderComponent = function (props, ready) {
      var _this$props = _this.props,
          visible = _this$props.visible,
          getComponent = _this$props.getComponent,
          forceRender = _this$props.forceRender,
          getContainer = _this$props.getContainer,
          parent = _this$props.parent;

      if (visible || parent._component || forceRender) {
        if (!_this.container) {
          _this.container = getContainer();
        }
        external__ReactDOM__default.a.unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
          if (ready) {
            ready.call(this);
          }
        });
      }
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  createClass_default()(ContainerRender, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.autoDestroy) {
        this.removeContainer();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        renderComponent: this.renderComponent,
        removeContainer: this.removeContainer
      });
    }
  }]);

  return ContainerRender;
}(external__React__default.a.Component);

ContainerRender_ContainerRender.propTypes = {
  autoMount: prop_types_default.a.bool,
  autoDestroy: prop_types_default.a.bool,
  visible: prop_types_default.a.bool,
  forceRender: prop_types_default.a.bool,
  parent: prop_types_default.a.any,
  getComponent: prop_types_default.a.func.isRequired,
  getContainer: prop_types_default.a.func.isRequired,
  children: prop_types_default.a.func.isRequired
};
ContainerRender_ContainerRender.defaultProps = {
  autoMount: true,
  autoDestroy: true,
  forceRender: false
};
/* harmony default export */ var es_ContainerRender = (ContainerRender_ContainerRender);
// CONCATENATED MODULE: ../node_modules/rc-util/es/Portal.js








var Portal_Portal = function (_React$Component) {
  inherits_default()(Portal, _React$Component);

  function Portal() {
    classCallCheck_default()(this, Portal);

    return possibleConstructorReturn_default()(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  createClass_default()(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createContainer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var didUpdate = this.props.didUpdate;

      if (didUpdate) {
        didUpdate(prevProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeContainer();
    }
  }, {
    key: 'createContainer',
    value: function createContainer() {
      this._container = this.props.getContainer();
      this.forceUpdate();
    }
  }, {
    key: 'removeContainer',
    value: function removeContainer() {
      if (this._container) {
        this._container.parentNode.removeChild(this._container);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this._container) {
        return external__ReactDOM__default.a.createPortal(this.props.children, this._container);
      }
      return null;
    }
  }]);

  return Portal;
}(external__React__default.a.Component);

Portal_Portal.propTypes = {
  getContainer: prop_types_default.a.func.isRequired,
  children: prop_types_default.a.node.isRequired,
  didUpdate: prop_types_default.a.func
};
/* harmony default export */ var es_Portal = (Portal_Portal);
// CONCATENATED MODULE: ../node_modules/rc-trigger/es/utils.js

function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return extends_default()({}, baseAlign, align);
}

function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}

function saveRef(name, component) {
  this[name] = component;
}
// CONCATENATED MODULE: ../node_modules/dom-align/es/propertyUtils.js
var vendorPrefix = void 0;

var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }
  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
}

function setTransitionProperty(node, value) {
  var name = getTransitionName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}

function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
  }
  return {
    x: 0,
    y: 0
  };
}

var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;

function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var arr = void 0;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, 'matrix(' + arr.join(',') + ')');
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
    }
  } else {
    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
  }
}
// CONCATENATED MODULE: ../node_modules/dom-align/es/utils.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

var getComputedStyleX = void 0;

// https://stackoverflow.com/a/3485654/3040605
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line
  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = value + 'px';
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box = void 0;
  var x = void 0;
  var y = void 0;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }
  if (node.nodeType === 9) {
    return node;
  }
  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;

    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }
  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
}

// 设置 elem 相对 elem.ownerDocument 的坐标
function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }
  var originalTransition = '';
  var originalOffset = getOffset(elem);
  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }
  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = presetH + 'px';
  }
  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = presetV + 'px';
  }
  // force relayout
  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  css(elem, originalStyle);
  // force relayout
  forceRelayout(elem);
  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}

function utils_setTransform(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = { x: originalXY.x, y: originalXY.y };
  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }
  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }
  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);

    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    utils_setTransform(elem, offset, option);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name = void 0;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop = void 0;
  var j = void 0;
  var i = void 0;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === 'border') {
          cssProp = '' + prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}

var domUtils = {};

each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name;
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem, computedStyle);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val = void 0;
  var elem = args[0];
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }
  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },

  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },

  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i = void 0;
    var ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },

  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      args[_key3] = arguments[_key3];
    }

    for (var i = 0; i < args.length; i++) {
      utils.mix(ret, args[i]);
    }
    return ret;
  },

  viewportWidth: 0,
  viewportHeight: 0
};

mix(utils, domUtils);

/* harmony default export */ var es_utils = (utils);
// CONCATENATED MODULE: ../node_modules/dom-align/es/getOffsetParent.js


/**
 * 得到会导致元素显示不全的祖先元素
 */

function getOffsetParent(element) {
  if (es_utils.isWindow(element) || element.nodeType === 9) {
    return null;
  }
  // ie 这个也不是完全可行
  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法
  var doc = es_utils.getDocument(element);
  var body = doc.body;
  var parent = void 0;
  var positionStyle = es_utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
  }

  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    positionStyle = es_utils.css(parent, 'position');
    if (positionStyle !== 'static') {
      return parent;
    }
  }
  return null;
}

/* harmony default export */ var es_getOffsetParent = (getOffsetParent);
// CONCATENATED MODULE: ../node_modules/dom-align/es/isAncestorFixed.js


function isAncestorFixed(element) {
  if (es_utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = es_utils.getDocument(element);
  var body = doc.body;
  var parent = null;
  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    var positionStyle = es_utils.css(parent, 'position');
    if (positionStyle === 'fixed') {
      return true;
    }
  }
  return false;
}
// CONCATENATED MODULE: ../node_modules/dom-align/es/getVisibleRectForElement.js




/**
 * 获得元素的显示部分的区域
 */
function getVisibleRectForElement(element) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = es_getOffsetParent(element);
  var doc = es_utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;

  // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.
  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
    // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && es_utils.css(el, 'overflow') !== 'visible') {
      var pos = es_utils.offset(el);
      // add border
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right,
      // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = es_getOffsetParent(el);
  }

  // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601
  var originalPosition = null;
  if (!es_utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = es_utils.css(element, 'position');
    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = es_utils.getWindowScrollLeft(win);
  var scrollY = es_utils.getWindowScrollTop(win);
  var viewportWidth = es_utils.viewportWidth(win);
  var viewportHeight = es_utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;

  // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.
  var bodyStyle = window.getComputedStyle(body);
  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }
  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  }

  // Reset element position after calculate the visible area
  if (element.style) {
    element.style.position = originalPosition;
  }

  if (isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);

    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

/* harmony default export */ var es_getVisibleRectForElement = (getVisibleRectForElement);
// CONCATENATED MODULE: ../node_modules/dom-align/es/adjustForViewport.js


function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = es_utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }

  // Left edge inside and right edge outside viewport, try to resize it.
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }

  // Right edge outside viewport, try to move it.
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }

  // Top edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }

  // Top edge inside and bottom edge outside viewport, try to resize it.
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }

  // Bottom edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return es_utils.mix(pos, size);
}

/* harmony default export */ var es_adjustForViewport = (adjustForViewport);
// CONCATENATED MODULE: ../node_modules/dom-align/es/getRegion.js


function getRegion(node) {
  var offset = void 0;
  var w = void 0;
  var h = void 0;
  if (!es_utils.isWindow(node) && node.nodeType !== 9) {
    offset = es_utils.offset(node);
    w = es_utils.outerWidth(node);
    h = es_utils.outerHeight(node);
  } else {
    var win = es_utils.getWindow(node);
    offset = {
      left: es_utils.getWindowScrollLeft(win),
      top: es_utils.getWindowScrollTop(win)
    };
    w = es_utils.viewportWidth(win);
    h = es_utils.viewportHeight(win);
  }
  offset.width = w;
  offset.height = h;
  return offset;
}

/* harmony default export */ var es_getRegion = (getRegion);
// CONCATENATED MODULE: ../node_modules/dom-align/es/getAlignOffset.js
/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */

function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;

  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

/* harmony default export */ var es_getAlignOffset = (getAlignOffset);
// CONCATENATED MODULE: ../node_modules/dom-align/es/getElFuturePos.js


function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = es_getAlignOffset(refNodeRegion, points[1]);
  var p2 = es_getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];

  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}

/* harmony default export */ var es_getElFuturePos = (getElFuturePos);
// CONCATENATED MODULE: ../node_modules/dom-align/es/align/align.js
/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */







// http://yiminghe.iteye.com/blog/1124720

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  es_utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n = void 0;
  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }
  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}

/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */
function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  // 当前节点可以被放置的显示区域
  var visibleRect = es_getVisibleRectForElement(source);
  // 当前节点所占的区域, left/top/width/height
  var elRegion = es_getRegion(source);
  // 将 offset 转换成数值，支持百分比
  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion);
  // 当前节点将要被放置的位置
  var elFuturePos = es_getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
  // 当前节点将要所处的区域
  var newElRegion = es_utils.merge(elRegion, elFuturePos);

  // 如果可视区域不能完全放置当前节点时允许调整
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/ig, {
          l: 'r',
          r: 'l'
        });
        // 偏移量也反下
        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = es_getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/ig, {
          t: 'b',
          b: 't'
        });
        // 偏移量也反下
        var _newOffset = flipOffset(offset, 1);
        var _newTargetOffset = flipOffset(targetOffset, 1);
        var _newElFuturePos = es_getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    }

    // 如果失败，重新计算当前节点将要被放置的位置
    if (fail) {
      elFuturePos = es_getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
      es_utils.mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数
    if (isStillFailX || isStillFailY) {
      points = align.points;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    }
    // 2. 只有指定了可以调整当前方向才调整
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;

    // 确实要调整，甚至可能会调整高度宽度
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = es_adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }

  // need judge to in case set fixed with in css on height auto element
  if (newElRegion.width !== elRegion.width) {
    es_utils.css(source, 'width', es_utils.width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    es_utils.css(source, 'height', es_utils.height(source) + newElRegion.height - elRegion.height);
  }

  // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>
  es_utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });

  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}

/* harmony default export */ var align_align = (doAlign);
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/
// CONCATENATED MODULE: ../node_modules/dom-align/es/align/alignElement.js





function isOutOfVisibleRect(target) {
  var visibleRect = es_getVisibleRectForElement(target);
  var targetRegion = es_getRegion(target);

  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = es_getRegion(target);

  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);

  return align_align(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = es_getOffsetParent;

alignElement.__getVisibleRectForElement = es_getVisibleRectForElement;

/* harmony default export */ var align_alignElement = (alignElement);
// CONCATENATED MODULE: ../node_modules/dom-align/es/align/alignPoint.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint_alignPoint(el, tgtPoint, align) {
  var pageX = void 0;
  var pageY = void 0;

  var doc = es_utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;

  var scrollX = es_utils.getWindowScrollLeft(win);
  var scrollY = es_utils.getWindowScrollTop(win);
  var viewportWidth = es_utils.viewportWidth(win);
  var viewportHeight = es_utils.viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };

  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;

  // Provide default target point
  var points = [align.points[0], 'cc'];

  return align_align(el, tgtRegion, _extends({}, align, { points: points }), pointInView);
}

/* harmony default export */ var align_alignPoint = (alignPoint_alignPoint);
// CONCATENATED MODULE: ../node_modules/dom-align/es/index.js





/* harmony default export */ var es = (align_alignElement);
// CONCATENATED MODULE: ../node_modules/rc-align/es/util.js


function buffer(fn, ms) {
  var timer = void 0;

  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function bufferFn() {
    clear();
    timer = setTimeout(fn, ms);
  }

  bufferFn.clear = clear;

  return bufferFn;
}

function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}

function util_isWindow(obj) {
  return obj && typeof obj === 'object' && obj.window === obj;
}

function isSimilarValue(val1, val2) {
  var int1 = Math.floor(val1);
  var int2 = Math.floor(val2);
  return Math.abs(int1 - int2) <= 1;
}

function restoreFocus(activeElement, container) {
  // Focus back if is in the container
  if (activeElement !== document.activeElement && contains(container, activeElement)) {
    activeElement.focus();
  }
}
// CONCATENATED MODULE: ../node_modules/rc-align/es/Align.js












function getElement(func) {
  if (typeof func !== 'function' || !func) return null;
  return func();
}

function getPoint(point) {
  if (typeof point !== 'object' || !point) return null;
  return point;
}

var Align_Align = function (_Component) {
  inherits_default()(Align, _Component);

  function Align() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck_default()(this, Align);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, (_ref = Align.__proto__ || Object.getPrototypeOf(Align)).call.apply(_ref, [this].concat(args))), _this), _this.forceAlign = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          target = _this$props.target,
          align = _this$props.align,
          onAlign = _this$props.onAlign;

      if (!disabled && target) {
        var source = external__ReactDOM__default.a.findDOMNode(_this);

        var result = void 0;
        var element = getElement(target);
        var point = getPoint(target);

        // IE lose focus after element realign
        // We should record activeElement and restore later
        var activeElement = document.activeElement;

        if (element) {
          result = align_alignElement(source, element, align);
        } else if (point) {
          result = align_alignPoint(source, point, align);
        }

        restoreFocus(activeElement, source);

        if (onAlign) {
          onAlign(source, result);
        }
      }
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  createClass_default()(Align, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var props = this.props;
      // if parent ref not attached .... use document.getElementById
      this.forceAlign();
      if (!props.disabled && props.monitorWindowResize) {
        this.startMonitorWindowResize();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var reAlign = false;
      var props = this.props;

      if (!props.disabled) {
        var source = external__ReactDOM__default.a.findDOMNode(this);
        var sourceRect = source ? source.getBoundingClientRect() : null;

        if (prevProps.disabled) {
          reAlign = true;
        } else {
          var lastElement = getElement(prevProps.target);
          var currentElement = getElement(props.target);
          var lastPoint = getPoint(prevProps.target);
          var currentPoint = getPoint(props.target);

          if (util_isWindow(lastElement) && util_isWindow(currentElement)) {
            // Skip if is window
            reAlign = false;
          } else if (lastElement !== currentElement || // Element change
          lastElement && !currentElement && currentPoint || // Change from element to point
          lastPoint && currentPoint && currentElement || // Change from point to element
          currentPoint && !isSamePoint(lastPoint, currentPoint)) {
            reAlign = true;
          }

          // If source element size changed
          var preRect = this.sourceRect || {};
          if (!reAlign && source && (!isSimilarValue(preRect.width, sourceRect.width) || !isSimilarValue(preRect.height, sourceRect.height))) {
            reAlign = true;
          }
        }

        this.sourceRect = sourceRect;
      }

      if (reAlign) {
        this.forceAlign();
      }

      if (props.monitorWindowResize && !props.disabled) {
        this.startMonitorWindowResize();
      } else {
        this.stopMonitorWindowResize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopMonitorWindowResize();
    }
  }, {
    key: 'startMonitorWindowResize',
    value: function startMonitorWindowResize() {
      if (!this.resizeHandler) {
        this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
        this.resizeHandler = addEventListenerWrap(window, 'resize', this.bufferMonitor);
      }
    }
  }, {
    key: 'stopMonitorWindowResize',
    value: function stopMonitorWindowResize() {
      if (this.resizeHandler) {
        this.bufferMonitor.clear();
        this.resizeHandler.remove();
        this.resizeHandler = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          childrenProps = _props.childrenProps,
          children = _props.children;

      var child = external__React__default.a.Children.only(children);
      if (childrenProps) {
        var newProps = {};
        var propList = Object.keys(childrenProps);
        propList.forEach(function (prop) {
          newProps[prop] = _this2.props[childrenProps[prop]];
        });

        return external__React__default.a.cloneElement(child, newProps);
      }
      return child;
    }
  }]);

  return Align;
}(external__React_["Component"]);

Align_Align.propTypes = {
  childrenProps: prop_types_default.a.object,
  align: prop_types_default.a.object.isRequired,
  target: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.shape({
    clientX: prop_types_default.a.number,
    clientY: prop_types_default.a.number,
    pageX: prop_types_default.a.number,
    pageY: prop_types_default.a.number
  })]),
  onAlign: prop_types_default.a.func,
  monitorBufferTime: prop_types_default.a.number,
  monitorWindowResize: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  children: prop_types_default.a.any
};
Align_Align.defaultProps = {
  target: function target() {
    return window;
  },
  monitorBufferTime: 50,
  monitorWindowResize: false,
  disabled: false
};


/* harmony default export */ var es_Align = (Align_Align);
// CONCATENATED MODULE: ../node_modules/rc-align/es/index.js
// export this package's api


/* harmony default export */ var rc_align_es = (es_Align);
// CONCATENATED MODULE: ../node_modules/rc-animate/es/ChildrenUtils.js


function toArrayChildren(children) {
  var ret = [];
  external__React__default.a.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;
  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }
      found = child && child.key === key && !child.props[showProp];
    });
  }
  return found;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && Object.prototype.hasOwnProperty.call(nextChildrenPending, child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}
// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(75);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ../node_modules/css-animation/es/Event.js
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

/* harmony default export */ var Event = (TransitionEvents);
// EXTERNAL MODULE: ../node_modules/component-classes/index.js
var component_classes = __webpack_require__(218);
var component_classes_default = /*#__PURE__*/__webpack_require__.n(component_classes);

// CONCATENATED MODULE: ../node_modules/css-animation/es/index.js




var isCssAnimationSupported = Event.endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var es_cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : typeof_default()(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = component_classes_default()(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    Event.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  Event.addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

es_cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    Event.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  Event.addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

es_cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

es_cssAnimation.isCssAnimationSupported = isCssAnimationSupported;



/* harmony default export */ var css_animation_es = (es_cssAnimation);
// CONCATENATED MODULE: ../node_modules/rc-animate/es/util/animate.js
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
/* harmony default export */ var animate = (util);
// CONCATENATED MODULE: ../node_modules/rc-animate/es/AnimateChild.js










var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild_AnimateChild = function (_React$Component) {
  inherits_default()(AnimateChild, _React$Component);

  function AnimateChild() {
    classCallCheck_default()(this, AnimateChild);

    return possibleConstructorReturn_default()(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  createClass_default()(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (animate.isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (animate.isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (animate.isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = external__ReactDOM__default.a.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = typeof transitionName === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = css_animation_es(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(external__React__default.a.Component);

AnimateChild_AnimateChild.propTypes = {
  children: prop_types_default.a.any
};
/* harmony default export */ var es_AnimateChild = (AnimateChild_AnimateChild);
// CONCATENATED MODULE: ../node_modules/rc-animate/es/Animate.js












var defaultKey = 'rc_animate_' + Date.now();

function getChildrenFromProps(props) {
  var children = props.children;
  if (external__React__default.a.isValidElement(children)) {
    if (!children.key) {
      return external__React__default.a.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function Animate_noop() {}

var Animate_Animate = function (_React$Component) {
  inherits_default()(Animate, _React$Component);

  // eslint-disable-line

  function Animate(props) {
    classCallCheck_default()(this, Animate);

    var _this = possibleConstructorReturn_default()(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    Animate__initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: toArrayChildren(getChildrenFromProps(props))
    };

    _this.childrenRefs = {};
    return _this;
  }

  createClass_default()(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = toArrayChildren(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? toArrayChildren(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && findChildInChildrenByKey(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = external__React__default.a.cloneElement(nextChild || currentChild, defineProperty_default()({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !findChildInChildrenByKey(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = mergeChildren(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && findChildInChildrenByKey(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = findShownChildInChildrenByKey(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && findChildInChildrenByKey(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = findShownChildInChildrenByKey(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return findShownChildInChildrenByKey(currentChildren, key, showProp);
      }
      return findChildInChildrenByKey(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return external__React__default.a.createElement(
            es_AnimateChild,
            {
              key: child.key,
              ref: function ref(node) {
                _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = extends_default()({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return external__React__default.a.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(external__React__default.a.Component);

Animate_Animate.isAnimate = true;
Animate_Animate.propTypes = {
  component: prop_types_default.a.any,
  componentProps: prop_types_default.a.object,
  animation: prop_types_default.a.object,
  transitionName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  transitionEnter: prop_types_default.a.bool,
  transitionAppear: prop_types_default.a.bool,
  exclusive: prop_types_default.a.bool,
  transitionLeave: prop_types_default.a.bool,
  onEnd: prop_types_default.a.func,
  onEnter: prop_types_default.a.func,
  onLeave: prop_types_default.a.func,
  onAppear: prop_types_default.a.func,
  showProp: prop_types_default.a.string,
  children: prop_types_default.a.node
};
Animate_Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: Animate_noop,
  onEnter: Animate_noop,
  onLeave: Animate_noop,
  onAppear: Animate_noop
};

var Animate__initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = toArrayChildren(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else if (type === 'appear') {
      if (animate.allowAppearCallback(props)) {
        props.onAppear(key);
        props.onEnd(key, true);
      }
    } else if (animate.allowEnterCallback(props)) {
      props.onEnter(key);
      props.onEnd(key, true);
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = toArrayChildren(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (animate.allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!isSameChildren(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

/* harmony default export */ var es_Animate = (Animate_Animate);
// CONCATENATED MODULE: ../node_modules/rc-trigger/es/LazyRenderBox.js







var LazyRenderBox_LazyRenderBox = function (_Component) {
  inherits_default()(LazyRenderBox, _Component);

  function LazyRenderBox() {
    classCallCheck_default()(this, LazyRenderBox);

    return possibleConstructorReturn_default()(this, _Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        props = objectWithoutProperties_default()(_props, ['hiddenClassName', 'visible']);

    if (hiddenClassName || external__React__default.a.Children.count(props.children) > 1) {
      if (!visible && hiddenClassName) {
        props.className += ' ' + hiddenClassName;
      }
      return external__React__default.a.createElement('div', props);
    }

    return external__React__default.a.Children.only(props.children);
  };

  return LazyRenderBox;
}(external__React_["Component"]);

LazyRenderBox_LazyRenderBox.propTypes = {
  children: prop_types_default.a.any,
  className: prop_types_default.a.string,
  visible: prop_types_default.a.bool,
  hiddenClassName: prop_types_default.a.string
};


/* harmony default export */ var es_LazyRenderBox = (LazyRenderBox_LazyRenderBox);
// CONCATENATED MODULE: ../node_modules/rc-trigger/es/PopupInner.js







var PopupInner_PopupInner = function (_Component) {
  inherits_default()(PopupInner, _Component);

  function PopupInner() {
    classCallCheck_default()(this, PopupInner);

    return possibleConstructorReturn_default()(this, _Component.apply(this, arguments));
  }

  PopupInner.prototype.render = function render() {
    var props = this.props;
    var className = props.className;
    if (!props.visible) {
      className += ' ' + props.hiddenClassName;
    }
    return external__React__default.a.createElement(
      'div',
      {
        className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onMouseDown: props.onMouseDown,
        onTouchStart: props.onTouchStart,
        style: props.style
      },
      external__React__default.a.createElement(
        es_LazyRenderBox,
        { className: props.prefixCls + '-content', visible: props.visible },
        props.children
      )
    );
  };

  return PopupInner;
}(external__React_["Component"]);

PopupInner_PopupInner.propTypes = {
  hiddenClassName: prop_types_default.a.string,
  className: prop_types_default.a.string,
  prefixCls: prop_types_default.a.string,
  onMouseEnter: prop_types_default.a.func,
  onMouseLeave: prop_types_default.a.func,
  onMouseDown: prop_types_default.a.func,
  onTouchStart: prop_types_default.a.func,
  children: prop_types_default.a.any
};


/* harmony default export */ var es_PopupInner = (PopupInner_PopupInner);
// CONCATENATED MODULE: ../node_modules/rc-trigger/es/Popup.js













var Popup_Popup = function (_Component) {
  inherits_default()(Popup, _Component);

  function Popup(props) {
    classCallCheck_default()(this, Popup);

    var _this = possibleConstructorReturn_default()(this, _Component.call(this, props));

    Popup__initialiseProps.call(_this);

    _this.state = {
      // Used for stretch
      stretchChecked: false,
      targetWidth: undefined,
      targetHeight: undefined
    };

    _this.savePopupRef = saveRef.bind(_this, 'popupInstance');
    _this.saveAlignRef = saveRef.bind(_this, 'alignInstance');
    return _this;
  }

  Popup.prototype.componentDidMount = function componentDidMount() {
    this.rootNode = this.getPopupDomNode();
    this.setStretchSize();
  };

  Popup.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setStretchSize();
  };

  // Record size if stretch needed


  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
    return external__ReactDOM__default.a.findDOMNode(this.popupInstance);
  };

  // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align


  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
    var props = this.props;
    var transitionName = props.maskTransitionName;
    var animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = props.prefixCls + '-' + animation;
    }
    return transitionName;
  };

  Popup.prototype.getTransitionName = function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = props.prefixCls + '-' + props.animation;
    }
    return transitionName;
  };

  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
  };

  Popup.prototype.getPopupElement = function getPopupElement() {
    var _this2 = this;

    var savePopupRef = this.savePopupRef;
    var _state = this.state,
        stretchChecked = _state.stretchChecked,
        targetHeight = _state.targetHeight,
        targetWidth = _state.targetWidth;
    var _props = this.props,
        align = _props.align,
        visible = _props.visible,
        prefixCls = _props.prefixCls,
        style = _props.style,
        getClassNameFromAlign = _props.getClassNameFromAlign,
        destroyPopupOnHide = _props.destroyPopupOnHide,
        stretch = _props.stretch,
        children = _props.children,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        onMouseDown = _props.onMouseDown,
        onTouchStart = _props.onTouchStart;

    var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
    var hiddenClassName = prefixCls + '-hidden';

    if (!visible) {
      this.currentAlignClassName = null;
    }

    var sizeStyle = {};
    if (stretch) {
      // Stretch with target
      if (stretch.indexOf('height') !== -1) {
        sizeStyle.height = targetHeight;
      } else if (stretch.indexOf('minHeight') !== -1) {
        sizeStyle.minHeight = targetHeight;
      }
      if (stretch.indexOf('width') !== -1) {
        sizeStyle.width = targetWidth;
      } else if (stretch.indexOf('minWidth') !== -1) {
        sizeStyle.minWidth = targetWidth;
      }

      // Delay force align to makes ui smooth
      if (!stretchChecked) {
        sizeStyle.visibility = 'hidden';
        setTimeout(function () {
          if (_this2.alignInstance) {
            _this2.alignInstance.forceAlign();
          }
        }, 0);
      }
    }

    var newStyle = extends_default()({}, sizeStyle, style, this.getZIndexStyle());

    var popupInnerProps = {
      className: className,
      prefixCls: prefixCls,
      ref: savePopupRef,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDown: onMouseDown,
      onTouchStart: onTouchStart,
      style: newStyle
    };
    if (destroyPopupOnHide) {
      return external__React__default.a.createElement(
        es_Animate,
        {
          component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName()
        },
        visible ? external__React__default.a.createElement(
          rc_align_es,
          {
            target: this.getAlignTarget(),
            key: 'popup',
            ref: this.saveAlignRef,
            monitorWindowResize: true,
            align: align,
            onAlign: this.onAlign
          },
          external__React__default.a.createElement(
            es_PopupInner,
            extends_default()({
              visible: true
            }, popupInnerProps),
            children
          )
        ) : null
      );
    }

    return external__React__default.a.createElement(
      es_Animate,
      {
        component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: 'xVisible'
      },
      external__React__default.a.createElement(
        rc_align_es,
        {
          target: this.getAlignTarget(),
          key: 'popup',
          ref: this.saveAlignRef,
          monitorWindowResize: true,
          xVisible: visible,
          childrenProps: { visible: 'xVisible' },
          disabled: !visible,
          align: align,
          onAlign: this.onAlign
        },
        external__React__default.a.createElement(
          es_PopupInner,
          extends_default()({
            hiddenClassName: hiddenClassName
          }, popupInnerProps),
          children
        )
      )
    );
  };

  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
    var style = {};
    var props = this.props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  };

  Popup.prototype.getMaskElement = function getMaskElement() {
    var props = this.props;
    var maskElement = void 0;
    if (props.mask) {
      var maskTransition = this.getMaskTransitionName();
      maskElement = external__React__default.a.createElement(es_LazyRenderBox, {
        style: this.getZIndexStyle(),
        key: 'mask',
        className: props.prefixCls + '-mask',
        hiddenClassName: props.prefixCls + '-mask-hidden',
        visible: props.visible
      });
      if (maskTransition) {
        maskElement = external__React__default.a.createElement(
          es_Animate,
          {
            key: 'mask',
            showProp: 'visible',
            transitionAppear: true,
            component: '',
            transitionName: maskTransition
          },
          maskElement
        );
      }
    }
    return maskElement;
  };

  Popup.prototype.render = function render() {
    return external__React__default.a.createElement(
      'div',
      null,
      this.getMaskElement(),
      this.getPopupElement()
    );
  };

  return Popup;
}(external__React_["Component"]);

Popup_Popup.propTypes = {
  visible: prop_types_default.a.bool,
  style: prop_types_default.a.object,
  getClassNameFromAlign: prop_types_default.a.func,
  onAlign: prop_types_default.a.func,
  getRootDomNode: prop_types_default.a.func,
  align: prop_types_default.a.any,
  destroyPopupOnHide: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  prefixCls: prop_types_default.a.string,
  onMouseEnter: prop_types_default.a.func,
  onMouseLeave: prop_types_default.a.func,
  onMouseDown: prop_types_default.a.func,
  onTouchStart: prop_types_default.a.func,
  stretch: prop_types_default.a.string,
  children: prop_types_default.a.node,
  point: prop_types_default.a.shape({
    pageX: prop_types_default.a.number,
    pageY: prop_types_default.a.number
  })
};

var Popup__initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onAlign = function (popupDomNode, align) {
    var props = _this3.props;
    var currentAlignClassName = props.getClassNameFromAlign(align);
    // FIX: https://github.com/react-component/trigger/issues/56
    // FIX: https://github.com/react-component/tooltip/issues/79
    if (_this3.currentAlignClassName !== currentAlignClassName) {
      _this3.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = _this3.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  };

  this.setStretchSize = function () {
    var _props2 = _this3.props,
        stretch = _props2.stretch,
        getRootDomNode = _props2.getRootDomNode,
        visible = _props2.visible;
    var _state2 = _this3.state,
        stretchChecked = _state2.stretchChecked,
        targetHeight = _state2.targetHeight,
        targetWidth = _state2.targetWidth;


    if (!stretch || !visible) {
      if (stretchChecked) {
        _this3.setState({ stretchChecked: false });
      }
      return;
    }

    var $ele = getRootDomNode();
    if (!$ele) return;

    var height = $ele.offsetHeight;
    var width = $ele.offsetWidth;

    if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
      _this3.setState({
        stretchChecked: true,
        targetHeight: height,
        targetWidth: width
      });
    }
  };

  this.getTargetElement = function () {
    return _this3.props.getRootDomNode();
  };

  this.getAlignTarget = function () {
    var point = _this3.props.point;

    if (point) {
      return point;
    }
    return _this3.getTargetElement;
  };
};

/* harmony default export */ var es_Popup = (Popup_Popup);
// CONCATENATED MODULE: ../node_modules/rc-trigger/es/index.js
















function es_noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];

var IS_REACT_16 = !!external__ReactDOM_["createPortal"];

var contextTypes = {
  rcTrigger: prop_types_default.a.shape({
    onPopupMouseDown: prop_types_default.a.func
  })
};

var es_Trigger = function (_React$Component) {
  inherits_default()(Trigger, _React$Component);

  function Trigger(props) {
    classCallCheck_default()(this, Trigger);

    var _this = possibleConstructorReturn_default()(this, _React$Component.call(this, props));

    es__initialiseProps.call(_this);

    var popupVisible = void 0;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }

    _this.prevPopupVisible = popupVisible;

    _this.state = {
      popupVisible: popupVisible
    };
    return _this;
  }

  Trigger.prototype.getChildContext = function getChildContext() {
    return {
      rcTrigger: {
        onPopupMouseDown: this.onPopupMouseDown
      }
    };
  };

  Trigger.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    ALL_HANDLERS.forEach(function (h) {
      _this2['fire' + h] = function (e) {
        _this2.fireEvents(h, e);
      };
    });
  };

  Trigger.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  };

  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var popupVisible = _ref.popupVisible;

    if (popupVisible !== undefined) {
      this.setState({
        popupVisible: popupVisible
      });
    }
  };

  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;
    var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    };
    if (!IS_REACT_16) {
      this.renderComponent(null, triggerAfterPopupVisibleChange);
    }

    this.prevPopupVisible = prevState.popupVisible;

    // We must listen to `mousedown` or `touchstart`, edge case:
    // https://github.com/ant-design/ant-design/issues/5804
    // https://github.com/react-component/calendar/issues/250
    // https://github.com/react-component/trigger/issues/50
    if (state.popupVisible) {
      var currentDocument = void 0;
      if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = addEventListenerWrap(currentDocument, 'mousedown', this.onDocumentClick);
      }
      // always hide on mobile
      if (!this.touchOutsideHandler) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = addEventListenerWrap(currentDocument, 'touchstart', this.onDocumentClick);
      }
      // close popup when trigger type contains 'onContextMenu' and document is scrolling.
      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
        currentDocument = currentDocument || props.getDocument();
        this.contextMenuOutsideHandler1 = addEventListenerWrap(currentDocument, 'scroll', this.onContextMenuClose);
      }
      // close popup when trigger type contains 'onContextMenu' and window is blur.
      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
        this.contextMenuOutsideHandler2 = addEventListenerWrap(window, 'blur', this.onContextMenuClose);
      }
      return;
    }

    this.clearOutsideHandler();
  };

  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
    clearTimeout(this.mouseDownTimeout);
  };

  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
    // for test
    if (this._component && this._component.getPopupDomNode) {
      return this._component.getPopupDomNode();
    }
    return null;
  };

  Trigger.prototype.getPopupAlign = function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  };

  /**
   * @param popupVisible    Show or not the popup element
   * @param event           SyntheticEvent, used for `pointAlign`
   */
  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible, event) {
    var alignPoint = this.props.alignPoint;


    this.clearDelayTimer();

    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({ popupVisible: popupVisible });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }

    // Always record the point position since mouseEnterDelay will delay the show
    if (alignPoint && event) {
      this.setPoint(event);
    }
  };

  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS, event) {
    var _this3 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      var point = event ? { pageX: event.pageX, pageY: event.pageY } : null;
      this.delayTimer = setTimeout(function () {
        _this3.setPopupVisible(visible, point);
        _this3.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible, event);
    }
  };

  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  };

  Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.contextMenuOutsideHandler1) {
      this.contextMenuOutsideHandler1.remove();
      this.contextMenuOutsideHandler1 = null;
    }

    if (this.contextMenuOutsideHandler2) {
      this.contextMenuOutsideHandler2.remove();
      this.contextMenuOutsideHandler2 = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  };

  Trigger.prototype.createTwoChains = function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;
    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }
    return childPros[event] || props[event];
  };

  Trigger.prototype.isClickToShow = function isClickToShow() {
    var _props = this.props,
        action = _props.action,
        showAction = _props.showAction;

    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
    var _props2 = this.props,
        action = _props2.action,
        showAction = _props2.showAction;

    return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
  };

  Trigger.prototype.isClickToHide = function isClickToHide() {
    var _props3 = this.props,
        action = _props3.action,
        hideAction = _props3.hideAction;

    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
    var _props4 = this.props,
        action = _props4.action,
        showAction = _props4.showAction;

    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  };

  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
    var _props5 = this.props,
        action = _props5.action,
        hideAction = _props5.hideAction;

    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  };

  Trigger.prototype.isFocusToShow = function isFocusToShow() {
    var _props6 = this.props,
        action = _props6.action,
        showAction = _props6.showAction;

    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  };

  Trigger.prototype.isBlurToHide = function isBlurToHide() {
    var _props7 = this.props,
        action = _props7.action,
        hideAction = _props7.hideAction;

    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  };

  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
    if (this.state.popupVisible && this._component && this._component.alignInstance) {
      this._component.alignInstance.forceAlign();
    }
  };

  Trigger.prototype.fireEvents = function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    var callback = this.props[type];
    if (callback) {
      callback(e);
    }
  };

  Trigger.prototype.close = function close() {
    this.setPopupVisible(false);
  };

  Trigger.prototype.render = function render() {
    var _this4 = this;

    var popupVisible = this.state.popupVisible;
    var _props8 = this.props,
        children = _props8.children,
        forceRender = _props8.forceRender,
        alignPoint = _props8.alignPoint,
        className = _props8.className;

    var child = external__React__default.a.Children.only(children);
    var newChildProps = { key: 'trigger' };

    if (this.isContextMenuToShow()) {
      newChildProps.onContextMenu = this.onContextMenu;
    } else {
      newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
    }

    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
      if (alignPoint) {
        newChildProps.onMouseMove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    var childrenClassName = classnames_default()(child && child.props && child.props.className, className);
    if (childrenClassName) {
      newChildProps.className = childrenClassName;
    }
    var trigger = external__React__default.a.cloneElement(child, newChildProps);

    if (!IS_REACT_16) {
      return external__React__default.a.createElement(
        es_ContainerRender,
        {
          parent: this,
          visible: popupVisible,
          autoMount: false,
          forceRender: forceRender,
          getComponent: this.getComponent,
          getContainer: this.getContainer
        },
        function (_ref2) {
          var renderComponent = _ref2.renderComponent;

          _this4.renderComponent = renderComponent;
          return trigger;
        }
      );
    }

    var portal = void 0;
    // prevent unmounting after it's rendered
    if (popupVisible || this._component || forceRender) {
      portal = external__React__default.a.createElement(
        es_Portal,
        {
          key: 'portal',
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate
        },
        this.getComponent()
      );
    }

    return [trigger, portal];
  };

  return Trigger;
}(external__React__default.a.Component);

es_Trigger.propTypes = {
  children: prop_types_default.a.any,
  action: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.arrayOf(prop_types_default.a.string)]),
  showAction: prop_types_default.a.any,
  hideAction: prop_types_default.a.any,
  getPopupClassNameFromAlign: prop_types_default.a.any,
  onPopupVisibleChange: prop_types_default.a.func,
  afterPopupVisibleChange: prop_types_default.a.func,
  popup: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]).isRequired,
  popupStyle: prop_types_default.a.object,
  prefixCls: prop_types_default.a.string,
  popupClassName: prop_types_default.a.string,
  className: prop_types_default.a.string,
  popupPlacement: prop_types_default.a.string,
  builtinPlacements: prop_types_default.a.object,
  popupTransitionName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  popupAnimation: prop_types_default.a.any,
  mouseEnterDelay: prop_types_default.a.number,
  mouseLeaveDelay: prop_types_default.a.number,
  zIndex: prop_types_default.a.number,
  focusDelay: prop_types_default.a.number,
  blurDelay: prop_types_default.a.number,
  getPopupContainer: prop_types_default.a.func,
  getDocument: prop_types_default.a.func,
  forceRender: prop_types_default.a.bool,
  destroyPopupOnHide: prop_types_default.a.bool,
  mask: prop_types_default.a.bool,
  maskClosable: prop_types_default.a.bool,
  onPopupAlign: prop_types_default.a.func,
  popupAlign: prop_types_default.a.object,
  popupVisible: prop_types_default.a.bool,
  defaultPopupVisible: prop_types_default.a.bool,
  maskTransitionName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  maskAnimation: prop_types_default.a.string,
  stretch: prop_types_default.a.string,
  alignPoint: prop_types_default.a.bool // Maybe we can support user pass position in the future
};
es_Trigger.contextTypes = contextTypes;
es_Trigger.childContextTypes = contextTypes;
es_Trigger.defaultProps = {
  prefixCls: 'rc-trigger-popup',
  getPopupClassNameFromAlign: returnEmptyString,
  getDocument: returnDocument,
  onPopupVisibleChange: es_noop,
  afterPopupVisibleChange: es_noop,
  onPopupAlign: es_noop,
  popupClassName: '',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  focusDelay: 0,
  blurDelay: 0.15,
  popupStyle: {},
  destroyPopupOnHide: false,
  popupAlign: {},
  defaultPopupVisible: false,
  mask: false,
  maskClosable: true,
  action: [],
  showAction: [],
  hideAction: []
};

var es__initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.onMouseEnter = function (e) {
    var mouseEnterDelay = _this5.props.mouseEnterDelay;

    _this5.fireEvents('onMouseEnter', e);
    _this5.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
  };

  this.onMouseMove = function (e) {
    _this5.fireEvents('onMouseMove', e);
    _this5.setPoint(e);
  };

  this.onMouseLeave = function (e) {
    _this5.fireEvents('onMouseLeave', e);
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onPopupMouseEnter = function () {
    _this5.clearDelayTimer();
  };

  this.onPopupMouseLeave = function (e) {
    // https://github.com/react-component/trigger/pull/13
    // react bug?
    if (e.relatedTarget && !e.relatedTarget.setTimeout && _this5._component && _this5._component.getPopupDomNode && contains(_this5._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onFocus = function (e) {
    _this5.fireEvents('onFocus', e);
    // incase focusin and focusout
    _this5.clearDelayTimer();
    if (_this5.isFocusToShow()) {
      _this5.focusTime = Date.now();
      _this5.delaySetPopupVisible(true, _this5.props.focusDelay);
    }
  };

  this.onMouseDown = function (e) {
    _this5.fireEvents('onMouseDown', e);
    _this5.preClickTime = Date.now();
  };

  this.onTouchStart = function (e) {
    _this5.fireEvents('onTouchStart', e);
    _this5.preTouchTime = Date.now();
  };

  this.onBlur = function (e) {
    _this5.fireEvents('onBlur', e);
    _this5.clearDelayTimer();
    if (_this5.isBlurToHide()) {
      _this5.delaySetPopupVisible(false, _this5.props.blurDelay);
    }
  };

  this.onContextMenu = function (e) {
    e.preventDefault();
    _this5.fireEvents('onContextMenu', e);
    _this5.setPopupVisible(true, e);
  };

  this.onContextMenuClose = function () {
    if (_this5.isContextMenuToShow()) {
      _this5.close();
    }
  };

  this.onClick = function (event) {
    _this5.fireEvents('onClick', event);
    // focus will trigger click
    if (_this5.focusTime) {
      var preTime = void 0;
      if (_this5.preClickTime && _this5.preTouchTime) {
        preTime = Math.min(_this5.preClickTime, _this5.preTouchTime);
      } else if (_this5.preClickTime) {
        preTime = _this5.preClickTime;
      } else if (_this5.preTouchTime) {
        preTime = _this5.preTouchTime;
      }
      if (Math.abs(preTime - _this5.focusTime) < 20) {
        return;
      }
      _this5.focusTime = 0;
    }
    _this5.preClickTime = 0;
    _this5.preTouchTime = 0;

    // Only prevent default when all the action is click.
    // https://github.com/ant-design/ant-design/issues/17043
    if (_this5.isClickToShow() && _this5.isClickToHide() && event && event.preventDefault) {
      event.preventDefault();
    }
    var nextVisible = !_this5.state.popupVisible;
    if (_this5.isClickToHide() && !nextVisible || nextVisible && _this5.isClickToShow()) {
      _this5.setPopupVisible(!_this5.state.popupVisible, event);
    }
  };

  this.onPopupMouseDown = function () {
    var _context$rcTrigger = _this5.context.rcTrigger,
        rcTrigger = _context$rcTrigger === undefined ? {} : _context$rcTrigger;

    _this5.hasPopupMouseDown = true;

    clearTimeout(_this5.mouseDownTimeout);
    _this5.mouseDownTimeout = setTimeout(function () {
      _this5.hasPopupMouseDown = false;
    }, 0);

    if (rcTrigger.onPopupMouseDown) {
      rcTrigger.onPopupMouseDown.apply(rcTrigger, arguments);
    }
  };

  this.onDocumentClick = function (event) {
    if (_this5.props.mask && !_this5.props.maskClosable) {
      return;
    }

    var target = event.target;
    var root = Object(external__ReactDOM_["findDOMNode"])(_this5);
    if (!contains(root, target) && !_this5.hasPopupMouseDown) {
      _this5.close();
    }
  };

  this.getRootDomNode = function () {
    return Object(external__ReactDOM_["findDOMNode"])(_this5);
  };

  this.getPopupClassNameFromAlign = function (align) {
    var className = [];
    var _props9 = _this5.props,
        popupPlacement = _props9.popupPlacement,
        builtinPlacements = _props9.builtinPlacements,
        prefixCls = _props9.prefixCls,
        alignPoint = _props9.alignPoint,
        getPopupClassNameFromAlign = _props9.getPopupClassNameFromAlign;

    if (popupPlacement && builtinPlacements) {
      className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint));
    }
    if (getPopupClassNameFromAlign) {
      className.push(getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  };

  this.getComponent = function () {
    var _props10 = _this5.props,
        prefixCls = _props10.prefixCls,
        destroyPopupOnHide = _props10.destroyPopupOnHide,
        popupClassName = _props10.popupClassName,
        action = _props10.action,
        onPopupAlign = _props10.onPopupAlign,
        popupAnimation = _props10.popupAnimation,
        popupTransitionName = _props10.popupTransitionName,
        popupStyle = _props10.popupStyle,
        mask = _props10.mask,
        maskAnimation = _props10.maskAnimation,
        maskTransitionName = _props10.maskTransitionName,
        zIndex = _props10.zIndex,
        popup = _props10.popup,
        stretch = _props10.stretch,
        alignPoint = _props10.alignPoint;
    var _state = _this5.state,
        popupVisible = _state.popupVisible,
        point = _state.point;


    var align = _this5.getPopupAlign();

    var mouseProps = {};
    if (_this5.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = _this5.onPopupMouseEnter;
    }
    if (_this5.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = _this5.onPopupMouseLeave;
    }

    mouseProps.onMouseDown = _this5.onPopupMouseDown;
    mouseProps.onTouchStart = _this5.onPopupMouseDown;

    return external__React__default.a.createElement(
      es_Popup,
      extends_default()({
        prefixCls: prefixCls,
        destroyPopupOnHide: destroyPopupOnHide,
        visible: popupVisible,
        point: alignPoint && point,
        className: popupClassName,
        action: action,
        align: align,
        onAlign: onPopupAlign,
        animation: popupAnimation,
        getClassNameFromAlign: _this5.getPopupClassNameFromAlign
      }, mouseProps, {
        stretch: stretch,
        getRootDomNode: _this5.getRootDomNode,
        style: popupStyle,
        mask: mask,
        zIndex: zIndex,
        transitionName: popupTransitionName,
        maskAnimation: maskAnimation,
        maskTransitionName: maskTransitionName,
        ref: _this5.savePopup
      }),
      typeof popup === 'function' ? popup() : popup
    );
  };

  this.getContainer = function () {
    var props = _this5.props;

    var popupContainer = document.createElement('div');
    // Make sure default popup container will never cause scrollbar appearing
    // https://github.com/react-component/trigger/issues/41
    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100%';
    var mountNode = props.getPopupContainer ? props.getPopupContainer(Object(external__ReactDOM_["findDOMNode"])(_this5)) : props.getDocument().body;
    mountNode.appendChild(popupContainer);
    return popupContainer;
  };

  this.setPoint = function (point) {
    var alignPoint = _this5.props.alignPoint;

    if (!alignPoint || !point) return;

    _this5.setState({
      point: {
        pageX: point.pageX,
        pageY: point.pageY
      }
    });
  };

  this.handlePortalUpdate = function () {
    if (_this5.prevPopupVisible !== _this5.state.popupVisible) {
      _this5.props.afterPopupVisibleChange(_this5.state.popupVisible);
    }
  };

  this.savePopup = function (node) {
    _this5._component = node;
  };
};

/* harmony default export */ var rc_trigger_es = (es_Trigger);
// CONCATENATED MODULE: ../node_modules/rc-tooltip/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var placements_targetOffset = [0, 0];

var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: placements_targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: placements_targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: placements_targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: placements_targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: placements_targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: placements_targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: placements_targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: placements_targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: placements_targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: placements_targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: placements_targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: placements_targetOffset
  }
};

/* harmony default export */ var es_placements = (placements);
// CONCATENATED MODULE: ../node_modules/rc-tooltip/es/Content.js






var Content_Content = function (_React$Component) {
  inherits_default()(Content, _React$Component);

  function Content() {
    classCallCheck_default()(this, Content);

    return possibleConstructorReturn_default()(this, _React$Component.apply(this, arguments));
  }

  Content.prototype.componentDidUpdate = function componentDidUpdate() {
    var trigger = this.props.trigger;

    if (trigger) {
      trigger.forcePopupAlign();
    }
  };

  Content.prototype.render = function render() {
    var _props = this.props,
        overlay = _props.overlay,
        prefixCls = _props.prefixCls,
        id = _props.id;

    return external__React__default.a.createElement(
      'div',
      { className: prefixCls + '-inner', id: id, role: 'tooltip' },
      typeof overlay === 'function' ? overlay() : overlay
    );
  };

  return Content;
}(external__React__default.a.Component);

Content_Content.propTypes = {
  prefixCls: prop_types_default.a.string,
  overlay: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]).isRequired,
  id: prop_types_default.a.string,
  trigger: prop_types_default.a.any
};
/* harmony default export */ var es_Content = (Content_Content);
// CONCATENATED MODULE: ../node_modules/rc-tooltip/es/Tooltip.js











var Tooltip_Tooltip = function (_Component) {
  inherits_default()(Tooltip, _Component);

  function Tooltip() {
    var _temp, _this, _ret;

    classCallCheck_default()(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getPopupElement = function () {
      var _this$props = _this.props,
          arrowContent = _this$props.arrowContent,
          overlay = _this$props.overlay,
          prefixCls = _this$props.prefixCls,
          id = _this$props.id;

      return [external__React__default.a.createElement(
        'div',
        { className: prefixCls + '-arrow', key: 'arrow' },
        arrowContent
      ), external__React__default.a.createElement(es_Content, {
        key: 'content',
        trigger: _this.trigger,
        prefixCls: prefixCls,
        id: id,
        overlay: overlay
      })];
    }, _this.saveTrigger = function (node) {
      _this.trigger = node;
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  Tooltip.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.trigger.getPopupDomNode();
  };

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        overlayClassName = _props.overlayClassName,
        trigger = _props.trigger,
        mouseEnterDelay = _props.mouseEnterDelay,
        mouseLeaveDelay = _props.mouseLeaveDelay,
        overlayStyle = _props.overlayStyle,
        prefixCls = _props.prefixCls,
        children = _props.children,
        onVisibleChange = _props.onVisibleChange,
        afterVisibleChange = _props.afterVisibleChange,
        transitionName = _props.transitionName,
        animation = _props.animation,
        placement = _props.placement,
        align = _props.align,
        destroyTooltipOnHide = _props.destroyTooltipOnHide,
        defaultVisible = _props.defaultVisible,
        getTooltipContainer = _props.getTooltipContainer,
        restProps = objectWithoutProperties_default()(_props, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'children', 'onVisibleChange', 'afterVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

    var extraProps = extends_default()({}, restProps);
    if ('visible' in this.props) {
      extraProps.popupVisible = this.props.visible;
    }
    return external__React__default.a.createElement(
      rc_trigger_es,
      extends_default()({
        popupClassName: overlayClassName,
        ref: this.saveTrigger,
        prefixCls: prefixCls,
        popup: this.getPopupElement,
        action: trigger,
        builtinPlacements: placements,
        popupPlacement: placement,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltipOnHide,
        mouseLeaveDelay: mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay: mouseEnterDelay
      }, extraProps),
      children
    );
  };

  return Tooltip;
}(external__React_["Component"]);

Tooltip_Tooltip.propTypes = {
  trigger: prop_types_default.a.any,
  children: prop_types_default.a.any,
  defaultVisible: prop_types_default.a.bool,
  visible: prop_types_default.a.bool,
  placement: prop_types_default.a.string,
  transitionName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  animation: prop_types_default.a.any,
  onVisibleChange: prop_types_default.a.func,
  afterVisibleChange: prop_types_default.a.func,
  overlay: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]).isRequired,
  overlayStyle: prop_types_default.a.object,
  overlayClassName: prop_types_default.a.string,
  prefixCls: prop_types_default.a.string,
  mouseEnterDelay: prop_types_default.a.number,
  mouseLeaveDelay: prop_types_default.a.number,
  getTooltipContainer: prop_types_default.a.func,
  destroyTooltipOnHide: prop_types_default.a.bool,
  align: prop_types_default.a.object,
  arrowContent: prop_types_default.a.any,
  id: prop_types_default.a.string
};
Tooltip_Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  mouseEnterDelay: 0,
  destroyTooltipOnHide: false,
  mouseLeaveDelay: 0.1,
  align: {},
  placement: 'right',
  trigger: ['hover'],
  arrowContent: null
};


/* harmony default export */ var es_Tooltip = (Tooltip_Tooltip);
// CONCATENATED MODULE: ../node_modules/rc-tooltip/es/index.js


/* harmony default export */ var rc_tooltip_es = (es_Tooltip);
// CONCATENATED MODULE: ../node_modules/rc-slider/es/createSliderWithTooltip.js












function createSliderWithTooltip(Component) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    inherits_default()(ComponentWrapper, _React$Component);

    function ComponentWrapper(props) {
      classCallCheck_default()(this, ComponentWrapper);

      var _this = possibleConstructorReturn_default()(this, (ComponentWrapper.__proto__ || Object.getPrototypeOf(ComponentWrapper)).call(this, props));

      _this.handleTooltipVisibleChange = function (index, visible) {
        _this.setState(function (prevState) {
          return {
            visibles: extends_default()({}, prevState.visibles, defineProperty_default()({}, index, visible))
          };
        });
      };

      _this.handleWithTooltip = function (_ref) {
        var value = _ref.value,
            dragging = _ref.dragging,
            index = _ref.index,
            disabled = _ref.disabled,
            restProps = objectWithoutProperties_default()(_ref, ['value', 'dragging', 'index', 'disabled']);

        var _this$props = _this.props,
            tipFormatter = _this$props.tipFormatter,
            tipProps = _this$props.tipProps,
            handleStyle = _this$props.handleStyle;

        var _tipProps$prefixCls = tipProps.prefixCls,
            prefixCls = _tipProps$prefixCls === undefined ? 'rc-slider-tooltip' : _tipProps$prefixCls,
            _tipProps$overlay = tipProps.overlay,
            overlay = _tipProps$overlay === undefined ? tipFormatter(value) : _tipProps$overlay,
            _tipProps$placement = tipProps.placement,
            placement = _tipProps$placement === undefined ? 'top' : _tipProps$placement,
            _tipProps$visible = tipProps.visible,
            visible = _tipProps$visible === undefined ? false : _tipProps$visible,
            restTooltipProps = objectWithoutProperties_default()(tipProps, ['prefixCls', 'overlay', 'placement', 'visible']);

        var handleStyleWithIndex = void 0;
        if (Array.isArray(handleStyle)) {
          handleStyleWithIndex = handleStyle[index] || handleStyle[0];
        } else {
          handleStyleWithIndex = handleStyle;
        }

        return external__React__default.a.createElement(
          rc_tooltip_es,
          extends_default()({}, restTooltipProps, {
            prefixCls: prefixCls,
            overlay: overlay,
            placement: placement,
            visible: !disabled && (_this.state.visibles[index] || dragging) || visible,
            key: index
          }),
          external__React__default.a.createElement(es_Handle, extends_default()({}, restProps, {
            style: extends_default()({}, handleStyleWithIndex),
            value: value,
            onMouseEnter: function onMouseEnter() {
              return _this.handleTooltipVisibleChange(index, true);
            },
            onMouseLeave: function onMouseLeave() {
              return _this.handleTooltipVisibleChange(index, false);
            }
          }))
        );
      };

      _this.state = { visibles: {} };
      return _this;
    }

    createClass_default()(ComponentWrapper, [{
      key: 'render',
      value: function render() {
        return external__React__default.a.createElement(Component, extends_default()({}, this.props, { handle: this.handleWithTooltip }));
      }
    }]);

    return ComponentWrapper;
  }(external__React__default.a.Component), _class.propTypes = {
    tipFormatter: prop_types_default.a.func,
    handleStyle: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.arrayOf(prop_types_default.a.object)]),
    tipProps: prop_types_default.a.object
  }, _class.defaultProps = {
    tipFormatter: function tipFormatter(value) {
      return value;
    },

    handleStyle: [{}],
    tipProps: {}
  }, _temp;
}
// CONCATENATED MODULE: ../node_modules/rc-slider/es/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Range", function() { return es_Range; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Handle", function() { return es_Handle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "createSliderWithTooltip", function() { return createSliderWithTooltip; });





es_Slider.Range = es_Range;
es_Slider.Handle = es_Handle;
es_Slider.createSliderWithTooltip = createSliderWithTooltip;
/* harmony default export */ var rc_slider_es = __webpack_exports__["default"] = (es_Slider);


/***/ }),
/* 160 */
/*!**************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/assign.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ 161), __esModule: true };

/***/ }),
/* 161 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/assign.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ 162);
module.exports = __webpack_require__(/*! ../../modules/_core */ 6).Object.assign;


/***/ }),
/* 162 */
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.assign.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ 14);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ 164) });


/***/ }),
/* 163 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_a-function.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 164 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-assign.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 17);
var getKeys = __webpack_require__(/*! ./_object-keys */ 47);
var gOPS = __webpack_require__(/*! ./_object-gops */ 74);
var pIE = __webpack_require__(/*! ./_object-pie */ 50);
var toObject = __webpack_require__(/*! ./_to-object */ 36);
var IObject = __webpack_require__(/*! ./_iobject */ 98);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ 31)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 165 */
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_array-includes.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ 24);
var toLength = __webpack_require__(/*! ./_to-length */ 99);
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 166);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 166 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 70);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 167 */
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/define-property.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ 168);
var $Object = __webpack_require__(/*! ../../modules/_core */ 6).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 168 */
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 17), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ 16).f });


/***/ }),
/* 169 */
/*!****************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ 170), __esModule: true };

/***/ }),
/* 170 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/fn/symbol/iterator.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ 101);
__webpack_require__(/*! ../../modules/web.dom.iterable */ 175);
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ 78).f('iterator');


/***/ }),
/* 171 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_string-at.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 70);
var defined = __webpack_require__(/*! ./_defined */ 69);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 172 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-create.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ 76);
var descriptor = __webpack_require__(/*! ./_property-desc */ 35);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 77);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ 28)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 8)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 173 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-dps.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 16);
var anObject = __webpack_require__(/*! ./_an-object */ 29);
var getKeys = __webpack_require__(/*! ./_object-keys */ 47);

module.exports = __webpack_require__(/*! ./_descriptors */ 17) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 174 */
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_html.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ 15).document;
module.exports = document && document.documentElement;


/***/ }),
/* 175 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ 176);
var global = __webpack_require__(/*! ./_global */ 15);
var hide = __webpack_require__(/*! ./_hide */ 28);
var Iterators = __webpack_require__(/*! ./_iterators */ 37);
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ 8)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 176 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 177);
var step = __webpack_require__(/*! ./_iter-step */ 178);
var Iterators = __webpack_require__(/*! ./_iterators */ 37);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 24);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ 102)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 177 */
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \**********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 178 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-step.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 179 */
/*!*******************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/symbol.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ 180), __esModule: true };

/***/ }),
/* 180 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/fn/symbol/index.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ 181);
__webpack_require__(/*! ../../modules/es6.object.to-string */ 186);
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ 187);
__webpack_require__(/*! ../../modules/es7.symbol.observable */ 188);
module.exports = __webpack_require__(/*! ../../modules/_core */ 6).Symbol;


/***/ }),
/* 181 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.symbol.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ 15);
var has = __webpack_require__(/*! ./_has */ 23);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 17);
var $export = __webpack_require__(/*! ./_export */ 14);
var redefine = __webpack_require__(/*! ./_redefine */ 103);
var META = __webpack_require__(/*! ./_meta */ 182).KEY;
var $fails = __webpack_require__(/*! ./_fails */ 31);
var shared = __webpack_require__(/*! ./_shared */ 72);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 77);
var uid = __webpack_require__(/*! ./_uid */ 49);
var wks = __webpack_require__(/*! ./_wks */ 8);
var wksExt = __webpack_require__(/*! ./_wks-ext */ 78);
var wksDefine = __webpack_require__(/*! ./_wks-define */ 79);
var enumKeys = __webpack_require__(/*! ./_enum-keys */ 183);
var isArray = __webpack_require__(/*! ./_is-array */ 184);
var anObject = __webpack_require__(/*! ./_an-object */ 29);
var isObject = __webpack_require__(/*! ./_is-object */ 30);
var toObject = __webpack_require__(/*! ./_to-object */ 36);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 24);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 67);
var createDesc = __webpack_require__(/*! ./_property-desc */ 35);
var _create = __webpack_require__(/*! ./_object-create */ 76);
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ 185);
var $GOPD = __webpack_require__(/*! ./_object-gopd */ 80);
var $GOPS = __webpack_require__(/*! ./_object-gops */ 74);
var $DP = __webpack_require__(/*! ./_object-dp */ 16);
var $keys = __webpack_require__(/*! ./_object-keys */ 47);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ 105).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ 50).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ 48)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ 28)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 182 */
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_meta.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ 49)('meta');
var isObject = __webpack_require__(/*! ./_is-object */ 30);
var has = __webpack_require__(/*! ./_has */ 23);
var setDesc = __webpack_require__(/*! ./_object-dp */ 16).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ 31)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 183 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_enum-keys.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ 47);
var gOPS = __webpack_require__(/*! ./_object-gops */ 74);
var pIE = __webpack_require__(/*! ./_object-pie */ 50);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 184 */
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_is-array.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ 68);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 185 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ 24);
var gOPN = __webpack_require__(/*! ./_object-gopn */ 105).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 186 */
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),
/* 187 */
/*!****************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 79)('asyncIterator');


/***/ }),
/* 188 */
/*!************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 79)('observable');


/***/ }),
/* 189 */
/*!************************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ 190), __esModule: true };

/***/ }),
/* 190 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ 191);
module.exports = __webpack_require__(/*! ../../modules/_core */ 6).Object.setPrototypeOf;


/***/ }),
/* 191 */
/*!******************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ 14);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ 192).set });


/***/ }),
/* 192 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_set-proto.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ 30);
var anObject = __webpack_require__(/*! ./_an-object */ 29);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ 66)(Function.call, __webpack_require__(/*! ./_object-gopd */ 80).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 193 */
/*!**************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/create.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ 194), __esModule: true };

/***/ }),
/* 194 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/create.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ 195);
var $Object = __webpack_require__(/*! ../../modules/_core */ 6).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 195 */
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.create.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 14);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ 76) });


/***/ }),
/* 196 */
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ 106);

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 107);
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ 197);

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 197 */
/*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 107);
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 198 */
/*!****************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/get.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ 199);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ 202);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 199 */
/*!************************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ 200), __esModule: true };

/***/ }),
/* 200 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ 201);
module.exports = __webpack_require__(/*! ../../modules/_core */ 6).Object.getPrototypeOf;


/***/ }),
/* 201 */
/*!******************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ 36);
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 104);

__webpack_require__(/*! ./_object-sap */ 108)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 202 */
/*!***********************************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \***********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ 203), __esModule: true };

/***/ }),
/* 203 */
/*!********************************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ 204);
var $Object = __webpack_require__(/*! ../../modules/_core */ 6).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 204 */
/*!*****************************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \*****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ 24);
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 80).f;

__webpack_require__(/*! ./_object-sap */ 108)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 205 */
/*!***********************************************************!*\
  !*** ../node_modules/add-dom-event-listener/lib/index.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = addEventListener;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _EventObject = __webpack_require__(/*! ./EventObject */ 206);

var _EventObject2 = _interopRequireDefault(_EventObject);

function addEventListener(target, eventType, callback, option) {
  function wrapCallback(e) {
    var ne = new _EventObject2['default'](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    var _ret = (function () {
      var useCapture = false;
      if (typeof option === 'object') {
        useCapture = option.capture || false;
      } else if (typeof option === 'boolean') {
        useCapture = option;
      }

      target.addEventListener(eventType, wrapCallback, option || false);

      return {
        v: {
          remove: function remove() {
            target.removeEventListener(eventType, wrapCallback, useCapture);
          }
        }
      };
    })();

    if (typeof _ret === 'object') return _ret.v;
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}

module.exports = exports['default'];

/***/ }),
/* 206 */
/*!*****************************************************************!*\
  !*** ../node_modules/add-dom-event-listener/lib/EventObject.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */



Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _EventBaseObject = __webpack_require__(/*! ./EventBaseObject */ 207);

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__(/*! object-assign */ 106);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = undefined;
    var deltaY = undefined;
    var delta = undefined;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = undefined;
    var doc = undefined;
    var body = undefined;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2['default'].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = undefined;
  var l = undefined;
  var prop = undefined;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },

  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports['default'] = DomEventObject;
module.exports = exports['default'];

/***/ }),
/* 207 */
/*!*********************************************************************!*\
  !*** ../node_modules/add-dom-event-listener/lib/EventBaseObject.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },

  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },

  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },

  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports["default"];

/***/ }),
/* 208 */
/*!***********************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/array/from.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ 209), __esModule: true };

/***/ }),
/* 209 */
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/fn/array/from.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ 101);
__webpack_require__(/*! ../../modules/es6.array.from */ 210);
module.exports = __webpack_require__(/*! ../../modules/_core */ 6).Array.from;


/***/ }),
/* 210 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.array.from.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ 66);
var $export = __webpack_require__(/*! ./_export */ 14);
var toObject = __webpack_require__(/*! ./_to-object */ 36);
var call = __webpack_require__(/*! ./_iter-call */ 211);
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 212);
var toLength = __webpack_require__(/*! ./_to-length */ 99);
var createProperty = __webpack_require__(/*! ./_create-property */ 213);
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 214);

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ 216)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 211 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-call.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ 29);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 212 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_is-array-iter.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ 37);
var ITERATOR = __webpack_require__(/*! ./_wks */ 8)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 213 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_create-property.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ 16);
var createDesc = __webpack_require__(/*! ./_property-desc */ 35);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 214 */
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ 215);
var ITERATOR = __webpack_require__(/*! ./_wks */ 8)('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ 37);
module.exports = __webpack_require__(/*! ./_core */ 6).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 215 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_classof.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ 68);
var TAG = __webpack_require__(/*! ./_wks */ 8)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 216 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-detect.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ 8)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 217 */
/*!*********************************************!*\
  !*** ../node_modules/shallowequal/index.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),
/* 218 */
/*!**************************************************!*\
  !*** ../node_modules/component-classes/index.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

try {
  var index = __webpack_require__(/*! indexof */ 110);
} catch (err) {
  var index = __webpack_require__(/*! component-indexof */ 110);
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};


/***/ }),
/* 219 */
/*!*************************************!*\
  !*** ./components/Gallery/index.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Gallery = __webpack_require__(/*! ./Gallery */ 220);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Gallery).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 220 */
/*!***************************************!*\
  !*** ./components/Gallery/Gallery.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Gallery = __webpack_require__(/*! ./Gallery.scss */ 221);

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CDN_URL = 'https://static.wixstatic.com/media/';

var getImgSize = function getImgSize(item, dimension) {
  var scale = window.devicePixelRatio;
  return Math.ceil(Math.min(scale * item[dimension], item['max' + (dimension[0].toUpperCase() + dimension.substring(1))]));
};

var getImageSrc = function getImageSrc(item) {
  var w = getImgSize(item, 'height');
  var h = getImgSize(item, 'width');
  return '' + CDN_URL + item.dto.url + '/v1/fit/w_' + w + ',h_' + h + ',al_c,q_80/file.jpg';
};

var getImageStyle = function getImageStyle(item) {
  return {
    top: item.offset.top,
    left: item.offset.left,
    width: item.width,
    height: item.height,
    backgroundImage: 'url(' + getImageSrc(item) + ')'
  };
};

var Gallery = function Gallery(_ref) {
  var layout = _ref.layout;
  return _react2.default.createElement(
    'div',
    { className: _Gallery2.default.root, style: { height: layout.height } },
    layout.items.map(function (item) {
      return _react2.default.createElement('div', { className: _Gallery2.default.item, style: getImageStyle(item), alt: item.idx });
    })
  );
};

Gallery.propTypes = {
  layout: _propTypes2.default.object
};

exports.default = Gallery;

/***/ }),
/* 221 */
/*!*****************************************!*\
  !*** ./components/Gallery/Gallery.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"components-Gallery-Gallery__root__1JS6n","item":"components-Gallery-Gallery__item__3qSoF"};

/***/ }),
/* 222 */
/*!************************************!*\
  !*** ./components/Sample/index.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sample = __webpack_require__(/*! ./Sample */ 223);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Sample).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 223 */
/*!*************************************!*\
  !*** ./components/Sample/Sample.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Sample = __webpack_require__(/*! ./Sample.scss */ 224);

var _Sample2 = _interopRequireDefault(_Sample);

var _reactTabs = __webpack_require__(/*! react-tabs */ 225);

__webpack_require__(/*! react-tabs/style/react-tabs.scss */ 226);

var _base = __webpack_require__(/*! ./samples/base */ 227);

var _base2 = _interopRequireDefault(_base);

var _absolute = __webpack_require__(/*! ./samples/absolute */ 228);

var _absolute2 = _interopRequireDefault(_absolute);

var _relative = __webpack_require__(/*! ./samples/relative */ 229);

var _relative2 = _interopRequireDefault(_relative);

var _react3 = __webpack_require__(/*! ./samples/react */ 230);

var _react4 = _interopRequireDefault(_react3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sample = function Sample(_ref) {
  var visible = _ref.visible,
      styleParams = _ref.styleParams,
      toggleSample = _ref.toggleSample;

  var display = visible ? 'block' : 'none';
  return !!visible && _react2.default.createElement(
    'div',
    { className: 'modal', tabindex: '-1', role: 'dialog', style: { display: display } },
    _react2.default.createElement(
      'div',
      { className: 'modal-dialog', role: 'document' },
      _react2.default.createElement(
        'div',
        { className: 'modal-content' },
        _react2.default.createElement(
          'div',
          { className: 'modal-body' },
          _react2.default.createElement(
            _reactTabs.Tabs,
            null,
            _react2.default.createElement(
              _reactTabs.TabList,
              null,
              _react2.default.createElement(
                _reactTabs.Tab,
                null,
                'Vanilla (Absolute)'
              ),
              _react2.default.createElement(
                _reactTabs.Tab,
                null,
                'Vanilla (Relative)'
              ),
              _react2.default.createElement(
                _reactTabs.Tab,
                null,
                'React (Absolute)'
              )
            ),
            _react2.default.createElement(
              _reactTabs.TabPanel,
              null,
              _react2.default.createElement(
                'pre',
                null,
                _react2.default.createElement('textarea', { onClick: function onClick(e) {
                    return e.target.select();
                  }, value: (0, _base2.default)(styleParams) + '\n' + _absolute2.default })
              )
            ),
            _react2.default.createElement(
              _reactTabs.TabPanel,
              null,
              _react2.default.createElement(
                'pre',
                null,
                _react2.default.createElement('textarea', { onClick: function onClick(e) {
                    return e.target.select();
                  }, value: (0, _base2.default)(styleParams) + '\n' + _relative2.default })
              )
            ),
            _react2.default.createElement(
              _reactTabs.TabPanel,
              null,
              _react2.default.createElement(
                'pre',
                null,
                _react2.default.createElement('textarea', { onClick: function onClick(e) {
                    return e.target.select();
                  }, value: 'import React from \'react\';\nimport ReactDOM from \'react-dom\';\n' + (0, _base2.default)(styleParams) + '\n' + _react4.default })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-footer' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-danger', 'data-dismiss': 'modal', onClick: function onClick() {
                return toggleSample();
              } },
            'Close'
          )
        )
      )
    )
  );
};

exports.default = Sample;

/***/ }),
/* 224 */
/*!***************************************!*\
  !*** ./components/Sample/Sample.scss ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"components-Sample-Sample__root__2MPO6","modal":"components-Sample-Sample__modal__YdmVo"};

/***/ }),
/* 225 */
/*!************************************************************!*\
  !*** ../node_modules/react-tabs/esm/index.js + 10 modules ***!
  \************************************************************/
/*! exports provided: Tabs, TabList, Tab, TabPanel, resetIdCounter */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./components/Sample/Sample.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external "React"
var external__React_ = __webpack_require__(0);
var external__React__default = /*#__PURE__*/__webpack_require__.n(external__React_);

// CONCATENATED MODULE: ../node_modules/react-tabs/esm/helpers/elementTypes.js
function isTab(el) {
  return el.type && el.type.tabsRole === 'Tab';
}
function isTabPanel(el) {
  return el.type && el.type.tabsRole === 'TabPanel';
}
function isTabList(el) {
  return el.type && el.type.tabsRole === 'TabList';
}
// CONCATENATED MODULE: ../node_modules/react-tabs/esm/helpers/childrenDeepMap.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function isTabChild(child) {
  return isTab(child) || isTabList(child) || isTabPanel(child);
}

function deepMap(children, callback) {
  return external__React_["Children"].map(children, function (child) {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return null;

    if (isTabChild(child)) {
      return callback(child);
    }

    if (child.props && child.props.children && typeof child.props.children === 'object') {
      // Clone the child that has children and map them too
      return Object(external__React_["cloneElement"])(child, _objectSpread({}, child.props, {
        children: deepMap(child.props.children, callback)
      }));
    }

    return child;
  });
}
function deepForEach(children, callback) {
  return external__React_["Children"].forEach(children, function (child) {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return;

    if (isTab(child) || isTabPanel(child)) {
      callback(child);
    } else if (child.props && child.props.children && typeof child.props.children === 'object') {
      if (isTabList(child)) callback(child);
      deepForEach(child.props.children, callback);
    }
  });
}
// CONCATENATED MODULE: ../node_modules/react-tabs/esm/helpers/propTypes.js


function childrenPropType(props, propName, componentName) {
  var error;
  var tabsCount = 0;
  var panelsCount = 0;
  var tabListFound = false;
  var listTabs = [];
  var children = props[propName];
  deepForEach(children, function (child) {
    if (isTabList(child)) {
      if (child.props && child.props.children && typeof child.props.children === 'object') {
        deepForEach(child.props.children, function (listChild) {
          return listTabs.push(listChild);
        });
      }

      if (tabListFound) {
        error = new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.");
      }

      tabListFound = true;
    }

    if (isTab(child)) {
      if (!tabListFound || listTabs.indexOf(child) === -1) {
        error = new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components " + "have to be inside the 'TabList' component.");
      }

      tabsCount++;
    } else if (isTabPanel(child)) {
      panelsCount++;
    }
  });

  if (!error && tabsCount !== panelsCount) {
    error = new Error("There should be an equal number of 'Tab' and 'TabPanel' in `" + componentName + "`. " + ("Received " + tabsCount + " 'Tab' and " + panelsCount + " 'TabPanel'."));
  }

  return error;
}
function onSelectPropType(props, propName, componentName, location, propFullName) {
  var prop = props[propName];
  var name = propFullName || propName;
  var error = null;

  if (prop && typeof prop !== 'function') {
    error = new Error("Invalid " + location + " `" + name + "` of type `" + typeof prop + "` supplied " + ("to `" + componentName + "`, expected `function`."));
  } else if (props.selectedIndex != null && prop == null) {
    error = new Error("The " + location + " `" + name + "` is marked as required in `" + componentName + "`, but " + "its value is `undefined` or `null`.\n" + "`onSelect` is required when `selectedIndex` is also set. Not doing so will " + "make the tabs not do anything, as `selectedIndex` indicates that you want to " + "handle the selected tab yourself.\n" + "If you only want to set the inital tab replace `selectedIndex` with `defaultIndex`.");
  }

  return error;
}
function selectedIndexPropType(props, propName, componentName, location, propFullName) {
  var prop = props[propName];
  var name = propFullName || propName;
  var error = null;

  if (prop != null && typeof prop !== 'number') {
    error = new Error("Invalid " + location + " `" + name + "` of type `" + typeof prop + "` supplied to " + ("`" + componentName + "`, expected `number`."));
  } else if (props.defaultIndex != null && prop != null) {
    return new Error("The " + location + " `" + name + "` cannot be used together with `defaultIndex` " + ("in `" + componentName + "`.\n") + ("Either remove `" + name + "` to let `" + componentName + "` handle the selected ") + "tab internally or remove `defaultIndex` to handle it yourself.");
  }

  return error;
}
// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__(9);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ../node_modules/react-tabs/esm/helpers/uuid.js
// Get a universally unique identifier
var count = 0;
function uuid() {
  return "react-tabs-" + count++;
}
function uuid_reset() {
  count = 0;
}
// CONCATENATED MODULE: ../node_modules/react-tabs/esm/helpers/count.js


function count_getTabsCount(children) {
  var tabCount = 0;
  deepForEach(children, function (child) {
    if (isTab(child)) tabCount++;
  });
  return tabCount;
}
function count_getPanelsCount(children) {
  var panelCount = 0;
  deepForEach(children, function (child) {
    if (isTabPanel(child)) panelCount++;
  });
  return panelCount;
}
// CONCATENATED MODULE: ../node_modules/react-tabs/esm/components/UncontrolledTabs.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }








 // Determine if a node from event.target is a Tab element

function isTabNode(node) {
  return 'getAttribute' in node && node.getAttribute('role') === 'tab';
} // Determine if a tab node is disabled


function isTabDisabled(node) {
  return node.getAttribute('aria-disabled') === 'true';
}

var canUseActiveElement;

try {
  canUseActiveElement = !!(typeof window !== 'undefined' && window.document && window.document.activeElement);
} catch (e) {
  // Work around for IE bug when accessing document.activeElement in an iframe
  // Refer to the following resources:
  // http://stackoverflow.com/a/10982960/369687
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12733599
  canUseActiveElement = false;
}

var UncontrolledTabs_UncontrolledTabs =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UncontrolledTabs, _Component);

  function UncontrolledTabs() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.tabNodes = [];

    _this.handleKeyDown = function (e) {
      if (_this.isTabFromContainer(e.target)) {
        var index = _this.props.selectedIndex;
        var preventDefault = false;
        var useSelectedIndex = false;

        if (e.keyCode === 32 || e.keyCode === 13) {
          preventDefault = true;
          useSelectedIndex = false;

          _this.handleClick(e);
        }

        if (e.keyCode === 37 || e.keyCode === 38) {
          // Select next tab to the left
          index = _this.getPrevTab(index);
          preventDefault = true;
          useSelectedIndex = true;
        } else if (e.keyCode === 39 || e.keyCode === 40) {
          // Select next tab to the right
          index = _this.getNextTab(index);
          preventDefault = true;
          useSelectedIndex = true;
        } else if (e.keyCode === 35) {
          // Select last tab (End key)
          index = _this.getLastTab();
          preventDefault = true;
          useSelectedIndex = true;
        } else if (e.keyCode === 36) {
          // Select first tab (Home key)
          index = _this.getFirstTab();
          preventDefault = true;
          useSelectedIndex = true;
        } // This prevents scrollbars from moving around


        if (preventDefault) {
          e.preventDefault();
        } // Only use the selected index in the state if we're not using the tabbed index


        if (useSelectedIndex) {
          _this.setSelected(index, e);
        }
      }
    };

    _this.handleClick = function (e) {
      var node = e.target; // eslint-disable-next-line no-cond-assign

      do {
        if (_this.isTabFromContainer(node)) {
          if (isTabDisabled(node)) {
            return;
          }

          var index = [].slice.call(node.parentNode.children).filter(isTabNode).indexOf(node);

          _this.setSelected(index, e);

          return;
        }
      } while ((node = node.parentNode) !== null);
    };

    return _this;
  }

  var _proto = UncontrolledTabs.prototype;

  _proto.setSelected = function setSelected(index, event) {
    // Check index boundary
    if (index < 0 || index >= this.getTabsCount()) return;
    var _this$props = this.props,
        onSelect = _this$props.onSelect,
        selectedIndex = _this$props.selectedIndex; // Call change event handler

    onSelect(index, selectedIndex, event);
  };

  _proto.getNextTab = function getNextTab(index) {
    var count = this.getTabsCount(); // Look for non-disabled tab from index to the last tab on the right

    for (var i = index + 1; i < count; i++) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    } // If no tab found, continue searching from first on left to index


    for (var _i = 0; _i < index; _i++) {
      if (!isTabDisabled(this.getTab(_i))) {
        return _i;
      }
    } // No tabs are disabled, return index


    return index;
  };

  _proto.getPrevTab = function getPrevTab(index) {
    var i = index; // Look for non-disabled tab from index to first tab on the left

    while (i--) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    } // If no tab found, continue searching from last tab on right to index


    i = this.getTabsCount();

    while (i-- > index) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    } // No tabs are disabled, return index


    return index;
  };

  _proto.getFirstTab = function getFirstTab() {
    var count = this.getTabsCount(); // Look for non disabled tab from the first tab

    for (var i = 0; i < count; i++) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    }

    return null;
  };

  _proto.getLastTab = function getLastTab() {
    var i = this.getTabsCount(); // Look for non disabled tab from the last tab

    while (i--) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    }

    return null;
  };

  _proto.getTabsCount = function getTabsCount() {
    var children = this.props.children;
    return count_getTabsCount(children);
  };

  _proto.getPanelsCount = function getPanelsCount() {
    var children = this.props.children;
    return count_getPanelsCount(children);
  };

  _proto.getTab = function getTab(index) {
    return this.tabNodes["tabs-" + index];
  };

  _proto.getChildren = function getChildren() {
    var _this2 = this;

    var index = 0;
    var _this$props2 = this.props,
        children = _this$props2.children,
        disabledTabClassName = _this$props2.disabledTabClassName,
        focus = _this$props2.focus,
        forceRenderTabPanel = _this$props2.forceRenderTabPanel,
        selectedIndex = _this$props2.selectedIndex,
        selectedTabClassName = _this$props2.selectedTabClassName,
        selectedTabPanelClassName = _this$props2.selectedTabPanelClassName;
    this.tabIds = this.tabIds || [];
    this.panelIds = this.panelIds || [];
    var diff = this.tabIds.length - this.getTabsCount(); // Add ids if new tabs have been added
    // Don't bother removing ids, just keep them in case they are added again
    // This is more efficient, and keeps the uuid counter under control

    while (diff++ < 0) {
      this.tabIds.push(uuid());
      this.panelIds.push(uuid());
    } // Map children to dynamically setup refs


    return deepMap(children, function (child) {
      var result = child; // Clone TabList and Tab components to have refs

      if (isTabList(child)) {
        var listIndex = 0; // Figure out if the current focus in the DOM is set on a Tab
        // If it is we should keep the focus on the next selected tab

        var wasTabFocused = false;

        if (canUseActiveElement) {
          wasTabFocused = external__React__default.a.Children.toArray(child.props.children).filter(isTab).some(function (tab, i) {
            return document.activeElement === _this2.getTab(i);
          });
        }

        result = Object(external__React_["cloneElement"])(child, {
          children: deepMap(child.props.children, function (tab) {
            var key = "tabs-" + listIndex;
            var selected = selectedIndex === listIndex;
            var props = {
              tabRef: function tabRef(node) {
                _this2.tabNodes[key] = node;
              },
              id: _this2.tabIds[listIndex],
              panelId: _this2.panelIds[listIndex],
              selected: selected,
              focus: selected && (focus || wasTabFocused)
            };
            if (selectedTabClassName) props.selectedClassName = selectedTabClassName;
            if (disabledTabClassName) props.disabledClassName = disabledTabClassName;
            listIndex++;
            return Object(external__React_["cloneElement"])(tab, props);
          })
        });
      } else if (isTabPanel(child)) {
        var props = {
          id: _this2.panelIds[index],
          tabId: _this2.tabIds[index],
          selected: selectedIndex === index
        };
        if (forceRenderTabPanel) props.forceRender = forceRenderTabPanel;
        if (selectedTabPanelClassName) props.selectedClassName = selectedTabPanelClassName;
        index++;
        result = Object(external__React_["cloneElement"])(child, props);
      }

      return result;
    });
  };

  /**
   * Determine if a node from event.target is a Tab element for the current Tabs container.
   * If the clicked element is not a Tab, it returns false.
   * If it finds another Tabs container between the Tab and `this`, it returns false.
   */
  _proto.isTabFromContainer = function isTabFromContainer(node) {
    // return immediately if the clicked element is not a Tab.
    if (!isTabNode(node)) {
      return false;
    } // Check if the first occurrence of a Tabs container is `this` one.


    var nodeAncestor = node.parentElement;

    do {
      if (nodeAncestor === this.node) return true;
      if (nodeAncestor.getAttribute('data-tabs')) break;
      nodeAncestor = nodeAncestor.parentElement;
    } while (nodeAncestor);

    return false;
  };

  _proto.render = function render() {
    var _this3 = this;

    // Delete all known props, so they don't get added to DOM
    var _this$props3 = this.props,
        children = _this$props3.children,
        className = _this$props3.className,
        disabledTabClassName = _this$props3.disabledTabClassName,
        domRef = _this$props3.domRef,
        focus = _this$props3.focus,
        forceRenderTabPanel = _this$props3.forceRenderTabPanel,
        onSelect = _this$props3.onSelect,
        selectedIndex = _this$props3.selectedIndex,
        selectedTabClassName = _this$props3.selectedTabClassName,
        selectedTabPanelClassName = _this$props3.selectedTabPanelClassName,
        attributes = _objectWithoutPropertiesLoose(_this$props3, ["children", "className", "disabledTabClassName", "domRef", "focus", "forceRenderTabPanel", "onSelect", "selectedIndex", "selectedTabClassName", "selectedTabPanelClassName"]);

    return external__React__default.a.createElement("div", _extends({}, attributes, {
      className: classnames_default()(className),
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      ref: function ref(node) {
        _this3.node = node;
        if (domRef) domRef(node);
      },
      "data-tabs": true
    }), this.getChildren());
  };

  return UncontrolledTabs;
}(external__React_["Component"]);

UncontrolledTabs_UncontrolledTabs.defaultProps = {
  className: 'react-tabs',
  focus: false
};

UncontrolledTabs_UncontrolledTabs.propTypes =  true ? {
  children: childrenPropType,
  className: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.array, prop_types_default.a.object]),
  disabledTabClassName: prop_types_default.a.string,
  domRef: prop_types_default.a.func,
  focus: prop_types_default.a.bool,
  forceRenderTabPanel: prop_types_default.a.bool,
  onSelect: prop_types_default.a.func.isRequired,
  selectedIndex: prop_types_default.a.number.isRequired,
  selectedTabClassName: prop_types_default.a.string,
  selectedTabPanelClassName: prop_types_default.a.string
} : {};
// CONCATENATED MODULE: ../node_modules/react-tabs/esm/components/Tabs.js
function Tabs__objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Tabs__inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }







var Tabs_Tabs =
/*#__PURE__*/
function (_Component) {
  Tabs__inheritsLoose(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleSelected = function (index, last, event) {
      var onSelect = _this.props.onSelect; // Call change event handler

      if (typeof onSelect === 'function') {
        // Check if the change event handler cancels the tab change
        if (onSelect(index, last, event) === false) return;
      }

      var state = {
        // Set focus if the change was triggered from the keyboard
        focus: event.type === 'keydown'
      };

      if (Tabs.inUncontrolledMode(_this.props)) {
        // Update selected index
        state.selectedIndex = index;
      }

      _this.setState(state);
    };

    _this.state = Tabs.copyPropsToState(_this.props, {}, props.defaultFocus);
    return _this;
  }

  var _proto = Tabs.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    if ("development" !== 'production' && Tabs.inUncontrolledMode(newProps) !== Tabs.inUncontrolledMode(this.props)) {
      throw new Error("Switching between controlled mode (by using `selectedIndex`) and uncontrolled mode is not supported in `Tabs`.\nFor more information about controlled and uncontrolled mode of react-tabs see the README.");
    } // Use a transactional update to prevent race conditions
    // when reading the state in copyPropsToState
    // See https://github.com/reactjs/react-tabs/issues/51


    this.setState(function (state) {
      return Tabs.copyPropsToState(newProps, state);
    });
  };

  Tabs.inUncontrolledMode = function inUncontrolledMode(props) {
    return props.selectedIndex === null;
  };

  // preserve the existing selectedIndex from state.
  // If the state has not selectedIndex, default to the defaultIndex or 0
  Tabs.copyPropsToState = function copyPropsToState(props, state, focus) {
    if (focus === void 0) {
      focus = false;
    }

    var newState = {
      focus: focus
    };

    if (Tabs.inUncontrolledMode(props)) {
      var maxTabIndex = count_getTabsCount(props.children) - 1;
      var selectedIndex = null;

      if (state.selectedIndex != null) {
        selectedIndex = Math.min(state.selectedIndex, maxTabIndex);
      } else {
        selectedIndex = props.defaultIndex || 0;
      }

      newState.selectedIndex = selectedIndex;
    }

    return newState;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        defaultIndex = _this$props.defaultIndex,
        defaultFocus = _this$props.defaultFocus,
        props = Tabs__objectWithoutPropertiesLoose(_this$props, ["children", "defaultIndex", "defaultFocus"]);

    var _this$state = this.state,
        focus = _this$state.focus,
        selectedIndex = _this$state.selectedIndex;
    props.focus = focus;
    props.onSelect = this.handleSelected;

    if (selectedIndex != null) {
      props.selectedIndex = selectedIndex;
    }

    return external__React__default.a.createElement(UncontrolledTabs_UncontrolledTabs, props, children);
  };

  return Tabs;
}(external__React_["Component"]);

Tabs_Tabs.defaultProps = {
  defaultFocus: false,
  forceRenderTabPanel: false,
  selectedIndex: null,
  defaultIndex: null
};

Tabs_Tabs.propTypes =  true ? {
  children: childrenPropType,
  className: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.array, prop_types_default.a.object]),
  defaultFocus: prop_types_default.a.bool,
  defaultIndex: prop_types_default.a.number,
  disabledTabClassName: prop_types_default.a.string,
  domRef: prop_types_default.a.func,
  forceRenderTabPanel: prop_types_default.a.bool,
  onSelect: onSelectPropType,
  selectedIndex: selectedIndexPropType,
  selectedTabClassName: prop_types_default.a.string,
  selectedTabPanelClassName: prop_types_default.a.string
} : {};
Tabs_Tabs.tabsRole = 'Tabs';
// CONCATENATED MODULE: ../node_modules/react-tabs/esm/components/TabList.js
function TabList__extends() { TabList__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TabList__extends.apply(this, arguments); }

function TabList__objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TabList__inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var TabList_TabList =
/*#__PURE__*/
function (_Component) {
  TabList__inheritsLoose(TabList, _Component);

  function TabList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TabList.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        attributes = TabList__objectWithoutPropertiesLoose(_this$props, ["children", "className"]);

    return external__React__default.a.createElement("ul", TabList__extends({}, attributes, {
      className: classnames_default()(className),
      role: "tablist"
    }), children);
  };

  return TabList;
}(external__React_["Component"]);

TabList_TabList.defaultProps = {
  className: 'react-tabs__tab-list'
};

TabList_TabList.propTypes =  true ? {
  children: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.array]),
  className: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.array, prop_types_default.a.object])
} : {};
TabList_TabList.tabsRole = 'TabList';
// CONCATENATED MODULE: ../node_modules/react-tabs/esm/components/Tab.js
function Tab__extends() { Tab__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Tab__extends.apply(this, arguments); }

function Tab__objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Tab__inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var DEFAULT_CLASS = 'react-tabs__tab';

var Tab_Tab =
/*#__PURE__*/
function (_Component) {
  Tab__inheritsLoose(Tab, _Component);

  function Tab() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.checkFocus();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.checkFocus();
  };

  _proto.checkFocus = function checkFocus() {
    var _this$props = this.props,
        selected = _this$props.selected,
        focus = _this$props.focus;

    if (selected && focus) {
      this.node.focus();
    }
  };

  _proto.render = function render() {
    var _cx,
        _this = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        className = _this$props2.className,
        disabled = _this$props2.disabled,
        disabledClassName = _this$props2.disabledClassName,
        focus = _this$props2.focus,
        id = _this$props2.id,
        panelId = _this$props2.panelId,
        selected = _this$props2.selected,
        selectedClassName = _this$props2.selectedClassName,
        tabIndex = _this$props2.tabIndex,
        tabRef = _this$props2.tabRef,
        attributes = Tab__objectWithoutPropertiesLoose(_this$props2, ["children", "className", "disabled", "disabledClassName", "focus", "id", "panelId", "selected", "selectedClassName", "tabIndex", "tabRef"]);

    return external__React__default.a.createElement("li", Tab__extends({}, attributes, {
      className: classnames_default()(className, (_cx = {}, _cx[selectedClassName] = selected, _cx[disabledClassName] = disabled, _cx)),
      ref: function ref(node) {
        _this.node = node;
        if (tabRef) tabRef(node);
      },
      role: "tab",
      id: id,
      "aria-selected": selected ? 'true' : 'false',
      "aria-disabled": disabled ? 'true' : 'false',
      "aria-controls": panelId,
      tabIndex: tabIndex || (selected ? '0' : null)
    }), children);
  };

  return Tab;
}(external__React_["Component"]);

Tab_Tab.defaultProps = {
  className: DEFAULT_CLASS,
  disabledClassName: DEFAULT_CLASS + "--disabled",
  focus: false,
  id: null,
  panelId: null,
  selected: false,
  selectedClassName: DEFAULT_CLASS + "--selected"
};

Tab_Tab.propTypes =  true ? {
  children: prop_types_default.a.oneOfType([prop_types_default.a.array, prop_types_default.a.object, prop_types_default.a.string]),
  className: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.array, prop_types_default.a.object]),
  disabled: prop_types_default.a.bool,
  tabIndex: prop_types_default.a.string,
  disabledClassName: prop_types_default.a.string,
  focus: prop_types_default.a.bool,
  // private
  id: prop_types_default.a.string,
  // private
  panelId: prop_types_default.a.string,
  // private
  selected: prop_types_default.a.bool,
  // private
  selectedClassName: prop_types_default.a.string,
  tabRef: prop_types_default.a.func // private

} : {};
Tab_Tab.tabsRole = 'Tab';
// CONCATENATED MODULE: ../node_modules/react-tabs/esm/components/TabPanel.js
function TabPanel__extends() { TabPanel__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TabPanel__extends.apply(this, arguments); }

function TabPanel__objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TabPanel__inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var TabPanel_DEFAULT_CLASS = 'react-tabs__tab-panel';

var TabPanel_TabPanel =
/*#__PURE__*/
function (_Component) {
  TabPanel__inheritsLoose(TabPanel, _Component);

  function TabPanel() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TabPanel.prototype;

  _proto.render = function render() {
    var _cx;

    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        forceRender = _this$props.forceRender,
        id = _this$props.id,
        selected = _this$props.selected,
        selectedClassName = _this$props.selectedClassName,
        tabId = _this$props.tabId,
        attributes = TabPanel__objectWithoutPropertiesLoose(_this$props, ["children", "className", "forceRender", "id", "selected", "selectedClassName", "tabId"]);

    return external__React__default.a.createElement("div", TabPanel__extends({}, attributes, {
      className: classnames_default()(className, (_cx = {}, _cx[selectedClassName] = selected, _cx)),
      role: "tabpanel",
      id: id,
      "aria-labelledby": tabId
    }), forceRender || selected ? children : null);
  };

  return TabPanel;
}(external__React_["Component"]);

TabPanel_TabPanel.defaultProps = {
  className: TabPanel_DEFAULT_CLASS,
  forceRender: false,
  selectedClassName: TabPanel_DEFAULT_CLASS + "--selected"
};

TabPanel_TabPanel.propTypes =  true ? {
  children: prop_types_default.a.node,
  className: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.array, prop_types_default.a.object]),
  forceRender: prop_types_default.a.bool,
  id: prop_types_default.a.string,
  // private
  selected: prop_types_default.a.bool,
  // private
  selectedClassName: prop_types_default.a.string,
  tabId: prop_types_default.a.string // private

} : {};
TabPanel_TabPanel.tabsRole = 'TabPanel';
// CONCATENATED MODULE: ../node_modules/react-tabs/esm/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs_Tabs; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TabList", function() { return TabList_TabList; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab_Tab; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TabPanel", function() { return TabPanel_TabPanel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "resetIdCounter", function() { return uuid_reset; });






/***/ }),
/* 226 */
/*!********************************************************!*\
  !*** ../node_modules/react-tabs/style/react-tabs.scss ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"react-tabs":"_-node_modules-react-tabs-style-react-tabs__react-tabs__2g11F","reactTabs":"_-node_modules-react-tabs-style-react-tabs__react-tabs__2g11F","react-tabs__tab-list":"_-node_modules-react-tabs-style-react-tabs__react-tabs__tab-list__1MFfE","reactTabsTabList":"_-node_modules-react-tabs-style-react-tabs__react-tabs__tab-list__1MFfE","react-tabs__tab":"_-node_modules-react-tabs-style-react-tabs__react-tabs__tab__190M7","reactTabsTab":"_-node_modules-react-tabs-style-react-tabs__react-tabs__tab__190M7","react-tabs__tab--selected":"_-node_modules-react-tabs-style-react-tabs__react-tabs__tab--selected__1ex4Q","reactTabsTabSelected":"_-node_modules-react-tabs-style-react-tabs__react-tabs__tab--selected__1ex4Q","react-tabs__tab--disabled":"_-node_modules-react-tabs-style-react-tabs__react-tabs__tab--disabled__7mMmY","reactTabsTabDisabled":"_-node_modules-react-tabs-style-react-tabs__react-tabs__tab--disabled__7mMmY","react-tabs__tab-panel":"_-node_modules-react-tabs-style-react-tabs__react-tabs__tab-panel__2EDg3","reactTabsTabPanel":"_-node_modules-react-tabs-style-react-tabs__react-tabs__tab-panel__2EDg3","react-tabs__tab-panel--selected":"_-node_modules-react-tabs-style-react-tabs__react-tabs__tab-panel--selected__24Xiz","reactTabsTabPanelSelected":"_-node_modules-react-tabs-style-react-tabs__react-tabs__tab-panel--selected__24Xiz"};

/***/ }),
/* 227 */
/*!*******************************************!*\
  !*** ./components/Sample/samples/base.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (styleParams) {
  var formatValue = function formatValue(val) {
    switch (typeof val === "undefined" ? "undefined" : _typeof(val)) {
      case 'string':
        return "'" + val + "'";
      case 'number':
        if (val < 0.01) return 0;
        return val;
      default:
        return String(val);
    }
  };
  var formattedStyles = Object.entries(styleParams).map(function (entry) {
    return entry[0] ? "  " + entry[0] + ": " + formatValue(entry[1]) : '';
  }).join(',\n');
  return "import {createLayout} from 'pro-gallery-layouter';\n\n//change to your own images here\nconst items = [\n    {id: 'a466b258c6b5e2096fa546c86aae8fa2',url: 'https://static.wixstatic.com/media/8bb438_eeef61d83253480ab7bbdb07692b4c90.jpg',width: 5494,height: 3840},\n    {id: 'a081f588eff30a9f8b6fcd0f4889eac3',url: 'https://static.wixstatic.com/media/8bb438_2ff4f1995c0e40d49158d5225eeb465e.jpg',width: 4200,height: 2800},\n    {id: '0ee95e519c2e1274c30f56e3c098ec86',url: 'https://static.wixstatic.com/media/8bb438_a132b18dea524d48a68a37f0075fcc1e.jpg',width: 5600,height: 3727},\n    {id: '262e38d72080e92600c9df018a4f4f1e',url: 'https://static.wixstatic.com/media/8bb438_4fa0352201a1431395c3c4d4b21e3481.jpg',width: 3727,height: 5600},\n    {id: '3dff88af7694728e13d6ca4ff03fc6cf',url: 'https://static.wixstatic.com/media/8bb438_d6bfaf940d05421cb6bc7a8c867fb4b5.jpg',width: 5600,height: 3727},\n    {id: '83d9e931839e66e00faf1df41cbc7349',url: 'https://static.wixstatic.com/media/8bb438_71edafe6d54d457484285e61a1f75d17.jpg',width: 5600,height: 3727},\n    {id: '678c48f759062c8e8146a70043ad7823',url: 'https://static.wixstatic.com/media/8bb438_ced2a19af5cf448e91413099f4c422fa.jpg',width: 5600,height: 3728},\n    {id: 'f6db1b532552aa00e9549b5c97e6770a',url: 'https://static.wixstatic.com/media/8bb438_cabd67053eae45e7ab273832504717ff.jpg',width: 5600,height: 3727},\n    {id: '69102794801438efee46af8202c76b81',url: 'https://static.wixstatic.com/media/8bb438_66a1bb26f7f64497be343d886fe2197a.jpg',width: 3727,height: 5600},\n    {id: '61d3f0c021fd47d92a4e7395ab107e48',url: 'https://static.wixstatic.com/media/8bb438_cdbf2bdff4864d2094370a3051812409.jpg',width: 5600,height: 3727},\n    {id: '22883fe4ca22b25b5b19c8640d21d524',url: 'https://static.wixstatic.com/media/8bb438_2a22b3e85bb1434e81f6fbd4878fb4ae.jpg',width: 5600,height: 3728},\n];\n\nconst styleParams = {\n" + formattedStyles + "};\n\nconst container = {\n  width: window.innerWidth,\n  height: window.innerHeight\n};\n\nconst layoutParams = {\n  items,\n  styleParams,\n  container\n};\n\nconst layout = createLayout(layoutParams);\n";
};

/***/ }),
/* 228 */
/*!***********************************************!*\
  !*** ./components/Sample/samples/absolute.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\nconst parent = document.createElement('div');\nparent.id = 'root';\ndocument.body.prepend(parent);\n\nfor (let i = 0; i < layout.items.length; i++) {\n  const item = layout.items[i];\n  const iDom = document.createElement('div');\n  iDom.innerHTML = i;\n  iDom.style.width = item.width + 'px';\n  iDom.style.height = item.height + 'px';\n  iDom.style.position = 'absolute';\n  iDom.style.top = item.offset.top + 'px';\n  iDom.style.left = item.offset.left + 'px';\n  iDom.style.backgroundColor = items[i].bgColor;\n  parent.prepend(iDom);\n}\n";

/***/ }),
/* 229 */
/*!***********************************************!*\
  !*** ./components/Sample/samples/relative.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\nconst parent = document.createElement('div');\nparent.id = 'root';\ndocument.body.prepend(parent);\ndocument.body.style.margin = '-' + styleParams.itemSpacing + 'px';\ndocument.body.style.padding = 0;\n\nfor (let column, c = 0; column = layout.columns[c]; c++) {\n  const cDom = document.createElement('div');\n  cDom.id = 'column';\n  cDom.style.width = layout.colWidth + 'px';\n  cDom.style.float = 'left';\n  cDom.style.position = 'relative';\n  parent.prepend(cDom);\n\n  for (let group, g = 0; group = column[g]; g++) {\n    const gDom = document.createElement('div');\n    gDom.style.width = group.width + 'px';\n    gDom.style.height = group.height + 'px';\n    gDom.style.display = 'inline-block';\n    gDom.style.position = 'relative';\n    gDom.style.float = 'left';\n    cDom.prepend(gDom);\n\n    for (let item, i = 0; item = group.items[i]; i++) {\n      const iDom = document.createElement('div');\n      iDom.style.width = item.width + 'px';\n      iDom.style.height = item.height + 'px';\n      iDom.style.margin = styleParams.itemSpacing + 'px';\n      iDom.style.position = item.style.position || 'absolute';\n      iDom.style.top = item.style.top + 'px';\n      iDom.style.left = item.style.left + 'px';\n      iDom.style.right = item.style.right + 'px';\n      iDom.style.bottom = item.style.bottom + 'px';\n      iDom.style.float = 'left';\n      iDom.style.backgroundColor = items[item.idx].bgColor;\n      gDom.prepend(iDom);\n    }\n  }\n}\n";

/***/ }),
/* 230 */
/*!********************************************!*\
  !*** ./components/Sample/samples/react.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\nconst getImageStyle = item => ({\n  position: 'absolute',\n  backgroundSize: 'cover',\n  backgroundPosition: 'center',\n  top: item.offset.top,\n  left: item.offset.left,\n  width: item.width,\n  height: item.height,\n  backgroundImage: \"url(\" + item.dto.url + \")\"\n});\n\nconst Gallery = ({ layout }) => (\n  <div style={{ height: layout.height }}>\n    {layout.items.map(item => (\n      <div style={getImageStyle(item)} alt={item.idx}/>\n    ))}\n  </div>\n);\n\nconst parent = document.createElement('div');\nparent.id = 'root';\ndocument.body.prepend(parent);\n\nReactDOM.render(\n  <Gallery layout={layout}/>,\n  document.getElementById('root')\n);\n";

/***/ }),
/* 231 */
/*!*****************************!*\
  !*** ./constants/images.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  id: '8b72558253b2502b401bb46e5599f22a',
  url: '8bb438_1b73a6b067b24175bd087e86613bd00c.jpg',
  width: 1920,
  height: 1000
}, {
  id: '2d3b675ea857dc41158bad3b28300824',
  url: '8bb438_78ff5e32500d48cdaa22a3f446d68216.jpg',
  width: 3737,
  height: 5600
}, {
  id: '860df034014674abd7a2e73abe0b851b',
  url: '8bb438_ff062a651e174cf5926fe5c088be1099.jpg',
  width: 5600,
  height: 3737
}, {
  id: 'a898a24fe0d2c60a348eac9e38cae265',
  url: '8bb438_5ec836c505f445dfab711a56e67fc502.jpg',
  width: 5600,
  height: 3737
}, {
  id: '5dd5a6e757c702b2856a3a2f4bb00154',
  url: '8bb438_2798f080526a4d3f8cb89d93e305a0b8.jpg',
  width: 5600,
  height: 3737
}, {
  id: 'e8b32772f67865aedb3b12115eaf19a4',
  url: '8bb438_9a335dcb8c884086b8ffdf1ea44ca7e9.jpg',
  width: 5600,
  height: 3737
}, {
  id: '90e376fcd4b801bed0f22cb5bd7d0045',
  url: '8bb438_6e9b65f5c9e343c6bc3344b2def0df11.jpg',
  width: 5600,
  height: 3737
}, {
  id: '0db65a80624a2e0b8c71e553b6f4b3f6',
  url: '8bb438_f4f7fa31c5364557af0da7c4fd543cc9.jpg',
  width: 5600,
  height: 3737
}, {
  id: '1f02dcba84a9b73b40d25e59280a9580',
  url: '8bb438_0e26eb36903c40558d3e9a3dc088b791.jpg',
  width: 5600,
  height: 3737
}, {
  id: '70cf2b13f9bde8f8c33768260f25050a',
  url: '8bb438_1d81fe98c5cc433a9651fc24e7ce2617.jpg',
  width: 5600,
  height: 3737
}, {
  id: '8e0bf32b6fade59dcfd7757ead8a0478',
  url: '8bb438_2ecb6a1a9d5b4e148bd83a1ea3920860.jpg',
  width: 5600,
  height: 3737
}, {
  id: '027af4a640930155cd68f72b3236842d',
  url: '8bb438_7927e7c1e0ac4420b603ddfa02cba6c9.jpg',
  width: 5600,
  height: 3737
}, {
  id: '5fb9385c24ba5972991a2da94fe5b550',
  url: '8bb438_37f441d6939f4c1eb8e335b231afb7b9.jpg',
  width: 5600,
  height: 3737
}, {
  id: '34fb0d724c5d3921d22b997a8c1705ef',
  url: '8bb438_f8233d1de49442169c3bd47e3dce2780.jpg',
  width: 5600,
  height: 3737
}, {
  id: '984bf3ca8432e2da6e65601d7cec1104',
  url: '8bb438_a60117ec179b4390bbc50af20f34f144.jpg',
  width: 5600,
  height: 3737
}, {
  id: '0a1f3af15dc764fd08e5c83a9febb30e',
  url: '8bb438_a59d1b89bd074b75b62a8838034f72f6.jpg',
  width: 3737,
  height: 5600
}, {
  id: 'ab9e2fa37f6355328860bdf52d1f2088',
  url: '8bb438_6bf791d3442746a7996b1b343549c845.jpg',
  width: 3737,
  height: 5600
}, {
  id: '8f3f93f90a846f70fc897755f70525a7',
  url: '8bb438_6ea01262e7a94b2490ab1c6d8b889122.jpg',
  width: 5600,
  height: 3737
}, {
  id: 'd1168a52496bc3a7b5e0025212a76e2c',
  url: '8bb438_760699a583514efca897ee37d95e9c76.jpg',
  width: 5600,
  height: 3737
}, {
  id: '46247b1df460eb0e8272053a9a079ab1',
  url: '8bb438_e725684e4a1841859668483efd0f9509.jpg',
  width: 4400,
  height: 3056
}, {
  id: 'ea8ec1609e052b7f196935318316299d',
  url: '8bb438_149b418b9bfb47e0adafc569ca55c5e9.jpg',
  width: 4200,
  height: 2829
}, {
  id: '098281dfb9701c0068f786bc8aab0390',
  url: '8bb438_0d738ee5a4a04f54891e08488fd7c7bc.jpg',
  width: 2799,
  height: 4200
}, {
  id: '1ea8c429c3fbbc7b507b45b756c8499f',
  url: '8bb438_1ab1a6e5d0bf4edeb847d15d821a76d8.jpg',
  width: 4500,
  height: 3228
}, {
  id: 'a466b258c6b5e2096fa546c86aae8fa2',
  url: '8bb438_eeef61d83253480ab7bbdb07692b4c90.jpg',
  width: 5494,
  height: 3840
}, {
  id: 'a081f588eff30a9f8b6fcd0f4889eac3',
  url: '8bb438_2ff4f1995c0e40d49158d5225eeb465e.jpg',
  width: 4200,
  height: 2800
}, {
  id: '9c0c752ebc1b7b27dc3b02b98f2a4181',
  url: '8bb438_e78b371c75ce42de8719dccfc97298a4.jpg',
  width: 4200,
  height: 2800
}, {
  id: '5c64c68f0efda76c3cfbf83f569a8e2e',
  url: '8bb438_a2049532d1b7487ba542f55efbc55c7c.jpg',
  width: 4500,
  height: 3000
}, {
  id: '87dc373b35ff17641e86a23b58635f89',
  url: '8bb438_e8735e0102554d6ead385a48e2b9e69a.jpg',
  width: 5000,
  height: 3282
}, {
  id: 'd432d617a9f508cf404d64d8c489e1f1',
  url: '8bb438_ea26cc9ae0ce440bbc4cfaaa8864c5e6.jpg',
  width: 4400,
  height: 2966
}, {
  id: '7a5e2e30ec277ada8e1715ed520e6b38',
  url: '8bb438_4fe0d8e3dee641559dffc604be287e32.jpg',
  width: 4600,
  height: 3066
}, {
  id: 'c6b5cd1f1316311ec3560d6fb7d50958',
  url: '8bb438_17a7e143ea0148959ef6c5663158ade0.jpg',
  width: 5200,
  height: 3467
}, {
  id: 'd63281682aa9881794bd301d06f37dba',
  url: '8bb438_c79f9e778d474b18a9f980595caf57f3.jpg',
  width: 4200,
  height: 2800
}, {
  id: '0bd4f007cef66bf47fbb936fb3ea2336',
  url: '8bb438_026dd01a64a646958298f535f037c627.jpg',
  width: 2800,
  height: 4200
}, {
  id: '759c83479429d725f03367897235a8b5',
  url: '8bb438_4af301c080294224b6b5e15cd38a035f.jpg',
  width: 1920,
  height: 1280
}, {
  id: '0ee95e519c2e1274c30f56e3c098ec86',
  url: '8bb438_a132b18dea524d48a68a37f0075fcc1e.jpg',
  width: 5600,
  height: 3727
}, {
  id: '262e38d72080e92600c9df018a4f4f1e',
  url: '8bb438_4fa0352201a1431395c3c4d4b21e3481.jpg',
  width: 3727,
  height: 5600
}, {
  id: '3dff88af7694728e13d6ca4ff03fc6cf',
  url: '8bb438_d6bfaf940d05421cb6bc7a8c867fb4b5.jpg',
  width: 5600,
  height: 3727
}, {
  id: '83d9e931839e66e00faf1df41cbc7349',
  url: '8bb438_71edafe6d54d457484285e61a1f75d17.jpg',
  width: 5600,
  height: 3727
}, {
  id: '678c48f759062c8e8146a70043ad7823',
  url: '8bb438_ced2a19af5cf448e91413099f4c422fa.jpg',
  width: 5600,
  height: 3728
}, {
  id: 'f6db1b532552aa00e9549b5c97e6770a',
  url: '8bb438_cabd67053eae45e7ab273832504717ff.jpg',
  width: 5600,
  height: 3727
}, {
  id: '69102794801438efee46af8202c76b81',
  url: '8bb438_66a1bb26f7f64497be343d886fe2197a.jpg',
  width: 3727,
  height: 5600
}, {
  id: '61d3f0c021fd47d92a4e7395ab107e48',
  url: '8bb438_cdbf2bdff4864d2094370a3051812409.jpg',
  width: 5600,
  height: 3727
}, {
  id: '22883fe4ca22b25b5b19c8640d21d524',
  url: '8bb438_2a22b3e85bb1434e81f6fbd4878fb4ae.jpg',
  width: 5600,
  height: 3728
}, {
  id: 'cf6787a4653057bd8af8cb05888dc9b1',
  url: '8bb438_f7612090677241d1a5b8fee6752954e9.jpg',
  width: 5600,
  height: 3727
}, {
  id: 'fdda4e9e700d4208640b78d5c035d88a',
  url: '8bb438_d849ef374eb64dd287e53d27797a764f.jpg',
  width: 5600,
  height: 3727
}, {
  id: '74f7bad48d543460fb949cc406fb70e7',
  url: '8bb438_8583414cdf6544a191e2b8f678ce7b63.jpg',
  width: 5600,
  height: 3727
}, {
  id: 'a005c2daaa8b7c8cf1c53f589e64a860',
  url: '8bb438_c64d6dc2b5e74058bba77f616146a4cf.jpg',
  width: 5600,
  height: 3728
}, {
  id: 'b091d8ac038d07476546bef2475a7b03',
  url: '8bb438_e353d9a6ec324041a17a28d10e21819d.jpg',
  width: 5600,
  height: 3727
}, {
  id: '2b5c5f752b1c931b2351bee50aa939f0',
  url: '8bb438_402a161778db429e8ef3423788b9a7b6.jpg',
  width: 5600,
  height: 3727
}, {
  id: '7968928dd556638214cf26be7ea2a592',
  url: '8bb438_525271503ee64479925f13cfa2f312c8.jpg',
  width: 5600,
  height: 3727
}, {
  id: 'eb2349c8379074578a5ac7ca97aec2e4',
  url: '8bb438_2e22ca8b422e44c5a6fb723392a747b5.jpg',
  width: 5600,
  height: 3727
}, {
  id: '4f431d8f88a3e5d3842df5a906fd536f',
  url: '8bb438_4afd60c9c97d44c8bcd61f1b6080d7e5.jpg',
  width: 3287,
  height: 4930
}, {
  id: '3337a427b2e877ab39bf116fcb3f01ea',
  url: '8bb438_a74f09cd4425418296d417ce91f589cd.jpg',
  width: 3484,
  height: 4645
}, {
  id: '7474d69be9754f2f5012a08ab9e5c283',
  url: '8bb438_5a7139bf3b91452ea725151ffb285335.jpg',
  width: 3720,
  height: 5580
}, {
  id: 'befba01503f77c9dc77df88419290c01',
  url: '8bb438_fe7a4cc39e624bd09cb48510d6d46056.jpg',
  width: 3946,
  height: 5258
}, {
  id: '2f493d2be5d47bd89b016ba46a0f66f4',
  url: '8bb438_8bc1731cedd84dc7846ebd434e305c8a.jpg',
  width: 3484,
  height: 4645
}, {
  id: '2d6bee6fe2a726f213599508722bcb27',
  url: '8bb438_4eb7f81b49a64578bf5775417c4c2c9a.jpg',
  width: 3945,
  height: 5260
}, {
  id: '9e6bb2d0c554dcd559a32ab89c9092f0',
  url: '8bb438_cbe02f139b8e479387eb7f5f9e8424c9.jpg',
  width: 3180,
  height: 3710
}, {
  id: '315e6213ce778d43f5580b2caf347556',
  url: '8bb438_af22f17274944bea9026107bf670bf7f.jpg',
  width: 3484,
  height: 4645
}, {
  id: '338f76721bc5a127ebf0b01306abf35e',
  url: '8bb438_a8a7ff22738445faa74cf7f68866f4d8.jpg',
  width: 3542,
  height: 4722
}, {
  id: 'd4c8670400a3bf9d7c8cba7e5f133454',
  url: '8bb438_c87dd238be8d4a15a57eecbefda4495b.jpg',
  width: 3540,
  height: 5310
}, {
  id: '5e106a5d4a0b7709f8938194d4778ff4',
  url: '8bb438_ae4f2ce0cfab47859d294f36b2d87cd7.jpg',
  width: 3720,
  height: 5580
}, {
  id: 'e8f7b815b395981a5285c2bd8b90b1a6',
  url: '8bb438_144de0d90d5d4476829c870a38ad8151.jpg',
  width: 3720,
  height: 5580
}, {
  id: 'ab9df5eb2b706bd06a6e8bab622beba4',
  url: '8bb438_105a7f98d458406eadb5b99069e05e66.jpg',
  width: 3286,
  height: 4930
}, {
  id: '4eb593cdb6d13eb99c7a18d2de79b181',
  url: '8bb438_d675baa15a344a72b357197c11478240.jpg',
  width: 3718,
  height: 5577
}, {
  id: '175fa38b92269154b6673618477160de',
  url: '8bb438_4b9b9acb8d6c45deadbeeb0029b4bf5e.jpg',
  width: 3483,
  height: 4645
}, {
  id: '5b65c635c3ca09f2badf2aeb6d84ed99',
  url: '8bb438_b9926ba84cc548df9011d6227d3e20b1.jpg',
  width: 1922,
  height: 2561
}, {
  id: '00a063e26be177d3c6a4a2b41cc15be6',
  url: '8bb438_ff1da0eb6547419fbac324f3a7e6a16c.jpg',
  width: 3718,
  height: 5577
}, {
  id: 'ad45c7343a2ecf89982122c4097a054d',
  url: '8bb438_263b45a6faeb49e887b71d10a728516d.jpg',
  width: 3286,
  height: 4930
}, {
  id: '066c5c3fafab90ecbef3f32736dac3c8',
  url: '8bb438_51948835adb84e0dbcca54ce99b48999.jpg',
  width: 1920,
  height: 1000
}, {
  id: '7dc09ef29834aea2ae4d1948d60426c1',
  url: '8bb438_ff7d47098495432baa3b80bb14930909.jpg',
  width: 1920,
  height: 1000
}, {
  id: '53e606d52c7ac88ab77dce9595eb57c5',
  url: '8bb438_ebbc9ec6c20049f490a06f729e4c79cb.jpg',
  width: 2947,
  height: 5472
}, {
  id: '37d29273821f8404ed4832dd0872f8f3',
  url: '8bb438_5aba95641dcd4711863dd7e6954082bd.jpg',
  width: 3648,
  height: 2912
}, {
  id: 'fc1b98985d634845d9eb5eef2878f327',
  url: '8bb438_47f19e10a9924d56b4a7f51e292cb509.jpg',
  width: 3192,
  height: 2213
}, {
  id: '47f5e94bc11c22a66fcbd44aff73241c',
  url: '8bb438_36726a2d14ec44ee9edc5693bade1092.jpg',
  width: 3648,
  height: 5472
}, {
  id: '5862a30656b6e61705dfbe5505faf867',
  url: '8bb438_be12adcc05bb45eab12f52f03aebb9f8.jpg',
  width: 3648,
  height: 5472
}, {
  id: 'bc261174203a17b59d870ccf26a01597',
  url: '8bb438_94ba2f2573aa431aaef5be76d1cd887d.jpg',
  width: 5472,
  height: 3648
}, {
  id: '279757098541cffc5689b7bbe39a88b2',
  url: '8bb438_730e9548a4ae4fe4b717e28c53e89410.jpg',
  width: 3648,
  height: 5472
}, {
  id: 'ea3c344c388002acfe4f67fac5c8c400',
  url: '8bb438_b73a93e4b07c4dbc9e78614a20b33750.jpg',
  width: 5472,
  height: 3648
}, {
  id: '3152ccf507b8ff1662385fa6a67311f8',
  url: '8bb438_5e257ac6c0634c439066b944ec38fbd7.jpg',
  width: 3648,
  height: 5472
}, {
  id: '4faa8030d46fdf8fbb787c1b66f395e3',
  url: '8bb438_32189edd0d0c44428d3a1305dd7be397.jpg',
  width: 3648,
  height: 5472
}, {
  id: '2a37fa063861660e7850eb82d62914ee',
  url: '8bb438_13b27c8ed9084ae6a7526be845547661.jpg',
  width: 3648,
  height: 5472
}, {
  id: '2103f7d2c4be85e4467d2f9cba4aeded',
  url: '8bb438_e1c242b87eb74abab740e5af5104a520.jpg',
  width: 5472,
  height: 3648
}, {
  id: 'd15b37f375ea80bda4f2c37b64fdf7e8',
  url: '8bb438_aab736569612405a8381d4965c769f51.jpg',
  width: 5472,
  height: 3648
}, {
  id: 'cedc4449d88b491aca7d452fcdf0b3da',
  url: '8bb438_f1f608a67abc4590821f83b4120f6131.jpg',
  width: 3648,
  height: 5472
}, {
  id: 'd375541f5888e55ac32a5142ed85c3bc',
  url: '8bb438_730583b0bebf475086ff40e07898e3e0.jpg',
  width: 5472,
  height: 3648
}, {
  id: 'b12907da5fbb55a31a760e49fb0bb4e6',
  url: '8bb438_83e03311e53a47ce9ba8bda910fdad88.jpg',
  width: 5177,
  height: 3526
}, {
  id: '1cfbc70e8a351916a2dd29c63e5a2100',
  url: '8bb438_ac9e77e718404844adeec4677879e617.jpg',
  width: 5472,
  height: 3648
}, {
  id: '0d134f293b71f7c0a9638c5f1a8435e5',
  url: '8bb438_5b9f0c9151f24ba8a8ebdba378e260b7.jpg',
  width: 1695,
  height: 2126
}, {
  id: '8a719c372d21ebb4b9d2a8373734bf52',
  url: '8bb438_209feb1fb8944a18b6b619e105746cd0.jpg',
  width: 1621,
  height: 1081
}, {
  id: 'd201d3aea92d4fb08635d281a3909180',
  url: '8bb438_9a392473159c472c835ed9c657464bea.jpg',
  width: 1621,
  height: 1081
}, {
  id: '4f8cf05deeb154bda3b878e68656e4c5',
  url: '8bb438_9f28a805bac543feb934a831a6636e03.jpg',
  width: 1621,
  height: 1081
}, {
  id: 'ab64fd1362015d405181f8b82d14e029',
  url: '8bb438_8c0a8aa18b9c456a94d67cd58c104135.jpg',
  width: 1621,
  height: 1081
}, {
  id: '9d652929eb67d0ae370494dcb2709871',
  url: '8bb438_18a34be7a3834da88a55e30c4dae3e96.jpg',
  width: 1621,
  height: 1081
}, {
  id: '7e411b039d55fc0d86266697a51172d8',
  url: '8bb438_eed704a5a8d74b40aeb5a11914eb4dc5.jpg',
  width: 1621,
  height: 1081
}, {
  id: '75318326db54174bea73594c3c25873a',
  url: '8bb438_0795e40ac4db438a8a723ea98dbeda10.jpg',
  width: 1621,
  height: 1081
}, {
  id: '90ee6549ab33042ab1206b0a925b10bd',
  url: '8bb438_4413d1782f904f9a89a47837c03bf276.jpg',
  width: 1621,
  height: 1081
}, {
  id: 'd052fe7e6db2fd246708f8e56ddc3684',
  url: '8bb438_4a6550d4df364f9890180f52243fb396.jpg',
  width: 1621,
  height: 1081
}, {
  id: '8310d26374ed948918b9914ea076e411',
  url: '8bb438_b5957febd0ed45d3be9a0e91669c65b4.jpg',
  width: 1621,
  height: 1081
}, {
  id: 'ed9a2febb12a8dc9c4e193efa170612c',
  url: '8bb438_4ce63dbf08904e42af4d6e5846e6e0c1.jpg',
  width: 1621,
  height: 1081
}];

/***/ }),
/* 232 */
/*!**********************************************!*\
  !*** ./components/App/get-scrollbar-size.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScrollbarSize;
function getScrollbarSize() {
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '100px';
  scrollDiv.style.height = '100px';
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  document.body.appendChild(scrollDiv);

  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  document.body.removeChild(scrollDiv);

  return scrollbarWidth;
};

/***/ }),
/* 233 */
/*!*********************************!*\
  !*** ./components/App/App.scss ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map
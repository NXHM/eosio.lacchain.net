(self["webpackChunkes_latamkink_io"] = self["webpackChunkes_latamkink_io"] || []).push([[1680],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 1680:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ theme_DocPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2263);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/renderRoutes.js
var renderRoutes = __webpack_require__(6291);
// EXTERNAL MODULE: ./src/theme/Layout/index.js + 5 modules
var Layout = __webpack_require__(6756);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(9756);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 15 modules
var lib = __webpack_require__(9732);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useUserPreferencesContext.js
var useUserPreferencesContext = __webpack_require__(944);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useLockBodyScroll.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useLockBodyScroll(lock){if(lock===void 0){lock=true;}(0,react.useEffect)(function(){document.body.style.overflow=lock?'hidden':'visible';return function(){document.body.style.overflow='visible';};},[lock]);}/* harmony default export */ var hooks_useLockBodyScroll = (useLockBodyScroll);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(412);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useWindowSize.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var desktopThresholdWidth=996;var windowSizes={desktop:'desktop',mobile:'mobile'};function useWindowSize(){var isClient=ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM;function getSize(){if(!isClient){return undefined;}return window.innerWidth>desktopThresholdWidth?windowSizes.desktop:windowSizes.mobile;}var _useState=(0,react.useState)(getSize),windowSize=_useState[0],setWindowSize=_useState[1];(0,react.useEffect)(function(){if(!isClient){return undefined;}function handleResize(){setWindowSize(getSize());}window.addEventListener('resize',handleResize);return function(){return window.removeEventListener('resize',handleResize);};},[]);return windowSize;}/* harmony default export */ var hooks_useWindowSize = (useWindowSize);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useScrollPosition.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var getScrollPosition=function getScrollPosition(){return{scrollX:ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM?window.pageXOffset:0,scrollY:ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM?window.pageYOffset:0};};var useScrollPosition=function useScrollPosition(effect,deps){if(deps===void 0){deps=[];}var scrollPosition=(0,react.useRef)(getScrollPosition());var handleScroll=function handleScroll(){var currentScrollPosition=getScrollPosition();if(effect){effect(currentScrollPosition,scrollPosition.current);}scrollPosition.current=currentScrollPosition;};(0,react.useEffect)(function(){var opts={passive:true};handleScroll();window.addEventListener('scroll',handleScroll,opts);return function(){return window.removeEventListener('scroll',handleScroll,opts);};},deps);};/* harmony default export */ var hooks_useScrollPosition = (useScrollPosition);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(6742);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(3919);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemeContext.js
var ThemeContext = __webpack_require__(2924);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useThemeContext.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useThemeContext(){var context=(0,react.useContext)(ThemeContext/* default */.Z);if(context==null){throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');}return context;}/* harmony default export */ var hooks_useThemeContext = (useThemeContext);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"themedImage":"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/index.js
var _excluded=["sources","className","alt"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ThemedImage=function ThemedImage(props){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),isClient=_useDocusaurusContext.isClient;var _useThemeContext=hooks_useThemeContext(),isDarkTheme=_useThemeContext.isDarkTheme;var sources=props.sources,className=props.className,_props$alt=props.alt,alt=_props$alt===void 0?'':_props$alt,propsRest=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded);var renderedSourceNames=isClient?isDarkTheme?['dark']:['light']// We need to render both images on the server to avoid flash
:// See https://github.com/facebook/docusaurus/pull/3730
['light','dark'];return/*#__PURE__*/react.createElement(react.Fragment,null,renderedSourceNames.map(function(sourceName){return/*#__PURE__*/react.createElement("img",(0,esm_extends/* default */.Z)({key:sourceName,src:sources[sourceName],alt:alt,className:(0,clsx_m/* default */.Z)(styles_module.themedImage,styles_module["themedImage--"+sourceName],className)},propsRest));}));};/* harmony default export */ var theme_ThemedImage = (ThemedImage);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(4996);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Logo/index.js
var Logo_excluded=["imageClassName","titleClassName"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Logo=function Logo(props){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig,title=_useDocusaurusContext2.title,_useDocusaurusContext3=_useDocusaurusContext2.themeConfig.navbar,navbarTitle=_useDocusaurusContext3.title,_useDocusaurusContext4=_useDocusaurusContext3.logo,logo=_useDocusaurusContext4===void 0?{src:''}:_useDocusaurusContext4,isClient=_useDocusaurusContext.isClient;var imageClassName=props.imageClassName,titleClassName=props.titleClassName,propsRest=(0,objectWithoutPropertiesLoose/* default */.Z)(props,Logo_excluded);var logoLink=(0,useBaseUrl/* default */.Z)(logo.href||'/');var sources={light:(0,useBaseUrl/* default */.Z)(logo.src),dark:(0,useBaseUrl/* default */.Z)(logo.srcDark||logo.src)};return/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({to:logoLink},propsRest,logo.target&&{target:logo.target}),logo.src&&/*#__PURE__*/react.createElement(theme_ThemedImage,{key:isClient,className:imageClassName,sources:sources,alt:logo.alt||navbarTitle||title}),navbarTitle!=null&&/*#__PURE__*/react.createElement("b",{className:titleClassName},navbarTitle));};/* harmony default export */ var theme_Logo = (Logo);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconArrow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconArrow=function IconArrow(props){return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({width:"20",height:"20","aria-hidden":"true"},props),/*#__PURE__*/react.createElement("g",{fill:"#7a7a7a"},/*#__PURE__*/react.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),/*#__PURE__*/react.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));};/* harmony default export */ var theme_IconArrow = (IconArrow);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconMenu/index.js
var IconMenu_excluded=["width","height","className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconMenu=function IconMenu(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?30:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?30:_ref$height,className=_ref.className,restProps=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,IconMenu_excluded);return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({className:className,width:width,height:height,viewBox:"0 0 30 30","aria-hidden":"true"},restProps),/*#__PURE__*/react.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}));};/* harmony default export */ var theme_IconMenu = (IconMenu);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconExternalLink/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var IconExternalLink_styles_module = ({"iconExternalLink":"iconExternalLink_3J9K"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconExternalLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconExternalLink=function IconExternalLink(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?13.5:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?13.5:_ref$height;return/*#__PURE__*/react.createElement("svg",{width:width,height:height,"aria-hidden":"true",viewBox:"0 0 24 24",className:IconExternalLink_styles_module.iconExternalLink},/*#__PURE__*/react.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}));};/* harmony default export */ var theme_IconExternalLink = (IconExternalLink);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(4973);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocSidebar_styles_module = ({"sidebar":"sidebar_15mo","sidebarWithHideableNavbar":"sidebarWithHideableNavbar_267A","sidebarHidden":"sidebarHidden_2kNb","sidebarLogo":"sidebarLogo_3h0W","menu":"menu_Bmed","menuLinkText":"menuLinkText_2aKo","menuWithAnnouncementBar":"menuWithAnnouncementBar_2WvA","collapseSidebarButton":"collapseSidebarButton_1CGd","collapseSidebarButtonIcon":"collapseSidebarButtonIcon_3E-R","sidebarMenuIcon":"sidebarMenuIcon_fgN0","sidebarMenuCloseIcon":"sidebarMenuCloseIcon_1lpH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/index.js
var DocSidebar_excluded=["items"],_excluded2=["item","onItemClick","collapsible","activePath"],_excluded3=["item","onItemClick","activePath","collapsible"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MOBILE_TOGGLE_SIZE=24;function usePrevious(value){var ref=(0,react.useRef)(value);(0,react.useEffect)(function(){ref.current=value;},[value]);return ref.current;}var isActiveSidebarItem=function isActiveSidebarItem(item,activePath){if(item.type==='link'){return (0,lib/* isSamePath */.Mg)(item.href,activePath);}if(item.type==='category'){return item.items.some(function(subItem){return isActiveSidebarItem(subItem,activePath);});}return false;};// Optimize sidebar at each "level"
// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
var DocSidebarItems=/*#__PURE__*/(0,react.memo)(function DocSidebarItems(_ref){var items=_ref.items,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,DocSidebar_excluded);return items.map(function(item,index){return/*#__PURE__*/react.createElement(DocSidebarItem,(0,esm_extends/* default */.Z)({key:index// sidebar is static, the index does not change
,item:item},props));});});function DocSidebarItem(props){switch(props.item.type){case'category':return/*#__PURE__*/react.createElement(DocSidebarItemCategory,props);case'link':default:return/*#__PURE__*/react.createElement(DocSidebarItemLink,props);}}function DocSidebarItemCategory(_ref2){var _clsx;var item=_ref2.item,onItemClick=_ref2.onItemClick,collapsible=_ref2.collapsible,activePath=_ref2.activePath,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref2,_excluded2);var items=item.items,label=item.label;var isActive=isActiveSidebarItem(item,activePath);var wasActive=usePrevious(isActive);// active categories are always initialized as expanded
// the default (item.collapsed) is only used for non-active categories
var _useState=(0,react.useState)(function(){if(!collapsible){return false;}return isActive?false:item.collapsed;}),collapsed=_useState[0],setCollapsed=_useState[1];var menuListRef=(0,react.useRef)(null);var _useState2=(0,react.useState)(undefined),menuListHeight=_useState2[0],setMenuListHeight=_useState2[1];var handleMenuListHeight=function handleMenuListHeight(calc){var _menuListRef$current;if(calc===void 0){calc=true;}setMenuListHeight(calc?((_menuListRef$current=menuListRef.current)==null?void 0:_menuListRef$current.scrollHeight)+"px":undefined);};// If we navigate to a category, it should automatically expand itself
(0,react.useEffect)(function(){var justBecameActive=isActive&&!wasActive;if(justBecameActive&&collapsed){setCollapsed(false);}},[isActive,wasActive,collapsed]);var handleItemClick=(0,react.useCallback)(function(e){e.preventDefault();if(!menuListHeight){handleMenuListHeight();}setTimeout(function(){return setCollapsed(function(state){return!state;});},100);},[menuListHeight]);if(items.length===0){return null;}return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)('menu__list-item',{'menu__list-item--collapsed':collapsed})},/*#__PURE__*/react.createElement("a",(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)('menu__link',(_clsx={'menu__link--sublist':collapsible,'menu__link--active':collapsible&&isActive},_clsx[DocSidebar_styles_module.menuLinkText]=!collapsible,_clsx)),onClick:collapsible?handleItemClick:undefined,href:collapsible?'#!':undefined},props),label),/*#__PURE__*/react.createElement("ul",{className:"menu__list",ref:menuListRef,style:{height:menuListHeight},onTransitionEnd:function onTransitionEnd(){if(!collapsed){handleMenuListHeight(false);}}},/*#__PURE__*/react.createElement(DocSidebarItems,{items:items,tabIndex:collapsed?'-1':'0',onItemClick:onItemClick,collapsible:collapsible,activePath:activePath})));}function DocSidebarItemLink(_ref3){var item=_ref3.item,onItemClick=_ref3.onItemClick,activePath=_ref3.activePath,_collapsible=_ref3.collapsible,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref3,_excluded3);var href=item.href,label=item.label;var isActive=isActiveSidebarItem(item,activePath);return/*#__PURE__*/react.createElement("li",{className:"menu__list-item",key:label},/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)('menu__link',{'menu__link--active':isActive}),to:href},(0,isInternalUrl/* default */.Z)(href)&&{isNavLink:true,exact:true,onClick:onItemClick},props),(0,isInternalUrl/* default */.Z)(href)?label:/*#__PURE__*/react.createElement("span",null,label,/*#__PURE__*/react.createElement(theme_IconExternalLink,null))));}function useShowAnnouncementBar(){var _useUserPreferencesCo=(0,useUserPreferencesContext/* default */.Z)(),isAnnouncementBarClosed=_useUserPreferencesCo.isAnnouncementBarClosed;var _useState3=(0,react.useState)(!isAnnouncementBarClosed),showAnnouncementBar=_useState3[0],setShowAnnouncementBar=_useState3[1];hooks_useScrollPosition(function(_ref4){var scrollY=_ref4.scrollY;if(!isAnnouncementBarClosed){setShowAnnouncementBar(scrollY===0);}});return showAnnouncementBar;}function useResponsiveSidebar(){var _useState4=(0,react.useState)(false),showResponsiveSidebar=_useState4[0],setShowResponsiveSidebar=_useState4[1];hooks_useLockBodyScroll(showResponsiveSidebar);var windowSize=hooks_useWindowSize();(0,react.useEffect)(function(){if(windowSize===windowSizes.desktop){setShowResponsiveSidebar(false);}},[windowSize]);var closeResponsiveSidebar=(0,react.useCallback)(function(e){e.target.blur();setShowResponsiveSidebar(false);},[setShowResponsiveSidebar]);var toggleResponsiveSidebar=(0,react.useCallback)(function(){setShowResponsiveSidebar(function(value){return!value;});},[setShowResponsiveSidebar]);return{showResponsiveSidebar:showResponsiveSidebar,closeResponsiveSidebar:closeResponsiveSidebar,toggleResponsiveSidebar:toggleResponsiveSidebar};}function HideableSidebarButton(_ref5){var onClick=_ref5.onClick;return/*#__PURE__*/react.createElement("button",{type:"button",title:(0,Translate/* translate */.I)({id:'theme.docs.sidebar.collapseButtonTitle',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.collapseButtonAriaLabel',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),className:(0,clsx_m/* default */.Z)('button button--secondary button--outline',DocSidebar_styles_module.collapseSidebarButton),onClick:onClick},/*#__PURE__*/react.createElement(theme_IconArrow,{className:DocSidebar_styles_module.collapseSidebarButtonIcon}));}function ResponsiveSidebarButton(_ref6){var responsiveSidebarOpened=_ref6.responsiveSidebarOpened,onClick=_ref6.onClick;return/*#__PURE__*/react.createElement("button",{"aria-label":responsiveSidebarOpened?(0,Translate/* translate */.I)({id:'theme.docs.sidebar.responsiveCloseButtonLabel',message:'Close menu',description:'The ARIA label for close button of mobile doc sidebar'}):(0,Translate/* translate */.I)({id:'theme.docs.sidebar.responsiveOpenButtonLabel',message:'Open menu',description:'The ARIA label for open button of mobile doc sidebar'}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:onClick},responsiveSidebarOpened?/*#__PURE__*/react.createElement("span",{className:(0,clsx_m/* default */.Z)(DocSidebar_styles_module.sidebarMenuIcon,DocSidebar_styles_module.sidebarMenuCloseIcon)},"\xD7"):/*#__PURE__*/react.createElement(theme_IconMenu,{className:DocSidebar_styles_module.sidebarMenuIcon,height:MOBILE_TOGGLE_SIZE,width:MOBILE_TOGGLE_SIZE}));}function DocSidebar(_ref7){var _clsx2,_clsx3;var path=_ref7.path,sidebar=_ref7.sidebar,_ref7$sidebarCollapsi=_ref7.sidebarCollapsible,sidebarCollapsible=_ref7$sidebarCollapsi===void 0?true:_ref7$sidebarCollapsi,onCollapse=_ref7.onCollapse,isHidden=_ref7.isHidden;var showAnnouncementBar=useShowAnnouncementBar();var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll,hideableSidebar=_useThemeConfig.hideableSidebar;var _useUserPreferencesCo2=(0,useUserPreferencesContext/* default */.Z)(),isAnnouncementBarClosed=_useUserPreferencesCo2.isAnnouncementBarClosed;var _useResponsiveSidebar=useResponsiveSidebar(),showResponsiveSidebar=_useResponsiveSidebar.showResponsiveSidebar,closeResponsiveSidebar=_useResponsiveSidebar.closeResponsiveSidebar,toggleResponsiveSidebar=_useResponsiveSidebar.toggleResponsiveSidebar;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(DocSidebar_styles_module.sidebar,(_clsx2={},_clsx2[DocSidebar_styles_module.sidebarWithHideableNavbar]=hideOnScroll,_clsx2[DocSidebar_styles_module.sidebarHidden]=isHidden,_clsx2))},hideOnScroll&&/*#__PURE__*/react.createElement(theme_Logo,{tabIndex:-1,className:DocSidebar_styles_module.sidebarLogo}),/*#__PURE__*/react.createElement("nav",{className:(0,clsx_m/* default */.Z)('menu','menu--responsive','thin-scrollbar',DocSidebar_styles_module.menu,(_clsx3={'menu--show':showResponsiveSidebar},_clsx3[DocSidebar_styles_module.menuWithAnnouncementBar]=!isAnnouncementBarClosed&&showAnnouncementBar,_clsx3)),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.navAriaLabel',message:'Sidebar navigation',description:'The ARIA label for documentation menu'})},/*#__PURE__*/react.createElement(ResponsiveSidebarButton,{responsiveSidebarOpened:showResponsiveSidebar,onClick:toggleResponsiveSidebar}),/*#__PURE__*/react.createElement("ul",{className:"menu__list"},/*#__PURE__*/react.createElement(DocSidebarItems,{items:sidebar,onItemClick:closeResponsiveSidebar,collapsible:sidebarCollapsible,activePath:path}))),hideableSidebar&&/*#__PURE__*/react.createElement(HideableSidebarButton,{onClick:onCollapse}));}/* harmony default export */ var theme_DocSidebar = (DocSidebar);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(7410);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ var duotoneDark = (theme);

;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism/* default */.Z,
  theme: duotoneDark
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react.Component);

/* harmony default export */ var dist = (Highlight);


;// CONCATENATED MODULE: ./node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(input,_temp){var _ref=_temp===void 0?{}:_temp,_ref$target=_ref.target,target=_ref$target===void 0?document.body:_ref$target;var element=document.createElement('textarea');var previouslyFocusedElement=document.activeElement;element.value=input;// Prevent keyboard from showing on mobile
element.setAttribute('readonly','');element.style.contain='strict';element.style.position='absolute';element.style.left='-9999px';element.style.fontSize='12pt';// Prevent zooming on iOS
var selection=document.getSelection();var originalRange=false;if(selection.rangeCount>0){originalRange=selection.getRangeAt(0);}target.append(element);element.select();// Explicit selection workaround for iOS
element.selectionStart=0;element.selectionEnd=input.length;var isSuccess=false;try{isSuccess=document.execCommand('copy');}catch(_unused){}element.remove();if(originalRange){selection.removeAllRanges();selection.addRange(originalRange);}// Get the focus back on the previously focused element, if any
if(previouslyFocusedElement){previouslyFocusedElement.focus();}return isSuccess;}
// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(7594);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/palenight/index.js
// Converted automatically using ./tools/themeFromVsCode
var palenight_theme = {
  plain: {
    color: "#bfc7d5",
    backgroundColor: "#292d3e"
  },
  styles: [{
    types: ["comment"],
    style: {
      color: "rgb(105, 112, 152)",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "inserted"],
    style: {
      color: "rgb(195, 232, 141)"
    }
  }, {
    types: ["number"],
    style: {
      color: "rgb(247, 140, 108)"
    }
  }, {
    types: ["builtin", "char", "constant", "function"],
    style: {
      color: "rgb(130, 170, 255)"
    }
  }, {
    types: ["punctuation", "selector"],
    style: {
      color: "rgb(199, 146, 234)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(191, 199, 213)"
    }
  }, {
    types: ["class-name", "attr-name"],
    style: {
      color: "rgb(255, 203, 107)"
    }
  }, {
    types: ["tag", "deleted"],
    style: {
      color: "rgb(255, 85, 114)"
    }
  }, {
    types: ["operator"],
    style: {
      color: "rgb(137, 221, 255)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(255, 88, 116)"
    }
  }, {
    types: ["keyword"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["doctype"],
    style: {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "rgb(178, 204, 214)"
    }
  }, {
    types: ["url"],
    style: {
      color: "rgb(221, 221, 221)"
    }
  }]
};

/* harmony default export */ var palenight = (palenight_theme);

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var usePrismTheme=function usePrismTheme(){var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),prism=_useThemeConfig.prism;var _useThemeContext=hooks_useThemeContext(),isDarkTheme=_useThemeContext.isDarkTheme;var lightModeTheme=prism.theme||palenight;var darkModeTheme=prism.darkTheme||lightModeTheme;var prismTheme=isDarkTheme?darkModeTheme:lightModeTheme;return prismTheme;};/* harmony default export */ var hooks_usePrismTheme = (usePrismTheme);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var CodeBlock_styles_module = ({"codeBlockContainer":"codeBlockContainer_K1bP","codeBlockContent":"codeBlockContent_hGly","codeBlockTitle":"codeBlockTitle_eoMF","codeBlock":"codeBlock_23N8","codeBlockWithTitle":"codeBlockWithTitle_2JqI","copyButton":"copyButton_Ue-o","codeBlockLines":"codeBlockLines_39YC"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var highlightLinesRangeRegex=/{([\d,-]+)}/;var getHighlightDirectiveRegex=function getHighlightDirectiveRegex(languages){if(languages===void 0){languages=['js','jsBlock','jsx','python','html'];}// supported types of comments
var comments={js:{start:'\\/\\/',end:''},jsBlock:{start:'\\/\\*',end:'\\*\\/'},jsx:{start:'\\{\\s*\\/\\*',end:'\\*\\/\\s*\\}'},python:{start:'#',end:''},html:{start:'<!--',end:'-->'}};// supported directives
var directives=['highlight-next-line','highlight-start','highlight-end'].join('|');// to be more reliable, the opening and closing comment must match
var commentPattern=languages.map(function(lang){return"(?:"+comments[lang].start+"\\s*("+directives+")\\s*"+comments[lang].end+")";}).join('|');// white space is allowed, but otherwise it should be on it's own line
return new RegExp("^\\s*(?:"+commentPattern+")\\s*$");};// select comment styles based on language
var highlightDirectiveRegex=function highlightDirectiveRegex(lang){switch(lang){case'js':case'javascript':case'ts':case'typescript':return getHighlightDirectiveRegex(['js','jsBlock']);case'jsx':case'tsx':return getHighlightDirectiveRegex(['js','jsBlock','jsx']);case'html':return getHighlightDirectiveRegex(['js','jsBlock','html']);case'python':case'py':return getHighlightDirectiveRegex(['python']);default:// all comment types
return getHighlightDirectiveRegex();}};function CodeBlock(_ref){var children=_ref.children,languageClassName=_ref.className,metastring=_ref.metastring,title=_ref.title;var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),prism=_useThemeConfig.prism;var _useState=(0,react.useState)(false),showCopied=_useState[0],setShowCopied=_useState[1];var _useState2=(0,react.useState)(false),mounted=_useState2[0],setMounted=_useState2[1];// The Prism theme on SSR is always the default theme but the site theme
// can be in a different mode. React hydration doesn't update DOM styles
// that come from SSR. Hence force a re-render after mounting to apply the
// current relevant styles. There will be a flash seen of the original
// styles seen using this current approach but that's probably ok. Fixing
// the flash will require changing the theming approach and is not worth it
// at this point.
(0,react.useEffect)(function(){setMounted(true);},[]);// TODO: the title is provided by MDX as props automatically
// so we probably don't need to parse the metastring
// (note: title="xyz" => title prop still has the quotes)
var codeBlockTitle=(0,lib/* parseCodeBlockTitle */.bc)(metastring)||title;var button=(0,react.useRef)(null);var highlightLines=[];var prismTheme=hooks_usePrismTheme();// In case interleaved Markdown (e.g. when using CodeBlock as standalone component).
var content=Array.isArray(children)?children.join(''):children;if(metastring&&highlightLinesRangeRegex.test(metastring)){// Tested above
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
var highlightLinesRange=metastring.match(highlightLinesRangeRegex)[1];highlightLines=parse_numeric_range_default()(highlightLinesRange).filter(function(n){return n>0;});}var language=languageClassName&&// Force Prism's language union type to `any` because it does not contain all available languages
// eslint-disable-next-line @typescript-eslint/no-explicit-any
languageClassName.replace(/language-/,'');if(!language&&prism.defaultLanguage){language=prism.defaultLanguage;}// only declaration OR directive highlight can be used for a block
var code=content.replace(/\n$/,'');if(highlightLines.length===0&&language!==undefined){var range='';var directiveRegex=highlightDirectiveRegex(language);// go through line by line
var lines=content.replace(/\n$/,'').split('\n');var blockStart;// loop through lines
for(var index=0;index<lines.length;){var line=lines[index];// adjust for 0-index
var lineNumber=index+1;var match=line.match(directiveRegex);if(match!==null){var directive=match.slice(1).reduce(function(final,item){return final||item;},undefined);switch(directive){case'highlight-next-line':range+=lineNumber+",";break;case'highlight-start':blockStart=lineNumber;break;case'highlight-end':range+=blockStart+"-"+(lineNumber-1)+",";break;default:break;}lines.splice(index,1);}else{// lines without directives are unchanged
index+=1;}}highlightLines=parse_numeric_range_default()(range);code=lines.join('\n');}var handleCopyCode=function handleCopyCode(){copyTextToClipboard(code);setShowCopied(true);setTimeout(function(){return setShowCopied(false);},2000);};return/*#__PURE__*/react.createElement(dist,(0,esm_extends/* default */.Z)({},defaultProps,{key:String(mounted),theme:prismTheme,code:code,language:language}),function(_ref2){var _clsx;var className=_ref2.className,style=_ref2.style,tokens=_ref2.tokens,getLineProps=_ref2.getLineProps,getTokenProps=_ref2.getTokenProps;return/*#__PURE__*/react.createElement("div",{className:CodeBlock_styles_module.codeBlockContainer},codeBlockTitle&&/*#__PURE__*/react.createElement("div",{style:style,className:CodeBlock_styles_module.codeBlockTitle},codeBlockTitle),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(CodeBlock_styles_module.codeBlockContent,language)},/*#__PURE__*/react.createElement("pre",{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */tabIndex:0,className:(0,clsx_m/* default */.Z)(className,CodeBlock_styles_module.codeBlock,'thin-scrollbar',(_clsx={},_clsx[CodeBlock_styles_module.codeBlockWithTitle]=codeBlockTitle,_clsx)),style:style},/*#__PURE__*/react.createElement("code",{className:CodeBlock_styles_module.codeBlockLines},tokens.map(function(line,i){if(line.length===1&&line[0].content===''){line[0].content='\n';// eslint-disable-line no-param-reassign
}var lineProps=getLineProps({line:line,key:i});if(highlightLines.includes(i+1)){lineProps.className+=' docusaurus-highlight-code-line';}return/*#__PURE__*/react.createElement("span",(0,esm_extends/* default */.Z)({key:i},lineProps),line.map(function(token,key){return/*#__PURE__*/react.createElement("span",(0,esm_extends/* default */.Z)({key:key},getTokenProps({token:token,key:key})));}));}))),/*#__PURE__*/react.createElement("button",{ref:button,type:"button","aria-label":(0,Translate/* translate */.I)({id:'theme.CodeBlock.copyButtonAriaLabel',message:'Copy code to clipboard',description:'The ARIA label for copy code blocks button'}),className:(0,clsx_m/* default */.Z)(CodeBlock_styles_module.copyButton,'clean-btn'),onClick:handleCopyCode},showCopied?/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))));});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(6159);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MDXComponents={code:function code(props){var children=props.children;// For retrocompatibility purposes (pretty rare use case)
// See https://github.com/facebook/docusaurus/pull/1584
if(/*#__PURE__*/(0,react.isValidElement)(children)){return children;}return!children.includes('\n')?/*#__PURE__*/react.createElement("code",props):/*#__PURE__*/react.createElement(CodeBlock,props);},a:function a(props){return/*#__PURE__*/react.createElement(Link/* default */.Z,props);},pre:function pre(props){var _children$props;var children=props.children;// See comment for `code` above
if(/*#__PURE__*/(0,react.isValidElement)(children==null?void 0:(_children$props=children.props)==null?void 0:_children$props.children)){return children==null?void 0:children.props.children;}return/*#__PURE__*/react.createElement(CodeBlock,/*#__PURE__*/(0,react.isValidElement)(children)?children==null?void 0:children.props:{children:children});},h1:(0,Heading/* default */.Z)('h1'),h2:(0,Heading/* default */.Z)('h2'),h3:(0,Heading/* default */.Z)('h3'),h4:(0,Heading/* default */.Z)('h4'),h5:(0,Heading/* default */.Z)('h5'),h6:(0,Heading/* default */.Z)('h6')};/* harmony default export */ var theme_MDXComponents = (MDXComponents);
// EXTERNAL MODULE: ./src/theme/NotFound.js
var NotFound = __webpack_require__(4204);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocPage_styles_module = ({"docPage":"docPage_31aa","docMainContainer":"docMainContainer_3ufF","docMainContainerEnhanced":"docMainContainerEnhanced_3NYZ","docSidebarContainer":"docSidebarContainer_3Kbt","docSidebarContainerHidden":"docSidebarContainerHidden_3pA8","collapsedDocSidebar":"collapsedDocSidebar_2JMH","expandSidebarButtonIcon":"expandSidebarButtonIcon_1naQ","docItemWrapperEnhanced":"docItemWrapperEnhanced_2vyJ","docItemWrapper":"docItemWrapper_3FMP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function getSidebar(_ref){var versionMetadata=_ref.versionMetadata,currentDocRoute=_ref.currentDocRoute;function addTrailingSlash(str){return str.endsWith('/')?str:str+"/";}function removeTrailingSlash(str){return str.endsWith('/')?str.slice(0,-1):str;}var permalinkToSidebar=versionMetadata.permalinkToSidebar,docsSidebars=versionMetadata.docsSidebars;// With/without trailingSlash, we should always be able to get the appropriate sidebar
// note: docs plugin permalinks currently never have trailing slashes
// trailingSlash is handled globally at the framework level, not plugin level
var sidebarName=permalinkToSidebar[currentDocRoute.path]||permalinkToSidebar[addTrailingSlash(currentDocRoute.path)]||permalinkToSidebar[removeTrailingSlash(currentDocRoute.path)];var sidebar=docsSidebars[sidebarName];return{sidebar:sidebar,sidebarName:sidebarName};}function DocPageContent(_ref2){var _clsx,_siteConfig$themeConf,_siteConfig$themeConf2,_clsx2,_clsx3;var currentDocRoute=_ref2.currentDocRoute,versionMetadata=_ref2.versionMetadata,children=_ref2.children;var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),siteConfig=_useDocusaurusContext.siteConfig,isClient=_useDocusaurusContext.isClient;var pluginId=versionMetadata.pluginId,version=versionMetadata.version;var _getSidebar=getSidebar({versionMetadata:versionMetadata,currentDocRoute:currentDocRoute}),sidebarName=_getSidebar.sidebarName,sidebar=_getSidebar.sidebar;var _useState=(0,react.useState)(false),hiddenSidebarContainer=_useState[0],setHiddenSidebarContainer=_useState[1];var _useState2=(0,react.useState)(false),hiddenSidebar=_useState2[0],setHiddenSidebar=_useState2[1];var toggleSidebar=(0,react.useCallback)(function(){if(hiddenSidebar){setHiddenSidebar(false);}setHiddenSidebarContainer(!hiddenSidebarContainer);},[hiddenSidebar]);return/*#__PURE__*/react.createElement(Layout/* default */.Z,{key:isClient,wrapperClassName:lib/* ThemeClassNames.wrapper.docPages */.kM.wrapper.docPages,pageClassName:lib/* ThemeClassNames.page.docPage */.kM.page.docPage,searchMetadatas:{version:version,tag:(0,lib/* docVersionSearchTag */.os)(pluginId,version)}},/*#__PURE__*/react.createElement("div",{className:DocPage_styles_module.docPage},sidebar&&/*#__PURE__*/react.createElement("aside",{className:(0,clsx_m/* default */.Z)(DocPage_styles_module.docSidebarContainer,(_clsx={},_clsx[DocPage_styles_module.docSidebarContainerHidden]=hiddenSidebarContainer,_clsx)),onTransitionEnd:function onTransitionEnd(e){if(!e.currentTarget.classList.contains(DocPage_styles_module.docSidebarContainer)){return;}if(hiddenSidebarContainer){setHiddenSidebar(true);}}},/*#__PURE__*/react.createElement(theme_DocSidebar,{key:// Reset sidebar state on sidebar changes
// See https://github.com/facebook/docusaurus/issues/3414
sidebarName,sidebar:sidebar,path:currentDocRoute.path,sidebarCollapsible:(_siteConfig$themeConf=(_siteConfig$themeConf2=siteConfig.themeConfig)==null?void 0:_siteConfig$themeConf2.sidebarCollapsible)!=null?_siteConfig$themeConf:true,onCollapse:toggleSidebar,isHidden:hiddenSidebar}),hiddenSidebar&&/*#__PURE__*/react.createElement("div",{className:DocPage_styles_module.collapsedDocSidebar,title:(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonTitle',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonAriaLabel',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),tabIndex:0,role:"button",onKeyDown:toggleSidebar,onClick:toggleSidebar},/*#__PURE__*/react.createElement(theme_IconArrow,{className:DocPage_styles_module.expandSidebarButtonIcon}))),/*#__PURE__*/react.createElement("main",{className:(0,clsx_m/* default */.Z)(DocPage_styles_module.docMainContainer,(_clsx2={},_clsx2[DocPage_styles_module.docMainContainerEnhanced]=hiddenSidebarContainer||!sidebar,_clsx2))},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('container padding-top--md padding-bottom--lg',DocPage_styles_module.docItemWrapper,(_clsx3={},_clsx3[DocPage_styles_module.docItemWrapperEnhanced]=hiddenSidebarContainer,_clsx3))},/*#__PURE__*/react.createElement(esm/* MDXProvider */.Zo,{components:theme_MDXComponents},children)))));}function DocPage(props){var docRoutes=props.route.routes,versionMetadata=props.versionMetadata,location=props.location;var currentDocRoute=docRoutes.find(function(docRoute){return (0,react_router/* matchPath */.LX)(location.pathname,docRoute);});if(!currentDocRoute){return/*#__PURE__*/react.createElement(NotFound.default,props);}return/*#__PURE__*/react.createElement(DocPageContent,{currentDocRoute:currentDocRoute,versionMetadata:versionMetadata},(0,renderRoutes/* default */.Z)(docRoutes));}/* harmony default export */ var theme_DocPage = (DocPage);

/***/ }),

/***/ 6159:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": function() { return /* binding */ MainHeading; },
  "Z": function() { return /* binding */ theme_Heading; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(9756);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2122);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(4973);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 15 modules
var lib = __webpack_require__(9732);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"enhancedAnchor":"enhancedAnchor_2LWZ","h1Heading":"h1Heading_27L5"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js
var _excluded=["id"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */var MainHeading=function MainHeading(_ref){var props=Object.assign({},_ref);return/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement("h1",(0,esm_extends/* default */.Z)({},props,{id:undefined// h1 headings do not need an id because they don't appear in the TOC
,className:styles_module.h1Heading}),props.children));};var createAnchorHeading=function createAnchorHeading(Tag){return function TargetComponent(_ref2){var _clsx;var id=_ref2.id,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref2,_excluded);var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll;if(!id){return/*#__PURE__*/react.createElement(Tag,props);}return/*#__PURE__*/react.createElement(Tag,props,/*#__PURE__*/react.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,clsx_m/* default */.Z)('anchor',(_clsx={},_clsx[styles_module.enhancedAnchor]=!hideOnScroll,_clsx)),id:id}),props.children,/*#__PURE__*/react.createElement("a",{className:"hash-link",href:"#"+id,title:(0,Translate/* translate */.I)({id:'theme.common.headingLinkTitle',message:'Direct link to heading',description:'Title for link to heading'})},"#"));};};var Heading=function Heading(headingType){return headingType==='h1'?MainHeading:createAnchorHeading(headingType);};/* harmony default export */ var theme_Heading = (Heading);

/***/ }),

/***/ 7594:
/***/ (function(module, exports) {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports.default = parsePart;
module.exports = parsePart;


/***/ })

}]);
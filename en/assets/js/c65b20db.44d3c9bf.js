(self["webpackChunkes_latamkink_io"] = self["webpackChunkes_latamkink_io"] || []).push([[1357],{

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

/***/ 1723:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2122);
/* harmony import */ var _home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
var _excluded=["components"];var frontMatter={id:'gobernanza-red',title:'Network Governance Tool',sidebar_label:'Network Governance'};var contentTitle=undefined;var metadata={"unversionedId":"herramientas/gobernanza-red","id":"herramientas/gobernanza-red","isDocsHomePage":false,"title":"Network Governance Tool","description":"EOSIO Privileged Account","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/herramientas/gobernanza-red.md","sourceDirName":"herramientas","slug":"/herramientas/gobernanza-red","permalink":"/en/docs/herramientas/gobernanza-red","editUrl":"https://github.com/lacchain/eosio.lacchain.net/tree/master/docs/herramientas/gobernanza-red.md","version":"current","lastUpdatedAt":1626211817,"formattedLastUpdatedAt":"7/13/2021","frontMatter":{"id":"gobernanza-red","title":"Network Governance Tool","sidebar_label":"Network Governance"},"sidebar":"docs","previous":{"title":"Snapshots and Backups","permalink":"/en/docs/herramientas/respaldos"},"next":{"title":"Learning Portals","permalink":"/en/docs/recursos/otros-recursos"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'EOSIO Privileged Account',id:'eosio-privileged-account',children:[]},{value:'System Contracts',id:'system-contracts',children:[]},{value:'Graphic Interface for Permisioning Committee',id:'graphic-interface-for-permisioning-committee',children:[{value:'Validator Node Registration',id:'validator-node-registration',children:[]},{value:'Entity Registration',id:'entity-registration',children:[]},{value:'Delete Network Group',id:'delete-network-group',children:[]},{value:'Active Node Changes',id:'active-node-changes',children:[]},{value:'Allocation of Resources to Accounts',id:'allocation-of-resources-to-accounts',children:[]},{value:'Remove Entity',id:'remove-entity',children:[]},{value:'Actions available for partners',id:'actions-available-for-partners',children:[]},{value:'Actions available for non-partners',id:'actions-available-for-non-partners',children:[]},{value:'Account Blacklisting',id:'account-blacklisting',children:[]},{value:'System contracts update',id:'system-contracts-update',children:[]}]}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"eosio-privileged-account"},"EOSIO Privileged Account"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"eosio")," account  represents the permitting committee that represents the highest authority of the network. This account has unlimited access to CPU, NET, and RAM resources."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"You can create specific permissions for each privileged action and also you can use a multi-signature contract (or \"multisig\") with variable parameters that will require the consent of the majority of the actors in the table."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"system-contracts"},"System Contracts"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"LACChain EOSIO permissioning contracts are implemented as ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/manuals/eosio.contracts/latest/index"},"System Contracts"),". These contracts have access to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../recursos/funciones-importantes"},"privileged functions")," that encapsulate the base functionality for the LACChain governance framework."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/lacchain/eosio.contracts/tree/master/contracts/lacchain.system"},"LACChain EOSOIO Systems Contracts")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"graphic-interface-for-permisioning-committee"},"Graphic Interface for Permisioning Committee"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This tool is to manage the permitting and the governance of LACChain EOSIO through Smart Contract."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://lacchain.eosio.online/management"},"GUI tool to facilitate network management by the permitting committee")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Some of the available functions are:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"validator-node-registration"},"Validator Node Registration"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Validator node registration",src:__webpack_require__(1152)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"entity-registration"},"Entity Registration"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Entity registration",src:__webpack_require__(4914)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"delete-network-group"},"Delete Network Group"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Delete network group",src:__webpack_require__(8052)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"active-node-changes"},"Active Node Changes"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Active node changes",src:__webpack_require__(5829)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"allocation-of-resources-to-accounts"},"Allocation of Resources to Accounts"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Allocation of resources to accounts",src:__webpack_require__(9085)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"remove-entity"},"Remove Entity"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Remove Entity",src:__webpack_require__(753)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"actions-available-for-partners"},"Actions available for partners"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Actions available for partners",src:__webpack_require__(6540)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"actions-available-for-non-partners"},"Actions available for non-partners"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Actions available for non-partners",src:__webpack_require__(7137)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"account-blacklisting"},"Account Blacklisting"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Accounts can be added to a blacklist that must be implemented by all validator nodes to effectively block access to an account."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"system-contracts-update"},"System contracts update"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The updating of the system contracts can only be carried out by the account ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"eosio")," which represents the permitting committee."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{"className":"admonition admonition-note alert alert--secondary"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{parentName:"div","className":"admonition-heading"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h5",{parentName:"div"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{parentName:"h5","className":"admonition-icon"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("svg",{parentName:"span","xmlns":"http://www.w3.org/2000/svg","width":"14","height":"16","viewBox":"0 0 14 16"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("path",{parentName:"svg","fillRule":"evenodd","d":"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Work in Progress")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{parentName:"div","className":"admonition-content"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"div"},"We are still working on this aspect of the documentation, if you want to improve the content you can learn ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../guias/contribuir"},"how to contribute"),". See the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../roadmap"},"Project Roadmap"),"."))));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 7137:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/non-partner-list-acctions-e93175fecddc3f963e25b002d4561ec7.png");

/***/ }),

/***/ 6540:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/partner-list-acctions-d48313d7b9b1f5f5f0ff99f06e083758.png");

/***/ }),

/***/ 9085:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/asignacion-recursos-cuentas-a301f7456d99831419fcc00116a4b1a2.png");

/***/ }),

/***/ 5829:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/cambio-nodos-activos-c205b18fab1373c86fa532e5d338e190.png");

/***/ }),

/***/ 8052:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ("data:image/png;base64,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");

/***/ }),

/***/ 4914:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/registro-entidades-b46674ddca58fca2f3dde49ec57987f4.png");

/***/ }),

/***/ 1152:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/registro-nodos-validadores-8e0db78b8b5bce7f73ae75ecd49c3b7f.png");

/***/ }),

/***/ 753:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ("data:image/png;base64,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");

/***/ })

}]);
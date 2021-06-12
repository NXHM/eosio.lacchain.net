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
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2122);
/* harmony import */ var _home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
var _excluded=["components"];var frontMatter={id:'gobernanza-red',title:'Herramientas de Gobernanza.',sidebar_label:'Gobernanza de Red'};var metadata={"unversionedId":"herramientas/gobernanza-red","id":"herramientas/gobernanza-red","isDocsHomePage":false,"title":"Herramientas de Gobernanza.","description":"EOSIO Privileged Account","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/herramientas/gobernanza-red.md","sourceDirName":"herramientas","slug":"/herramientas/gobernanza-red","permalink":"/en/docs/herramientas/gobernanza-red","editUrl":"https://github.com/LatamLink/eosio.lacchain.net/tree/master/docs/herramientas/gobernanza-red.md","version":"current","lastUpdatedAt":1623459651,"formattedLastUpdatedAt":"6/12/2021","sidebar_label":"Gobernanza de Red","frontMatter":{"id":"gobernanza-red","title":"Herramientas de Gobernanza.","sidebar_label":"Gobernanza de Red"},"sidebar":"docs","previous":{"title":"Respaldos y Snapshots","permalink":"/en/docs/herramientas/respaldos"},"next":{"title":"Recursos para aprender EOSIO","permalink":"/en/docs/recursos/otros-recursos"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'EOSIO Privileged Account',id:'eosio-privileged-account',children:[]},{value:'System Contracts',id:'system-contracts',children:[]},{value:'Graphic Interface for Permisioning Committee',id:'graphic-interface-for-permisioning-committee',children:[{value:'Validator Node Registration',id:'validator-node-registration',children:[]},{value:'Entity Registration',id:'entity-registration',children:[]},{value:'Delete Network Group',id:'delete-network-group',children:[]},{value:'Active Node Changes',id:'active-node-changes',children:[]},{value:'Allocation of Resources to Accounts',id:'allocation-of-resources-to-accounts',children:[]},{value:'Remover Entidad',id:'remover-entidad',children:[]},{value:'Account Blacklisting',id:'account-blacklisting',children:[]},{value:'System contracts update',id:'system-contracts-update',children:[]}]}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"eosio-privileged-account"},"EOSIO Privileged Account"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"eosio")," account  represents the permitting committee that represents the highest authority of the network. This account has unlimited access to CPU, NET, and RAM resources."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"You can create specific permissions for each privileged action and also you can use a multi-signature contract (or \"multisig\") with variable parameters that will require the consent of the majority of the actors in the table."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"system-contracts"},"System Contracts"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"LACChain EOSIO permissioning contracts are implemented as ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/manuals/eosio.contracts/latest/index"},"System Contracts"),". These contracts have access to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../recursos/funciones-importantes"},"privileged functions")," that encapsulate the base functionality for the LACChain governance framework."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/LatamLink/eosio.contracts/tree/master/contracts/lacchain.system"},"LACChain EOSOIO Systems Contracts")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"graphic-interface-for-permisioning-committee"},"Graphic Interface for Permisioning Committee"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This tool is to manage the permitting and the governance of LACChain EOSIO through Smart Contract."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://lacchain.eosio.online/management"},"GUI tool to facilitate network management by the permitting committee")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Some of the available functions are:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"validator-node-registration"},"Validator Node Registration"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Validator node registration",src:__webpack_require__(1152)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"entity-registration"},"Entity Registration"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Entity registration",src:__webpack_require__(4914)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"delete-network-group"},"Delete Network Group"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Delete network group",src:__webpack_require__(8052)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"active-node-changes"},"Active Node Changes"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Active node changes",src:__webpack_require__(5829)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"allocation-of-resources-to-accounts"},"Allocation of Resources to Accounts"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Allocation of resources to accounts",src:__webpack_require__(9085)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"remover-entidad"},"Remover Entidad"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Remover entidad",src:__webpack_require__(753)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"account-blacklisting"},"Account Blacklisting"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Accounts can be added to a blacklist that must be implemented by all validator nodes to effectively block access to an account."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"system-contracts-update"},"System contracts update"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The updating of the system contracts can only be carried out by the account ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"eosio")," which represents the permitting committee."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{"className":"admonition admonition-note alert alert--secondary"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{parentName:"div","className":"admonition-heading"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h5",{parentName:"div"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{parentName:"h5","className":"admonition-icon"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("svg",{parentName:"span","xmlns":"http://www.w3.org/2000/svg","width":"14","height":"16","viewBox":"0 0 14 16"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("path",{parentName:"svg","fillRule":"evenodd","d":"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Work in Progress")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{parentName:"div","className":"admonition-content"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"div"},"We are still working on this aspect of the documentation, if you want to improve the content you can learn ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../guias/contribuir"},"how to contribute"),". See the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../roadmap"},"Project Roadmap"),"."))));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 9085:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/asignacion-recursos-cuentas-5ae4a78d9e76ae8857c92ac1c6647d09.png");

/***/ }),

/***/ 5829:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/cambio-nodos-activos-e59d5f5f3fc7d23f28079584eb31b731.png");

/***/ }),

/***/ 8052:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ("data:image/png;base64,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");

/***/ }),

/***/ 4914:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/registro-entidades-675343984091b8212650a07da7cab435.png");

/***/ }),

/***/ 1152:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/registro-nodos-validadores-8e33e5d2cb7076af407c499c38be90c4.png");

/***/ }),

/***/ 753:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ("data:image/png;base64,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");

/***/ })

}]);
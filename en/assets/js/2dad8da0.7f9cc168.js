(self["webpackChunkes_latamkink_io"] = self["webpackChunkes_latamkink_io"] || []).push([[2528],{

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

/***/ 511:
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
var _excluded=["components"];var frontMatter={id:'librerias-sdk',title:'EOSIO SDK Libraries',sidebar_label:'EOSIO SDK Libraries'};var contentTitle=undefined;var metadata={"unversionedId":"herramientas/librerias-sdk","id":"herramientas/librerias-sdk","isDocsHomePage":false,"title":"EOSIO SDK Libraries","description":"APIs for integrating with EOSIO blockchains","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/herramientas/librerias-sdk.md","sourceDirName":"herramientas","slug":"/herramientas/librerias-sdk","permalink":"/en/docs/herramientas/librerias-sdk","editUrl":"https://github.com/lacchain/eosio.lacchain.net/tree/master/docs/herramientas/librerias-sdk.md","version":"current","lastUpdatedAt":1626272458,"formattedLastUpdatedAt":"7/14/2021","frontMatter":{"id":"librerias-sdk","title":"EOSIO SDK Libraries","sidebar_label":"EOSIO SDK Libraries"},"sidebar":"docs","previous":{"title":"dAPP Boilerplates","permalink":"/en/docs/herramientas/boilerplates"},"next":{"title":"Snapshots and Backups","permalink":"/en/docs/herramientas/respaldos"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'JavaScript',id:'javascript',children:[{value:'eosjs',id:'eosjs',children:[]},{value:'eosjs-keygen',id:'eosjs-keygen',children:[]}]},{value:'Swift SDK',id:'swift-sdk',children:[{value:'eosio-swift',id:'eosio-swift',children:[]},{value:'eosio-swift-abieos-serialization-provider',id:'eosio-swift-abieos-serialization-provider',children:[]},{value:'eosio-swift-ecc',id:'eosio-swift-ecc',children:[]},{value:'eosio-swift-reference-ios-authenticator-signature-provider',id:'eosio-swift-reference-ios-authenticator-signature-provider',children:[]},{value:'eosio-swift-softkey-signature-provider',id:'eosio-swift-softkey-signature-provider',children:[]},{value:'eosio-swift-vault-signature-provider',id:'eosio-swift-vault-signature-provider',children:[]},{value:'eosio-swift-vault',id:'eosio-swift-vault',children:[]}]},{value:'Java SDK',id:'java-sdk',children:[{value:'eosio-java-android-abieos-serialization-provider',id:'eosio-java-android-abieos-serialization-provider',children:[]},{value:'eosio-java-android-rpc-provider',id:'eosio-java-android-rpc-provider',children:[]},{value:'eosio-java-softkey-signature-provider',id:'eosio-java-softkey-signature-provider',children:[]},{value:'eosio-android-keystore-signature-provider',id:'eosio-android-keystore-signature-provider',children:[]}]}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"APIs for integrating with EOSIO blockchains "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"javascript"},"JavaScript"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"EOSJS is a JavaScript library for the integration with EOSIO based blockchains using EOSIO's RPC API. This library was created to provide a JavaScript interface for the interaction between web applications for the end user and EOSIO blockchains. As this develops a significant amount of applications in JavaScript, this library is designed to provide a higher support to the ecosystem in general and establishes the better practices in the industry for the interaction of the web applications with EOSIO blockchains."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosjs"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://developers.eos.io/manuals/eosjs/latest/index"},"eosjs")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A general purpose Javascript library which provides an API for integrating with EOSIO-based blockchains using the EOSIO Nodeos RPC API"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosjs-keygen"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosjs-keygen"},"eosjs-keygen")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A Javascript library for managing keys in local storage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"swift-sdk"},"Swift SDK"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-swift"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-swift"},"eosio-swift")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"An API for integrating with EOSIO-based blockchains using the EOSIO RPC API"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-swift-abieos-serialization-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-swift-abieos-serialization-provider"},"eosio-swift-abieos-serialization-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A pluggable serialization provider for EOSIO SDK for Swift."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-swift-ecc"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-swift-ecc"},"eosio-swift-ecc")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A library for working with public and private keys, cryptographic signatures, encryption/decryption, etc. as part of the EOSIO SDK for Swift family of libraries"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-swift-reference-ios-authenticator-signature-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-swift-reference-ios-authenticator-signature-provider"},"eosio-swift-reference-ios-authenticator-signature-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A pluggable signature provider for EOSIO SDK for Swift"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-swift-softkey-signature-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-swift-softkey-signature-provider"},"eosio-swift-softkey-signature-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"An example pluggable signature provider for EOSIO SDK for Swift. It allows for signing transactions using in-memory K1 keys"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-swift-vault-signature-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-swift-vault-signature-provider"},"eosio-swift-vault-signature-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A pluggable signature provider for EOSIO SDK for Swift"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-swift-vault"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-swift-vault"},"eosio-swift-vault")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"An utility library for working with public/private keys and signing with Apple's Keychain and Secure Enclave"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"java-sdk"},"Java SDK"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-java-android-abieos-serialization-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-java-android-abieos-serialization-provider"},"eosio-java-android-abieos-serialization-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A pluggable serialization provider for EOSIO SDK for Java"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-java-android-rpc-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-java-android-rpc-provider"},"eosio-java-android-rpc-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"An Android RPC provider implementation for use within EOSIO SDK for Java as a plugin."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-java-softkey-signature-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-java-softkey-signature-provider"},"eosio-java-softkey-signature-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"An example pluggable signature provider for EOSIO SDK for Java"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"eosio-android-keystore-signature-provider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"h3","href":"https://github.com/EOSIO/eosio-android-keystore-signature-provider"},"eosio-android-keystore-signature-provider")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"An example pluggable signature provider for EOSIO SDK for Java written in Kotlin"));};MDXContent.isMDXComponent=true;

/***/ })

}]);
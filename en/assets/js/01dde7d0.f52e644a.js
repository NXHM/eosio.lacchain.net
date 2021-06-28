(self["webpackChunkes_latamkink_io"] = self["webpackChunkes_latamkink_io"] || []).push([[8099],{

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

/***/ 1155:
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
var _excluded=["components"];var frontMatter={id:'instalacion-nodos',title:'Installing LACChain EOSIO Nodes',sidebar_label:'How to Install a Node'};var contentTitle=undefined;var metadata={"unversionedId":"guias/instalacion-nodos","id":"guias/instalacion-nodos","isDocsHomePage":false,"title":"Installing LACChain EOSIO Nodes","description":"Nodeos is the core software of an EOSIO blockchain. It is a deamon that performs all the functions of a blockchain node, such as synchronization with other nodes through the p2p protocol, provides an HTTP API for the client software and optionally signs blocks if configured with the account of a validator.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/guias/instalacion-nodos.md","sourceDirName":"guias","slug":"/guias/instalacion-nodos","permalink":"/en/docs/guias/instalacion-nodos","editUrl":"https://github.com/lacchain/eosio.lacchain.net/tree/master/docs/guias/instalacion-nodos.md","version":"current","lastUpdatedAt":1624907601,"formattedLastUpdatedAt":"6/28/2021","frontMatter":{"id":"instalacion-nodos","title":"Installing LACChain EOSIO Nodes","sidebar_label":"How to Install a Node"},"sidebar":"docs","previous":{"title":"Development Enviroment","permalink":"/en/docs/guias/ambiente-desarrollo"},"next":{"title":"Infrastructure Notes","permalink":"/en/docs/guias/nodos-eosio"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Testnet Information',id:'testnet-information',children:[]},{value:'1. Create an account',id:'1-create-an-account',children:[]},{value:'2. Authenticate on the Dashboard',id:'2-authenticate-on-the-dashboard',children:[]},{value:'3. Deploy a node',id:'3-deploy-a-node',children:[{value:'Configuration examples',id:'configuration-examples',children:[]}]},{value:'4. Delete a node',id:'4-delete-a-node',children:[]}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Nodeos")," is the core software of an EOSIO blockchain. It is a deamon that performs all the functions of a blockchain node, such as synchronization with other nodes through the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"p2p protocol"),", provides an",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"}," HTTP API")," for the client software and optionally ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"signs blocks")," if configured with the account of a validator."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Nodeos")," is available in source code and binary packages in the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/EOSIO/eos/releases"},"EOSIO GitHub repository"),". The supported platforms are Ubuntu 16.04 and 18.04, RHEL7 and MacOS."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"When planning a server installation, you have several options to select from. Often times, the selection is determined by the existing habits and preferences of the system administrator."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null," You may also find more useful information about ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://guide.eoscostarica.io/docs/tutorials/node-installation"},"how to install and configure nodeos")," in EOS Costa Rica's developer guides. Consult our guide on how to configure the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"./ambiente-desarrollo"},"development environment")," to be able to work on the LACChain EOSIO network."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"testnet-information"},"Testnet Information"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,"EOSIO version"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{href:"https://github.com/lacchain/eosio-network",target:"_blank",rel:"noopener noreferrer"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"LACChain EOSIO")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,"Chain ID"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"2c1f36d2e3774cba3e47804b6463c207544ac24183194e0b96ffad31e8f4acd5"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,"Genesis file"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{href:"https://raw.githubusercontent.com/LatamLink/eosio-testnet/master/genesis.json",target:"_blank",rel:"noopener noreferrer"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"genesis.json"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"See our ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/lacchain/eosio-network"},"repository on GitHub")," for more information about nodes in LACChain EOSIO. If you want to install and configure nodes from the command line, consult the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/lacchain/eosio-network/blob/master/README.md"},"README.md")," of our repository on GitHub, before then make sure you have installed the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"./ambiente-desarrollo"},"development environment")," for EOSIO."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Before starting, it is important that you know some ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"./nodos-eosio"},"infrastructure considerations")," about the nodes in EOSIO that can be useful to expand your knowledge of the network operation."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"1-create-an-account"},"1. Create an account"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"In order to deploy nodes in the LACChain EOSIO network, it is important to have an account registered as a ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Partner")," or",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"}," Non-Partner"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"See the guide to create an account according to your user role:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"./crear-cuenta-entidad"},"Non-partner")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"./crear-cuenta-entidad"},"Partner"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"2-authenticate-on-the-dashboard"},"2. Authenticate on the Dashboard"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The LACChain EOSIO network has a ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://lacchain.eosio.online/"},"dashboard"),", which allows users to manage within the network, including the option to deploy various types of nodes."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Login with your ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Partner")," or",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"}," Non-Partner")," account. See our tutorial on how to manage your ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"./llaves-privadas"},"private keys")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"3-deploy-a-node"},"3. Deploy a node"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Once authenticated with our account, select the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"administration")," option within the dashboard tools. In this section you will be shown the types of nodes that you can deploy depending on your type of account."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"In order to create the node, we simply fill in the requested data in the form and execute the transaction."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Administration section",src:__webpack_require__(9222)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"configuration-examples"},"Configuration examples"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The dashboard also has a section in which we can download an example of the configuration of the different types of node, we only have to access the option of ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://lacchain.eosio.online/node-config"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"node config"))," within the tools."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Node config",src:__webpack_require__(1227)/* .default */ .Z})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"4-delete-a-node"},"4. Delete a node"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Inside the dashboard, there is also an option to be able to delete the nodes, simply by typing the name of the node that we want to delete. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Delete a node",src:__webpack_require__(2005)/* .default */ .Z})));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 1227:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/dashboard_01-e5b6eebc0bb5db5b3ee122b6d1b9061e.png");

/***/ }),

/***/ 9222:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/dashboard_02-338921cd9cd38b9138328ce10584fafe.png");

/***/ }),

/***/ 2005:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ("data:image/png;base64,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");

/***/ })

}]);
(self["webpackChunkes_latamkink_io"] = self["webpackChunkes_latamkink_io"] || []).push([[7435],{

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

/***/ 2078:
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
var _excluded=["components"];var frontMatter={id:'privacidad',title:'Privacidad en Redes Blockchain',sidebar_label:'Privacidad en Blockchain'};var metadata={"unversionedId":"privacidad","id":"privacidad","isDocsHomePage":false,"title":"Privacidad en Redes Blockchain","description":"La tecnología Blockchain proporciona las herramientas necesarias para descentralizar la información de forma segura e inquebrantable. La introducción de Bitcoin hizo posible que miles de nodos de todo el mundo compartan y mantengan la misma información. Sin embargo, en la mayoría de las Blockchains, la idea central es hacer pública esta información para que todos accedan a ella y verificarla, sin la necesidad de una autoridad central. Por lo tanto, las cadenas de bloques públicas se definen como * sin confianza * (no es necesario confiar). Sin embargo, muchas empresas y entidades privadas que desean usar la tecnología blockchain se encuentran con una pregunta muy importante: ¿cómo mantener la información privada y al mismo tiempo mantener la seguridad y la transparencia de una blockchain pública?","source":"@site/docs/privacidad.md","sourceDirName":".","slug":"/privacidad","permalink":"/docs/privacidad","editUrl":"https://github.com/lacchain/eosio.lacchain.net/tree/master/docs/privacidad.md","version":"current","lastUpdatedAt":1623794116,"formattedLastUpdatedAt":"15/6/2021","sidebar_label":"Privacidad en Blockchain","frontMatter":{"id":"privacidad","title":"Privacidad en Redes Blockchain","sidebar_label":"Privacidad en Blockchain"},"sidebar":"docs","previous":{"title":"Autenticado y Firmas Digitales","permalink":"/docs/identidad-digital"},"next":{"title":"Interoperabilidad de Redes","permalink":"/docs/interoperabilidad"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Revisión tecnológica de las soluciones de privacidad de datos de Blockchain',id:'revisión-tecnológica-de-las-soluciones-de-privacidad-de-datos-de-blockchain',children:[]},{value:'Privacidad en EOSIO',id:'privacidad-en-eosio',children:[{value:'LACChain EOSIO ZPK',id:'lacchain-eosio-zpk',children:[]},{value:'Administrador de transacciones de privacidad',id:'administrador-de-transacciones-de-privacidad',children:[]},{value:'Soluciones existentes de privacidad en EOSIO',id:'soluciones-existentes-de-privacidad-en-eosio',children:[]}]}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La tecnolog\xEDa Blockchain proporciona las herramientas necesarias para descentralizar la informaci\xF3n de forma segura e inquebrantable. La introducci\xF3n de Bitcoin hizo posible que miles de nodos de todo el mundo compartan y mantengan la misma informaci\xF3n. Sin embargo, en la mayor\xEDa de las Blockchains, la idea central es hacer p\xFAblica esta informaci\xF3n para que todos accedan a ella y verificarla, sin la necesidad de una autoridad central. Por lo tanto, las cadenas de bloques p\xFAblicas se definen como ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"}," sin confianza ")," (no es necesario confiar). Sin embargo, muchas empresas y entidades privadas que desean usar la tecnolog\xEDa blockchain se encuentran con una pregunta muy importante: \xBFc\xF3mo mantener la informaci\xF3n privada y al mismo tiempo mantener la seguridad y la transparencia de una blockchain p\xFAblica?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La privacidad en LACChain EOSIO se centra en hacer que los datos solo est\xE9n disponibles para una lista espec\xEDfica de participantes. Para lograr esto, se debe implementar un mecanismo que garantice que las transacciones se distribuyan solo a una lista de participantes que pueden enviar transacciones privadas entre ellos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Esto trae unas cuantas de preguntas:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\xBFQu\xE9 cuentas pueden ver la transacci\xF3n?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\xBFQu\xE9 nodos pueden ver la transacci\xF3n?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\xBFQu\xE9 nodos pueden ver el contrato inteligente?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\xBFQui\xE9n maneja la lista de actores permitidos? (en cadena vs. fuera de cadena)")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"revisión-tecnológica-de-las-soluciones-de-privacidad-de-datos-de-blockchain"},"Revisi\xF3n tecnol\xF3gica de las soluciones de privacidad de datos de Blockchain"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://arxiv.org/pdf/2105.01316"},"Este informe")," estudia las tecnolog\xEDas de blockchain empresarial existentes: sistemas impulsados \u200B\u200Bpor EOSIO, Hyperledger Fabric y Besu, Consensus Quorum, R3 Corda y Ernst and Young's Nightfall, que brindan privacidad de datos al mismo tiempo que aprovechan los beneficios de la integridad de datos de blockchain. Al revisar y comparar c\xF3mo y qu\xE9 tan bien estas tecnolog\xEDas logran la privacidad de los datos, se logra capturar una noci\xF3n de las mejores pr\xE1cticas y modelos de privacidad de datos actuales de la industria. Las principales tecnolog\xEDas empresariales se contrastan en paralelo con EOSIO para comprender mejor c\xF3mo EOSIO puede evolucionar para cumplir con las tendencias observadas en la privacidad de la cadena de bloques empresarial. En general, se observaron las siguientes estrategias y tendencias en estas tecnolog\xEDas:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Criptograf\xEDa:")," Se descubri\xF3 que el algoritmo hash es la primitiva criptogr\xE1fica m\xE1s utilizada en las soluciones de privacidad empresarial. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Coordinaci\xF3n a trav\xE9s de contratos inteligentes:")," Una estrategia com\xFAn es utilizar un blockchain p\xFAblico compartido para coordinar los grupos de privacidad de datos y, en general, las identidades administradas y el control de acceso."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Uso compartido de c\xF3digos de transacciones y contratos:")," Hay una variedad de diferentes niveles de privacidad en torno a la visibilidad de la l\xF3gica empresarial (c\xF3digo de contrato inteligente). Algunas soluciones solo permit\xEDan a los pares autorizados ver el c\xF3digo, mientras que otras lo hac\xEDan accesible a todos los miembros del blockchain compartido."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Migraciones de datos para aplicaciones de privacidad de datos:")," Existen desaf\xEDos importantes cuando se utilizan datos almacenados criptogr\xE1ficamente en t\xE9rminos de poder ejecutar actualizaciones del sistema."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Varias cadenas de bloques para la privacidad de los datos:")," las soluciones intentaron crear una nueva cadena de bloques privada para cada relaci\xF3n de datos privados que finalmente se abandon\xF3 a favor de un blockchain compartido con colecciones / transacciones de datos privados que estaban ancladas en el blockchain con un hash en para mejorar la escalabilidad."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://arxiv.org/pdf/2105.01316"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},"Ver Informe de Privacidad en EOSIO"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"privacidad-en-eosio"},"Privacidad en EOSIO"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"lacchain-eosio-zpk"},"LACChain EOSIO ZPK"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Las pruebas o protocolos de conocimiento cero, tambi\xE9n conocidos como ZKP, son uno de los m\xE9todos alternativos explorados en LACChain EOSIO para resolver el desaf\xEDo de la privacidad en blockchain. ZPK es el m\xE9todo por el cual los operadores de nodos pueden demostrar que una transacci\xF3n es v\xE1lida sin la necesidad de revelar los valores de la transacci\xF3n. El hecho de que este valor agregado de privacidad se pueda obtener a trav\xE9s de la criptograf\xEDa es \xFAtil para las personas y entidades privadas que se benefician del uso de la tecnolog\xEDa blockchain sin temor a compartir informaci\xF3n confidencial."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"LACChain EOSIO tiene como objetivo integrar nuevas primitivas (intr\xEDnsecas) para la verificaci\xF3n de ZKP disponible de forma nativa para Smart Contracts (Dapps) para la construcci\xF3n de aplicaciones con requisitos de privacidad y al mismo tiempo puede validarse para los mismos agentes en la red (BPs + Full Nodos), sin la necesidad de agregar nuevos agentes a la red."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"administrador-de-transacciones-de-privacidad"},"Administrador de transacciones de privacidad"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un Privacy Transaction Manager (PTM) es un mecanismo utilizado en varias tecnolog\xEDas de blockchain para distribuir transacciones privadas por un canal lateral de punto a punto, donde solo los participantes involucrados en la transacci\xF3n reciben la carga privada. Se registra un puntero o hash de la transacci\xF3n en la cadena de bloques de publica, para que los participantes puedan verificar la integridad y el orden de las transacciones privadas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Por ejemplo ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Hyperledger Besu"),", otra tecnolog\xEDa blockchain utilizada en LACChain, utiliza un PTM llamado Orion. Besu proporciona una extensi\xF3n de contrato pre-compilada del cliente ethereum que usa claves de Orion para canalizar transacciones privadas a trav\xE9s de nodos de Orion para evitar que los datos sean visibles en la red p\xFAblica."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"soluciones-existentes-de-privacidad-en-eosio"},"Soluciones existentes de privacidad en EOSIO"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/EOSIO/eosjs-ecc/issues/19#issuecomment-392941963"},"https://github.com/EOSIO/eosjs-ecc/issues/19#issuecomment-392941963")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/GetScatter/ScatterDesktop/issues/43"},"https://github.com/GetScatter/ScatterDesktop/issues/43")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{"className":"admonition admonition-note alert alert--secondary"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{parentName:"div","className":"admonition-heading"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h5",{parentName:"div"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{parentName:"h5","className":"admonition-icon"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("svg",{parentName:"span","xmlns":"http://www.w3.org/2000/svg","width":"14","height":"16","viewBox":"0 0 14 16"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("path",{parentName:"svg","fillRule":"evenodd","d":"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Trabajo en progreso")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{parentName:"div","className":"admonition-content"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"div"},"Aun estamos trabajando en este aspecto de la documentaci\xF3n, si desea mejorar el contenido puede aprender ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"guias/contribuir"},"como contribuir"),". Consulte el ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"./roadmap"},"Roadmap del proyecto"),"."))));};MDXContent.isMDXComponent=true;

/***/ })

}]);
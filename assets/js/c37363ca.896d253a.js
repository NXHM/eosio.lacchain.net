(self["webpackChunkes_latamkink_io"] = self["webpackChunkes_latamkink_io"] || []).push([[3957],{

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

/***/ 3779:
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
var _excluded=["components"];var frontMatter={id:'mecanismo-consenso',title:'Mecanismo de Consenso',sidebar_label:'Mecanismo de Consenso'};var metadata={"unversionedId":"mecanismo-consenso","id":"mecanismo-consenso","isDocsHomePage":false,"title":"Mecanismo de Consenso","description":"El mecanismo de consenso asegura que cada nuevo bloque que se agrega al Blockchain sea la única versión de la verdad acordada por todos los nodos en la red. Por lo tanto, un algoritmo de consenso tiene como objetivo encontrar un acuerdo común que sea una aceptado por toda la red.","source":"@site/docs/mecanismo-consenso.md","sourceDirName":".","slug":"/mecanismo-consenso","permalink":"/docs/mecanismo-consenso","editUrl":"https://github.com/lacchain/eosio.lacchain.net/tree/master/docs/mecanismo-consenso.md","version":"current","lastUpdatedAt":1623794116,"formattedLastUpdatedAt":"15/6/2021","sidebar_label":"Mecanismo de Consenso","frontMatter":{"id":"mecanismo-consenso","title":"Mecanismo de Consenso","sidebar_label":"Mecanismo de Consenso"},"sidebar":"docs","previous":{"title":"Testnet EOSIO para LACChain","permalink":"/docs/eosio"},"next":{"title":"Cuentas y Autorizaciones","permalink":"/docs/cuentas-permisos"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Comite Permisionador LACChain',id:'comite-permisionador-lacchain',children:[{value:'Grupo de Consenso',id:'grupo-de-consenso',children:[]}]},{value:'Nodos Validadores Activos',id:'nodos-validadores-activos',children:[{value:'Cronograma de producción',id:'cronograma-de-producción',children:[]},{value:'Tolerancia a fallas bizantinas',id:'tolerancia-a-fallas-bizantinas',children:[]},{value:'Tolerancia a fallas en nodos',id:'tolerancia-a-fallas-en-nodos',children:[]}]},{value:'Nodos Validadores de Reserva',id:'nodos-validadores-de-reserva',children:[{value:'Rotación de nodos activos',id:'rotación-de-nodos-activos',children:[]},{value:'Sustitución de un Productor de Bloques activo',id:'sustitución-de-un-productor-de-bloques-activo',children:[]}]},{value:'Contratos de sistema EOSIO a la medida',id:'contratos-de-sistema-eosio-a-la-medida',children:[{value:'Funciones dPOS deshabilitadas:',id:'funciones-dpos-deshabilitadas',children:[]}]}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El mecanismo de consenso asegura que cada nuevo bloque que se agrega al Blockchain sea la \xFAnica versi\xF3n de la verdad acordada por todos los nodos en la red. Por lo tanto, un algoritmo de consenso tiene como objetivo encontrar un acuerdo com\xFAn que sea una aceptado por toda la red."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En el caso de LACChain EOSIO existe un grupo de nodos que poseen la autoridad de validar transacciones y escribir estas transacciones dentro de bloques nuevos. A estos nodos los denominaremos ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Validadores"),". "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"comite-permisionador-lacchain"},"Comite Permisionador LACChain"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"LACChain es una red p\xFAblica/permisionada, de tal manera que se requiere de una autoridad central que gobierna la actividad de la red, esto con el objetivo de obtener una red legalmente supervisada."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"LACChain se dise\xF1a bajo el principio de que el comit\xE9 permisionador sea transparente y tenga la menor intervenci\xF3n posible. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La autoridad del comite permisionador podr\xE1 ser derivada de un conjunto de actores mediante aprobaciones multifirmas ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://developers.eos.io/manuals/eosjs/v21.0/how-to-guides/how-to-propose-a-multisig-transaction/#gatsby-focus-wrapper"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"multisig"))," te tal manera que se requieran de la aprobaci\xF3n del grupo mediante la firma de la mayor\xEDa simple, es decir, que se junten las firmas de la mitad de los actores m\xE1s uno adicional como m\xEDnimo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Dentro de la principales funciones del comit\xE9 permisionador esta evaluar las entidades que quieran registrarse y desplegar nodos validadores."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"grupo-de-consenso"},"Grupo de Consenso"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El grupo de nodos validadores activos poseen la autoridad de escribir a la cadena de bloques porque fueron otorgados este privilegio por parte de la  autoridad superior, el ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"comit\xE9 permisionador"),", quien sera la m\xE1xima autoridad y quien determina cuales entidades ser\xE1n responsables de operar los nodos validadores. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"}," Cualquier entidad que cumpla con un m\xEDnimo de requisitos t\xE9cnicos y legales puede aplicar para ser validador de bloques en LACChain EOSIO. Consulte nuestra secci\xF3n sobre el ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"guias/crear-cuenta-entidad"},"proceso de permisionado")," para obtener m\xE1s informaci\xF3n.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Eventualmente habr\xE1 un veh\xEDculo legal, quien verifica identidad y firma contratos con entidades que operan los nodos validadores. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"nodos-validadores-activos"},"Nodos Validadores Activos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los nodos validadores autorizados como nodos nodos validadores activos pertenecen a un grupo que comparte la responsabilidad de validar y escribir todas las acciones en la red."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Son capaces de reconocer las firmas de los nodos escritores y verificar que las transacciones hayan sido transmitidas a la red por nodos autorizados mediante listas blancas en contratos inteligentes. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una red EOSIO esta configurada por defecto para utilizar 21 validadores activos y una serie validadores de reserva para una operaci\xF3n estable."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"}," EOSIO permite hasta ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"125 productores de bloque activos"),", especificado mediante ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"max_producers")," en ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106"},"config.hpp")," ")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"cronograma-de-producción"},"Cronograma de producci\xF3n"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En redes EOSIO, los nodos validadores activos se enumeran en un cronograma, llamado ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"schedule")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La lista de nodos validadores en el ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"schedule")," se ordena alfab\xE9ticamente y as\xED se define la secuencia en que deben firmar bloques. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Cada validador recibe una ventana de 12 bloques para firmar antes de que el siguiente validador inicie su ventana. Los bloques nuevos son producidos por el primer nodo en la lista durante un periodo de 6 segundos (12 bloques) y luego pasa el siguiente nodo a producir los siguientes 12 bloques y as\xED sucesivamente. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si un nodo validador no est\xE1 listo o no est\xE1 disponible, no hay nadie para producir los 12 bloques, por lo que todas las transacciones especulativas se retrasan hasta que el pr\xF3ximo validador comience a firmar."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"tolerancia-a-fallas-bizantinas"},"Tolerancia a fallas bizantinas"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los bloques no se consideran irreversibles en la cadena hasta que hayan sido validados por 2/3 +1 de los validadores activos. De tal manera que si un validador del grupo inserta un bloque invalido los nodos siguientes lo rechazaran y las transacciones y no ser\xE1n incluidas sin que 2/3 +1 hayan validado ese bloque. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Ejemplo:")," Una red de 21 validadores activos requiere validaci\xF3n de 15 nodos (2/3 +1), lo cual toma en promedio 90 segundos para obtener irreversibilidad de un bloque nuevo.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"tolerancia-a-fallas-en-nodos"},"Tolerancia a fallas en nodos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una vez que se firma un bloque, otros productores lo validan en el cronograma y pasa a un estado irreversible despu\xE9s de que 2/3 + 1 productores lo hayan validado. Entonces, si 1/3 o m\xE1s de todos los productores est\xE1n fuera de l\xEDnea, el \xFAltimo n\xFAmero de bloque irreversible, conocido como \"Last Irreversible Block\" o LIB, no aumentar\xEDa y la cadena de bloques se detendr\xE1."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los servidores a veces fallan, y a veces deben ser retirados de operaci\xF3n para actualizaciones de software y mantenimiento del sistema, lo que es importante considerar en redes EOSIO peque\xF1as."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Con solo 5 validadores, la red tolerar\xE1 que 1 validadores se desconecte. Si m\xE1s de uno est\xE1 fuera de l\xEDnea, el n\xFAmero del ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\xFAltimo bloque irreversible (LIB)")," dejar\xE1 de moverse y la red se detendr\xE1. Con 4 nodos, la interrupci\xF3n de un nodo interrumpir\xE1 la operaci\xF3n. Con 9 validadores, dos nodos pueden desconectarse sin romper la red."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Es importante que las llaves privadas de producci\xF3n est\xE9n respaldadas correctamente. Si se pierden llaves de nodos validadores debido a un desastre del sistema, existe la posibilidad de que la red deje de funcionar para siempre."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"nodos-validadores-de-reserva"},"Nodos Validadores de Reserva"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Las redes EOSIO manejan un grupo de validadores registrados que pueden asumir el rol de producir bloques con solo ser agregado al ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"schedule")," de nodos validadores activos por el comit\xE9 permisionador."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"rotación-de-nodos-activos"},"Rotaci\xF3n de nodos activos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La rotaci\xF3n peri\xF3dica de nodos validadores activos favorece la descentralizaci\xF3n. Por esta raz\xF3n el comit\xE9 permisionador contar\xE1 con una ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"herramientas/gobernanza-red"},"herramienta de gesti\xF3n de red")," que permita seleccionar los nodos validadores que desea incluir o excluir en el ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"schedule"),". "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Por ejemplo"),": Se puede definir una pol\xEDtica de rotaci\xF3n de nodos activos semanalmente.  ")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Mas adelante se habilitar\xE1 la rotaci\xF3n peri\xF3dica y autom\xE1tica basada en contratos inteligentes. De tal forma que sea imposible predecir quienes sean los nodos validadores activos seleccionados. (entrop\xEDa externa)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sustitución-de-un-productor-de-bloques-activo"},"Sustituci\xF3n de un Productor de Bloques activo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En caso de que alg\xFAn nodo del grupo principal dejara de responder. El comit\xE9 permisionador podr\xE1 reemplazar manualmente los nodos validadores que presenten problemas de rendimiento o seguridad."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Eventualmente se podr\xE1 implementar un contrato inteligente que sustituya una cuenta en el ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"schedule")," de forma autom\xE1tica basado en m\xE9tricas objetivas de rendimiento."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Aun se requiere definir n\xFAmero \xF3ptimo de nodos validadores de respaldo para LACChain.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"contratos-de-sistema-eosio-a-la-medida"},"Contratos de sistema EOSIO a la medida"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"LACChain utilizar\xE1 contratos de sistema hechos a la medida. Para esto nos basaremos en los contratos de sistema nativos de EOSIO, donde el principal cambio es sustituir el mecanismo nativo ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Delegated Proof of Stake (DPOS)")," por el est\xE1ndar definido por ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"LACChain"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Este cambio implica deshabilitar el uso de tokens y de votos caracter\xEDsticos del protocolo DPOS. Es decir, al momento de girar recursos, no ser\xE1 necesario disponer de ning\xFAn token. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"funciones-dpos-deshabilitadas"},"Funciones dPOS deshabilitadas:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Token de Sistema"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Votos por nodos productores de bloques"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Pago de nodos productores de bloques"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\"Staking\" para recursos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Delegaci\xF3n de Recursos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Namebiding"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Rex")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Esta funcionalidad no necesariamente se eliminar\xE1, sino que se utilizar\xE1 una funci\xF3n de \u201Cassert false\u201D para deshabilitar las funciones ya que la plataforma no soporta estas funciones."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En esencia los contratos de sistema de LAC Chain definen un mecanismo para registrar los nodos validadores as\xED como asignar ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"recursos de sistema")," requeridos por las cuentas de nodos escritores de la red para ejecutar sus contratos inteligentes."));};MDXContent.isMDXComponent=true;

/***/ })

}]);
(self["webpackChunkes_latamkink_io"] = self["webpackChunkes_latamkink_io"] || []).push([[2723],{

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

/***/ 8541:
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
var _excluded=["components"];var frontMatter={id:'nodos-eosio',title:'Consideraciones Infraestructura',sidebar_label:'Notas Infraestructura'};var contentTitle=undefined;var metadata={"unversionedId":"guias/nodos-eosio","id":"guias/nodos-eosio","isDocsHomePage":false,"title":"Consideraciones Infraestructura","description":"Requerimientos de Hardware","source":"@site/docs/guias/consideraciones-infraestructura.md","sourceDirName":"guias","slug":"/guias/nodos-eosio","permalink":"/docs/guias/nodos-eosio","editUrl":"https://github.com/lacchain/eosio.lacchain.net/tree/master/docs/guias/consideraciones-infraestructura.md","version":"current","lastUpdatedAt":1625585946,"formattedLastUpdatedAt":"6/7/2021","frontMatter":{"id":"nodos-eosio","title":"Consideraciones Infraestructura","sidebar_label":"Notas Infraestructura"},"sidebar":"docs","previous":{"title":"Preparar transacciones","permalink":"/docs/guias/transacciones"},"next":{"title":"¿Cómo Contribuir?","permalink":"/docs/guias/contribuir"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Requerimientos de Hardware',id:'requerimientos-de-hardware',children:[]},{value:'Almacenamiento',id:'almacenamiento',children:[]},{value:'Sistema de archivos',id:'sistema-de-archivos',children:[]},{value:'Contenedores y Virtualización',id:'contenedores-y-virtualización',children:[]},{value:'Redes',id:'redes',children:[]}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_eosio_lacchain_net_eosio_lacchain_net_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"requerimientos-de-hardware"},"Requerimientos de Hardware"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Las caracter\xEDsticas de un servidor dependen mucho de los requisitos de la red. Las redes de alto tr\xE1fico como el mainnet de EOS requieren un servidor dedicado con SSD o NVMe conectados directamente, al menos para los archivos de estado de los nodos. Algunos proveedores de hosting permiten una combinaci\xF3n de HDD y SSD en el mismo servidor f\xEDsico, y bloquea el registro y el archivo de historial de estado que se pueden almacenar en discos duros. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},"Un servidor t\xEDpico en producci\xF3n tendr\xEDa al menos 500 GB de almacenamiento SSD, 32 GB de RAM y una CPU de 3.5 Ghz o m\xE1s r\xE1pido.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Las redes de bajo tr\xE1fico y las redes de prueba estar\xEDan funcionando bien en servidores virtuales VPS. Por lo general, 8 GB de RAM y un par de n\xFAcleos de CPU son suficientes. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"almacenamiento"},"Almacenamiento"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El registro de bloques y el historial de estado pueden requerir un espacio de almacenamiento significativo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En cuanto a rendimiento, nodeos requiere acceso a su estado de memoria compartida con el m\xEDnimo retraso posible. Por lo tanto, el directorio que contenga los datos del estado debe residir en almacenamiento SSD o NVMe. Otros directorios, como los bloques y el historial de estado, son bastante bajos en cuanto a los requisitos de rendimiento, y los discos duros funcionan bien para este trabajo. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sistema-de-archivos"},"Sistema de archivos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"ZFS es un sistema de archivos desarrollado por Sun Microsystems y utilizado en su sistema operativo Solaris. El sistema de archivos ha sido portado al kernel de Linux y est\xE1 disponible de forma inmediata en Ubuntu 18.04"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Otros sistemas de archivos de elecci\xF3n ser\xEDan ext4 y XFS. Son estables y funcionan bien, aunque ZFS ofrece una serie de caracter\xEDsticas \xFAnicas para beneficiarse de:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"Respaldos r\xE1pidos y costo-eficientes. Se necesita una fracci\xF3n de segundo para crear un nuevo respaldo de un sistema de archivos ZFS, y los respaldos son m\xE1s ligeros en tama\xF1o ya que solo se agregan los cambios a los datos del nodo. El contenido del respaldo se puede copiar m\xE1s tarde en alg\xFAn otro medio o ubicaci\xF3n remota sin interrumpir el servicio.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"Compresi\xF3n r\xE1pida lz4. Incluso en NVMe, la compresi\xF3n no agrega ning\xFAn retraso visible al funcionamiento del disco, y permite ahorrar hasta un 30% en el archivo de registro de bloques y hasta un 50% en el archivo de estado. Tambi\xE9n reduce el tr\xE1fico de E / S de almacenamiento, lo que permite aumentar el rendimiento.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"Creaci\xF3n f\xE1cil de tantos sistemas de archivos como sea necesario, y cada sistema de archivos tendr\xEDa su propio punto de montaje, tama\xF1o de registro, pol\xEDtica de almacenamiento en cach\xE9 y configuraciones de compresi\xF3n. Esto permite ajustar el almacenamiento seg\xFAn las necesidades de aplicaci\xF3n."))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"LVM puede o no usarse, y depende del administrador del sistema definir la pol\xEDtica est\xE1ndar. Adem\xE1s, algunos proveedores de alojamiento, como IONOS, est\xE1n pre-configurando los servidores con LVM, por lo que es m\xE1s f\xE1cil usarlo que eliminarlo."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"contenedores-y-virtualización"},"Contenedores y Virtualizaci\xF3n"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Por lo general, un servidor ejecutar\xEDa m\xFAltiples procesos de nodo para diferentes prop\xF3sitos y posiblemente hasta para diferentes redes. Cada administrador del sistema debe seleccionar una estrategia para colocar procesos de nodo en un servidor. A continuaci\xF3n incluimos un resumen de las principales estrategias utilizadas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"sin-contenedores"},"Sin contenedores"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Los nodos se ejecutar\xE1n directamente en el espacio principal del host. El beneficio es un mantenimiento m\xE1s f\xE1cil y, en algunos casos, un mejor rendimiento. El inconveniente es que el paquete binario EOSIO instala los archivos binarios en una ubicaci\xF3n com\xFAn, y si se ejecutan varios procesos de nodo en el servidor, todos deben actualizarse simult\xE1neamente."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"contenedores-lxc"},"Contenedores LXC"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"La mayor\xEDa de las distribuciones de Linux ofrecen la funcionalidad de contenedores LXC. Debian supone que usted sabe c\xF3mo configurar una red para los contenedores, mientras que Ubuntu preconfigura un puente interno con direcciones en el rango 10.0.3.0/24 y un servicio DHCP en \xE9l. El direccionamiento es f\xE1cil de cambiar, y tambi\xE9n el servicio DHCP se puede configurar con asignaciones de direcciones est\xE1ticas para sus contenedores. Cuando se crea, un contenedor es un sistema operativo Linux m\xEDnimo y necesita instalar paquetes adicionales seg\xFAn sea necesario (incluso syslog y ping no est\xE1n presentes desde el principio). Los contenedores son f\xE1ciles de mantener y uno de los beneficios es que puede seleccionar una distribuci\xF3n o versi\xF3n de Linux diferente a la que ejecuta el host."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"virtualización-kvm-xen-vmware"},"Virtualizaci\xF3n KVM, Xen, VmWare"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Hay una cierta sobrecarga en la operaci\xF3n de la CPU, y normalmente la virtualizaci\xF3n completa no se usa en el entorno EOSIO. Sin embargo, podr\xEDa ser utilizable, especialmente si ya forma parte de los procesos est\xE1ndar de TI."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"contenedores-docker"},"Contenedores Docker"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Utilizan la misma tecnolog\xEDa subyacente que LXC, pero hay una serie de caracter\xEDsticas adicionales, como la implementaci\xF3n autom\xE1tica. Por esta raz\xF3n se ha decidido implementar los servicios como contenedores docker."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"redes"},"Redes"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El dise\xF1o y la seguridad de la red deben planificarse cuidadosamente. Considerando "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"En la mayor\xEDa de los entornos de proveedores de alojamiento, las m\xE1quinas f\xEDsicas se enfrentan directamente a Internet p\xFAblico sin ning\xFAn firewall frente a ellas. Algunos proveedores ofrecen un firewall frente a un servidor, opcional u obligatorio."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Un proceso de nodeos generalmente se escucha en 2 o 3 puertos TCP: el punto final p2p, la API HTTP y, opcionalmente, el websocket del complemento de historial de estado."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Adem\xE1s, nodeos suele establecer conexiones TCP salientes a sus pares p2p como se especifica en su configuraci\xF3n."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"balanceadores-de-carga"},"Balanceadores de carga"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Algunos proveedores de alojamiento ofrecen equilibradores de carga frente a los servidores. Un equilibrador de carga generalmente supervisa la conectividad a los servidores de fondo y deja de enviar solicitudes a un servidor que deja de responder, o se cumple alguna condici\xF3n de supervisi\xF3n personalizada. Normalmente tambi\xE9n le permiten pausar el tr\xE1fico a uno de los servidores y dejarlo fuera de servicio para mantenimiento y actualizaciones."));};MDXContent.isMDXComponent=true;

/***/ })

}]);
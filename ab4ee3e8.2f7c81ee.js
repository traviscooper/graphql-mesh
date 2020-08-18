(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||u[b]||o;return n?a.a.createElement(m,c({ref:t},p,{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(127)),i={},c={unversionedId:"generated-markdown/Neo4jHandler.generated",id:"generated-markdown/Neo4jHandler.generated",isDocsHomePage:!1,title:"Neo4jHandler.generated",description:"* url (type//localhost",source:"@site/docs/generated-markdown/Neo4jHandler.generated.md",permalink:"/docs/generated-markdown/Neo4jHandler.generated",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/generated-markdown/Neo4jHandler.generated.md"},l=[],p={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"url")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),", required) - URL for the Neo4j Instance e.g. neo4j://localhost"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"username")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),", required) - Username for basic authentication"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"password")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),", required) - Password for basic authentication"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"alwaysIncludeRelationships")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Boolean"),") - Specifies whether relationships should always be included in the type definitions as ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://grandstack.io/docs/neo4j-graphql-js.html#relationship-types"}),"relationship")," types, even if the relationships do not have properties."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"database")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),") - Specifies database name"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cacheIntrospection")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Boolean"),") - Cache Introspection")))}d.isMDXComponent=!0}}]);
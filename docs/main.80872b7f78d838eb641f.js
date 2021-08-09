(()=>{"use strict";var e,r={3868:(e,r,t)=>{var n=t(3935),s=t(3379),a=t.n(s),o=t(7795),i=t.n(o),c=t(569),l=t.n(c),u=t(3565),d=t.n(u),f=t(9216),h=t.n(f),p=t(4589),m=t.n(p),v=t(9399),y={};y.styleTagTransform=m(),y.setAttributes=d(),y.insert=l().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=h(),a()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals,t(1539),t(8674),t(1249),t(8309),t(9753),t(2526),t(1817),t(2165),t(6992),t(8783),t(3948),t(7042),t(1038);var b=t(7294),j=t(5893);function x(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const g=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var r,t,n=(r=(0,b.useState)([]),t=2,function(e){if(Array.isArray(e))return e}(r)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,s,a=[],o=!0,i=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);o=!0);}catch(e){i=!0,s=e}finally{try{o||null==t.return||t.return()}finally{if(i)throw s}}return a}}(r,t)||function(e,r){if(e){if("string"==typeof e)return x(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?x(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=n[0],a=n[1];return(0,b.useEffect)((function(){fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return a(e.results)}))}),[]),(0,j.jsx)("div",{className:"container",children:(0,j.jsx)("div",{className:"characters",children:s.map((function(e){var r=e.id,t=e.image,n=e.name,s=e.species,a=e.status;return(0,j.jsxs)("div",{className:"box",children:[(0,j.jsx)("img",{src:t,alt:n}),(0,j.jsxs)("div",{className:"character",children:[(0,j.jsx)("h3",{className:"name",children:n}),(0,j.jsx)("p",{className:"specie",children:s}),(0,j.jsx)("p",{className:"status",children:a})]})]},r)}))})})},w=function(e){var r=e.title;return(0,j.jsx)("header",{children:(0,j.jsx)("div",{className:"container",children:(0,j.jsxs)("div",{className:"content",children:[(0,j.jsx)("h1",{className:"title",children:r}),(0,j.jsx)("p",{className:"text",children:"Este proyecto ilustra los personajes de Rick and Morty"})]})})})};var O=t(5931),A={};A.styleTagTransform=m(),A.setAttributes=d(),A.insert=l().bind(null,"head"),A.domAPI=i(),A.insertStyleElement=h(),a()(O.Z,A),O.Z&&O.Z.locals&&O.Z.locals;const N=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{title:"Rick and Morty API"}),(0,j.jsx)(g,{})]})};n.render((0,j.jsx)(N,{}),document.getElementById("root"))},9399:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(4015),s=t.n(n),a=t(3645),o=t.n(a)()(s());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const i=o},5931:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(4015),s=t.n(n),a=t(3645),o=t.n(a)()(s());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const i=o}},t={};function n(e){var s=t[e];if(void 0!==s)return s.exports;var a=t[e]={id:e,exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,e=[],n.O=(r,t,s,a)=>{if(!t){var o=1/0;for(u=0;u<e.length;u++){for(var[t,s,a]=e[u],i=!0,c=0;c<t.length;c++)(!1&a||o>=a)&&Object.keys(n.O).every((e=>n.O[e](t[c])))?t.splice(c--,1):(i=!1,a<o&&(o=a));if(i){e.splice(u--,1);var l=s();void 0!==l&&(r=l)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,s,a]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={179:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var s,a,[o,i,c]=t,l=0;for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(c)var u=c(n);for(r&&r(t);l<o.length;l++)a=o[l],n.o(e,a)&&e[a]&&e[a][0](),e[o[l]]=0;return n.O(u)},t=self.webpackChunkreact_webpack_sass=self.webpackChunkreact_webpack_sass||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var s=n.O(void 0,[206],(()=>n(3868)));s=n.O(s)})();
//# sourceMappingURL=main.80872b7f78d838eb641f.js.map
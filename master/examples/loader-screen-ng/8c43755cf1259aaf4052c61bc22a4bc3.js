!function(n){function e(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:i})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1150)}({10:function(n,e){function t(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=i(r);return[t].concat(r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"})).concat([o]).join("\n")}return[t].join("\n")}function i(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var i=t(e,n);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&i[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},1028:function(n,e,t){"use strict";var i=t(19),r=(t.n(i),t(53)),o=t.n(r),a=t(981),s=t(786),l=t.n(s),c=o.a.module("Ring.loader-screen",[a.a]);c.service("loaderScreen",["$timeout","$rootScope",function(n,e){var t,i,r=this,o=!1,a=!1;this.startLoading=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;i||(i=n(function(){r.setVisible(!0)},e))},this.stopLoading=function(){i&&(n.cancel(i),i=null),r.setVisible(!1)},this.startInitialLoading=function(){o=!0,r.setVisible(!0)},this.stopInitialLoading=function(){o=!1,r.setVisible(!1)},e.isInitialLoading=function(){return o},e.isLoaderVisible=function(){return t},e.isLoadingFailed=function(){return a},this.failInitialLoading=function(n){r.stopInitialLoading(),a=!0,e.error=n},this.setVisible=function(n){t=n},e.$on("$routeChangeSuccess",function(){r.stopInitialLoading()}),e.$on("$routeChangeError",function(n,e,t,i){i&&(i.silent||i.authRedirect)||r.failInitialLoading(i)})}]),c.directive("rgLoaderScreen",function(){return{restrict:"A",scope:{message:"@rgLoaderScreen"},template:'\n<div class="'.concat(l.a.loaderScreen,'" ng-if="$root.isLoaderVisible()">\n  <rg-loader class="').concat(l.a.loader,'"\n    message="{{$root.isInitialLoading() ? message : \'\'}}"></rg-loader>\n</div>\n    ')}}),e.a=c.name},1150:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(53),r=t.n(i),o=t(1028);r.a.module("ExampleApp",[o.a]).run(["loaderScreen",function(n){n.setVisible(!0),n.startInitialLoading()}])},13:function(n,e,t){n.exports=t(2)(359)},14:function(n,e,t){e=n.exports=t(10)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #444;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #222;\n  --ring-secondary-color: #999;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #bbb;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},15:function(n,e,t){function i(n,e){for(var t=0;t<n.length;t++){var i=n[t],r=g[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(f(i.parts[o],e))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(f(i.parts[o],e));g[i.id]={id:i.id,refs:1,parts:a}}}}function r(n,e){for(var t=[],i={},r=0;r<n.length;r++){var o=n[r],a=e.base?o[0]+e.base:o[0],s=o[1],l=o[2],c=o[3],u={css:s,media:l,sourceMap:c};i[a]?i[a].parts.push(u):t.push(i[a]={id:a,parts:[u]})}return t}function o(n,e){var t=m(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=w[w.length-1];if("top"===n.insertAt)i?i.nextSibling?t.insertBefore(e,i.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),w.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=m(n.insertAt.before,t);t.insertBefore(e,r)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=w.indexOf(n);e>=0&&w.splice(e,1)}function s(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=u();t&&(n.attrs.nonce=t)}return c(e,n.attrs),o(n,e),e}function l(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",c(e,n.attrs),o(n,e),e}function c(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function u(){return t.nc}function f(n,e){var t,i,r,o;if(e.transform&&n.css){if(!(o=e.transform(n.css)))return function(){};n.css=o}if(e.singleton){var c=x++;t=y||(y=s(e)),i=d.bind(null,t,c,!1),r=d.bind(null,t,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=l(e),i=p.bind(null,t,e),r=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(e),i=h.bind(null,t),r=function(){a(t)});return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else r()}}function d(n,e,t,i){var r=t?"":i.css;if(n.styleSheet)n.styleSheet.cssText=k(e,r);else{var o=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function h(n,e){var t=e.css,i=e.media;if(i&&n.setAttribute("media",i),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function p(n,e,t){var i=t.css,r=t.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=S(i)),r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var g={},b=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(n,e){return e?e.querySelector(n):document.querySelector(n)},m=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var i=v.call(this,n,t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}e[n]=i}return e[n]}}(),y=null,x=0,w=[],S=t(64);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=r(n,e);return i(t,e),function(n){for(var o=[],a=0;a<t.length;a++){var s=t[a],l=g[s.id];l.refs--,o.push(l)}n&&i(r(n,e),e);for(var a=0;a<o.length;a++){var l=o[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete g[l.id]}}}};var k=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},19:function(n,e,t){n.exports=t(2)(328)},2:function(n,e){n.exports=vendor_lib},24:function(n,e,t){n.exports=t(2)(411)},27:function(n,e,t){n.exports=t(2)(396)},36:function(n,e,t){"use strict";function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function o(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),n}function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n){return n===document||n instanceof Node&&document.documentElement.contains(n.parentNode)}function l(n){if(n instanceof Range||s(n)){var e=n.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}}return Object.assign({},S)}function c(){return"devicePixelRatio"in window?window.devicePixelRatio:1}function u(){return window.innerHeight}function f(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function d(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function h(n){n.preventDefault&&n.preventDefault()}t.d(e,"d",function(){return w}),e.h=s,e.a=l,e.b=c,e.g=u,e.e=f,e.f=d,t.d(e,"l",function(){return k}),t.d(e,"j",function(){return _}),t.d(e,"k",function(){return C}),t.d(e,"c",function(){return L}),e.i=h;var p=t(24),g=(t.n(p),t(81)),b=(t.n(g),t(9)),v=(t.n(b),t(38)),m=(t.n(v),t(27)),y=(t.n(m),t(6)),x=(t.n(y),t(13)),w=(t.n(x),window.getComputedStyle.bind(window)),S={top:0,right:0,bottom:0,left:0,width:0,height:0},k=function(n){return function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"").split(/\s+/g).filter(function(n){return!!n}).forEach(function(t){return e[n](t)})}},_=k("add"),C=k("remove"),L=function(){function n(){i(this,n),a(this,"_all",new Set)}return o(n,[{key:"add",value:function(n,e,t,i){n.addEventListener(e,t,i);var r=function(){return n.removeEventListener(e,t,i)};return this._all.add(r),r}},{key:"remove",value:function(n){n(),this._all.delete(n)}},{key:"removeAll",value:function(){var n=this;this._all.forEach(function(e){return n.remove(e)})}}]),n}()},37:function(n,e,t){n.exports=t(2)(246)},38:function(n,e,t){n.exports=t(2)(436)},387:function(n,e,t){"use strict";function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function o(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),n}function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",function(){return l});var s=t(6),l=(t.n(s),function(){function n(){for(var e=this,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];i(this,n),a(this,"$inject",{}),this.constructor.$inject.forEach(function(n,t){e.$inject[n]=r[t]})}return o(n,null,[{key:"controller",get:function(){return this}}]),n}());a(l,"$inject",[])},4:function(n,e,t){n.exports=t(2)(421)},489:function(n,e,t){"use strict";function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function o(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),n}t.d(e,"a",function(){return p});var a=t(6),s=(t.n(a),t(13)),l=(t.n(s),t(496)),c=(t.n(l),t(37)),u=(t.n(c),t(36)),f=t(493),d=t.n(f),h=function(){function n(e){var t=e.x,r=e.y,o=e.radius,a=e.color;i(this,n),this.radius=o,this.x=t,this.y=r,this.color=a,this.decay=.01,this.life=1}return o(n,[{key:"step",value:function(){this.life-=this.decay}},{key:"isAlive",value:function(){return this.life>=0}},{key:"draw",value:function(n){var e=this.life>=0?this.life:0;n.fillStyle="rgba(".concat(this.color.r,", ").concat(this.color.g,", ").concat(this.color.b,", ").concat(e,")"),n.beginPath(),n.arc(this.x+this.radius,this.y+this.radius,this.radius,0,2*Math.PI),n.fill()}}]),n}(),p=function(){function n(e,t){i(this,n),this.isRunning=!1,this.props=Object.assign({},n.defaultProps,t),this.renderInNodeAndStart(e)}return o(n,null,[{key:"calculateGradient",value:function(n,e,t){var i=function(n,e){return n+Math.round((e-n)*t)};return{r:i(n.r,e.r),g:i(n.g,e.g),b:i(n.b,e.b)}}}]),o(n,[{key:"setCanvasSize",value:function(){var e=n.getPixelRatio(),t=this.props.size*e;this.canvas.width=t,this.canvas.height=t,this.canvas.style.width="".concat(this.props.size,"px"),this.canvas.style.height="".concat(this.props.size,"px"),this.ctx=this.canvas.getContext("2d"),this.ctx.scale(e,e)}},{key:"initializeLoader",value:function(){this.setCanvasSize(),this.height=this.props.size,this.width=this.props.size,this.particles=[],this.baseSpeed=1,this.colorIndex=0,this.maxRadius=10,this.minRadius=6,this.colorChangeTick=40,this.x=0,this.y=0,this.radius=8,this.hSpeed=1.5,this.vSpeed=.5,this.radiusSpeed=.05,this.tick=0,this.prepareInitialState(100),this.isRunning=!0,this.loop()}},{key:"prepareInitialState",value:function(n){for(var e=0;e<n;e++)this.step()}},{key:"handleLimits",value:function(n,e,t,i){var r=Math.random(this.baseSpeed)-this.baseSpeed/2;return n+2*e+this.baseSpeed>=i?-(this.baseSpeed+r):n<=this.baseSpeed?this.baseSpeed+r:t}},{key:"calculateNextCoordinates",value:function(){this.x+=this.hSpeed,this.y+=this.vSpeed,this.hSpeed=this.handleLimits(this.x,this.radius,this.hSpeed,this.width),this.vSpeed=this.handleLimits(this.y,this.radius,this.vSpeed,this.height)}},{key:"calculateNextRadius",value:function(){this.radius+=this.radiusSpeed,(this.radius>this.maxRadius||this.radius<this.minRadius)&&(this.radiusSpeed=-this.radiusSpeed)}},{key:"getNextColor",value:function(){var e=this.props.colors,t=e[this.colorIndex],i=e[this.colorIndex+1]||e[0];return n.calculateGradient(t,i,this.tick/this.colorChangeTick)}},{key:"nextTick",value:function(){++this.tick>this.colorChangeTick&&(this.tick=0,++this.colorIndex>this.props.colors.length-1&&(this.colorIndex=0))}},{key:"step",value:function(){this.nextTick(),this.calculateNextCoordinates(),this.calculateNextRadius(),this.particles.forEach(function(n){return n.step()}),this.particles.push(new h({x:this.x,y:this.y,radius:this.radius,color:this.getNextColor()}))}},{key:"removeDeadParticles",value:function(){this.particles=this.particles.filter(function(n){return n.isAlive()})}},{key:"draw",value:function(){var n=this;this.ctx.clearRect(0,0,this.width,this.height),this.removeDeadParticles(),this.particles.forEach(function(e){return e.draw(n.ctx)})}},{key:"loop",value:function(){var n=this;this.step(),this.draw(),this.isRunning&&window.requestAnimationFrame(function(){return n.loop()})}},{key:"updateMessage",value:function(n){this.textNode.textContent=n||""}},{key:"destroy",value:function(){this.isRunning=!1}},{key:"renderInNodeAndStart",value:function(n){return this.canvas=document.createElement("canvas"),this.canvas.dataset.test="ring-loader",this.canvas.classList.add(d.a.canvas),this.textNode=document.createElement("div"),this.textNode.dataset.test="ring-loader-text",this.textNode.classList.add(d.a.text),this.textNode.textContent=this.props.message?this.props.message:"",n.appendChild(this.canvas),n.appendChild(this.textNode),this.initializeLoader(),n}}],[{key:"getPixelRatio",value:function(){return t.i(u.b)()}}]),n}();!function(n,e,t){e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t}(p,"defaultProps",{size:64,colors:[{r:215,g:60,b:234},{r:145,g:53,b:224},{r:88,g:72,b:224},{r:37,g:183,b:255},{r:89,g:189,b:0},{r:251,g:172,b:2},{r:227,g:37,b:129}]})},490:function(n,e,t){e=n.exports=t(10)(!1),e.i(t(14),""),e.i(t(8),void 0),e.push([n.i,"@keyframes rotation-keyframes_556 {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.canvas_f75 {\n  display: block;\n\n  margin: 16px auto;\n\n  animation: rotation-keyframes_556 36s linear infinite;\n  pointer-events: none;\n}\n\n.text_e8e {\n  text-align: center;\n\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n",""]),e.locals={unit:""+t(8).locals.unit,canvas:"canvas_f75","rotation-keyframes":"rotation-keyframes_556",text:"text_e8e"}},493:function(n,e,t){var i=t(490);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0,t(15)(i,r),i.locals&&(n.exports=i.locals)},496:function(n,e,t){n.exports=t(2)(303)},5:function(n,e,t){n.exports=t(2)(442)},53:function(n,e,t){n.exports=t(2)(243)},6:function(n,e,t){n.exports=t(2)(443)},64:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,i=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return n;var o;return o=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},713:function(n,e,t){e=n.exports=t(10)(!1),e.i(t(14),""),e.push([n.i,".loaderScreen_84d {\n  position: absolute;\n\n  width: 100%;\n  height: 100%;\n\n  text-align: center;\n  vertical-align: middle\n}\n\n.loaderScreen_84d::before {\n  display: inline-block;\n  height: 100%;\n  content: '';\n  vertical-align: middle;\n}\n\n.loader_144 {\n  display: inline-block;\n}\n\n.loaderWithoutSpacing_ab3 canvas {\n  margin: 0;\n}\n",""]),e.locals={loaderScreen:"loaderScreen_84d",loader:"loader_144",loaderWithoutSpacing:"loaderWithoutSpacing_ab3"}},786:function(n,e,t){var i=t(713);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0,t(15)(i,r),i.locals&&(n.exports=i.locals)},8:function(n,e,t){e=n.exports=t(10)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},81:function(n,e,t){n.exports=t(2)(398)},9:function(n,e,t){n.exports=t(2)(83)},981:function(n,e,t){"use strict";function i(n){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function a(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}function s(n,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(n):e}function l(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function c(n){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&f(n,e)}function f(n,e){return(f=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function d(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var h=t(19),p=(t.n(h),t(5)),g=(t.n(p),t(4)),b=(t.n(g),t(53)),v=t.n(b),m=t(387),y=t(489),x=v.a.module("Ring.loader",[]),w=function(n){function e(){var n,t;r(this,e);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];t=s(this,(n=c(e)).call.apply(n,[this].concat(o)));var l=t.$inject.$element;return t.loader=new y.a(l[0],{message:t.message}),t}return u(e,n),a(e,[{key:"$onDestroy",value:function(){this.loader.destroy()}},{key:"$onChanges",value:function(n){this.loader.updateMessage(n.message.currentValue)}}]),e}(m.a);d(w,"$inject",["$element"]),d(w,"bindings",{message:"@"}),x.component("rgLoader",w),e.a=x.name}});
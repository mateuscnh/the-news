!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="/",e(e.s=321)}({23:function(n,r,e){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),a=[];function c(n){for(var r=-1,e=0;e<a.length;e++)if(a[e].identifier===n){r=e;break}return r}function s(n,r){for(var e={},t=[],o=0;o<n.length;o++){var i=n[o],s=r.base?i[0]+r.base:i[0],l=e[s]||0,d="".concat(s," ").concat(l);e[s]=l+1;var u=c(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:m(p,r),references:1}),t.push(d)}return t}function l(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var d,u=(d=[],function(n,r){return d[n]=r,d.filter(Boolean).join("\n")});function p(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=u(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function f(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var h=null,g=0;function m(n,r){var e,t,o;if(r.singleton){var i=g++;e=h||(h=l(r)),t=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=l(r),t=f.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var e=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=c(e[t]);a[o].references--}for(var i=s(n,r),l=0;l<e.length;l++){var d=c(e[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}e=i}}}},24:function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(a=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var a,c,s;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},321:function(n,r,e){"use strict";e.r(r);e(63),e(94),e(322);var t=e(50),o=JSON.parse(sessionStorage.getItem("article"));function i(n,r,e){var t=document.createElement(n);return""==r&&""===e||t.setAttribute(r,e),t}function a(n){window.scrollTo(0,0);var r=n.path[0].innerHTML;r=Object(t.a)(r),window.location="index.html?category=".concat(r)}!function(){for(var n=document.querySelectorAll("#navBar p"),r=0;r<n.length;r++)n[r].addEventListener("click",a);window.onload=function(){document.title="theNews - "+sessionStorage.getItem("title")};var e=document.querySelector("main"),t=i("div","id","container"),c=i("div","class","content-head"),s=i("h1","","");s.innerHTML=o.title,c.appendChild(s);var l=i("p","","");l.innerHTML=o.description,c.appendChild(l);var d=i("p","","");d.setAttribute("id","date"),d.innerHTML=o.publishedAt,c.appendChild(d);var u=i("div","class","content-text"),p=i("img","src",o.urlToImage);u.appendChild(p);var f=i("p","","");f.innerHTML=o.content,u.appendChild(f);var h=i("a","href",o.url);h.setAttribute("target","_blank"),h.innerHTML="<p>LER MATÉRIA COMPLETA</p>",u.appendChild(h),t.appendChild(c),t.appendChild(u),e.appendChild(t)}()},322:function(n,r,e){var t=e(23),o=e(323);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},323:function(n,r,e){(r=e(24)(!1)).push([n.i,"#container{\r\n    max-width: 900px;\r\n    margin: 0 auto;\r\n    padding: 100px 2%;\r\n    height: 100%;\r\n}\r\n\r\n.content-head{\r\n    margin-top: 60px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    border-bottom: 1px gray solid;\r\n}\r\n\r\n.content-head h1{\r\n    color: var(--primary-color);\r\n    font-size: 56px;\r\n    line-height: 64px;\r\n    letter-spacing: -2.5px;\r\n    text-align: left;\r\n}\r\n\r\n.content-head p{\r\n    color: #555;\r\n    font-size: 20px;\r\n    line-height: 28px;\r\n    letter-spacing: -0.5px;\r\n    text-align: left;\r\n    padding-bottom: 20px;\r\n    margin: 10px 0;\r\n}\r\n.content-head #date{\r\n    font-weight: bold;\r\n}\r\n.content-text{\r\n    max-width: 680px;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.content-text strong{\r\n    color: var(--primary-color);\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.content-text p{\r\n    font-weight: 400; \r\n    font-size: 1.25rem; \r\n    line-height: 2rem; \r\n    max-width: 42.5rem; \r\n    width: 680px; \r\n    color: #333;\r\n    margin-top: 30px;\r\n}\r\n\r\n.content-text a{\r\n    text-decoration: none;\r\n}\r\n\r\n.content-text a p{\r\n    color: var(--primary-color);\r\n    opacity: .5;\r\n    font-weight: bold;\r\n    transition: .2s;\r\n    text-align: center;\r\n}\r\n.content-text a p:hover{ \r\n    font-size: 21px;\r\n    opacity: 1;\r\n}\r\n\r\n.content-text img{\r\n    width: 100%;\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n",""]),n.exports=r},50:function(n,r,e){"use strict";r.a=function(n){switch(n){case"NEGÓCIOS":return"business";case"ENTRETENIMENTO":return"entertainment";case"SAÚDE":return"health";case"CIÊNCIAS":return"science";case"ESPORTES":return"sports";case"TECNOLOGIA":return"technology"}}},63:function(n,r,e){"use strict";e(64);var t=document.querySelector("#menu"),o=0,i=document.querySelector("#navBar");t.addEventListener("click",(function(){o%2==0?(i.classList.remove("navBarToggle"),i.classList.add("navBarToggle2")):(i.classList.remove("navBarToggle2"),i.classList.add("navBarToggle")),o++})),i.onmouseleave=function(){i.classList.remove("navBarToggle2"),i.classList.add("navBarToggle"),o++},i.addEventListener("click",(function(){i.classList.remove("navBarToggle2"),i.classList.add("navBarToggle")}));var a=document.querySelector("#inputSearch"),c=document.querySelector("#search");a.addEventListener("focus",(function(){c.style.width="230px"}),!0),a.addEventListener("blur",(function(){c.style.width="130px"}),!0),a.addEventListener("keypress",(function(n){13==n.keyCode&&(window.location="index.html?topic=".concat(a.value))}))},64:function(n,r,e){var t=e(23),o=e(65);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},65:function(n,r,e){(r=e(24)(!1)).push([n.i,"header{\r\n    display: block;\r\n    position: fixed;\r\n    width: 100%;\r\n    color: white;\r\n    height: 65px;\r\n    padding: 12px;\r\n    background-color: var(--primary-color);\r\n}\r\n\r\n#headerContent{\r\n    margin: auto;\r\n    max-width: 1300px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 12px;\r\n}\r\n#headerContent p{\r\n    font-size: 16px;\r\n    padding: 12px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n#headerContent img{\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    height: 30px;\r\n    margin-top: 8px;\r\n    cursor: pointer;\r\n}\r\n#headerContent #search{\r\n   width: 130px;\r\n   height: 35px;\r\n   margin: 5px;\r\n   background-color: rgba(0, 0,0, .15);\r\n   display: flex;\r\n   align-items: center;\r\n   border-radius: 3px;\r\n   transition: .2s;\r\n\r\n}\r\n#search p{\r\n    flex: 1;\r\n    text-align: center;\r\n    font-size: 15px;\r\n}\r\n#search input{\r\n    flex: 5;\r\n    height: 100%;\r\n    padding: 5px;\r\n    outline: none;\r\n    border: none;\r\n    background: none;\r\n    color: white;\r\n    font-weight: bold;\r\n    overflow: hidden;\r\n    text-align: left;\r\n    -webkit-text-fill-color: #fff;\r\n}\r\n/*\r\n* NAVBAR\r\n*/\r\n#navBar{\r\n    overflow-y: hidden;\r\n    position: relative;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    box-shadow: #ccc 0 2px 5px;\r\n    transition: .2s;\r\n\r\n}\r\n.navBarToggle{\r\n    visibility: hidden; \r\n    width: 0;\r\n    height: 0;  \r\n}\r\n\r\n.navBarToggle2{\r\n    visibility: visible;\r\n    width: 220px;\r\n    height: 350px;\r\n}\r\n\r\n#navBar p{\r\n    margin: 30px 0;\r\n    font-weight: bold; \r\n} \r\n#navBar p{\r\n    font-size: 1.1rem;\r\n    padding: 0 22px;\r\n    width: 100%;\r\n    color: var(--primary-color);\r\n    cursor: pointer;\r\n    transition: .2s;\r\n}\r\n#navBar p:hover{\r\n    font-size: 1.15rem;\r\n    opacity: .8;\r\n}\r\n\r\n@keyframes navBarAnimate{\r\n    from{\r\n        width: 0;\r\n        height: 0;\r\n    }\r\n}",""]),n.exports=r},94:function(n,r,e){var t=e(23),o=e(95);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},95:function(n,r,e){(r=e(24)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap);"]),r.push([n.i,"*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Open Sans', Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody{\r\n    height: 100%;\r\n    background-color: #f9f9f9;\r\n    animation: animateBody .5s linear;\r\n}\r\n\r\n:root{\r\n    --primary-color: #008F7A;\r\n}\r\n\r\nfooter{\r\n    max-height: 100px;\r\n    padding: 18px;\r\n    color: white;\r\n    background-color: var(--primary-color);\r\n}\r\n\r\nfooter img{\r\n    height: 20px;\r\n    margin: 0 10px;\r\n}\r\n\r\nfooter p{\r\n    margin: 5px 10px;\r\n    font-size: 12px;\r\n}\r\n\r\n#footerContent{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: auto;\r\n    max-width: 1300px;\r\n}\r\n\r\n@keyframes animateBody{\r\n    from{\r\n        opacity: .5;\r\n    } to{\r\n        opacity: 1;\r\n    }\r\n}",""]),n.exports=r}});
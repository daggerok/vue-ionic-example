(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d1f5f95"],{"264c":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return h}));var o=r("9ab4"),n=function(e,t){return null!==t.closest(e)},a=function(e){var t;return"string"===typeof e&&e.length>0?(t={"ion-color":!0},t["ion-color-"+e]=!0,t):void 0},i=function(e){if(void 0!==e){var t=Array.isArray(e)?e:e.split(" ");return t.filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e}))}return[]},s=function(e){var t={};return i(e).forEach((function(e){return t[e]=!0})),t},c=/^[a-z][a-z0-9+\-.]*:/,h=function(e,t,r){return Object(o["a"])(void 0,void 0,void 0,(function(){var n;return Object(o["c"])(this,(function(o){return null!=e&&"#"!==e[0]&&!c.test(e)&&(n=document.querySelector("ion-router"),n)?(null!=t&&t.preventDefault(),[2,n.push(e,r)]):[2,!1]}))}))}},4579:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_searchbar",(function(){return h}));var o=r("9ab4"),n=r("4f09"),a=r("b6d2"),i=r("c123"),s=r("264c"),c=r("cf08"),h=function(){function e(e){var t=this;Object(n["l"])(this,e),this.isCancelVisible=!1,this.shouldAlignLeft=!0,this.focused=!1,this.noAnimate=!0,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonIcon="md-arrow-back",this.cancelButtonText="Cancel",this.debounce=250,this.disabled=!1,this.inputmode="search",this.placeholder="Search",this.searchIcon="search",this.showCancelButton="never",this.spellcheck=!1,this.type="search",this.value="",this.onClearInput=function(e){t.ionClear.emit(),e&&(e.preventDefault(),e.stopPropagation()),setTimeout((function(){var e=t.getValue();""!==e&&(t.value="",t.ionInput.emit())}),64)},this.onCancelSearchbar=function(e){e&&(e.preventDefault(),e.stopPropagation()),t.ionCancel.emit(),t.onClearInput(),t.nativeInput&&t.nativeInput.blur()},this.onInput=function(e){var r=e.target;r&&(t.value=r.value),t.ionInput.emit(e)},this.onBlur=function(){t.focused=!1,t.ionBlur.emit(),t.positionElements()},this.onFocus=function(){t.focused=!0,t.ionFocus.emit(),t.positionElements()},this.ionInput=Object(n["d"])(this,"ionInput",7),this.ionChange=Object(n["d"])(this,"ionChange",7),this.ionCancel=Object(n["d"])(this,"ionCancel",7),this.ionClear=Object(n["d"])(this,"ionClear",7),this.ionBlur=Object(n["d"])(this,"ionBlur",7),this.ionFocus=Object(n["d"])(this,"ionFocus",7),this.ionStyle=Object(n["d"])(this,"ionStyle",7)}return e.prototype.debounceChanged=function(){this.ionChange=Object(i["d"])(this.ionChange,this.debounce)},e.prototype.valueChanged=function(){var e=this.nativeInput,t=this.getValue();e&&e.value!==t&&(e.value=t),this.ionChange.emit({value:t})},e.prototype.showCancelButtonChanged=function(){var e=this;requestAnimationFrame((function(){e.positionElements(),e.el.forceUpdate()}))},e.prototype.connectedCallback=function(){this.emitStyle()},e.prototype.componentDidLoad=function(){var e=this;"false"!==this.showCancelButton&&!1!==this.showCancelButton||console.warn('The boolean values of showCancelButton are deprecated. Please use "never" instead of "false".'),""!==this.showCancelButton&&"true"!==this.showCancelButton&&!0!==this.showCancelButton||console.warn('The boolean values of showCancelButton are deprecated. Please use "focus" instead of "true".'),this.positionElements(),this.debounceChanged(),setTimeout((function(){e.noAnimate=!1}),300)},e.prototype.emitStyle=function(){this.ionStyle.emit({searchbar:!0})},e.prototype.setFocus=function(){return Object(o["a"])(this,void 0,void 0,(function(){return Object(o["c"])(this,(function(e){return this.nativeInput&&this.nativeInput.focus(),[2]}))}))},e.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)},e.prototype.positionElements=function(){var e=this.getValue(),t=this.shouldAlignLeft,r=Object(n["e"])(this),o=!this.animated||""!==e.trim()||!!this.focused;this.shouldAlignLeft=o,"ios"===r&&(t!==o&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())},e.prototype.positionPlaceholder=function(){var e=this.nativeInput;if(e){var t="rtl"===document.dir,r=(this.el.shadowRoot||this.el).querySelector(".searchbar-search-icon");if(this.shouldAlignLeft)e.removeAttribute("style"),r.removeAttribute("style");else{var o=document,n=o.createElement("span");n.innerHTML=Object(c["a"])(this.placeholder)||"",o.body.appendChild(n);var a=n.offsetWidth;n.remove();var i="calc(50% - "+a/2+"px)",s="calc(50% - "+(a/2+30)+"px)";t?(e.style.paddingRight=i,r.style.marginRight=s):(e.style.paddingLeft=i,r.style.marginLeft=s)}}},e.prototype.positionCancelButton=function(){var e="rtl"===document.dir,t=(this.el.shadowRoot||this.el).querySelector(".searchbar-cancel-button"),r=this.shouldShowCancelButton();if(t&&r!==this.isCancelVisible){var o=t.style;if(this.isCancelVisible=r,r)e?o.marginLeft="0":o.marginRight="0";else{var n=t.offsetWidth;n>0&&(e?o.marginLeft=-n+"px":o.marginRight=-n+"px")}}},e.prototype.getValue=function(){return this.value||""},e.prototype.hasValue=function(){return""!==this.getValue()},e.prototype.shouldShowCancelButton=function(){return!(l(this.showCancelButton)||u(this.showCancelButton)&&!this.focused)},e.prototype.render=function(){var e,t=this,r=this.animated&&a["b"].getBoolean("animated",!0),o=Object(n["e"])(this),i=this.clearIcon||("ios"===o?"ios-close-circle":"md-close"),c=this.searchIcon,h=!l(this.showCancelButton)&&Object(n["i"])("button",{"aria-label":"cancel",type:"button",tabIndex:"ios"!==o||this.shouldShowCancelButton()?void 0:-1,onMouseDown:this.onCancelSearchbar,onTouchStart:this.onCancelSearchbar,class:"searchbar-cancel-button"},Object(n["i"])("div",null,"md"===o?Object(n["i"])("ion-icon",{"aria-hidden":"true",mode:o,icon:this.cancelButtonIcon,lazy:!1}):this.cancelButtonText));return Object(n["i"])(n["a"],{role:"search","aria-disabled":this.disabled?"true":null,class:Object.assign(Object.assign({},Object(s["a"])(this.color)),(e={},e[o]=!0,e["searchbar-animated"]=r,e["searchbar-disabled"]=this.disabled,e["searchbar-no-animate"]=r&&this.noAnimate,e["searchbar-has-value"]=this.hasValue(),e["searchbar-left-aligned"]=this.shouldAlignLeft,e["searchbar-has-focus"]=this.focused,e["searchbar-should-show-cancel"]=this.shouldShowCancelButton(),e))},Object(n["i"])("div",{class:"searchbar-input-container"},Object(n["i"])("input",{"aria-label":"search text",disabled:this.disabled,ref:function(e){return t.nativeInput=e},class:"searchbar-input",inputMode:this.inputmode,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,placeholder:this.placeholder,type:this.type,value:this.getValue(),autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellCheck:this.spellcheck}),"md"===o&&h,Object(n["i"])("ion-icon",{mode:o,icon:c,lazy:!1,class:"searchbar-search-icon"}),Object(n["i"])("button",{"aria-label":"reset",type:"button","no-blur":!0,class:"searchbar-clear-button",onMouseDown:this.onClearInput,onTouchStart:this.onClearInput},Object(n["i"])("ion-icon",{"aria-hidden":"true",mode:o,icon:i,lazy:!1,class:"searchbar-clear-icon"}))),"ios"===o&&h)},Object.defineProperty(e.prototype,"el",{get:function(){return Object(n["f"])(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{debounce:["debounceChanged"],value:["valueChanged"],showCancelButton:["showCancelButtonChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-searchbar-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-clear, .searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-ios > div.sc-ion-searchbar-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.searchbar-disabled.sc-ion-searchbar-ios-h{cursor:default;opacity:.4;pointer-events:none}.sc-ion-searchbar-ios-h{--clear-button-color:var(--ion-color-step-600,#666);--cancel-button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-text-color,#000);--icon-color:var(--ion-color-step-600,#666);--background:rgba(var(--ion-text-color-rgb,0,0,0),0.07);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;height:60px;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-searchbar-ios-h{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.searchbar-input-container.sc-ion-searchbar-ios{height:36px;contain:strict}.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:calc(50% - 60px);left:5px;top:0;position:absolute;width:22px;height:100%;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px)}}[dir=rtl].sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios, [dir=rtl] .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios, [dir=rtl].sc-ion-searchbar-ios .searchbar-search-icon.sc-ion-searchbar-ios{left:unset;right:unset;right:5px}.searchbar-input.sc-ion-searchbar-ios{padding-left:28px;padding-right:28px;padding-top:0;padding-bottom:0;border-radius:10px;height:100%;font-size:17px;font-weight:400;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-input.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:28px;padding-inline-start:28px;-webkit-padding-end:28px;padding-inline-end:28px}}.searchbar-clear-button.sc-ion-searchbar-ios{right:0;top:0;background-position:50%;position:absolute;width:30px;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios, [dir=rtl] .sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios, [dir=rtl].sc-ion-searchbar-ios .searchbar-clear-button.sc-ion-searchbar-ios{left:unset;right:unset;left:0}.searchbar-clear-icon.sc-ion-searchbar-ios{width:18px;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:8px;padding-right:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0;background-color:transparent;font-size:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:0;padding-inline-end:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{padding-left:30px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{padding-left:unset;-webkit-padding-start:30px;padding-inline-start:30px}}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios, .searchbar-animated.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-transition:all .3s ease;transition:all .3s ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-animated.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:-100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:all .3s ease;transition:all .3s ease;opacity:0;pointer-events:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:unset;-webkit-margin-end:-100%;margin-inline-end:-100%}}.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios, .searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-transition-duration:0ms;transition-duration:0ms}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}@media (any-hover:hover){.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.sc-ion-searchbar-ios-h, ion-toolbar .sc-ion-searchbar-ios-h{padding-top:1px;padding-bottom:15px;height:52px}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color), ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color){color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb),.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:.5}"},enumerable:!0,configurable:!0}),e}(),l=function(e){return"never"===e||"false"===e||!1===e},u=function(e){return"focus"===e||"true"===e||!0===e||""===e}},c123:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return p})),r.d(t,"f",(function(){return i})),r.d(t,"g",(function(){return a})),r.d(t,"h",(function(){return b})),r.d(t,"i",(function(){return l})),r.d(t,"j",(function(){return u})),r.d(t,"k",(function(){return n}));var o=r("9ab4"),n=function(e){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"===typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)},a=function(e){return!!e.shadowRoot&&!!e.attachShadow},i=function(e){var t=e.closest("ion-item");return t?t.querySelector("ion-label"):null},s=function(e,t,r,o,n){if(e||a(t)){var i=t.querySelector("input.aux-input");i||(i=t.ownerDocument.createElement("input"),i.type="hidden",i.classList.add("aux-input"),t.appendChild(i)),i.disabled=n,i.name=r,i.value=o||""}},c=function(e,t,r){return Math.max(e,Math.min(t,r))},h=function(e,t){if(!e){var r="ASSERT: "+t;throw console.error(r),new Error(r)}},l=function(e){return e.timeStamp||Date.now()},u=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var r=t[0];return{x:r.clientX,y:r.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},b=function(e){var t="rtl"===document.dir;switch(e){case"start":return t;case"end":return!t;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}},d=function(e,t){var r=e._original||e;return{_original:e,emit:p(r.emit.bind(r),t)}},p=function(e,t){var r;return void 0===t&&(t=0),function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];clearTimeout(r),r=setTimeout.apply(void 0,Object(o["d"])([e,t],n))}}},cf08:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var o=function(e){try{if("string"!==typeof e||""===e)return e;var t=document.createDocumentFragment(),r=document.createElement("div");t.appendChild(r),r.innerHTML=e,s.forEach((function(e){for(var r=t.querySelectorAll(e),o=r.length-1;o>=0;o--){var i=r[o];i.parentNode?i.parentNode.removeChild(i):t.removeChild(i);for(var s=a(i),c=0;c<s.length;c++)n(s[c])}}));for(var o=a(t),i=0;i<o.length;i++)n(o[i]);var c=document.createElement("div");c.appendChild(t);var h=c.querySelector("div");return null!==h?h.innerHTML:c.innerHTML}catch(l){return console.error(l),""}},n=function(e){if(!e.nodeType||1===e.nodeType){for(var t=e.attributes.length-1;t>=0;t--){var r=e.attributes.item(t),o=r.name;if(i.includes(o.toLowerCase())){var s=r.value;null!=s&&s.toLowerCase().includes("javascript:")&&e.removeAttribute(o)}else e.removeAttribute(o)}var c=a(e);for(t=0;t<c.length;t++)n(c[t])}},a=function(e){return null!=e.children?e.children:e.childNodes},i=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=chunk-7d1f5f95.aeec75ed.js.map
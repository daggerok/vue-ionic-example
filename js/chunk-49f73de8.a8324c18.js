(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49f73de8","chunk-2d217363"],{"47f7":function(t,e,r){"use strict";r.r(e),r.d(e,"ion_backdrop",(function(){return s}));var n=r("4f09"),i=(r("b6d2"),r("c123")),o=r("c682"),s=function(){function t(t){Object(n["l"])(this,t),this.lastClick=-1e4,this.blocker=o["GESTURE_CONTROLLER"].createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0,this.ionBackdropTap=Object(n["d"])(this,"ionBackdropTap",7)}return t.prototype.connectedCallback=function(){this.stopPropagation&&this.blocker.block()},t.prototype.disconnectedCallback=function(){this.blocker.unblock()},t.prototype.onTouchStart=function(t){this.lastClick=Object(i["i"])(t),this.emitTap(t)},t.prototype.onMouseDown=function(t){this.lastClick<Object(i["i"])(t)-2500&&this.emitTap(t)},t.prototype.emitTap=function(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},t.prototype.render=function(){var t,e=Object(n["e"])(this);return Object(n["i"])(n["a"],{tabindex:"-1",class:(t={},t[e]=!0,t["backdrop-hide"]=!this.visible,t["backdrop-no-tappable"]=!this.tappable,t)})},Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"},enumerable:!0,configurable:!0}),t}()},c123:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return h})),r.d(e,"e",(function(){return f})),r.d(e,"f",(function(){return s})),r.d(e,"g",(function(){return o})),r.d(e,"h",(function(){return p})),r.d(e,"i",(function(){return l})),r.d(e,"j",(function(){return d})),r.d(e,"k",(function(){return i}));var n=r("9ab4"),i=function(t){return"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"===typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t)},o=function(t){return!!t.shadowRoot&&!!t.attachShadow},s=function(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},a=function(t,e,r,n,i){if(t||o(e)){var s=e.querySelector("input.aux-input");s||(s=e.ownerDocument.createElement("input"),s.type="hidden",s.classList.add("aux-input"),e.appendChild(s)),s.disabled=i,s.name=r,s.value=n||""}},c=function(t,e,r){return Math.max(t,Math.min(e,r))},u=function(t,e){if(!t){var r="ASSERT: "+e;throw console.error(r),new Error(r)}},l=function(t){return t.timeStamp||Date.now()},d=function(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var r=e[0];return{x:r.clientX,y:r.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},p=function(t){var e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},h=function(t,e){var r=t._original||t;return{_original:t,emit:f(r.emit.bind(r),e)}},f=function(t,e){var r;return void 0===e&&(e=0),function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];clearTimeout(r),r=setTimeout.apply(void 0,Object(n["d"])([t,e],i))}}},c682:function(t,e,r){"use strict";r.r(e),r.d(e,"GESTURE_CONTROLLER",(function(){return c})),r.d(e,"createGesture",(function(){return b}));var n,i=function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new s(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var n=this.requestedStart,i=-1e4;if(n.forEach((function(t){i=Math.max(i,t)})),i===r){this.capturedId=e,n.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(o),!0}return n.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(a)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(a)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),o=function(){function t(t,e,r,n,i){this.id=e,this.name=r,this.disableScroll=i,this.priority=1e6*n+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),s=function(){function t(t,e,r,n){this.id=e,this.disable=r,this.disableScroll=n,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.disableGesture(r,this.id)}this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.enableGesture(r,this.id)}this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),a="backdrop-no-scroll",c=new i,u=function(t,e,r,n){var i,o,s=l(t)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;return t["__zone_symbol__addEventListener"]?(i="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(i="addEventListener",o="removeEventListener"),t[i](e,r,s),function(){t[o](e,r,s)}},l=function(t){if(void 0===n)try{var e=Object.defineProperty({},"passive",{get:function(){n=!0}});t.addEventListener("optsTest",(function(){}),e)}catch(r){n=!1}return!!n},d=2e3,p=function(t,e,r,n,i){var o,s,a,c,l,p,f,b=0,v=function(n){b=Date.now()+d,e(n)&&(!s&&r&&(s=u(t,"touchmove",r,i)),a||(a=u(t,"touchend",y,i)),c||(c=u(t,"touchcancel",y,i)))},m=function(n){b>Date.now()||e(n)&&(!p&&r&&(p=u(h(t),"mousemove",r,i)),f||(f=u(h(t),"mouseup",S,i)))},y=function(t){g(),n&&n(t)},S=function(t){k(),n&&n(t)},g=function(){s&&s(),a&&a(),c&&c(),s=a=c=void 0},k=function(){p&&p(),f&&f(),p=f=void 0},w=function(){g(),k()},_=function(e){e?(o&&o(),l&&l(),o=l=void 0,w()):(o||(o=u(t,"touchstart",v,i)),l||(l=u(t,"mousedown",m,i)))},X=function(){_(!0),n=r=e=void 0};return{setDisabled:_,stop:w,destroy:X}},h=function(t){return t instanceof Document?t:t.ownerDocument},f=function(t,e,r){var n=r*(Math.PI/180),i="x"===t,o=Math.cos(n),s=e*e,a=0,c=0,u=!1,l=0;return{start:function(t,e){a=t,c=e,l=0,u=!0},detect:function(t,e){if(!u)return!1;var r=t-a,n=e-c,d=r*r+n*n;if(d<s)return!1;var p=Math.sqrt(d),h=(i?r:n)/p;return l=h>o?1:h<-o?-1:0,u=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}},b=function(t){var e=!1,r=!1,n=!0,i=!1,o=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),s=o.canStart,a=o.onWillStart,u=o.onStart,l=o.onEnd,d=o.notCaptured,h=o.onMove,b=o.threshold,S={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},g=f(o.direction,o.threshold,o.maxAngle),k=c.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),w=function(t){var e=y(t);return!(r||!n)&&(m(t,S),S.startX=S.currentX,S.startY=S.currentY,S.startTimeStamp=S.timeStamp=e,S.velocityX=S.velocityY=S.deltaX=S.deltaY=0,S.event=t,(!s||!1!==s(S))&&(k.release(),!!k.start()&&(r=!0,0===b?Y():(g.start(S.startX,S.startY),!0))))},_=function(t){e?!i&&n&&(i=!0,v(S,t),requestAnimationFrame(X)):(v(S,t),g.detect(S.currentX,S.currentY)&&(g.isGesture()&&Y()||O()))},X=function(){e&&(i=!1,h&&h(S))},Y=function(){return!(k&&!k.capture())&&(e=!0,n=!1,S.startX=S.currentX,S.startY=S.currentY,S.startTimeStamp=S.timeStamp,a?a(S).then(T):T(),!0)},T=function(){u&&u(S),n=!0},E=function(){e=!1,r=!1,i=!1,n=!0,k.release()},D=function(t){var r=e,i=n;E(),i&&(v(S,t),r?l&&l(S):d&&d(S))},G=p(o.el,w,_,D,{capture:!1}),O=function(){E(),G.stop(),d&&d(S)};return{setDisabled:function(t){t&&e&&D(void 0),G.setDisabled(t)},destroy:function(){k.destroy(),G.destroy()}}},v=function(t,e){if(e){var r=t.currentX,n=t.currentY,i=t.timeStamp;m(e,t);var o=t.currentX,s=t.currentY,a=t.timeStamp=y(e),c=a-i;if(c>0&&c<100){var u=(o-r)/c,l=(s-n)/c;t.velocityX=.7*u+.3*t.velocityX,t.velocityY=.7*l+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=s-t.startY,t.event=e}},m=function(t,e){var r=0,n=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];r=o.clientX,n=o.clientY}else void 0!==t.pageX&&(r=t.pageX,n=t.pageY)}e.currentX=r,e.currentY=n},y=function(t){return t.timeStamp||Date.now()}}}]);
//# sourceMappingURL=chunk-49f73de8.a8324c18.js.map
import{e as H}from"./chunk-JIYMT2N4.js";import{B as mt,Da as l,Ea as p,Fa as x,Ga as F,Ha as P,I as lt,Ia as z,J as ut,Ja as B,Ka as y,L as bt,S as D,T as s,V as _,X as g,Y as d,_ as j,a as E,ba as pt,bb as N,da as ft,ea as m,f as at,fa as L,i as rt,ib as gt,kb as vt,q as S,qa as ht,r as st,u as dt,xa as A,z as ct}from"./chunk-SXT2TEDJ.js";var $t=["menu"],V=(()=>{let t=class t{constructor(){this.isBurgerMenuShown=!1}ShowMenu(i){i.cancelBubble=!0,console.log(i,i.bubbles),this.menu.nativeElement.classList.add("burger-show"),this.isBurgerMenuShown=!0}BodyClick(){console.log("HHHH",this.isBurgerMenuShown),this.isBurgerMenuShown&&(this.HideMenu(),this.isBurgerMenuShown=!1)}HideMenu(){this.menu.nativeElement.classList.remove("burger-show")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=D({type:t,selectors:[["app-header"]],viewQuery:function(n,a){if(n&1&&P($t,5,_),n&2){let r;z(r=B())&&(a.menu=r.first)}},hostBindings:function(n,a){n&1&&F("click",function(){return a.BodyClick()},!1,ht)},decls:18,vars:0,consts:[["href","#",1,"burger",3,"click"],[1,"burger-line"],["menu",""],["href","#"]],template:function(n,a){n&1&&(l(0,"header")(1,"h1"),y(2,"Hazrath Multani Baba Gangwar Shareef"),p(),l(3,"a",0),F("click",function(b){return a.ShowMenu(b)}),x(4,"span",1)(5,"span",1)(6,"span",1),p(),l(7,"ul",null,2)(9,"li")(10,"a",3),y(11,"Home"),p()(),l(12,"li")(13,"a",3),y(14,"About us"),p()(),l(15,"li")(16,"a",3),y(17,"Contact us"),p()()()())},styles:['header[_ngcontent-%COMP%]{background-color:#2bb57261;padding:1em 3em;display:flex;justify-content:space-between;align-items:center}@media (max-width: 713px){header[_ngcontent-%COMP%]{padding:1em}}header[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:20px;font-weight:500;border:2px solid white;padding:.7em 1em;border-radius:30px}@media (max-width: 713px){header[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:18px}}@media (max-width: 593px){header[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:16px}}@media (max-width: 530px){header[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:14px}}@media (max-width: 470px){header[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:12px}}header[_ngcontent-%COMP%] > a.burger[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;display:none}@media (max-width: 913px){header[_ngcontent-%COMP%] > a.burger[_ngcontent-%COMP%]{display:flex}}header[_ngcontent-%COMP%] > a.burger[_ngcontent-%COMP%] > span.burger-line[_ngcontent-%COMP%]{height:2px;width:40px;background-color:#fff;display:block}header[_ngcontent-%COMP%] > a.burger[_ngcontent-%COMP%] > span.burger-line[_ngcontent-%COMP%]:nth-child(2){width:30px}header[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{color:#fff;list-style:none;display:flex;justify-content:space-evenly;gap:1em}@media (max-width: 913px){header[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{position:absolute;right:-100%;top:0;bottom:0;background-color:#2bb57261;flex-direction:column;justify-content:center;gap:2em;padding:1em}header[_ngcontent-%COMP%] > ul.burger-show[_ngcontent-%COMP%]{right:0}}header[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{position:relative}header[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after{content:"";position:absolute;border-bottom:2px solid;width:0;bottom:0;left:0;transition:width .5s}header[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:after{width:100%}']});let e=t;return e})();var U=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=D({type:t,selectors:[["app-home"]],decls:9,vars:0,consts:[[1,"container"],[1,"cont-cover"],[1,"content"],[1,"header"],[1,"body"],[1,"quote"],[1,"img-slider"]],template:function(n,a){n&1&&(l(0,"div",0),x(1,"div",1),l(2,"div",2)(3,"div",3),x(4,"app-header"),p(),l(5,"div",4),x(6,"div",5),l(7,"div",6),y(8," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, maxime sed accusantium soluta labore aspernatur libero illo. Quo dolor porro reprehenderit! Quos, nam. Enim perspiciatis sequi illum labore, dolore a! "),p()()()())},dependencies:[V],styles:["div.container[_ngcontent-%COMP%]{background-image:url(/landing-page/assets/imgs/bg-image.jpg);background-repeat:no-repeat;background-position:center;background-size:cover;min-height:100vh;position:relative}div.container[_ngcontent-%COMP%] > div.cont-cover[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:#0009;pointer-events:none;z-index:1}div.container[_ngcontent-%COMP%] > div.content[_ngcontent-%COMP%]{z-index:2;position:absolute;inset:0;color:#fff}div.container[_ngcontent-%COMP%] > div.content[_ngcontent-%COMP%] > div.header[_ngcontent-%COMP%]{height:1em}div.container[_ngcontent-%COMP%] > div.content[_ngcontent-%COMP%] > div.body[_ngcontent-%COMP%]{height:calc(100vh - 4em);width:80vw;margin:auto;display:flex;justify-content:space-evenly;align-items:center}div.container[_ngcontent-%COMP%] > div.content[_ngcontent-%COMP%] > div.body[_ngcontent-%COMP%] > div.quote[_ngcontent-%COMP%]{flex:1}div.container[_ngcontent-%COMP%] > div.content[_ngcontent-%COMP%] > div.body[_ngcontent-%COMP%] > div.quote[_ngcontent-%COMP%] > span.name[_ngcontent-%COMP%]{background-color:#ffffff26;border:2px solid rgba(43,181,114,.3803921569);font-size:17px;padding:.7em 1em;border-radius:30px}div.container[_ngcontent-%COMP%] > div.content[_ngcontent-%COMP%] > div.body[_ngcontent-%COMP%] > div.img-slider[_ngcontent-%COMP%]{flex:1}"]});let e=t;return e})();var Wt=[{path:"",component:U}],_t=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s({type:t}),t.\u0275inj=d({imports:[H.forChild(Wt),H]});let e=t;return e})();var $;try{$=typeof Intl<"u"&&Intl.v8BreakIterator}catch{$=!1}var M=(()=>{let t=class t{constructor(i){this._platformId=i,this.isBrowser=this._platformId?vt(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||$)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};t.\u0275fac=function(n){return new(n||t)(m(pt))},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var C;function Yt(){if(C==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>C=!0}))}finally{C=C||!1}return C}function Z(e){return Yt()?e:!!e.capture}function xt(e){return e.composedPath?e.composedPath()[0]:e.target}function yt(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function W(e){return Array.isArray(e)?e:[e]}function Y(e){return e instanceof _?e.nativeElement:e}var It=new Set,I,Kt=(()=>{let t=class t{constructor(i,n){this._platform=i,this._nonce=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):qt}matchMedia(i){return(this._platform.WEBKIT||this._platform.BLINK)&&Gt(i,this._nonce),this._matchMedia(i)}};t.\u0275fac=function(n){return new(n||t)(m(M),m(ft,8))},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Gt(e,t){if(!It.has(e))try{I||(I=document.createElement("style"),t&&(I.nonce=t),I.setAttribute("type","text/css"),document.head.appendChild(I)),I.sheet&&(I.sheet.insertRule(`@media ${e} {body{ }}`,0),It.add(e))}catch(o){console.error(o)}}function qt(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var Et=(()=>{let t=class t{constructor(i,n){this._mediaMatcher=i,this._zone=n,this._queries=new Map,this._destroySubject=new rt}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(i){return kt(W(i)).some(a=>this._registerQuery(a).mql.matches)}observe(i){let a=kt(W(i)).map(b=>this._registerQuery(b).observable),r=st(a);return r=dt(r.pipe(mt(1)),r.pipe(lt(1),ct(0))),r.pipe(S(b=>{let h={matches:!1,breakpoints:{}};return b.forEach(({matches:v,query:c})=>{h.matches=h.matches||v,h.breakpoints[c]=v}),h}))}_registerQuery(i){if(this._queries.has(i))return this._queries.get(i);let n=this._mediaMatcher.matchMedia(i),r={observable:new at(b=>{let h=v=>this._zone.run(()=>b.next(v));return n.addListener(h),()=>{n.removeListener(h)}}).pipe(ut(n),S(({matches:b})=>({query:i,matches:b})),bt(this._destroySubject)),mql:n};return this._queries.set(i,r),r}};t.\u0275fac=function(n){return new(n||t)(m(Kt),m(A))},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function kt(e){return e.map(t=>t.split(",")).reduce((t,o)=>t.concat(o)).map(t=>t.trim())}function Ot(e){return e.buttons===0||e.detail===0}function Ft(e){let t=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var k=function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e}(k||{}),Dt="cdk-high-contrast-black-on-white",At="cdk-high-contrast-white-on-black",K="cdk-high-contrast-active",Nt=(()=>{let t=class t{constructor(i,n){this._platform=i,this._document=n,this._breakpointSubscription=L(Et).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return k.NONE;let i=this._document.createElement("div");i.style.backgroundColor="rgb(1,2,3)",i.style.position="absolute",this._document.body.appendChild(i);let n=this._document.defaultView||window,a=n&&n.getComputedStyle?n.getComputedStyle(i):null,r=(a&&a.backgroundColor||"").replace(/ /g,"");switch(i.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return k.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return k.BLACK_ON_WHITE}return k.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let i=this._document.body.classList;i.remove(K,Dt,At),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===k.BLACK_ON_WHITE?i.add(K,Dt):n===k.WHITE_ON_BLACK&&i.add(K,At)}}};t.\u0275fac=function(n){return new(n||t)(m(M),m(N))},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var q=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s({type:t}),t.\u0275inj=d({});let e=t;return e})();function ae(){return!0}var re=new j("mat-sanity-checks",{providedIn:"root",factory:ae}),O=(()=>{let t=class t{constructor(i,n,a){this._sanityChecks=n,this._document=a,this._hasDoneGlobalChecks=!1,i._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(i){return yt()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[i]}};t.\u0275fac=function(n){return new(n||t)(m(Nt),m(re,8),m(N))},t.\u0275mod=s({type:t}),t.\u0275inj=d({imports:[q,q]});let e=t;return e})();var u=function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e}(u||{}),Q=class{constructor(t,o,i,n=!1){this._renderer=t,this.element=o,this.config=i,this._animationForciblyDisabledThroughCss=n,this.state=u.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},St=Z({passive:!0,capture:!0}),X=class{constructor(){this._events=new Map,this._delegateEventHandler=t=>{let o=xt(t);o&&this._events.get(t.type)?.forEach((i,n)=>{(n===o||n.contains(o))&&i.forEach(a=>a.handleEvent(t))})}}addHandler(t,o,i,n){let a=this._events.get(o);if(a){let r=a.get(i);r?r.add(n):a.set(i,new Set([n]))}else this._events.set(o,new Map([[i,new Set([n])]])),t.runOutsideAngular(()=>{document.addEventListener(o,this._delegateEventHandler,St)})}removeHandler(t,o,i){let n=this._events.get(t);if(!n)return;let a=n.get(o);a&&(a.delete(i),a.size===0&&n.delete(o),n.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,St)))}},jt={enterDuration:225,exitDuration:150},se=800,Lt=Z({passive:!0,capture:!0}),Pt=["mousedown","touchstart"],zt=["mouseup","mouseleave","touchend","touchcancel"],T=class T{constructor(t,o,i,n){this._target=t,this._ngZone=o,this._platform=n,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,n.isBrowser&&(this._containerElement=Y(i))}fadeInRipple(t,o,i={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=E(E({},jt),i.animation);i.centered&&(t=n.left+n.width/2,o=n.top+n.height/2);let r=i.radius||de(t,o,n),b=t-n.left,h=o-n.top,v=a.enterDuration,c=document.createElement("div");c.classList.add("mat-ripple-element"),c.style.left=`${b-r}px`,c.style.top=`${h-r}px`,c.style.height=`${r*2}px`,c.style.width=`${r*2}px`,i.color!=null&&(c.style.backgroundColor=i.color),c.style.transitionDuration=`${v}ms`,this._containerElement.appendChild(c);let tt=window.getComputedStyle(c),Ut=tt.transitionProperty,et=tt.transitionDuration,R=Ut==="none"||et==="0s"||et==="0s, 0s"||n.width===0&&n.height===0,w=new Q(this,c,i,R);c.style.transform="scale3d(1, 1, 1)",w.state=u.FADING_IN,i.persistent||(this._mostRecentTransientRipple=w);let it=null;return!R&&(v||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let nt=()=>this._finishRippleTransition(w),ot=()=>this._destroyRipple(w);c.addEventListener("transitionend",nt),c.addEventListener("transitioncancel",ot),it={onTransitionEnd:nt,onTransitionCancel:ot}}),this._activeRipples.set(w,it),(R||!v)&&this._finishRippleTransition(w),w}fadeOutRipple(t){if(t.state===u.FADING_OUT||t.state===u.HIDDEN)return;let o=t.element,i=E(E({},jt),t.config.animation);o.style.transitionDuration=`${i.exitDuration}ms`,o.style.opacity="0",t.state=u.FADING_OUT,(t._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let o=Y(t);!this._platform.isBrowser||!o||o===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=o,Pt.forEach(i=>{T._eventManager.addHandler(this._ngZone,i,o,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{zt.forEach(o=>{this._triggerElement.addEventListener(o,this,Lt)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===u.FADING_IN?this._startFadeOutTransition(t):t.state===u.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let o=t===this._mostRecentTransientRipple,{persistent:i}=t.config;t.state=u.VISIBLE,!i&&(!o||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let o=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=u.HIDDEN,o!==null&&(t.element.removeEventListener("transitionend",o.onTransitionEnd),t.element.removeEventListener("transitioncancel",o.onTransitionCancel)),t.element.remove()}_onMousedown(t){let o=Ot(t),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+se;!this._target.rippleDisabled&&!o&&!i&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Ft(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let o=t.changedTouches;if(o)for(let i=0;i<o.length;i++)this.fadeInRipple(o[i].clientX,o[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let o=t.state===u.VISIBLE||t.config.terminateOnPointerUp&&t.state===u.FADING_IN;!t.config.persistent&&o&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Pt.forEach(o=>T._eventManager.removeHandler(o,t,this)),this._pointerUpEventsRegistered&&zt.forEach(o=>t.removeEventListener(o,this,Lt)))}};T._eventManager=new X;var Bt=T;function de(e,t,o){let i=Math.max(Math.abs(e-o.left),Math.abs(e-o.right)),n=Math.max(Math.abs(t-o.top),Math.abs(t-o.bottom));return Math.sqrt(i*i+n*n)}var Ht=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s({type:t}),t.\u0275inj=d({imports:[O,O]});let e=t;return e})();var J=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s({type:t}),t.\u0275inj=d({imports:[O,Ht,O]});let e=t;return e})();var ce=[J],Vt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s({type:t}),t.\u0275inj=d({imports:[ce,J]});let e=t;return e})();var Zi=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s({type:t}),t.\u0275inj=d({imports:[gt,_t,Vt]});let e=t;return e})();export{Zi as MainModule};

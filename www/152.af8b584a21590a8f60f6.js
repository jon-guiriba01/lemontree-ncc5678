(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{"6Oea":function(e,o,t){"use strict";t.r(o),t.d(o,"IonPopover",function(){return f}),t.d(o,"IonPopoverController",function(){return b});var r=t("B5Ai"),n=t("cBjU"),i=t("M4MB"),s=t("yIUm"),a=t("jT1R"),p=(t("awvO"),t("V66x"));function l(e,o,t){var r="top",n="left",i=o.querySelector(".popover-content"),s=i.getBoundingClientRect(),a=s.width,p=s.height,l=window.innerWidth,d=window.innerHeight,u=t&&t.target&&t.target.getBoundingClientRect(),m=null!=u&&"top"in u?u.top:d/2-p/2,v=null!=u&&"left"in u?u.left:l/2,f=u&&u.width||0,h=u&&u.height||0,b=o.querySelector(".popover-arrow"),y=b.getBoundingClientRect(),g=y.width,w=y.height;null==u&&(b.style.display="none");var x={top:m+h,left:v+f/2-g/2},P={top:m+h+(w-1),left:v+f/2-a/2},k=!1,D=!1;P.left<c+25?(k=!0,P.left=c):a+c+P.left+25>l&&(D=!0,P.left=l-a-c,n="right"),m+h+p>d&&m-p>0?(x.top=m-(w+1),P.top=m-p-(w-1),o.className=o.className+" popover-bottom",r="bottom"):m+h+p>d&&(i.style.bottom=c+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",i.style.top=P.top+"px",i.style.left=P.left+"px",k&&(i.style.left="calc("+P.left+"px + var(--ion-safe-area-left, 0px))"),D&&(i.style.left="calc("+P.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=r+" "+n;var O=new e,j=new e;j.addElement(o.querySelector("ion-backdrop")),j.fromTo("opacity",.01,.08);var E=new e;return E.addElement(o.querySelector(".popover-wrapper")),E.fromTo("opacity",.01,1),Promise.resolve(O.addElement(o).easing("ease").duration(100).add(j).add(E))}var c=5;function d(e,o){var t=new e,r=new e;r.addElement(o.querySelector("ion-backdrop"));var n=new e;return n.addElement(o.querySelector(".popover-wrapper")),n.fromTo("opacity",.99,0),r.fromTo("opacity",.08,0),Promise.resolve(t.addElement(o).easing("ease").duration(500).add(r).add(n))}function u(e,o,t){var r="top",n="left",i=o.querySelector(".popover-content"),s=i.getBoundingClientRect(),a=s.width,p=s.height,l=window.innerWidth,c=window.innerHeight,d=t&&t.target&&t.target.getBoundingClientRect(),u=null!=d&&"top"in d?d.top:c/2-p/2,v="rtl"===document.dir,f=d&&d.height||0,h={top:u,left:null!=d&&"left"in d?v?d.left-a+d.width:d.left:l/2-a/2};h.left<m?h.left=m:a+m+h.left>l&&(h.left=l-a-m,n="right"),u+f+p>c&&u-p>0?(h.top=u-p,o.className=o.className+" popover-bottom",r="bottom"):u+f+p>c&&(i.style.bottom=m+"px"),i.style.top=h.top+"px",i.style.left=h.left+"px",i.style.transformOrigin=r+" "+n;var b=new e,y=new e;y.addElement(o.querySelector("ion-backdrop")),y.fromTo("opacity",.01,.32);var g=new e;g.addElement(o.querySelector(".popover-wrapper")),g.fromTo("opacity",.01,1);var w=new e;w.addElement(o.querySelector(".popover-content")),w.fromTo("scale",.001,1);var x=new e;return x.addElement(o.querySelector(".popover-viewport")),x.fromTo("opacity",.01,1),Promise.resolve(b.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(y).add(g).add(w).add(x))}var m=12;function v(e,o){var t=new e,r=new e;r.addElement(o.querySelector("ion-backdrop"));var n=new e;return n.addElement(o.querySelector(".popover-wrapper")),n.fromTo("opacity",.99,0),r.fromTo("opacity",.32,0),Promise.resolve(t.addElement(o).easing("ease").duration(500).add(r).add(n))}var f=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,i.a)},e.prototype.lifecycle=function(e){var o=this.usersElement,t=h[e.type];if(o&&t){var r=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(r)}},e.prototype.present=function(){return r.a(this,void 0,void 0,function(){var e,o,t;return r.c(this,function(r){switch(r.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return o=Object.assign({},this.componentProps,{popover:this.el}),t=this,[4,Object(a.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],o)];case 1:return t.usersElement=r.sent(),[4,Object(p.a)(this.usersElement)];case 2:return r.sent(),[2,Object(i.c)(this,"popoverEnter",l,u,this.event)]}})})},e.prototype.dismiss=function(e,o){return r.a(this,void 0,void 0,function(){var t;return r.c(this,function(r){switch(r.label){case 0:return[4,Object(i.d)(this,e,o,"popoverLeave",d,v,this.event)];case 1:return(t=r.sent())?[4,Object(a.b)(this.delegate,this.usersElement)]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2,t]}})})},e.prototype.onDidDismiss=function(){return Object(i.e)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(i.e)(this.el,"ionPopoverWillDismiss")},e.prototype.hostData=function(){return{"aria-modal":"true","no-router":!0,style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(s.a)(this.cssClass),{"popover-translucent":this.translucent})}},e.prototype.render=function(){return[Object(n.b)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(n.b)("div",{class:"popover-wrapper"},Object(n.b)("div",{class:"popover-arrow"}),Object(n.b)("div",{class:"popover-content"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},event:{type:"Any",attr:"event"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'.sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after, [dir=rtl]   .sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after{right:3px}.popover-bottom.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after{top:-6px}.popover-translucent.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h   .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}'},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),h={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},b=function(){function e(){}return e.prototype.create=function(e){return Object(i.f)(this.doc.createElement("ion-popover"),e)},e.prototype.dismiss=function(e,o,t){return Object(i.g)(this.doc,e,o,"ion-popover",t)},e.prototype.getTop=function(){return r.a(this,void 0,void 0,function(){return r.c(this,function(e){return[2,Object(i.h)(this.doc,"ion-popover")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-popover-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}()}}]);
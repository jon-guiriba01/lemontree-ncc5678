(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"f+ep":function(n,l,o){"use strict";o.r(l);var t=o("CcnG"),u=o("ZZ/e"),e=o("NzdG"),i=o("CB3U"),a=o("lGQG"),c=function(){function n(n,l,o,t,u,e,i){this.router=n,this.loadingController=l,this.googlePlus=o,this.sotrage=t,this.afAuth=u,this.platform=e,this.authService=i}return n.prototype.ngOnInit=function(){},n.prototype.signup=function(){this.router.navigateByUrl("/signup")},n.prototype.login=function(){var n=this;this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password).then(function(l){console.log(l),n.router.navigateByUrl("/home")}).catch(function(n){console.log(n)})},n.prototype.googleLogin=function(){var n=this;this.authService.googleLogin().then(function(l){n.router.navigateByUrl("/home"),console.log(l)})},n}(),g=function(){return function(){}}(),s=o("pMnS"),r=o("oBZk"),p=o("gIcY"),b=o("ZYCi"),d=o("iw74"),m=t.nb({encapsulation:0,styles:[[".wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}.main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center;height:800px;min-width:230px;max-width:900px}.login-inputs[_ngcontent-%COMP%]{width:100%}.login-btns[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin-bottom:50px}.logo-container[_ngcontent-%COMP%]{margin-bottom:50px;display:flex;justify-content:center}.logo[_ngcontent-%COMP%]{max-width:350px;max-height:220px}.ncc-logo[_ngcontent-%COMP%]{display:flex;justify-content:center}input[_ngcontent-%COMP%]{margin-bottom:25px;border:3px solid var(--ion-color-secondary-tint);border-radius:4px;width:100%;padding:8px;background:0 0}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff;text-align:center}[_ngcontent-%COMP%]:-ms-input-placeholder{color:#fff;text-align:center}[_ngcontent-%COMP%]::-ms-input-placeholder{color:#fff;text-align:center}[_ngcontent-%COMP%]::placeholder{color:#fff;text-align:center}.login-signup[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:15px}.login-btn[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-grow:1;font-weight:700}.signup-btn[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;margin-top:15px;color:var(--ion-color-light);font-weight:700;flex-grow:1}.google-login-btn[_ngcontent-%COMP%]{width:100%;color:var(--ion-color-light);text-align:center;cursor:pointer;font-size:25px}.google-login-btn[_ngcontent-%COMP%]   .google-icon[_ngcontent-%COMP%]{vertical-align:middle;font-size:30px}"]],data:{}});function h(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,31,"ion-content",[["class","gradient-bg"],["padding",""]],null,null,null,r.S,r.k)),t.ob(1,49152,null,0,u.t,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,29,"div",[["class","wrapper"]],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,28,"div",[["class","main-container"]],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,1,"div",[["class","logo-container"]],null,null,null,null,null)),(n()(),t.pb(5,0,null,null,0,"img",[["class","logo"],["src","assets/imgs/app_logo.png"]],null,null,null,null,null)),(n()(),t.pb(6,0,null,null,12,"div",[["class","login-inputs"]],null,null,null,null,null)),(n()(),t.pb(7,0,null,null,5,"input",[["name","email"],["placeholder","Username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var u=!0,e=n.component;return"input"===l&&(u=!1!==t.zb(n,8)._handleInput(o.target.value)&&u),"blur"===l&&(u=!1!==t.zb(n,8).onTouched()&&u),"compositionstart"===l&&(u=!1!==t.zb(n,8)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t.zb(n,8)._compositionEnd(o.target.value)&&u),"ngModelChange"===l&&(u=!1!==(e.email=o)&&u),u},null,null)),t.ob(8,16384,null,0,p.c,[t.D,t.k,[2,p.a]],null,null),t.Eb(1024,null,p.e,function(n){return[n]},[p.c]),t.ob(10,671744,null,0,p.j,[[8,null],[8,null],[8,null],[6,p.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,p.f,null,[p.j]),t.ob(12,16384,null,0,p.g,[[4,p.f]],null,null),(n()(),t.pb(13,0,null,null,5,"input",[["name","password"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var u=!0,e=n.component;return"input"===l&&(u=!1!==t.zb(n,14)._handleInput(o.target.value)&&u),"blur"===l&&(u=!1!==t.zb(n,14).onTouched()&&u),"compositionstart"===l&&(u=!1!==t.zb(n,14)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t.zb(n,14)._compositionEnd(o.target.value)&&u),"ngModelChange"===l&&(u=!1!==(e.password=o)&&u),u},null,null)),t.ob(14,16384,null,0,p.c,[t.D,t.k,[2,p.a]],null,null),t.Eb(1024,null,p.e,function(n){return[n]},[p.c]),t.ob(16,671744,null,0,p.j,[[8,null],[8,null],[8,null],[6,p.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,p.f,null,[p.j]),t.ob(18,16384,null,0,p.g,[[4,p.f]],null,null),(n()(),t.pb(19,0,null,null,10,"div",[["class","login-btns"]],null,null,null,null,null)),(n()(),t.pb(20,0,null,null,5,"div",[["class","login-signup"]],null,null,null,null,null)),(n()(),t.pb(21,0,null,null,2,"ion-button",[["class","login-btn"]],null,[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.login()&&t),t},r.K,r.c)),t.ob(22,49152,null,0,u.j,[t.h,t.k],null,null),(n()(),t.Hb(-1,0,["LOGIN"])),(n()(),t.pb(24,0,null,null,1,"a",[["class","signup-btn"]],null,[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.signup()&&t),t},null,null)),(n()(),t.Hb(-1,null,["SIGNUP"])),(n()(),t.pb(26,0,null,null,3,"h4",[["class","google-login-btn"]],null,[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.googleLogin()&&t),t},null,null)),(n()(),t.pb(27,0,null,null,1,"ion-icon",[["class","google-icon"],["name","logo-googleplus"]],null,null,null,r.X,r.p)),t.ob(28,49152,null,0,u.B,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.Hb(-1,null,[" | continue with Google "])),(n()(),t.pb(30,0,null,null,1,"div",[["class","ncc-logo"]],null,null,null,null,null)),(n()(),t.pb(31,0,null,null,0,"img",[["class","logo"],["src","assets/imgs/ncc_logo.png"]],null,null,null,null,null))],function(n,l){var o=l.component;n(l,10,0,"email",o.email),n(l,16,0,"password",o.password),n(l,28,0,"logo-googleplus")},function(n,l){n(l,7,0,t.zb(l,12).ngClassUntouched,t.zb(l,12).ngClassTouched,t.zb(l,12).ngClassPristine,t.zb(l,12).ngClassDirty,t.zb(l,12).ngClassValid,t.zb(l,12).ngClassInvalid,t.zb(l,12).ngClassPending),n(l,13,0,t.zb(l,18).ngClassUntouched,t.zb(l,18).ngClassTouched,t.zb(l,18).ngClassPristine,t.zb(l,18).ngClassDirty,t.zb(l,18).ngClassValid,t.zb(l,18).ngClassInvalid,t.zb(l,18).ngClassPending)})}function f(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-login",[],null,null,null,h,m)),t.ob(1,114688,null,0,c,[b.m,u.Eb,e.a,d.b,i.a,u.Ib,a.a],null,null)],function(n,l){n(l,1,0)},null)}var x=t.lb("app-login",c,f,{},{},[]),C=o("Ip0R");o.d(l,"LoginPageModuleNgFactory",function(){return v});var v=t.mb(g,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[s.a,x]],[3,t.j],t.x]),t.xb(4608,C.m,C.l,[t.u,[2,C.y]]),t.xb(4608,p.m,p.m,[]),t.xb(4608,u.a,u.a,[t.z,t.g]),t.xb(4608,u.Gb,u.Gb,[u.a,t.j,t.q]),t.xb(4608,u.Jb,u.Jb,[u.a,t.j,t.q]),t.xb(1073742336,C.b,C.b,[]),t.xb(1073742336,p.k,p.k,[]),t.xb(1073742336,p.d,p.d,[]),t.xb(1073742336,u.Cb,u.Cb,[]),t.xb(1073742336,b.n,b.n,[[2,b.t],[2,b.m]]),t.xb(1073742336,g,g,[]),t.xb(1024,b.k,function(){return[[{path:"",component:c}]]},[])])})}}]);
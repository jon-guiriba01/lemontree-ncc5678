(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"f+ep":function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),u=t("ZZ/e"),e=t("NzdG"),i=t("CB3U"),a=t("lGQG"),c=t("tct4"),g=t("p46w"),r=t.n(g),s=function(){return(s=Object.assign||function(n){for(var l,t=1,o=arguments.length;t<o;t++)for(var u in l=arguments[t])Object.prototype.hasOwnProperty.call(l,u)&&(n[u]=l[u]);return n}).apply(this,arguments)},p=function(){function n(n,l,t,o,u,e,i,a){this.router=n,this.loadingController=l,this.googlePlus=t,this.sotrage=o,this.afAuth=u,this.platform=e,this.authService=i,this.afs=a,this.hasLoginError=!1}return n.prototype.ngOnInit=function(){},n.prototype.signup=function(){this.router.navigateByUrl("/signup")},n.prototype.login=function(){var n=this;this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password).then(function(l){console.log("-login()",l),n.afs.collection("users",function(l){return l.where("email","==",n.email)}).snapshotChanges().subscribe(function(l){if(l){var t=s({},l[0].payload.doc.data());t.id=l[0].payload.doc.id,r.a.set("user",t),n.authService.user=t,n.router.navigateByUrl("/home")}})}).catch(function(l){n.hasLoginError=!0,console.log(l)})},n.prototype.googleLogin=function(){this.authService.googleLogin().then(function(n){})},n}(),b=function(){return function(){}}(),d=t("pMnS"),h=t("oBZk"),m=t("Ip0R"),f=t("gIcY"),x=t("ZYCi"),C=t("iw74"),v=o.nb({encapsulation:0,styles:[[".wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}.main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center;height:800px;min-width:230px;max-width:900px}.login-inputs[_ngcontent-%COMP%]{width:100%}.login-btns[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin-bottom:50px}@media (max-width:599px){.main-container[_ngcontent-%COMP%]{height:100%}.login-btns[_ngcontent-%COMP%]{margin-bottom:initial}}.logo-container[_ngcontent-%COMP%]{margin-bottom:50px;display:flex;justify-content:center}.logo[_ngcontent-%COMP%]{max-width:350px;max-height:220px}@media (max-width:599px){.logo-container[_ngcontent-%COMP%]{margin-bottom:10px}.logo[_ngcontent-%COMP%]{max-width:250px;max-height:175px;margin-bottom:10px}.ncc-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{max-height:160px;max-width:140px;min-height:160px}}.ncc-logo[_ngcontent-%COMP%]{display:flex;justify-content:center}input[_ngcontent-%COMP%]{margin-bottom:25px;border:3px solid var(--ion-color-secondary-tint);border-radius:4px;width:100%;padding:8px;background:0 0}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff;text-align:center}[_ngcontent-%COMP%]:-ms-input-placeholder{color:#fff;text-align:center}[_ngcontent-%COMP%]::-ms-input-placeholder{color:#fff;text-align:center}[_ngcontent-%COMP%]::placeholder{color:#fff;text-align:center}.login-signup[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:15px}.login-btn[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-grow:1;font-weight:700}.signup-btn[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;margin-top:15px;color:var(--ion-color-light);font-weight:700;flex-grow:1;cursor:pointer}.google-login-btn[_ngcontent-%COMP%]{width:100%;color:var(--ion-color-light);text-align:center;cursor:pointer;font-size:25px}@media (max-width:599px){.google-login-btn[_ngcontent-%COMP%]{font-size:14px}}.google-login-btn[_ngcontent-%COMP%]   .google-icon[_ngcontent-%COMP%]{vertical-align:middle;font-size:30px}.error-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--red)}"]],data:{}});function w(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,2,"p",[["text-center",""]],null,null,null,null,null)),(n()(),o.pb(1,0,null,null,1,"i",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,["Invalid email / password"]))],null,null)}function M(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,34,"ion-content",[["class","gradient-bg"],["padding",""]],null,null,null,h.V,h.m)),o.ob(1,49152,null,0,u.v,[o.h,o.k],null,null),(n()(),o.pb(2,0,null,0,32,"div",[["class","wrapper"]],null,null,null,null,null)),(n()(),o.pb(3,0,null,null,31,"div",[["class","main-container"]],null,null,null,null,null)),(n()(),o.pb(4,0,null,null,1,"div",[["class","logo-container"]],null,null,null,null,null)),(n()(),o.pb(5,0,null,null,0,"img",[["class","logo"],["src","assets/imgs/app_logo.png"]],null,null,null,null,null)),(n()(),o.pb(6,0,null,null,2,"div",[["class","error-list"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,w)),o.ob(8,16384,null,0,m.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(9,0,null,null,12,"div",[["class","login-inputs"]],null,null,null,null,null)),(n()(),o.pb(10,0,null,null,5,"input",[["name","email"],["placeholder","Username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,e=n.component;return"input"===l&&(u=!1!==o.zb(n,11)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==o.zb(n,11).onTouched()&&u),"compositionstart"===l&&(u=!1!==o.zb(n,11)._compositionStart()&&u),"compositionend"===l&&(u=!1!==o.zb(n,11)._compositionEnd(t.target.value)&&u),"ngModelChange"===l&&(u=!1!==(e.email=t)&&u),u},null,null)),o.ob(11,16384,null,0,f.c,[o.D,o.k,[2,f.a]],null,null),o.Eb(1024,null,f.l,function(n){return[n]},[f.c]),o.ob(13,671744,null,0,f.p,[[8,null],[8,null],[8,null],[6,f.l]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Eb(2048,null,f.m,null,[f.p]),o.ob(15,16384,null,0,f.n,[[4,f.m]],null,null),(n()(),o.pb(16,0,null,null,5,"input",[["name","password"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,e=n.component;return"input"===l&&(u=!1!==o.zb(n,17)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==o.zb(n,17).onTouched()&&u),"compositionstart"===l&&(u=!1!==o.zb(n,17)._compositionStart()&&u),"compositionend"===l&&(u=!1!==o.zb(n,17)._compositionEnd(t.target.value)&&u),"ngModelChange"===l&&(u=!1!==(e.password=t)&&u),u},null,null)),o.ob(17,16384,null,0,f.c,[o.D,o.k,[2,f.a]],null,null),o.Eb(1024,null,f.l,function(n){return[n]},[f.c]),o.ob(19,671744,null,0,f.p,[[8,null],[8,null],[8,null],[6,f.l]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Eb(2048,null,f.m,null,[f.p]),o.ob(21,16384,null,0,f.n,[[4,f.m]],null,null),(n()(),o.pb(22,0,null,null,10,"div",[["class","login-btns"]],null,null,null,null,null)),(n()(),o.pb(23,0,null,null,5,"div",[["class","login-signup"]],null,null,null,null,null)),(n()(),o.pb(24,0,null,null,2,"ion-button",[["class","login-btn"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.login()&&o),o},h.M,h.d)),o.ob(25,49152,null,0,u.l,[o.h,o.k],null,null),(n()(),o.Hb(-1,0,["LOGIN"])),(n()(),o.pb(27,0,null,null,1,"a",[["class","signup-btn"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.signup()&&o),o},null,null)),(n()(),o.Hb(-1,null,["SIGNUP"])),(n()(),o.pb(29,0,null,null,3,"h4",[["class","google-login-btn"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.googleLogin()&&o),o},null,null)),(n()(),o.pb(30,0,null,null,1,"ion-icon",[["class","google-icon"],["name","logo-googleplus"]],null,null,null,h.ab,h.r)),o.ob(31,49152,null,0,u.D,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.Hb(-1,null,[" | continue with Google "])),(n()(),o.pb(33,0,null,null,1,"div",[["class","ncc-logo"]],null,null,null,null,null)),(n()(),o.pb(34,0,null,null,0,"img",[["class","logo"],["src","assets/imgs/ncc_logo.png"]],null,null,null,null,null))],function(n,l){var t=l.component;n(l,8,0,t.hasLoginError),n(l,13,0,"email",t.email),n(l,19,0,"password",t.password),n(l,31,0,"logo-googleplus")},function(n,l){n(l,10,0,o.zb(l,15).ngClassUntouched,o.zb(l,15).ngClassTouched,o.zb(l,15).ngClassPristine,o.zb(l,15).ngClassDirty,o.zb(l,15).ngClassValid,o.zb(l,15).ngClassInvalid,o.zb(l,15).ngClassPending),n(l,16,0,o.zb(l,21).ngClassUntouched,o.zb(l,21).ngClassTouched,o.zb(l,21).ngClassPristine,o.zb(l,21).ngClassDirty,o.zb(l,21).ngClassValid,o.zb(l,21).ngClassInvalid,o.zb(l,21).ngClassPending)})}function P(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"app-login",[],null,null,null,M,v)),o.ob(1,114688,null,0,p,[x.m,u.Gb,e.a,C.b,i.a,u.Mb,a.a,c.a],null,null)],function(n,l){n(l,1,0)},null)}var _=o.lb("app-login",p,P,{},{},[]);t.d(l,"LoginPageModuleNgFactory",function(){return y});var y=o.mb(b,[],function(n){return o.wb([o.xb(512,o.j,o.bb,[[8,[d.a,_]],[3,o.j],o.x]),o.xb(4608,m.m,m.l,[o.u,[2,m.z]]),o.xb(4608,f.u,f.u,[]),o.xb(4608,u.b,u.b,[o.z,o.g]),o.xb(4608,u.Ib,u.Ib,[u.b,o.j,o.q]),o.xb(4608,u.Nb,u.Nb,[u.b,o.j,o.q]),o.xb(1073742336,m.b,m.b,[]),o.xb(1073742336,f.s,f.s,[]),o.xb(1073742336,f.h,f.h,[]),o.xb(1073742336,u.Eb,u.Eb,[]),o.xb(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),o.xb(1073742336,b,b,[]),o.xb(1024,x.k,function(){return[[{path:"",component:p}]]},[])])})}}]);
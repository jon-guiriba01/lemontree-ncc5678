(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{mH0F:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("CB3U"),o=u("gIcY"),i=u("tct4"),a=u("lGQG"),r=function(){function l(l,n,u,t,e){this.afAuth=l,this.router=n,this.formBuilder=u,this.afs=t,this.authService=e,this.validationMessages={firstName:[{type:"required",message:"first name is required."},{type:"minlength",message:"first name must be at least 2 characters long."},{type:"maxlength",message:"first name cannot be more than 30 characters long."}],lastName:[{type:"required",message:"last name is required."},{type:"minlength",message:"last name must be at least 2 characters long."},{type:"maxlength",message:"last name cannot be more than 30 characters long."}],birthdate:[{type:"required",message:"birthdate is required."}],contactNumber:[{type:"required",message:"contact number is required."},{type:"minlength",message:"contact number should be 11 characters long."}],team:[{type:"required",message:"team is required."}],email:[{type:"required",message:"email is required."},{type:"email",message:"must be a valid email."}],password:[{type:"required",message:"password is required."},{type:"pattern",message:"password must contain 1 upper case and 1 number."},{type:"minlength",message:"password must be at least 8 characters."}],repassword:[{type:"equalTo",message:"password doesnt match."}]},this.passwordRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$",this.emailRegex="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",this.loginForm=this.formBuilder.group({firstName:new o.e("",o.r.compose([o.r.maxLength(30),o.r.minLength(2),o.r.required])),lastName:new o.e("",o.r.compose([o.r.maxLength(30),o.r.minLength(2),o.r.required])),birthdate:new o.e("",o.r.compose([o.r.required])),contactNumber:new o.e("",o.r.compose([o.r.maxLength(11),o.r.minLength(11),o.r.required])),team:new o.e("",o.r.compose([o.r.required])),email:new o.e("",o.r.compose([o.r.required,o.r.email])),password:new o.e("",o.r.compose([o.r.required,o.r.pattern(this.passwordRegex)])),repassword:new o.e("",[o.r.required,this.equalto("password")])})}return l.prototype.equalto=function(l){return function(n){var u=n.root.value[l]==n.value;return u?null:{equalTo:{isValid:u}}}},l.prototype.ngOnInit=function(){},l.prototype.signup=function(){var l=this;console.log("-signup",this.loginForm.get("firstName")),this.afAuth.auth.createUserWithEmailAndPassword(this.loginForm.get("email").value,this.loginForm.get("password").value).then(function(n){console.log("-createUserWithEmailAndPassword",n),console.log("-loginForm",{firstName:l.loginForm.get("firstName").value,lastName:l.loginForm.get("lastName").value,email:l.loginForm.get("email").value,contactNumber:l.loginForm.get("contactNumber").value,birthdate:l.loginForm.get("birthdate").value,team:l.loginForm.get("team").value});var u=l.afs.collection("users"),t={first_name:l.loginForm.get("firstName").value,last_name:l.loginForm.get("lastName").value,email:l.loginForm.get("email").value,contact_number:l.loginForm.get("contactNumber").value,birthdate:l.loginForm.get("birthdate").value,team:l.loginForm.get("team").value};u.add(t).then(function(n){l.authService.user=t,l.router.navigateByUrl("/home")}).catch(function(l){console.log("err",l)})}).catch(function(l){console.log(l)})},l.prototype.navTo=function(l){this.router.navigateByUrl(l)},l}(),s=function(){return function(){}}(),b=u("pMnS"),g=u("Ip0R"),c=u("oBZk"),m=u("ZZ/e"),p=u("ZYCi"),d=t.nb({encapsulation:0,styles:[[".signup-btn[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--background:var(--ion-color-primary)}ion-item[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%]{--background:transparent;background:0 0;--color:var(--ion-color-dark);color:var(--ion-color-dark)}.action-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:60px}ion-input[_ngcontent-%COMP%]{--padding-start:12px!important}.form-card[_ngcontent-%COMP%]{--background:var(--dark-bg);--color:var(--ion-color-light);position:relative}.form-card-header[_ngcontent-%COMP%]{background:0 0;padding:0}.logo-container[_ngcontent-%COMP%]{margin-bottom:50px;display:flex}.logo[_ngcontent-%COMP%]{max-width:220px;max-height:120px}.back-btn[_ngcontent-%COMP%]{width:38px;height:32px;cursor:pointer;margin-top:8px;position:absolute;z-index:999;top:0;left:0}.error-msg[_ngcontent-%COMP%]{font-size:12px;margin-top:5px;padding-left:15px}.title-container[_ngcontent-%COMP%]{display:block;text-align:center}.datetime-input[_ngcontent-%COMP%], .input-label[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%]{--color:var(--ion-color-light)}ion-item[_ngcontent-%COMP%]{--color:var(--ion-color-light)!important;color:var(--ion-color-light)!important}"]],data:{}});function h(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),t.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function f(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,h)),t.ob(2,16384,null,0,g.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("firstName").hasError(n.context.$implicit.type)&&(u.loginForm.get("firstName").dirty||u.loginForm.get("firstName").touched))},null)}function v(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),t.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function C(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,v)),t.ob(2,16384,null,0,g.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("lastName").hasError(n.context.$implicit.type)&&(u.loginForm.get("lastName").dirty||u.loginForm.get("lastName").touched))},null)}function z(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),t.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function k(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,z)),t.ob(2,16384,null,0,g.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("email").hasError(n.context.$implicit.type)&&(u.loginForm.get("email").dirty||u.loginForm.get("email").touched))},null)}function y(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),t.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function x(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,y)),t.ob(2,16384,null,0,g.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("birthdate").hasError(n.context.$implicit.type)&&(u.loginForm.get("birthdate").dirty||u.loginForm.get("birthdate").touched))},null)}function O(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),t.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function w(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,O)),t.ob(2,16384,null,0,g.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("contactNumber").hasError(n.context.$implicit.type)&&(u.loginForm.get("contactNumber").dirty||u.loginForm.get("contactNumber").touched))},null)}function F(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),t.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function N(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,F)),t.ob(2,16384,null,0,g.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("password").hasError(n.context.$implicit.type)&&(u.loginForm.get("password").dirty||u.loginForm.get("password").touched))},null)}function P(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),t.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function E(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,P)),t.ob(2,16384,null,0,g.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("repassword").hasError(n.context.$implicit.type)&&(u.loginForm.get("repassword").dirty||u.loginForm.get("repassword").touched))},null)}function I(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),t.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function _(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,I)),t.ob(2,16384,null,0,g.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("contactNumber").hasError(n.context.$implicit.type)&&(u.loginForm.get("contactNumber").dirty||u.loginForm.get("contactNumber").touched))},null)}function M(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,187,"ion-content",[["class","gradient-bg"],["padding",""]],null,null,null,c.V,c.m)),t.ob(1,49152,null,0,m.v,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,185,"div",[["class","main-container"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,184,"ion-card",[["class","form-card"],["padding",""]],null,null,null,c.S,c.f)),t.ob(4,49152,null,0,m.n,[t.h,t.k],null,null),(l()(),t.pb(5,0,null,0,1,"ion-icon",[["class","back-btn"],["name","arrow-back"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navTo("/login")&&t),t},c.ab,c.r)),t.ob(6,49152,null,0,m.D,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.pb(7,0,null,0,180,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.zb(l,9).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.zb(l,9).onReset()&&e),e},null,null)),t.ob(8,16384,null,0,o.t,[],null,null),t.ob(9,540672,null,0,o.g,[[8,null],[8,null]],{form:[0,"form"]},null),t.Eb(2048,null,o.b,null,[o.g]),t.ob(11,16384,null,0,o.o,[[4,o.b]],null,null),(l()(),t.pb(12,0,null,null,1,"ion-card-header",[["class","form-card-header"]],null,null,null,c.P,c.h)),t.ob(13,49152,null,0,m.p,[t.h,t.k],null,null),(l()(),t.pb(14,0,null,null,169,"ion-grid",[],null,null,null,c.Y,c.p)),t.ob(15,49152,null,0,m.B,[t.h,t.k],null,null),(l()(),t.pb(16,0,null,0,35,"ion-row",[],null,null,null,c.gb,c.x)),t.ob(17,49152,null,0,m.jb,[t.h,t.k],null,null),(l()(),t.pb(18,0,null,0,16,"ion-col",[["size","6"]],null,null,null,c.U,c.l)),t.ob(19,49152,null,0,m.u,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.pb(20,0,null,0,11,"ion-item",[],null,null,null,c.cb,c.t)),t.ob(21,49152,null,0,m.I,[t.h,t.k],null,null),(l()(),t.pb(22,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),t.ob(23,49152,null,0,m.O,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Hb(-1,0,["First Name"])),(l()(),t.pb(25,0,null,0,6,"ion-input",[["formControlName","firstName"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,26)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,26)._handleInputEvent(u.target.value)&&e),e},c.bb,c.s)),t.ob(26,16384,null,0,m.Pb,[t.k],null,null),t.Eb(1024,null,o.l,function(l){return[l]},[m.Pb]),t.ob(28,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),t.Eb(2048,null,o.m,null,[o.f]),t.ob(30,16384,null,0,o.n,[[4,o.m]],null,null),t.ob(31,49152,null,0,m.H,[t.h,t.k],{type:[0,"type"]},null),(l()(),t.pb(32,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,f)),t.ob(34,278528,null,0,g.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(35,0,null,0,16,"ion-col",[["size","6"]],null,null,null,c.U,c.l)),t.ob(36,49152,null,0,m.u,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.pb(37,0,null,0,11,"ion-item",[],null,null,null,c.cb,c.t)),t.ob(38,49152,null,0,m.I,[t.h,t.k],null,null),(l()(),t.pb(39,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),t.ob(40,49152,null,0,m.O,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Hb(-1,0,["Last Name"])),(l()(),t.pb(42,0,null,0,6,"ion-input",[["formControlName","lastName"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,43)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,43)._handleInputEvent(u.target.value)&&e),e},c.bb,c.s)),t.ob(43,16384,null,0,m.Pb,[t.k],null,null),t.Eb(1024,null,o.l,function(l){return[l]},[m.Pb]),t.ob(45,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),t.Eb(2048,null,o.m,null,[o.f]),t.ob(47,16384,null,0,o.n,[[4,o.m]],null,null),t.ob(48,49152,null,0,m.H,[t.h,t.k],{type:[0,"type"]},null),(l()(),t.pb(49,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,C)),t.ob(51,278528,null,0,g.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(52,0,null,0,18,"ion-row",[],null,null,null,c.gb,c.x)),t.ob(53,49152,null,0,m.jb,[t.h,t.k],null,null),(l()(),t.pb(54,0,null,0,16,"ion-col",[],null,null,null,c.U,c.l)),t.ob(55,49152,null,0,m.u,[t.h,t.k],null,null),(l()(),t.pb(56,0,null,0,11,"ion-item",[],null,null,null,c.cb,c.t)),t.ob(57,49152,null,0,m.I,[t.h,t.k],null,null),(l()(),t.pb(58,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),t.ob(59,49152,null,0,m.O,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Hb(-1,0,["Email"])),(l()(),t.pb(61,0,null,0,6,"ion-input",[["formControlName","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,62)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,62)._handleInputEvent(u.target.value)&&e),e},c.bb,c.s)),t.ob(62,16384,null,0,m.Pb,[t.k],null,null),t.Eb(1024,null,o.l,function(l){return[l]},[m.Pb]),t.ob(64,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),t.Eb(2048,null,o.m,null,[o.f]),t.ob(66,16384,null,0,o.n,[[4,o.m]],null,null),t.ob(67,49152,null,0,m.H,[t.h,t.k],{type:[0,"type"]},null),(l()(),t.pb(68,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,k)),t.ob(70,278528,null,0,g.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(71,0,null,0,18,"ion-row",[],null,null,null,c.gb,c.x)),t.ob(72,49152,null,0,m.jb,[t.h,t.k],null,null),(l()(),t.pb(73,0,null,0,16,"ion-col",[],null,null,null,c.U,c.l)),t.ob(74,49152,null,0,m.u,[t.h,t.k],null,null),(l()(),t.pb(75,0,null,0,11,"ion-item",[],null,null,null,c.cb,c.t)),t.ob(76,49152,null,0,m.I,[t.h,t.k],null,null),(l()(),t.pb(77,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),t.ob(78,49152,null,0,m.O,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Hb(-1,0,["Birthdate"])),(l()(),t.pb(80,0,null,0,6,"ion-datetime",[["class","datetime-input"],["display-format","MMM DD, YYYY"],["formControlName","birthdate"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,81)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,81)._handleChangeEvent(u.target.value)&&e),e},c.W,c.n)),t.ob(81,16384,null,0,m.Ob,[t.k],null,null),t.Eb(1024,null,o.l,function(l){return[l]},[m.Ob]),t.ob(83,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),t.Eb(2048,null,o.m,null,[o.f]),t.ob(85,16384,null,0,o.n,[[4,o.m]],null,null),t.ob(86,49152,null,0,m.w,[t.h,t.k],null,null),(l()(),t.pb(87,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,x)),t.ob(89,278528,null,0,g.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(90,0,null,0,21,"ion-row",[],null,null,null,c.gb,c.x)),t.ob(91,49152,null,0,m.jb,[t.h,t.k],null,null),(l()(),t.pb(92,0,null,0,19,"ion-col",[],null,null,null,c.U,c.l)),t.ob(93,49152,null,0,m.u,[t.h,t.k],null,null),(l()(),t.pb(94,0,null,0,14,"ion-item",[],null,null,null,c.cb,c.t)),t.ob(95,49152,null,0,m.I,[t.h,t.k],null,null),(l()(),t.pb(96,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),t.ob(97,49152,null,0,m.O,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Hb(-1,0,["Contact Number"])),(l()(),t.pb(99,0,null,0,9,"ion-input",[["formControlName","contactNumber"],["maxlength","11"],["minlength","11"],["type","number"]],[[1,"minlength",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,103)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,103)._handleIonChange(u.target.value)&&e),e},c.bb,c.s)),t.ob(100,540672,null,0,o.j,[],{minlength:[0,"minlength"]},null),t.ob(101,540672,null,0,o.i,[],{maxlength:[0,"maxlength"]},null),t.Eb(1024,null,o.k,function(l,n){return[l,n]},[o.j,o.i]),t.ob(103,16384,null,0,m.Lb,[t.k],null,null),t.Eb(1024,null,o.l,function(l){return[l]},[m.Lb]),t.ob(105,671744,null,0,o.f,[[3,o.b],[6,o.k],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),t.Eb(2048,null,o.m,null,[o.f]),t.ob(107,16384,null,0,o.n,[[4,o.m]],null,null),t.ob(108,49152,null,0,m.H,[t.h,t.k],{maxlength:[0,"maxlength"],minlength:[1,"minlength"],type:[2,"type"]},null),(l()(),t.pb(109,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,w)),t.ob(111,278528,null,0,g.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(112,0,null,0,18,"ion-row",[],null,null,null,c.gb,c.x)),t.ob(113,49152,null,0,m.jb,[t.h,t.k],null,null),(l()(),t.pb(114,0,null,0,16,"ion-col",[],null,null,null,c.U,c.l)),t.ob(115,49152,null,0,m.u,[t.h,t.k],null,null),(l()(),t.pb(116,0,null,0,11,"ion-item",[],null,null,null,c.cb,c.t)),t.ob(117,49152,null,0,m.I,[t.h,t.k],null,null),(l()(),t.pb(118,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),t.ob(119,49152,null,0,m.O,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Hb(-1,0,["Password"])),(l()(),t.pb(121,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,122)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,122)._handleInputEvent(u.target.value)&&e),e},c.bb,c.s)),t.ob(122,16384,null,0,m.Pb,[t.k],null,null),t.Eb(1024,null,o.l,function(l){return[l]},[m.Pb]),t.ob(124,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),t.Eb(2048,null,o.m,null,[o.f]),t.ob(126,16384,null,0,o.n,[[4,o.m]],null,null),t.ob(127,49152,null,0,m.H,[t.h,t.k],{type:[0,"type"]},null),(l()(),t.pb(128,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,N)),t.ob(130,278528,null,0,g.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(131,0,null,0,18,"ion-row",[],null,null,null,c.gb,c.x)),t.ob(132,49152,null,0,m.jb,[t.h,t.k],null,null),(l()(),t.pb(133,0,null,0,16,"ion-col",[],null,null,null,c.U,c.l)),t.ob(134,49152,null,0,m.u,[t.h,t.k],null,null),(l()(),t.pb(135,0,null,0,11,"ion-item",[],null,null,null,c.cb,c.t)),t.ob(136,49152,null,0,m.I,[t.h,t.k],null,null),(l()(),t.pb(137,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),t.ob(138,49152,null,0,m.O,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Hb(-1,0,["Repeat Password"])),(l()(),t.pb(140,0,null,0,6,"ion-input",[["formControlName","repassword"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,141)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,141)._handleInputEvent(u.target.value)&&e),e},c.bb,c.s)),t.ob(141,16384,null,0,m.Pb,[t.k],null,null),t.Eb(1024,null,o.l,function(l){return[l]},[m.Pb]),t.ob(143,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),t.Eb(2048,null,o.m,null,[o.f]),t.ob(145,16384,null,0,o.n,[[4,o.m]],null,null),t.ob(146,49152,null,0,m.H,[t.h,t.k],{type:[0,"type"]},null),(l()(),t.pb(147,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,E)),t.ob(149,278528,null,0,g.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(150,0,null,0,33,"ion-row",[],null,null,null,c.gb,c.x)),t.ob(151,49152,null,0,m.jb,[t.h,t.k],null,null),(l()(),t.pb(152,0,null,0,31,"ion-col",[],null,null,null,c.U,c.l)),t.ob(153,49152,null,0,m.u,[t.h,t.k],null,null),(l()(),t.pb(154,0,null,0,26,"ion-item",[],null,null,null,c.cb,c.t)),t.ob(155,49152,null,0,m.I,[t.h,t.k],null,null),(l()(),t.pb(156,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),t.ob(157,49152,null,0,m.O,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Hb(-1,0,["Team"])),(l()(),t.pb(159,0,null,0,21,"ion-select",[["cancelText","Dismiss"],["formControlName","team"],["okText","Okay"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,160)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,160)._handleChangeEvent(u.target.value)&&e),e},c.jb,c.z)),t.ob(160,16384,null,0,m.Ob,[t.k],null,null),t.Eb(1024,null,o.l,function(l){return[l]},[m.Ob]),t.ob(162,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),t.Eb(2048,null,o.m,null,[o.f]),t.ob(164,16384,null,0,o.n,[[4,o.m]],null,null),t.ob(165,49152,null,0,m.nb,[t.h,t.k],{cancelText:[0,"cancelText"],okText:[1,"okText"]},null),(l()(),t.pb(166,0,null,0,2,"ion-select-option",[["value","admin"]],null,null,null,c.ib,c.A)),t.ob(167,49152,null,0,m.ob,[t.h,t.k],{value:[0,"value"]},null),(l()(),t.Hb(-1,0,["Administration"])),(l()(),t.pb(169,0,null,0,2,"ion-select-option",[["value","registration"]],null,null,null,c.ib,c.A)),t.ob(170,49152,null,0,m.ob,[t.h,t.k],{value:[0,"value"]},null),(l()(),t.Hb(-1,0,["Registration"])),(l()(),t.pb(172,0,null,0,2,"ion-select-option",[["value","operations"]],null,null,null,c.ib,c.A)),t.ob(173,49152,null,0,m.ob,[t.h,t.k],{value:[0,"value"]},null),(l()(),t.Hb(-1,0,["Operations"])),(l()(),t.pb(175,0,null,0,2,"ion-select-option",[["value","marketing"]],null,null,null,c.ib,c.A)),t.ob(176,49152,null,0,m.ob,[t.h,t.k],{value:[0,"value"]},null),(l()(),t.Hb(-1,0,["Marketing"])),(l()(),t.pb(178,0,null,0,2,"ion-select-option",[["value","camps"]],null,null,null,c.ib,c.A)),t.ob(179,49152,null,0,m.ob,[t.h,t.k],{value:[0,"value"]},null),(l()(),t.Hb(-1,0,["Camps & Competitions"])),(l()(),t.pb(181,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,_)),t.ob(183,278528,null,0,g.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(184,0,null,null,3,"div",[["class","action-row"]],null,null,null,null,null)),(l()(),t.pb(185,0,null,null,2,"ion-button",[["class","signup-btn"],["type","submit"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.signup()&&t),t},c.M,c.d)),t.ob(186,49152,null,0,m.l,[t.h,t.k],{type:[0,"type"]},null),(l()(),t.Hb(-1,0,[" SIGNUP "]))],function(l,n){var u=n.component;l(n,6,0,"arrow-back"),l(n,9,0,u.loginForm),l(n,19,0,"6"),l(n,23,0,"floating"),l(n,28,0,"firstName"),l(n,31,0,"text"),l(n,34,0,u.validationMessages.firstName),l(n,36,0,"6"),l(n,40,0,"floating"),l(n,45,0,"lastName"),l(n,48,0,"text"),l(n,51,0,u.validationMessages.lastName),l(n,59,0,"floating"),l(n,64,0,"email"),l(n,67,0,"email"),l(n,70,0,u.validationMessages.email),l(n,78,0,"floating"),l(n,83,0,"birthdate"),l(n,89,0,u.validationMessages.birthdate),l(n,97,0,"floating"),l(n,100,0,"11"),l(n,101,0,"11"),l(n,105,0,"contactNumber"),l(n,108,0,"11","11","number"),l(n,111,0,u.validationMessages.contactNumber),l(n,119,0,"floating"),l(n,124,0,"password"),l(n,127,0,"password"),l(n,130,0,u.validationMessages.password),l(n,138,0,"floating"),l(n,143,0,"repassword"),l(n,146,0,"password"),l(n,149,0,u.validationMessages.repassword),l(n,157,0,"floating"),l(n,162,0,"team"),l(n,165,0,"Dismiss","Okay"),l(n,167,0,"admin"),l(n,170,0,"registration"),l(n,173,0,"operations"),l(n,176,0,"marketing"),l(n,179,0,"camps"),l(n,183,0,u.validationMessages.contactNumber),l(n,186,0,"submit")},function(l,n){l(n,7,0,t.zb(n,11).ngClassUntouched,t.zb(n,11).ngClassTouched,t.zb(n,11).ngClassPristine,t.zb(n,11).ngClassDirty,t.zb(n,11).ngClassValid,t.zb(n,11).ngClassInvalid,t.zb(n,11).ngClassPending),l(n,25,0,t.zb(n,30).ngClassUntouched,t.zb(n,30).ngClassTouched,t.zb(n,30).ngClassPristine,t.zb(n,30).ngClassDirty,t.zb(n,30).ngClassValid,t.zb(n,30).ngClassInvalid,t.zb(n,30).ngClassPending),l(n,42,0,t.zb(n,47).ngClassUntouched,t.zb(n,47).ngClassTouched,t.zb(n,47).ngClassPristine,t.zb(n,47).ngClassDirty,t.zb(n,47).ngClassValid,t.zb(n,47).ngClassInvalid,t.zb(n,47).ngClassPending),l(n,61,0,t.zb(n,66).ngClassUntouched,t.zb(n,66).ngClassTouched,t.zb(n,66).ngClassPristine,t.zb(n,66).ngClassDirty,t.zb(n,66).ngClassValid,t.zb(n,66).ngClassInvalid,t.zb(n,66).ngClassPending),l(n,80,0,t.zb(n,85).ngClassUntouched,t.zb(n,85).ngClassTouched,t.zb(n,85).ngClassPristine,t.zb(n,85).ngClassDirty,t.zb(n,85).ngClassValid,t.zb(n,85).ngClassInvalid,t.zb(n,85).ngClassPending),l(n,99,0,t.zb(n,100).minlength?t.zb(n,100).minlength:null,t.zb(n,101).maxlength?t.zb(n,101).maxlength:null,t.zb(n,107).ngClassUntouched,t.zb(n,107).ngClassTouched,t.zb(n,107).ngClassPristine,t.zb(n,107).ngClassDirty,t.zb(n,107).ngClassValid,t.zb(n,107).ngClassInvalid,t.zb(n,107).ngClassPending),l(n,121,0,t.zb(n,126).ngClassUntouched,t.zb(n,126).ngClassTouched,t.zb(n,126).ngClassPristine,t.zb(n,126).ngClassDirty,t.zb(n,126).ngClassValid,t.zb(n,126).ngClassInvalid,t.zb(n,126).ngClassPending),l(n,140,0,t.zb(n,145).ngClassUntouched,t.zb(n,145).ngClassTouched,t.zb(n,145).ngClassPristine,t.zb(n,145).ngClassDirty,t.zb(n,145).ngClassValid,t.zb(n,145).ngClassInvalid,t.zb(n,145).ngClassPending),l(n,159,0,t.zb(n,164).ngClassUntouched,t.zb(n,164).ngClassTouched,t.zb(n,164).ngClassPristine,t.zb(n,164).ngClassDirty,t.zb(n,164).ngClassValid,t.zb(n,164).ngClassInvalid,t.zb(n,164).ngClassPending)})}function B(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"app-signup",[],null,null,null,M,d)),t.ob(1,114688,null,0,r,[e.a,p.m,o.d,i.a,a.a],null,null)],function(l,n){l(n,1,0)},null)}var q=t.lb("app-signup",r,B,{},{},[]);u.d(n,"SignupPageModuleNgFactory",function(){return H});var H=t.mb(s,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[b.a,q]],[3,t.j],t.x]),t.xb(4608,g.m,g.l,[t.u,[2,g.y]]),t.xb(4608,o.u,o.u,[]),t.xb(4608,o.d,o.d,[]),t.xb(4608,m.b,m.b,[t.z,t.g]),t.xb(4608,m.Ib,m.Ib,[m.b,t.j,t.q]),t.xb(4608,m.Nb,m.Nb,[m.b,t.j,t.q]),t.xb(1073742336,g.b,g.b,[]),t.xb(1073742336,o.s,o.s,[]),t.xb(1073742336,o.h,o.h,[]),t.xb(1073742336,o.q,o.q,[]),t.xb(1073742336,m.Eb,m.Eb,[]),t.xb(1073742336,p.n,p.n,[[2,p.t],[2,p.m]]),t.xb(1073742336,s,s,[]),t.xb(1024,p.k,function(){return[[{path:"",component:r}]]},[])])})}}]);
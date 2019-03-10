(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{mH0F:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("CB3U"),o=u("gIcY"),i=u("tct4"),a=u("lGQG"),r=function(){function l(l,n,u,e,t){this.afAuth=l,this.router=n,this.formBuilder=u,this.afs=e,this.authService=t,this.validationMessages={firstName:[{type:"required",message:"first name is required."},{type:"minlength",message:"first name must be at least 2 characters long."},{type:"maxlength",message:"first name cannot be more than 30 characters long."}],lastName:[{type:"required",message:"last name is required."},{type:"minlength",message:"last name must be at least 2 characters long."},{type:"maxlength",message:"last name cannot be more than 30 characters long."}],birthdate:[{type:"required",message:"birthdate is required."}],contactNumber:[{type:"required",message:"contact number is required."},{type:"minlength",message:"contact number should be 11 characters long."}],team:[{type:"required",message:"team is required."}],email:[{type:"required",message:"email is required."},{type:"email",message:"must be a valid email."}],password:[{type:"required",message:"password is required."},{type:"pattern",message:"password must contain 1 upper case and 1 number."},{type:"minlength",message:"password must be at least 8 characters."}],repassword:[{type:"equalTo",message:"password doesnt match."}]},this.passwordRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$",this.emailRegex="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",this.loginForm=this.formBuilder.group({firstName:new o.e("",o.r.compose([o.r.maxLength(30),o.r.minLength(2),o.r.required])),lastName:new o.e("",o.r.compose([o.r.maxLength(30),o.r.minLength(2),o.r.required])),birthdate:new o.e("",o.r.compose([o.r.required])),contactNumber:new o.e("",o.r.compose([o.r.maxLength(11),o.r.minLength(11),o.r.required])),team:new o.e("",o.r.compose([o.r.required])),email:new o.e("",o.r.compose([o.r.required,o.r.email])),password:new o.e("",o.r.compose([o.r.required,o.r.pattern(this.passwordRegex)])),repassword:new o.e("",[o.r.required,this.equalto("password")])})}return l.prototype.equalto=function(l){return function(n){var u=n.root.value[l]==n.value;return u?null:{equalTo:{isValid:u}}}},l.prototype.ngOnInit=function(){},l.prototype.signup=function(){var l=this;console.log("-signup",this.loginForm.get("firstName")),this.afAuth.auth.createUserWithEmailAndPassword(this.loginForm.get("email").value,this.loginForm.get("password").value).then(function(n){console.log("-createUserWithEmailAndPassword",n),console.log("-loginForm",{firstName:l.loginForm.get("firstName").value,lastName:l.loginForm.get("lastName").value,email:l.loginForm.get("email").value,contactNumber:l.loginForm.get("contactNumber").value,birthdate:l.loginForm.get("birthdate").value,team:l.loginForm.get("team").value});var u=l.afs.collection("users"),e={first_name:l.loginForm.get("firstName").value,last_name:l.loginForm.get("lastName").value,email:l.loginForm.get("email").value,contact_number:l.loginForm.get("contactNumber").value,birthdate:l.loginForm.get("birthdate").value,team:l.loginForm.get("team").value};u.add(e).then(function(n){l.authService.user=e,l.router.navigateByUrl("/home")}).catch(function(l){console.log("err",l)})}).catch(function(l){console.log(l)})},l.prototype.navTo=function(l){this.router.navigateByUrl(l)},l}(),s=function(){return function(){}}(),b=u("pMnS"),g=u("Ip0R"),c=u("oBZk"),m=u("ZZ/e"),p=u("ZYCi"),d=e.nb({encapsulation:0,styles:[[".signup-btn[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--background:var(--ion-color-primary)}ion-item[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%]{--background:transparent;background:0 0;--color:var(--ion-color-dark);color:var(--ion-color-dark)}.action-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:60px}ion-input[_ngcontent-%COMP%]{--padding-start:12px!important}.form-card[_ngcontent-%COMP%]{--background:var(--dark-bg);--color:var(--ion-color-light);position:relative}.form-card-header[_ngcontent-%COMP%]{background:0 0;padding:0}.logo-container[_ngcontent-%COMP%]{margin-bottom:50px;display:flex}.logo[_ngcontent-%COMP%]{max-width:220px;max-height:120px}.back-btn[_ngcontent-%COMP%]{width:38px;height:32px;cursor:pointer;margin-top:8px;position:absolute;z-index:999;top:0;left:0}.error-msg[_ngcontent-%COMP%]{font-size:12px;margin-top:5px;padding-left:15px}.title-container[_ngcontent-%COMP%]{display:block;text-align:center}.datetime-input[_ngcontent-%COMP%], .input-label[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%]{--color:var(--ion-color-light)}ion-item[_ngcontent-%COMP%]{--color:var(--ion-color-light)!important;color:var(--ion-color-light)!important}"]],data:{}});function h(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),e.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function f(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,h)),e.ob(2,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("firstName").hasError(n.context.$implicit.type)&&(u.loginForm.get("firstName").dirty||u.loginForm.get("firstName").touched))},null)}function v(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),e.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function C(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,v)),e.ob(2,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("lastName").hasError(n.context.$implicit.type)&&(u.loginForm.get("lastName").dirty||u.loginForm.get("lastName").touched))},null)}function z(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),e.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function k(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,z)),e.ob(2,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("email").hasError(n.context.$implicit.type)&&(u.loginForm.get("email").dirty||u.loginForm.get("email").touched))},null)}function y(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),e.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function x(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,y)),e.ob(2,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("birthdate").hasError(n.context.$implicit.type)&&(u.loginForm.get("birthdate").dirty||u.loginForm.get("birthdate").touched))},null)}function O(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),e.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function w(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,O)),e.ob(2,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("contactNumber").hasError(n.context.$implicit.type)&&(u.loginForm.get("contactNumber").dirty||u.loginForm.get("contactNumber").touched))},null)}function F(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),e.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function N(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,F)),e.ob(2,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("password").hasError(n.context.$implicit.type)&&(u.loginForm.get("password").dirty||u.loginForm.get("password").touched))},null)}function P(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),e.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function E(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,P)),e.ob(2,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("repassword").hasError(n.context.$implicit.type)&&(u.loginForm.get("repassword").dirty||u.loginForm.get("repassword").touched))},null)}function I(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"h5",[["class","error-msg"]],null,null,null,null,null)),(l()(),e.Hb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function _(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,I)),e.ob(2,16384,null,0,g.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("contactNumber").hasError(n.context.$implicit.type)&&(u.loginForm.get("contactNumber").dirty||u.loginForm.get("contactNumber").touched))},null)}function M(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,184,"ion-content",[["class","gradient-bg"],["padding",""]],null,null,null,c.V,c.m)),e.ob(1,49152,null,0,m.v,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,182,"div",[["class","main-container"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,181,"ion-card",[["class","form-card"],["padding",""]],null,null,null,c.S,c.f)),e.ob(4,49152,null,0,m.n,[e.h,e.k],null,null),(l()(),e.pb(5,0,null,0,1,"ion-icon",[["class","back-btn"],["name","arrow-back"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.navTo("/login")&&e),e},c.ab,c.r)),e.ob(6,49152,null,0,m.D,[e.h,e.k],{name:[0,"name"]},null),(l()(),e.pb(7,0,null,0,177,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.zb(l,9).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.zb(l,9).onReset()&&t),t},null,null)),e.ob(8,16384,null,0,o.t,[],null,null),e.ob(9,540672,null,0,o.g,[[8,null],[8,null]],{form:[0,"form"]},null),e.Eb(2048,null,o.b,null,[o.g]),e.ob(11,16384,null,0,o.o,[[4,o.b]],null,null),(l()(),e.pb(12,0,null,null,1,"ion-card-header",[["class","form-card-header"]],null,null,null,c.P,c.h)),e.ob(13,49152,null,0,m.p,[e.h,e.k],null,null),(l()(),e.pb(14,0,null,null,166,"ion-grid",[],null,null,null,c.Y,c.p)),e.ob(15,49152,null,0,m.B,[e.h,e.k],null,null),(l()(),e.pb(16,0,null,0,35,"ion-row",[],null,null,null,c.gb,c.x)),e.ob(17,49152,null,0,m.jb,[e.h,e.k],null,null),(l()(),e.pb(18,0,null,0,16,"ion-col",[["size","6"]],null,null,null,c.U,c.l)),e.ob(19,49152,null,0,m.u,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(20,0,null,0,11,"ion-item",[],null,null,null,c.cb,c.t)),e.ob(21,49152,null,0,m.I,[e.h,e.k],null,null),(l()(),e.pb(22,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),e.ob(23,49152,null,0,m.O,[e.h,e.k],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["First Name"])),(l()(),e.pb(25,0,null,0,6,"ion-input",[["formControlName","firstName"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,26)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.zb(l,26)._handleInputEvent(u.target.value)&&t),t},c.bb,c.s)),e.ob(26,16384,null,0,m.Pb,[e.k],null,null),e.Eb(1024,null,o.l,function(l){return[l]},[m.Pb]),e.ob(28,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),e.Eb(2048,null,o.m,null,[o.f]),e.ob(30,16384,null,0,o.n,[[4,o.m]],null,null),e.ob(31,49152,null,0,m.H,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(32,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,f)),e.ob(34,278528,null,0,g.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(35,0,null,0,16,"ion-col",[["size","6"]],null,null,null,c.U,c.l)),e.ob(36,49152,null,0,m.u,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.pb(37,0,null,0,11,"ion-item",[],null,null,null,c.cb,c.t)),e.ob(38,49152,null,0,m.I,[e.h,e.k],null,null),(l()(),e.pb(39,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),e.ob(40,49152,null,0,m.O,[e.h,e.k],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Last Name"])),(l()(),e.pb(42,0,null,0,6,"ion-input",[["formControlName","lastName"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,43)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.zb(l,43)._handleInputEvent(u.target.value)&&t),t},c.bb,c.s)),e.ob(43,16384,null,0,m.Pb,[e.k],null,null),e.Eb(1024,null,o.l,function(l){return[l]},[m.Pb]),e.ob(45,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),e.Eb(2048,null,o.m,null,[o.f]),e.ob(47,16384,null,0,o.n,[[4,o.m]],null,null),e.ob(48,49152,null,0,m.H,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(49,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,C)),e.ob(51,278528,null,0,g.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(52,0,null,0,18,"ion-row",[],null,null,null,c.gb,c.x)),e.ob(53,49152,null,0,m.jb,[e.h,e.k],null,null),(l()(),e.pb(54,0,null,0,16,"ion-col",[],null,null,null,c.U,c.l)),e.ob(55,49152,null,0,m.u,[e.h,e.k],null,null),(l()(),e.pb(56,0,null,0,11,"ion-item",[],null,null,null,c.cb,c.t)),e.ob(57,49152,null,0,m.I,[e.h,e.k],null,null),(l()(),e.pb(58,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),e.ob(59,49152,null,0,m.O,[e.h,e.k],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Email"])),(l()(),e.pb(61,0,null,0,6,"ion-input",[["formControlName","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,62)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.zb(l,62)._handleInputEvent(u.target.value)&&t),t},c.bb,c.s)),e.ob(62,16384,null,0,m.Pb,[e.k],null,null),e.Eb(1024,null,o.l,function(l){return[l]},[m.Pb]),e.ob(64,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),e.Eb(2048,null,o.m,null,[o.f]),e.ob(66,16384,null,0,o.n,[[4,o.m]],null,null),e.ob(67,49152,null,0,m.H,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(68,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,k)),e.ob(70,278528,null,0,g.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(71,0,null,0,18,"ion-row",[],null,null,null,c.gb,c.x)),e.ob(72,49152,null,0,m.jb,[e.h,e.k],null,null),(l()(),e.pb(73,0,null,0,16,"ion-col",[],null,null,null,c.U,c.l)),e.ob(74,49152,null,0,m.u,[e.h,e.k],null,null),(l()(),e.pb(75,0,null,0,11,"ion-item",[],null,null,null,c.cb,c.t)),e.ob(76,49152,null,0,m.I,[e.h,e.k],null,null),(l()(),e.pb(77,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),e.ob(78,49152,null,0,m.O,[e.h,e.k],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Birthdate"])),(l()(),e.pb(80,0,null,0,6,"ion-datetime",[["class","datetime-input"],["display-format","MMM DD, YYYY"],["formControlName","birthdate"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,81)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.zb(l,81)._handleChangeEvent(u.target.value)&&t),t},c.W,c.n)),e.ob(81,16384,null,0,m.Ob,[e.k],null,null),e.Eb(1024,null,o.l,function(l){return[l]},[m.Ob]),e.ob(83,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),e.Eb(2048,null,o.m,null,[o.f]),e.ob(85,16384,null,0,o.n,[[4,o.m]],null,null),e.ob(86,49152,null,0,m.w,[e.h,e.k],null,null),(l()(),e.pb(87,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,x)),e.ob(89,278528,null,0,g.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(90,0,null,0,21,"ion-row",[],null,null,null,c.gb,c.x)),e.ob(91,49152,null,0,m.jb,[e.h,e.k],null,null),(l()(),e.pb(92,0,null,0,19,"ion-col",[],null,null,null,c.U,c.l)),e.ob(93,49152,null,0,m.u,[e.h,e.k],null,null),(l()(),e.pb(94,0,null,0,14,"ion-item",[],null,null,null,c.cb,c.t)),e.ob(95,49152,null,0,m.I,[e.h,e.k],null,null),(l()(),e.pb(96,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),e.ob(97,49152,null,0,m.O,[e.h,e.k],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Contact Number"])),(l()(),e.pb(99,0,null,0,9,"ion-input",[["formControlName","contactNumber"],["maxlength","11"],["minlength","11"],["type","number"]],[[1,"minlength",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,103)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.zb(l,103)._handleIonChange(u.target.value)&&t),t},c.bb,c.s)),e.ob(100,540672,null,0,o.j,[],{minlength:[0,"minlength"]},null),e.ob(101,540672,null,0,o.i,[],{maxlength:[0,"maxlength"]},null),e.Eb(1024,null,o.k,function(l,n){return[l,n]},[o.j,o.i]),e.ob(103,16384,null,0,m.Lb,[e.k],null,null),e.Eb(1024,null,o.l,function(l){return[l]},[m.Lb]),e.ob(105,671744,null,0,o.f,[[3,o.b],[6,o.k],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),e.Eb(2048,null,o.m,null,[o.f]),e.ob(107,16384,null,0,o.n,[[4,o.m]],null,null),e.ob(108,49152,null,0,m.H,[e.h,e.k],{maxlength:[0,"maxlength"],minlength:[1,"minlength"],type:[2,"type"]},null),(l()(),e.pb(109,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,w)),e.ob(111,278528,null,0,g.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(112,0,null,0,18,"ion-row",[],null,null,null,c.gb,c.x)),e.ob(113,49152,null,0,m.jb,[e.h,e.k],null,null),(l()(),e.pb(114,0,null,0,16,"ion-col",[],null,null,null,c.U,c.l)),e.ob(115,49152,null,0,m.u,[e.h,e.k],null,null),(l()(),e.pb(116,0,null,0,11,"ion-item",[],null,null,null,c.cb,c.t)),e.ob(117,49152,null,0,m.I,[e.h,e.k],null,null),(l()(),e.pb(118,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),e.ob(119,49152,null,0,m.O,[e.h,e.k],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Password"])),(l()(),e.pb(121,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,122)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.zb(l,122)._handleInputEvent(u.target.value)&&t),t},c.bb,c.s)),e.ob(122,16384,null,0,m.Pb,[e.k],null,null),e.Eb(1024,null,o.l,function(l){return[l]},[m.Pb]),e.ob(124,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),e.Eb(2048,null,o.m,null,[o.f]),e.ob(126,16384,null,0,o.n,[[4,o.m]],null,null),e.ob(127,49152,null,0,m.H,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(128,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,N)),e.ob(130,278528,null,0,g.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(131,0,null,0,18,"ion-row",[],null,null,null,c.gb,c.x)),e.ob(132,49152,null,0,m.jb,[e.h,e.k],null,null),(l()(),e.pb(133,0,null,0,16,"ion-col",[],null,null,null,c.U,c.l)),e.ob(134,49152,null,0,m.u,[e.h,e.k],null,null),(l()(),e.pb(135,0,null,0,11,"ion-item",[],null,null,null,c.cb,c.t)),e.ob(136,49152,null,0,m.I,[e.h,e.k],null,null),(l()(),e.pb(137,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),e.ob(138,49152,null,0,m.O,[e.h,e.k],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Repeat Password"])),(l()(),e.pb(140,0,null,0,6,"ion-input",[["formControlName","repassword"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,141)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.zb(l,141)._handleInputEvent(u.target.value)&&t),t},c.bb,c.s)),e.ob(141,16384,null,0,m.Pb,[e.k],null,null),e.Eb(1024,null,o.l,function(l){return[l]},[m.Pb]),e.ob(143,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),e.Eb(2048,null,o.m,null,[o.f]),e.ob(145,16384,null,0,o.n,[[4,o.m]],null,null),e.ob(146,49152,null,0,m.H,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(147,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,E)),e.ob(149,278528,null,0,g.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(150,0,null,0,30,"ion-row",[],null,null,null,c.gb,c.x)),e.ob(151,49152,null,0,m.jb,[e.h,e.k],null,null),(l()(),e.pb(152,0,null,0,28,"ion-col",[],null,null,null,c.U,c.l)),e.ob(153,49152,null,0,m.u,[e.h,e.k],null,null),(l()(),e.pb(154,0,null,0,23,"ion-item",[],null,null,null,c.cb,c.t)),e.ob(155,49152,null,0,m.I,[e.h,e.k],null,null),(l()(),e.pb(156,0,null,0,2,"ion-label",[["class","input-label"],["position","floating"]],null,null,null,c.db,c.u)),e.ob(157,49152,null,0,m.O,[e.h,e.k],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Team"])),(l()(),e.pb(159,0,null,0,18,"ion-select",[["cancelText","Dismiss"],["formControlName","team"],["okText","Okay"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,160)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.zb(l,160)._handleChangeEvent(u.target.value)&&t),t},c.jb,c.z)),e.ob(160,16384,null,0,m.Ob,[e.k],null,null),e.Eb(1024,null,o.l,function(l){return[l]},[m.Ob]),e.ob(162,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.v]],{name:[0,"name"]},null),e.Eb(2048,null,o.m,null,[o.f]),e.ob(164,16384,null,0,o.n,[[4,o.m]],null,null),e.ob(165,49152,null,0,m.nb,[e.h,e.k],{cancelText:[0,"cancelText"],okText:[1,"okText"]},null),(l()(),e.pb(166,0,null,0,2,"ion-select-option",[["value","admin"]],null,null,null,c.ib,c.A)),e.ob(167,49152,null,0,m.ob,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Hb(-1,0,["Admin"])),(l()(),e.pb(169,0,null,0,2,"ion-select-option",[["value","operations"]],null,null,null,c.ib,c.A)),e.ob(170,49152,null,0,m.ob,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Hb(-1,0,["Operations"])),(l()(),e.pb(172,0,null,0,2,"ion-select-option",[["value","marketing"]],null,null,null,c.ib,c.A)),e.ob(173,49152,null,0,m.ob,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Hb(-1,0,["Marketing"])),(l()(),e.pb(175,0,null,0,2,"ion-select-option",[["value","camps"]],null,null,null,c.ib,c.A)),e.ob(176,49152,null,0,m.ob,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Hb(-1,0,["Camps"])),(l()(),e.pb(178,0,null,0,2,"div",[["class","error-list"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,_)),e.ob(180,278528,null,0,g.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(181,0,null,null,3,"div",[["class","action-row"]],null,null,null,null,null)),(l()(),e.pb(182,0,null,null,2,"ion-button",[["class","signup-btn"],["type","submit"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.signup()&&e),e},c.M,c.d)),e.ob(183,49152,null,0,m.l,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.Hb(-1,0,[" SIGNUP "]))],function(l,n){var u=n.component;l(n,6,0,"arrow-back"),l(n,9,0,u.loginForm),l(n,19,0,"6"),l(n,23,0,"floating"),l(n,28,0,"firstName"),l(n,31,0,"text"),l(n,34,0,u.validationMessages.firstName),l(n,36,0,"6"),l(n,40,0,"floating"),l(n,45,0,"lastName"),l(n,48,0,"text"),l(n,51,0,u.validationMessages.lastName),l(n,59,0,"floating"),l(n,64,0,"email"),l(n,67,0,"email"),l(n,70,0,u.validationMessages.email),l(n,78,0,"floating"),l(n,83,0,"birthdate"),l(n,89,0,u.validationMessages.birthdate),l(n,97,0,"floating"),l(n,100,0,"11"),l(n,101,0,"11"),l(n,105,0,"contactNumber"),l(n,108,0,"11","11","number"),l(n,111,0,u.validationMessages.contactNumber),l(n,119,0,"floating"),l(n,124,0,"password"),l(n,127,0,"password"),l(n,130,0,u.validationMessages.password),l(n,138,0,"floating"),l(n,143,0,"repassword"),l(n,146,0,"password"),l(n,149,0,u.validationMessages.repassword),l(n,157,0,"floating"),l(n,162,0,"team"),l(n,165,0,"Dismiss","Okay"),l(n,167,0,"admin"),l(n,170,0,"operations"),l(n,173,0,"marketing"),l(n,176,0,"camps"),l(n,180,0,u.validationMessages.contactNumber),l(n,183,0,"submit")},function(l,n){l(n,7,0,e.zb(n,11).ngClassUntouched,e.zb(n,11).ngClassTouched,e.zb(n,11).ngClassPristine,e.zb(n,11).ngClassDirty,e.zb(n,11).ngClassValid,e.zb(n,11).ngClassInvalid,e.zb(n,11).ngClassPending),l(n,25,0,e.zb(n,30).ngClassUntouched,e.zb(n,30).ngClassTouched,e.zb(n,30).ngClassPristine,e.zb(n,30).ngClassDirty,e.zb(n,30).ngClassValid,e.zb(n,30).ngClassInvalid,e.zb(n,30).ngClassPending),l(n,42,0,e.zb(n,47).ngClassUntouched,e.zb(n,47).ngClassTouched,e.zb(n,47).ngClassPristine,e.zb(n,47).ngClassDirty,e.zb(n,47).ngClassValid,e.zb(n,47).ngClassInvalid,e.zb(n,47).ngClassPending),l(n,61,0,e.zb(n,66).ngClassUntouched,e.zb(n,66).ngClassTouched,e.zb(n,66).ngClassPristine,e.zb(n,66).ngClassDirty,e.zb(n,66).ngClassValid,e.zb(n,66).ngClassInvalid,e.zb(n,66).ngClassPending),l(n,80,0,e.zb(n,85).ngClassUntouched,e.zb(n,85).ngClassTouched,e.zb(n,85).ngClassPristine,e.zb(n,85).ngClassDirty,e.zb(n,85).ngClassValid,e.zb(n,85).ngClassInvalid,e.zb(n,85).ngClassPending),l(n,99,0,e.zb(n,100).minlength?e.zb(n,100).minlength:null,e.zb(n,101).maxlength?e.zb(n,101).maxlength:null,e.zb(n,107).ngClassUntouched,e.zb(n,107).ngClassTouched,e.zb(n,107).ngClassPristine,e.zb(n,107).ngClassDirty,e.zb(n,107).ngClassValid,e.zb(n,107).ngClassInvalid,e.zb(n,107).ngClassPending),l(n,121,0,e.zb(n,126).ngClassUntouched,e.zb(n,126).ngClassTouched,e.zb(n,126).ngClassPristine,e.zb(n,126).ngClassDirty,e.zb(n,126).ngClassValid,e.zb(n,126).ngClassInvalid,e.zb(n,126).ngClassPending),l(n,140,0,e.zb(n,145).ngClassUntouched,e.zb(n,145).ngClassTouched,e.zb(n,145).ngClassPristine,e.zb(n,145).ngClassDirty,e.zb(n,145).ngClassValid,e.zb(n,145).ngClassInvalid,e.zb(n,145).ngClassPending),l(n,159,0,e.zb(n,164).ngClassUntouched,e.zb(n,164).ngClassTouched,e.zb(n,164).ngClassPristine,e.zb(n,164).ngClassDirty,e.zb(n,164).ngClassValid,e.zb(n,164).ngClassInvalid,e.zb(n,164).ngClassPending)})}function B(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"app-signup",[],null,null,null,M,d)),e.ob(1,114688,null,0,r,[t.a,p.m,o.d,i.a,a.a],null,null)],function(l,n){l(n,1,0)},null)}var q=e.lb("app-signup",r,B,{},{},[]);u.d(n,"SignupPageModuleNgFactory",function(){return H});var H=e.mb(s,[],function(l){return e.wb([e.xb(512,e.j,e.bb,[[8,[b.a,q]],[3,e.j],e.x]),e.xb(4608,g.m,g.l,[e.u,[2,g.y]]),e.xb(4608,o.u,o.u,[]),e.xb(4608,o.d,o.d,[]),e.xb(4608,m.b,m.b,[e.z,e.g]),e.xb(4608,m.Ib,m.Ib,[m.b,e.j,e.q]),e.xb(4608,m.Nb,m.Nb,[m.b,e.j,e.q]),e.xb(1073742336,g.b,g.b,[]),e.xb(1073742336,o.s,o.s,[]),e.xb(1073742336,o.h,o.h,[]),e.xb(1073742336,o.q,o.q,[]),e.xb(1073742336,m.Eb,m.Eb,[]),e.xb(1073742336,p.n,p.n,[[2,p.t],[2,p.m]]),e.xb(1073742336,s,s,[]),e.xb(1024,p.k,function(){return[[{path:"",component:r}]]},[])])})}}]);
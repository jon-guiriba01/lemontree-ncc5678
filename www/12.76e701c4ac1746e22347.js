(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"uP/6":function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=u("riPR"),e=u("lGQG"),i=u("n90K"),c=u("ZZ/e"),r=u("CdBy"),a=u("BZ8J"),b=u("EVdn"),p=function(){function n(n,l,u,t,o){var e=this;this.eventService=n,this.authService=l,this.storageService=u,this.router=t,this.modalController=o,this.upcomingEvents=[],this.eventService.getUpcomingEvents().then(function(n){e.upcomingEvents=n,console.log("dashboard events",n)}).catch(function(n){console.log("err",n)})}return n.prototype.ngOnInit=function(){},n.prototype.navTo=function(n){this.router.navigateByUrl(n)},n.prototype.newTask=function(){return n=this,void 0,u=function(){return function(n,l){var u,t,o,e,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return e={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function c(e){return function(c){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,t&&(o=2&e[0]?t.return:e[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,e[1])).done)return o;switch(t=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return i.label++,{value:e[1],done:!1};case 5:i.label++,t=e[1],e=[0];continue;case 7:e=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){i=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){i.label=e[1];break}if(6===e[0]&&i.label<o[1]){i.label=o[1],o=e;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(e);break}o[2]&&i.ops.pop(),i.trys.pop();continue}e=l.call(n,i)}catch(c){e=[6,c],t=0}finally{u=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,c])}}}(this,function(n){switch(n.label){case 0:return[4,this.modalController.create({component:r.a,componentProps:{task:new a.c("New Task Title",this.authService.user.team),isCreateNew:!0}})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})},new((l=void 0)||(l=Promise))(function(t,o){function e(n){try{c(u.next(n))}catch(l){o(l)}}function i(n){try{c(u.throw(n))}catch(l){o(l)}}function c(n){n.done?t(n.value):new l(function(l){l(n.value)}).then(e,i)}c((u=u.apply(n,[])).next())});var n,l,u},n.prototype.upload=function(){var n=this;b(".hidden-input").click(),b(".hidden-input").change(function(l){l.stopImmediatePropagation();var u=l.target.files[0];console.log('The file "'+u.name+'" has been selected.'),n.storageService.uploadFile(u,n.authService.user.team)})},n}(),s=function(){return function(){}}(),d=u("pMnS"),h=u("oBZk"),g=u("Ip0R"),f=u("ZYCi"),m=t.nb({encapsulation:0,styles:[[".card-icon[_ngcontent-%COMP%]{max-width:180px;max-height:180px;width:180px;height:180px}.option-card[_ngcontent-%COMP%]{min-width:150px;min-height:150px;background-position:center;background-repeat:no-repeat;background-size:100px;cursor:pointer}.option-card.newtask[_ngcontent-%COMP%]{background-image:url(new_task_icon.e10eba12ab4b4775e965.png)}.option-card.newfile[_ngcontent-%COMP%]{background-image:url(new_file_icon.9831961de1e0d580d74a.png)}.option-card.profile[_ngcontent-%COMP%]{background-image:url(profile_icon.c72f404250ceb71d110f.png)}.option-card.settings[_ngcontent-%COMP%]{background-image:url(gear_icon.b2283186943306cb54ba.png)}.main-container[_ngcontent-%COMP%]{justify-content:flex-start}.dashboard-card[_ngcontent-%COMP%]{height:100%}.dashboard-row[_ngcontent-%COMP%]{flex-basis:60%}.action-row[_ngcontent-%COMP%]{flex-basis:40%}h6[_ngcontent-%COMP%]{text-align:center;font-size:24px;font-weight:700;color:var(--ion-color-dark-tint)}.dashboard-title[_ngcontent-%COMP%]{color:var(--ion-color-warning);font-size:26px;font-weight:700;margin-bottom:16px}.event-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.event-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{flex-basis:50%;text-align:left;font-size:24px}@media (max-width:599px){.option-card[_ngcontent-%COMP%]{min-width:80px;min-height:80px;background-size:50px}.dashboard-card[_ngcontent-%COMP%]{height:455px}h6[_ngcontent-%COMP%]{font-size:14px}.dashboard-title[_ngcontent-%COMP%]{font-size:18px;margin-bottom:8px}.event-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px}}"]],data:{}});function k(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,4,"div",[["class","event-item"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),t.Hb(2,null,[" "," "])),(n()(),t.pb(3,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),t.Hb(4,null,[" "," "]))],null,function(n,l){n(l,2,0,l.context.$implicit.formattedDate),n(l,4,0,l.context.$implicit.name)})}function x(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,53,"ion-content",[["padding",""]],null,null,null,h.V,h.m)),t.ob(1,49152,null,0,c.v,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,51,"div",[["class","main-container"]],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,38,"div",[["class","action-row"]],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,37,"ion-grid",[],null,null,null,h.Y,h.p)),t.ob(5,49152,null,0,c.B,[t.h,t.k],null,null),(n()(),t.pb(6,0,null,0,17,"ion-row",[],null,null,null,h.gb,h.x)),t.ob(7,49152,null,0,c.jb,[t.h,t.k],null,null),(n()(),t.pb(8,0,null,0,7,"ion-col",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.newTask()&&t),t},h.U,h.l)),t.ob(9,49152,null,0,c.u,[t.h,t.k],null,null),(n()(),t.pb(10,0,null,0,3,"ion-card",[["class","option-card newtask"]],null,null,null,h.S,h.f)),t.ob(11,49152,null,0,c.n,[t.h,t.k],null,null),(n()(),t.pb(12,0,null,0,1,"ion-card-content",[],null,null,null,h.O,h.g)),t.ob(13,49152,null,0,c.o,[t.h,t.k],null,null),(n()(),t.pb(14,0,null,0,1,"h6",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Add Task"])),(n()(),t.pb(16,0,null,0,7,"ion-col",[],null,null,null,h.U,h.l)),t.ob(17,49152,null,0,c.u,[t.h,t.k],null,null),(n()(),t.pb(18,0,null,0,3,"ion-card",[["class","option-card newfile"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.upload()&&t),t},h.S,h.f)),t.ob(19,49152,null,0,c.n,[t.h,t.k],null,null),(n()(),t.pb(20,0,null,0,1,"ion-card-content",[["class","option-card"]],null,null,null,h.O,h.g)),t.ob(21,49152,null,0,c.o,[t.h,t.k],null,null),(n()(),t.pb(22,0,null,0,1,"h6",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Add File"])),(n()(),t.pb(24,0,null,0,17,"ion-row",[],null,null,null,h.gb,h.x)),t.ob(25,49152,null,0,c.jb,[t.h,t.k],null,null),(n()(),t.pb(26,0,null,0,7,"ion-col",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.navTo("/profile")&&t),t},h.U,h.l)),t.ob(27,49152,null,0,c.u,[t.h,t.k],null,null),(n()(),t.pb(28,0,null,0,3,"ion-card",[["class","option-card profile"]],null,null,null,h.S,h.f)),t.ob(29,49152,null,0,c.n,[t.h,t.k],null,null),(n()(),t.pb(30,0,null,0,1,"ion-card-content",[],null,null,null,h.O,h.g)),t.ob(31,49152,null,0,c.o,[t.h,t.k],null,null),(n()(),t.pb(32,0,null,0,1,"h6",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Profile"])),(n()(),t.pb(34,0,null,0,7,"ion-col",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.navTo("/settings")&&t),t},h.U,h.l)),t.ob(35,49152,null,0,c.u,[t.h,t.k],null,null),(n()(),t.pb(36,0,null,0,3,"ion-card",[["class","option-card settings"]],null,null,null,h.S,h.f)),t.ob(37,49152,null,0,c.n,[t.h,t.k],null,null),(n()(),t.pb(38,0,null,0,1,"ion-card-content",[],null,null,null,h.O,h.g)),t.ob(39,49152,null,0,c.o,[t.h,t.k],null,null),(n()(),t.pb(40,0,null,0,1,"h6",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Settings"])),(n()(),t.pb(42,0,null,null,11,"ion-row",[["class","dashboard-row"]],null,null,null,h.gb,h.x)),t.ob(43,49152,null,0,c.jb,[t.h,t.k],null,null),(n()(),t.pb(44,0,null,0,9,"ion-col",[],null,null,null,h.U,h.l)),t.ob(45,49152,null,0,c.u,[t.h,t.k],null,null),(n()(),t.pb(46,0,null,0,7,"ion-card",[["class","dashboard-card"]],null,null,null,h.S,h.f)),t.ob(47,49152,null,0,c.n,[t.h,t.k],null,null),(n()(),t.pb(48,0,null,0,5,"ion-card-content",[],null,null,null,h.O,h.g)),t.ob(49,49152,null,0,c.o,[t.h,t.k],null,null),(n()(),t.pb(50,0,null,0,1,"h5",[["class","dashboard-title"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Upcoming Events:"])),(n()(),t.gb(16777216,null,0,1,null,k)),t.ob(53,278528,null,0,g.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.pb(54,0,null,null,0,"input",[["class","hidden-input"],["name",""],["style","display: none;"],["type","file"]],null,null,null,null,null))],function(n,l){n(l,53,0,l.component.upcomingEvents)},null)}function v(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-dashboard",[],null,null,null,x,m)),t.ob(1,114688,null,0,p,[o.a,e.a,i.a,f.m,c.Ib],null,null)],function(n,l){n(l,1,0)},null)}var w=t.lb("app-dashboard",p,v,{},{},[]),O=u("gIcY");u.d(l,"DashboardPageModuleNgFactory",function(){return y});var y=t.mb(s,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[d.a,w]],[3,t.j],t.x]),t.xb(4608,g.m,g.l,[t.u,[2,g.z]]),t.xb(4608,O.u,O.u,[]),t.xb(4608,c.b,c.b,[t.z,t.g]),t.xb(4608,c.Ib,c.Ib,[c.b,t.j,t.q]),t.xb(4608,c.Nb,c.Nb,[c.b,t.j,t.q]),t.xb(1073742336,g.b,g.b,[]),t.xb(1073742336,O.s,O.s,[]),t.xb(1073742336,O.h,O.h,[]),t.xb(1073742336,c.Eb,c.Eb,[]),t.xb(1073742336,f.n,f.n,[[2,f.t],[2,f.m]]),t.xb(1073742336,s,s,[]),t.xb(1024,f.k,function(){return[[{path:"",component:p}]]},[])])})}}]);
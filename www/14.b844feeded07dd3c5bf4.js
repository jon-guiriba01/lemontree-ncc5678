(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{ygjv:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("i6c7"),u=t("ZZ/e"),a=t("CdBy"),r=t("tct4"),i=t("l3hs"),s=t("lGQG"),c=t("BZ8J"),p=t("EVdn"),b=function(n,l,t,e){return new(t||(t=Promise))(function(o,u){function a(n){try{i(e.next(n))}catch(l){u(l)}}function r(n){try{i(e.throw(n))}catch(l){u(l)}}function i(n){n.done?o(n.value):new t(function(l){l(n.value)}).then(a,r)}i((e=e.apply(n,l||[])).next())})},d=function(n,l){var t,e,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function r(u){return function(r){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,e&&(o=2&u[0]?e.return:u[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,u[1])).done)return o;switch(e=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,e=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=l.call(n,a)}catch(r){u=[6,r],e=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,r])}}},g=function(){function n(n,l,t,e,o,u,a,r){var i=this;this.taskService=n,this.modalController=l,this.afs=t,this.storage=e,this.dragulaService=o,this.toastController=u,this.searchService=a,this.authService=r,this.showAddTaskView=!1,this.statusFilter="showall",this.selectedDepartment="showall",this.selectedOrder="date_asc",this.filters=[{name:"SHOW ALL",value:"showall"},{name:"To-do",value:"todo"},{name:"Doing",value:"doing"},{name:"Done",value:"done"}],this.departments=[{name:"SHOW ALL",value:"showall"},{name:"Operations",value:"operations"},{name:"Marketing",value:"marketing"},{name:"Camps",value:"camps"},{name:"Admin",value:"admin"},{name:"Registration",value:"registration"}],this.orders=[{name:"Date",value:"date_asc",icon:"arrow-round-up"},{name:"Date",value:"date_desc",icon:"arrow-round-down"},{name:"A-Z",value:"alphabet_asc",icon:"arrow-round-down"},{name:"A-Z",value:"alphabet_desc",icon:"arrow-round-up"}],this.dragulaService.dropModel("drag-tasks").subscribe(function(n){i.prevDragged=n.item}),this.dragulaService.createGroup("drag-tasks",{revertOnSpill:!0}),this.storage.get("department").then(function(n){})}return n.prototype.onChangeDrag=function(n,l){var t=this;console.log("-onChangeDrag",l),this.prevDragged.status!=l&&setTimeout(function(n){var e=t.prevDragged;e.status=l,t.taskService.updateTask(e,t.authService.user)},1)},n.prototype.ngOnInit=function(){},n.prototype.switchTab=function(n){this.storage.set("department",n)},n.prototype.onClickAddTask=function(n){return b(this,void 0,void 0,function(){return d(this,function(n){switch(n.label){case 0:return console.log("[onClickTask]"),[4,this.modalController.create({component:a.a,componentProps:{task:new c.c("New Task Title",this.selectedDepartment),isCreateNew:!0}})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})})},n.prototype.onClickTask=function(n,l){return b(this,void 0,void 0,function(){return d(this,function(n){switch(n.label){case 0:return console.log("[onClickTask]",l),[4,this.modalController.create({component:a.a,componentProps:{task:l}})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},n.prototype.addTask=function(){this.showAddTaskView=!this.showAddTaskView},n.prototype.selectStatusFilter=function(n){p("#filter-row").hasClass("closed-list")?p("#filter-row").removeClass("closed-list"):(this.statusFilter=n,this.filters.sort(function(l,t){return l.value==n?-1:t.value==n?1:0}),p("#filter-row").addClass("closed-list"))},n.prototype.selectDepartment=function(n){p("#department-row").hasClass("closed-list")?p("#department-row").removeClass("closed-list"):(this.selectedDepartment=n,this.departments.sort(function(l,t){return l.value==n?-1:t.value==n?1:0}),p("#department-row").addClass("closed-list"))},n.prototype.selectOrder=function(n){p("#order-row").hasClass("closed-list")?p("#order-row").removeClass("closed-list"):(this.selectedOrder=n,this.taskService.orderTasks(this.selectedOrder),this.orders.sort(function(l,t){return l.value==n?-1:t.value==n?1:0}),p("#order-row").addClass("closed-list"))},n}(),h=function(){return function(){}}(),k=t("pMnS"),m=t("oBZk"),f=t("Ip0R"),v=t("gIcY"),C=t("iw74"),x=t("s/lM"),w=e.nb({encapsulation:0,styles:[[".main-container[_ngcontent-%COMP%]{width:100%;height:90%}.task-fab[_ngcontent-%COMP%]{position:fixed;right:45px;bottom:15px;--background:var(--ion-color-secondary)}@media (max-width:599px){.task-fab[_ngcontent-%COMP%]{right:0;bottom:5px}}.newtask-container[_ngcontent-%COMP%]{max-width:320px;position:absolute;right:25px;bottom:85px}.task-container[_ngcontent-%COMP%]{min-height:120px}.taskCard[_ngcontent-%COMP%]{padding:16px;font-size:18px}#do[_ngcontent-%COMP%], #doing[_ngcontent-%COMP%], #done[_ngcontent-%COMP%]{min-height:80px;border:1px solid var(--ion-color-primary)}.filler[_ngcontent-%COMP%]{padding:20px}.task-card[_ngcontent-%COMP%]{--background:var(--ion-color-primary);--color:var(--ion-color-light)}ion-tab-bar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background:var(--ion-color-medium)}.tasks-group[_ngcontent-%COMP%]{flex-grow:1;height:100%;padding-top:40px}.task-header[_ngcontent-%COMP%]{--background:var(--yellow);display:flex;justify-content:space-between;align-items:center;color:var(--ion-color-light);padding:0 0 0 16px}.task-edit-btn[_ngcontent-%COMP%]{font-size:44px;color:var(--ion-color-light)}.task-content[_ngcontent-%COMP%]{background:var(--ion-color-dark);color:var(--ion-color-light);padding-top:12px}.task-content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--ion-color-light)}.task-name[_ngcontent-%COMP%]{--color:var(--ion-color-dark);font-size:18px;font-weight:700}.task-status[_ngcontent-%COMP%]{--background:var(--ion-color-dark)}.task-progress[_ngcontent-%COMP%]{--background:transparent}.task-progress.red[_ngcontent-%COMP%]{--progress-background:var(--red)}.task-progress.yellow[_ngcontent-%COMP%]{--progress-background:var(--yellow)}.task-progress.green[_ngcontent-%COMP%]{--progress-background:var(--green)}.tab-bar-icon[_ngcontent-%COMP%]{width:18px;height:18px;vertical-align:middle;margin-top:8px;cursor:pointer}.action-row[_ngcontent-%COMP%]   ion-button.red-bg[_ngcontent-%COMP%]{--background:var(--red)}.action-row[_ngcontent-%COMP%]   ion-button.yellow-bg[_ngcontent-%COMP%]{--background:var(--yellow)}.action-row[_ngcontent-%COMP%]   ion-button.green-bg[_ngcontent-%COMP%]{--background:var(--green)}.action-row[_ngcontent-%COMP%]   ion-button.dark-bg[_ngcontent-%COMP%]{--background:var(--ion-color-dark)}.status-bar-legend[_ngcontent-%COMP%]{margin:20px 0}.action-group[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:row;margin:0 auto;left:0;right:0;justify-content:space-between;max-width:410px;z-index:99}@media (max-width:599px){.task-header[_ngcontent-%COMP%]{padding-left:8px}.task-content[_ngcontent-%COMP%]{padding:8px}.task-name[_ngcontent-%COMP%]{font-size:12px}.task-status[_ngcontent-%COMP%]{padding-top:10px}.tab-bar-icon[_ngcontent-%COMP%]{width:10px;height:11px}.status-bar-legend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px;padding:2px 4px}.action-group[_ngcontent-%COMP%]{padding:10px}}.action-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.closed-list[_ngcontent-%COMP%]{height:45px}.add-activity-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:15px}@media (max-width:599px){.closed-list[_ngcontent-%COMP%]{height:30px}.filter-btn[_ngcontent-%COMP%]{font-size:10px;height:20px}.task-content[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{font-size:10px}}"]],data:{}});function O(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,6,"ion-button",[["class","filter-btn"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.selectStatusFilter(n.context.$implicit.value)&&e),e},m.M,m.d)),e.ob(1,278528,null,0,f.i,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Ab(2,1),e.ob(3,49152,null,0,u.l,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,2,"ion-label",[],null,null,null,m.db,m.u)),e.ob(5,49152,null,0,u.O,[e.h,e.k],null,null),(n()(),e.Hb(6,0,["",""]))],function(n,l){var t=n(l,2,0,l.component.statusFilter==l.context.$implicit.value?"yellow-bg":"");n(l,1,0,"filter-btn",t)},function(n,l){n(l,6,0,l.context.$implicit.name)})}function M(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,6,"ion-button",[["class","filter-btn"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.selectDepartment(n.context.$implicit.value)&&e),e},m.M,m.d)),e.ob(1,278528,null,0,f.i,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Ab(2,1),e.ob(3,49152,null,0,u.l,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,2,"ion-label",[],null,null,null,m.db,m.u)),e.ob(5,49152,null,0,u.O,[e.h,e.k],null,null),(n()(),e.Hb(6,0,["",""]))],function(n,l){var t=n(l,2,0,l.component.selectedDepartment==l.context.$implicit.value?"dark-bg":"");n(l,1,0,"filter-btn",t)},function(n,l){n(l,6,0,l.context.$implicit.name)})}function _(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,8,"ion-button",[["class","filter-btn"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.selectOrder(n.context.$implicit.value)&&e),e},m.M,m.d)),e.ob(1,278528,null,0,f.i,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Ab(2,1),e.ob(3,49152,null,0,u.l,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,1,"ion-icon",[],null,null,null,m.ab,m.r)),e.ob(5,49152,null,0,u.D,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.pb(6,0,null,0,2,"ion-label",[],null,null,null,m.db,m.u)),e.ob(7,49152,null,0,u.O,[e.h,e.k],null,null),(n()(),e.Hb(8,0,["",""]))],function(n,l){var t=n(l,2,0,l.component.selectedOrder==l.context.$implicit.value?"dark-bg":"");n(l,1,0,"filter-btn",t),n(l,5,0,e.rb(1,"",l.context.$implicit.icon,""))},function(n,l){n(l,8,0,l.context.$implicit.name)})}function P(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,36,"ion-card",[],null,null,null,m.S,m.f)),e.ob(1,49152,null,0,u.n,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,8,"ion-card-header",[["class","task-header"]],null,null,null,m.P,m.h)),e.ob(3,49152,null,0,u.p,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,2,"ion-card-title",[["class","task-name"]],null,null,null,m.R,m.j)),e.ob(5,49152,null,0,u.r,[e.h,e.k],null,null),(n()(),e.Hb(6,0,[" "," "])),(n()(),e.pb(7,0,null,0,3,"ion-button",[["fill","clear"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onClickTask(t,n.parent.context.$implicit)&&e),e},m.M,m.d)),e.ob(8,49152,null,0,u.l,[e.h,e.k],{fill:[0,"fill"]},null),(n()(),e.pb(9,0,null,0,1,"ion-icon",[["class","task-edit-btn"],["name","arrow-dropright"]],null,null,null,m.ab,m.r)),e.ob(10,49152,null,0,u.D,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.pb(11,0,null,0,25,"ion-card-content",[["class","task-content"]],null,null,null,m.O,m.g)),e.ob(12,49152,null,0,u.o,[e.h,e.k],null,null),(n()(),e.pb(13,0,null,0,4,"ion-card-subtitle",[],null,null,null,m.Q,m.i)),e.ob(14,49152,null,0,u.q,[e.h,e.k],null,null),(n()(),e.pb(15,0,null,0,1,"b",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["DEADLINE:"])),(n()(),e.Hb(17,0,[" ",""])),(n()(),e.pb(18,0,null,0,4,"ion-card-subtitle",[],null,null,null,m.Q,m.i)),e.ob(19,49152,null,0,u.q,[e.h,e.k],null,null),(n()(),e.pb(20,0,null,0,1,"b",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["ADDED BY:"])),(n()(),e.Hb(22,0,[" ",""])),(n()(),e.pb(23,0,null,0,5,"ion-card-subtitle",[],null,null,null,m.Q,m.i)),e.ob(24,49152,null,0,u.q,[e.h,e.k],null,null),(n()(),e.pb(25,0,null,0,1,"b",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["IN-CHARGE:"])),(n()(),e.Hb(27,0,[" ",""])),e.Db(28,1),(n()(),e.pb(29,0,null,0,7,"div",[["class","task-status"]],null,null,null,null,null)),(n()(),e.pb(30,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["STATUS"])),(n()(),e.pb(32,0,null,null,4,"div",[["class","progress-bar-row"]],null,null,null,null,null)),(n()(),e.pb(33,0,null,null,3,"ion-progress-bar",[["class","task-progress"],["style","height: 20px;"]],null,null,null,m.fb,m.w)),e.ob(34,278528,null,0,f.i,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Ab(35,3),e.ob(36,49152,null,0,u.Z,[e.h,e.k],{value:[0,"value"]},null)],function(n,l){n(l,8,0,"clear"),n(l,10,0,"arrow-dropright");var t=n(l,35,0,l.parent.context.$implicit.progress<=.5?"red":"",l.parent.context.$implicit.progress>.5?"yellow":"",1==l.parent.context.$implicit.progress?"green":"");n(l,34,0,"task-progress",t),n(l,36,0,e.rb(1,"",l.parent.context.$implicit.progress,""))},function(n,l){n(l,6,0,l.parent.context.$implicit.name),n(l,17,0,l.parent.context.$implicit.deadline),n(l,22,0,l.parent.context.$implicit.author);var t=e.Ib(l,27,0,n(l,28,0,e.zb(l.parent.parent,0),l.parent.context.$implicit.team));n(l,27,0,t)})}function y(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,P)),e.ob(2,16384,null,0,f.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component,e=(l.context.$implicit.name.toLowerCase().includes(t.searchService.searchInput.toLowerCase())||""==t.searchService.searchInput)&&(l.context.$implicit.status==t.statusFilter||"showall"==t.statusFilter)&&(l.context.$implicit.group==t.selectedDepartment||"showall"==t.selectedDepartment);n(l,2,0,e)},null)}function D(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,16,"ion-card",[["class","newtask-container"]],null,null,null,m.S,m.f)),e.ob(1,49152,null,0,u.n,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,14,"ion-card-content",[],null,null,null,m.O,m.g)),e.ob(3,49152,null,0,u.o,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,8,"ion-item",[],null,null,null,m.cb,m.t)),e.ob(5,49152,null,0,u.I,[e.h,e.k],null,null),(n()(),e.pb(6,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==e.zb(n,7)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==e.zb(n,7)._handleInputEvent(t.target.value)&&o),"ngModelChange"===l&&(o=!1!==(u.addTaskName=t)&&o),o},m.bb,m.s)),e.ob(7,16384,null,0,u.Pb,[e.k],null,null),e.Eb(1024,null,v.l,function(n){return[n]},[u.Pb]),e.ob(9,671744,null,0,v.p,[[8,null],[8,null],[8,null],[6,v.l]],{model:[0,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,v.m,null,[v.p]),e.ob(11,16384,null,0,v.n,[[4,v.m]],null,null),e.ob(12,49152,null,0,u.H,[e.h,e.k],{type:[0,"type"]},null),(n()(),e.pb(13,0,null,0,3,"div",[["style","display: flex; justify-content: flex-end;"]],null,null,null,null,null)),(n()(),e.pb(14,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onClickAddTask(t)&&e),e},m.M,m.d)),e.ob(15,49152,null,0,u.l,[e.h,e.k],null,null),(n()(),e.Hb(-1,0,["Add Task"]))],function(n,l){n(l,9,0,l.component.addTaskName),n(l,12,0,"text")},function(n,l){n(l,6,0,e.zb(l,11).ngClassUntouched,e.zb(l,11).ngClassTouched,e.zb(l,11).ngClassPristine,e.zb(l,11).ngClassDirty,e.zb(l,11).ngClassValid,e.zb(l,11).ngClassInvalid,e.zb(l,11).ngClassPending)})}function T(n){return e.Jb(0,[e.Bb(0,f.t,[]),(n()(),e.pb(1,0,null,null,32,"ion-content",[["forceOverscroll","false"],["padding",""],["style","padding-top: 30px;"]],null,null,null,m.V,m.m)),e.ob(2,49152,null,0,u.v,[e.h,e.k],{forceOverscroll:[0,"forceOverscroll"]},null),(n()(),e.pb(3,0,null,0,24,"div",[["class","main-container"]],null,null,null,null,null)),(n()(),e.pb(4,0,null,null,12,"div",[["class","action-group"]],null,null,null,null,null)),(n()(),e.pb(5,0,null,null,0,"img",[["class","tab-bar-icon "],["src","assets/imgs/settings_icon.png"]],null,null,null,null,null)),(n()(),e.pb(6,0,null,null,2,"div",[["class","action-row closed-list"],["id","filter-row"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,O)),e.ob(8,278528,null,0,f.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(9,0,null,null,0,"img",[["class","tab-bar-icon "],["src","assets/imgs/sort_icon.png"]],null,null,null,null,null)),(n()(),e.pb(10,0,null,null,2,"div",[["class","action-row closed-list"],["id","department-row"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,M)),e.ob(12,278528,null,0,f.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(13,0,null,null,0,"img",[["class","tab-bar-icon "],["src","assets/imgs/sort2_icon.png"]],null,null,null,null,null)),(n()(),e.pb(14,0,null,null,2,"div",[["class","action-row closed-list"],["id","order-row"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,_)),e.ob(16,278528,null,0,f.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(17,0,null,null,10,"div",[["class","tasks-group"]],null,null,null,null,null)),(n()(),e.pb(18,0,null,null,7,"div",[["class","status-bar-legend"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,[" Legend: "])),(n()(),e.pb(20,0,null,null,1,"span",[["class","red-bg"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["0-50%"])),(n()(),e.pb(22,0,null,null,1,"span",[["class","yellow-bg"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["51-99%"])),(n()(),e.pb(24,0,null,null,1,"span",[["class","green-bg"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["100%"])),(n()(),e.gb(16777216,null,null,1,null,y)),e.ob(27,278528,null,0,f.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.gb(16777216,null,0,1,null,D)),e.ob(29,16384,null,0,f.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(30,0,null,0,3,"ion-fab-button",[["class","task-fab"],["size","small"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onClickAddTask(t)&&e),e},m.X,m.o)),e.ob(31,49152,null,0,u.y,[e.h,e.k],{size:[0,"size"]},null),(n()(),e.pb(32,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,m.ab,m.r)),e.ob(33,49152,null,0,u.D,[e.h,e.k],{name:[0,"name"]},null)],function(n,l){var t=l.component;n(l,2,0,"false"),n(l,8,0,t.filters),n(l,12,0,t.departments),n(l,16,0,t.orders),n(l,27,0,t.taskService.tasks),n(l,29,0,t.showAddTaskView),n(l,31,0,"small"),n(l,33,0,"add")},null)}function S(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-task",[],null,null,null,T,w)),e.ob(1,114688,null,0,g,[o.a,u.Ib,r.a,C.b,x.c,u.Qb,i.a,s.a],null,null)],function(n,l){n(l,1,0)},null)}var z=e.lb("app-task",g,S,{},{},[]),$=t("ZYCi");t.d(l,"TaskPageModuleNgFactory",function(){return A});var A=e.mb(h,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[k.a,z]],[3,e.j],e.x]),e.xb(4608,f.m,f.l,[e.u,[2,f.z]]),e.xb(4608,v.u,v.u,[]),e.xb(4608,u.b,u.b,[e.z,e.g]),e.xb(4608,u.Ib,u.Ib,[u.b,e.j,e.q]),e.xb(4608,u.Nb,u.Nb,[u.b,e.j,e.q]),e.xb(1073742336,f.b,f.b,[]),e.xb(1073742336,v.s,v.s,[]),e.xb(1073742336,v.h,v.h,[]),e.xb(1073742336,u.Eb,u.Eb,[]),e.xb(1073742336,$.n,$.n,[[2,$.t],[2,$.m]]),e.xb(1073742336,x.b,x.b,[]),e.xb(1073742336,h,h,[]),e.xb(1024,$.k,function(){return[[{path:"",component:g}]]},[])])})}}]);
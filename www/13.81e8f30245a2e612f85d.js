(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{JACw:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=e("lGQG"),u=e("n90K"),i=e("JHBR"),a=e("EVdn"),r=e("l3hs"),c=e("ZZ/e"),s=function(){function n(n,l,e,t,o){this.authService=n,this.afStorage=l,this.storageService=e,this.searchService=t,this.alertController=o,this.groups=[{name:"admin",value:"admin"},{name:"operations",value:"operations"},{name:"marketing",value:"marketing"},{name:"camps",value:"camps"},{name:"registration",value:"registration"},{name:"show all",value:"showall"}],this.selectedDepartment="showall",this.files=[],this.loadGapi().then(function(n){console.log(n)})}return n.prototype.ngOnInit=function(){},n.prototype.upload=function(){var n=this;a(".hidden-input").click(),a(".hidden-input").change(function(l){l.stopImmediatePropagation();var e=l.target.files[0];console.log('The file "'+e.name+'" has been selected.'),n.storageService.uploadFile(e,n.selectedDepartment)})},n.prototype.loadGapi=function(){return new Promise(function(n,l){gapi.load("client:auth2",function(l){gapi.client.init({apiKey:"AIzaSyBO3-f5lc3BYJGBNdlYaEz0odwcxefP0Yc",clientId:"694548309780-p7pvh160hh62p2dpma7822pv83hsd1js.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/drive",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest","https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]}).then(function(){n(gapi);var l=gapi.auth2.getAuthInstance();console.log("gAuth",l),console.log("gapi",gapi);var e=gapi.client.drive.files.list();console.log("test ",e),l.isSignedIn.listen(function(n){console.log("listen gapi",n)})})})})},n.prototype.onClickDownload=function(n,l){this.storageService.downloadFile(n)},n.prototype.onClickDelete=function(n,l){return e=this,void 0,o=function(){var l=this;return function(n,l){var e,t,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,t&&(o=2&u[0]?t.return:u[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,u[1])).done)return o;switch(t=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,t=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=l.call(n,i)}catch(a){u=[6,a],t=0}finally{e=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}(this,function(e){switch(e.label){case 0:return[4,this.alertController.create({header:"File Delete",message:"Are you sure <strong>delete</strong>!!!",buttons:[{text:"No",role:"cancel",cssClass:"secondary",handler:function(n){}},{text:"Yes",handler:function(){l.storageService.deleteFile(n)}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}})},new((t=void 0)||(t=Promise))(function(n,l){function u(n){try{a(o.next(n))}catch(e){l(e)}}function i(n){try{a(o.throw(n))}catch(e){l(e)}}function a(l){l.done?n(l.value):new t(function(n){n(l.value)}).then(u,i)}a((o=o.apply(e,[])).next())});var e,t,o},n.prototype.filterDownloadListByGroup=function(){},n}(),p=function(){return function(){}}(),b=e("pMnS"),d=e("oBZk"),g=e("Ip0R"),h=e("gIcY"),f=t.nb({encapsulation:0,styles:[[".upload-fab[_ngcontent-%COMP%]{position:fixed;right:45px;bottom:15px;--background:var(--ion-color-secondary)}.download-btn[_ngcontent-%COMP%]{--background:var(--green)}.delete-btn[_ngcontent-%COMP%]{--background:var(--red)}.filter-row[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-bottom:18px}.filter-select[_ngcontent-%COMP%]{background:var(--yellow);color:var(--ion-color-light);margin-left:16px;min-width:140px}@media (max-width:599px){.upload-fab[_ngcontent-%COMP%]{right:0;bottom:5px}.filter-select[_ngcontent-%COMP%]{height:25px;font-size:12px;padding:4px 4px 4px 8px}}.filter-icon[_ngcontent-%COMP%]{width:18px;height:18px;margin-right:8px}"]],data:{}});function m(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,3,"ion-select-option",[],null,null,null,d.ib,d.A)),t.ob(1,49152,null,0,c.ob,[t.h,t.k],{value:[0,"value"]},null),(n()(),t.Hb(2,0,["",""])),t.Db(3,1)],function(n,l){n(l,1,0,t.rb(1,"",l.context.$implicit.value,""))},function(n,l){var e=t.Ib(l,2,0,n(l,3,0,t.zb(l.parent,0),l.context.$implicit.name));n(l,2,0,e)})}function v(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,12,"ion-item",[],null,null,null,d.cb,d.t)),t.ob(1,49152,null,0,c.I,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,2,"ion-label",[],null,null,null,d.db,d.u)),t.ob(3,49152,null,0,c.O,[t.h,t.k],null,null),(n()(),t.Hb(4,0,["",""])),(n()(),t.pb(5,0,null,0,3,"ion-button",[["class","download-btn"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.onClickDownload(n.parent.context.$implicit,e)&&t),t},d.M,d.d)),t.ob(6,49152,null,0,c.l,[t.h,t.k],null,null),(n()(),t.pb(7,0,null,0,1,"ion-icon",[["name","download"]],null,null,null,d.ab,d.r)),t.ob(8,49152,null,0,c.D,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.pb(9,0,null,0,3,"ion-button",[["class","delete-btn"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.onClickDelete(n.parent.context.$implicit,e)&&t),t},d.M,d.d)),t.ob(10,49152,null,0,c.l,[t.h,t.k],null,null),(n()(),t.pb(11,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,d.ab,d.r)),t.ob(12,49152,null,0,c.D,[t.h,t.k],{name:[0,"name"]},null)],function(n,l){n(l,8,0,"download"),n(l,12,0,"close")},function(n,l){n(l,4,0,l.parent.context.$implicit.name)})}function w(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,v)),t.ob(2,16384,null,0,g.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component,t=(l.context.$implicit.name.toLowerCase().includes(e.searchService.searchInput.toLowerCase())||""==e.searchService.searchInput)&&("showall"==e.selectedDepartment||e.selectedDepartment==l.context.$implicit.group);n(l,2,0,t)},null)}function x(n){return t.Jb(0,[t.Bb(0,g.u,[]),(n()(),t.pb(1,0,null,null,26,"ion-content",[["padding",""],["style","position: relative;"]],null,null,null,d.V,d.m)),t.ob(2,49152,null,0,c.v,[t.h,t.k],null,null),(n()(),t.pb(3,0,null,0,15,"ion-row",[],null,null,null,d.gb,d.x)),t.ob(4,49152,null,0,c.jb,[t.h,t.k],null,null),(n()(),t.pb(5,0,null,0,13,"ion-item",[["class","filter-row"],["lines","none"]],null,null,null,d.cb,d.t)),t.ob(6,49152,null,0,c.I,[t.h,t.k],{lines:[0,"lines"]},null),(n()(),t.pb(7,0,null,0,0,"img",[["class","filter-icon"],["src","assets/imgs/settings_icon.png"]],null,null,null,null,null)),(n()(),t.pb(8,0,null,0,1,"label",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Filter"])),(n()(),t.pb(10,0,null,0,8,"ion-select",[["class","filter-select"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t.zb(n,11)._handleBlurEvent()&&o),"ionChange"===l&&(o=!1!==t.zb(n,11)._handleChangeEvent(e.target.value)&&o),"ngModelChange"===l&&(o=!1!==(u.selectedDepartment=e)&&o),"ionChange"===l&&(o=!1!==u.filterDownloadListByGroup()&&o),o},d.jb,d.z)),t.ob(11,16384,null,0,c.Ob,[t.k],null,null),t.Eb(1024,null,h.l,function(n){return[n]},[c.Ob]),t.ob(13,671744,null,0,h.p,[[8,null],[8,null],[8,null],[6,h.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,h.m,null,[h.p]),t.ob(15,16384,null,0,h.n,[[4,h.m]],null,null),t.ob(16,49152,null,0,c.nb,[t.h,t.k],null,null),(n()(),t.gb(16777216,null,0,1,null,m)),t.ob(18,278528,null,0,g.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.pb(19,0,null,0,3,"ion-list",[],null,null,null,d.eb,d.v)),t.ob(20,49152,null,0,c.P,[t.h,t.k],null,null),(n()(),t.gb(16777216,null,0,1,null,w)),t.ob(22,278528,null,0,g.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.pb(23,0,null,0,4,"ion-fab-button",[["class","upload-fab"],["size","small"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.upload()&&t),t},d.X,d.o)),t.ob(24,49152,null,0,c.y,[t.h,t.k],{size:[0,"size"]},null),(n()(),t.pb(25,0,null,0,0,"input",[["class","hidden-input"],["name",""],["style","display: none;"],["type","file"]],null,null,null,null,null)),(n()(),t.pb(26,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,d.ab,d.r)),t.ob(27,49152,null,0,c.D,[t.h,t.k],{name:[0,"name"]},null)],function(n,l){var e=l.component;n(l,6,0,"none"),n(l,13,0,e.selectedDepartment),n(l,18,0,e.groups),n(l,22,0,e.storageService.files),n(l,24,0,"small"),n(l,27,0,"add")},function(n,l){n(l,10,0,t.zb(l,15).ngClassUntouched,t.zb(l,15).ngClassTouched,t.zb(l,15).ngClassPristine,t.zb(l,15).ngClassDirty,t.zb(l,15).ngClassValid,t.zb(l,15).ngClassInvalid,t.zb(l,15).ngClassPending)})}function y(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-file-cabinet",[],null,null,null,x,f)),t.ob(1,114688,null,0,s,[o.a,i.a,u.a,r.a,c.a],null,null)],function(n,l){n(l,1,0)},null)}var k=t.lb("app-file-cabinet",s,y,{},{},[]),C=e("ZYCi");e.d(l,"FileCabinetPageModuleNgFactory",function(){return O});var O=t.mb(p,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[b.a,k]],[3,t.j],t.x]),t.xb(4608,g.m,g.l,[t.u,[2,g.z]]),t.xb(4608,h.u,h.u,[]),t.xb(4608,c.b,c.b,[t.z,t.g]),t.xb(4608,c.Ib,c.Ib,[c.b,t.j,t.q]),t.xb(4608,c.Nb,c.Nb,[c.b,t.j,t.q]),t.xb(1073742336,g.b,g.b,[]),t.xb(1073742336,h.s,h.s,[]),t.xb(1073742336,h.h,h.h,[]),t.xb(1073742336,c.Eb,c.Eb,[]),t.xb(1073742336,C.n,C.n,[[2,C.t],[2,C.m]]),t.xb(1073742336,p,p,[]),t.xb(1024,C.k,function(){return[[{path:"",component:s}]]},[])])})}}]);
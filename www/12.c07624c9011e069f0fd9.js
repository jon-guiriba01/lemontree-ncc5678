(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{JACw:function(n,l,e){"use strict";e.r(l);var o=e("CcnG"),t=e("lGQG"),i=e("JHBR"),u=e("tct4"),a=e("2WpN"),r=function(){return(r=Object.assign||function(n){for(var l,e=1,o=arguments.length;e<o;e++)for(var t in l=arguments[e])Object.prototype.hasOwnProperty.call(l,t)&&(n[t]=l[t]);return n}).apply(this,arguments)},c=function(){function n(n,l){var e=this;this.afStorage=n,this.afs=l,this.files=[],this.filesCollection=this.afs.collection("files"),this.filesCollection.snapshotChanges().subscribe(function(n){for(var l=[],o=0,t=n;o<t.length;o++){var i=t[o],u=r({},i.payload.doc.data());u.id=i.payload.doc.id,l.push(u)}e.files=l,console.log("this.files",e.files)})}return n.prototype.uploadFile=function(n,l){var e=this;void 0===l&&(l="filecabinet"),console.log("[uploadFile]",n),console.log("-path",l);var o=l+"/"+n.name,t=this.afStorage.ref(o),i=this.afStorage.upload(o,n);i.percentageChanges(),i.snapshotChanges().pipe(Object(a.a)(function(){return i=e,void 0,a=function(){var e=this;return function(n,l){var e,o,t,i,u={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,o&&(t=2&i[0]?o.return:i[0]?o.throw||((t=o.return)&&t.call(o),0):o.next)&&!(t=t.call(o,i[1])).done)return t;switch(o=0,t&&(i=[2&i[0],t.value]),i[0]){case 0:case 1:t=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,o=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(t=(t=u.trys).length>0&&t[t.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!t||i[1]>t[0]&&i[1]<t[3])){u.label=i[1];break}if(6===i[0]&&u.label<t[1]){u.label=t[1],t=i;break}if(t&&u.label<t[2]){u.label=t[2],u.ops.push(i);break}t[2]&&u.ops.pop(),u.trys.pop();continue}i=l.call(n,u)}catch(a){i=[6,a],o=0}finally{e=t=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,function(i){return console.log("-finalize",l),t.getDownloadURL().subscribe(function(l){e.filesCollection.add({name:n.name,path:o,downloadURL:l})}),[2]})},new((u=void 0)||(u=Promise))(function(n,l){function e(n){try{t(a.next(n))}catch(e){l(e)}}function o(n){try{t(a.throw(n))}catch(e){l(e)}}function t(l){l.done?n(l.value):new u(function(n){n(l.value)}).then(e,o)}t((a=a.apply(i,[])).next())});var i,u,a})).subscribe(function(n){console.log("afUploadTask",n)})},n.prototype.downloadFile=function(n){console.log("[downloadFile]",n);var l=document.createElement("a");l.href=n.downloadURL,l.setAttribute("download",name),l.click()},n.prototype.deleteFile=function(n){console.log("[deleteFile]",n)},n.ngInjectableDef=o.S({factory:function(){return new n(o.W(i.a),o.W(u.a))},token:n,providedIn:"root"}),n}(),s=e("EVdn"),p=e("l3hs"),b=function(){function n(n,l,e,o){this.authService=n,this.afStorage=l,this.storageService=e,this.searchService=o,this.groups=["admin","operations","marketing","camps","showall"],this.files=[],this.loadGapi().then(function(n){console.log(n)})}return n.prototype.ngOnInit=function(){},n.prototype.upload=function(){var n=this;s(".hidden-input").click(),s(".hidden-input").change(function(l){l.stopImmediatePropagation();var e=l.target.files[0];console.log('The file "'+e.name+'" has been selected.'),n.storageService.uploadFile(e)})},n.prototype.loadGapi=function(){return new Promise(function(n,l){gapi.load("client:auth2",function(l){gapi.client.init({apiKey:"AIzaSyBO3-f5lc3BYJGBNdlYaEz0odwcxefP0Yc",clientId:"694548309780-p7pvh160hh62p2dpma7822pv83hsd1js.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/drive",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest","https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]}).then(function(){n(gapi);var l=gapi.auth2.getAuthInstance();console.log("gAuth",l),console.log("gapi",gapi);var e=gapi.client.drive.files.list();console.log("test ",e),l.isSignedIn.listen(function(n){console.log("listen gapi",n)})})})})},n.prototype.onClickDownload=function(n,l){this.storageService.downloadFile(n)},n.prototype.onClickDelete=function(n,l){this.storageService.deleteFile(n)},n.prototype.filterDownloadListByGroup=function(){},n}(),f=function(){return function(){}}(),d=e("pMnS"),h=e("oBZk"),g=e("ZZ/e"),v=e("Ip0R"),m=e("gIcY"),w=o.nb({encapsulation:0,styles:[[".upload-fab[_ngcontent-%COMP%]{position:fixed;right:45px;bottom:15px;--background:var(--ion-color-secondary)}.download-btn[_ngcontent-%COMP%]{--background:var(--green)}.delete-btn[_ngcontent-%COMP%]{--background:var(--red)}.filter-row[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-bottom:18px}.filter-select[_ngcontent-%COMP%]{background:var(--blue);color:var(--ion-color-light);margin-left:16px;min-width:140px}.filter-icon[_ngcontent-%COMP%]{width:18px;height:18px;margin-right:8px}"]],data:{}});function y(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,3,"ion-select-option",[],null,null,null,h.gb,h.z)),o.ob(1,49152,null,0,g.mb,[o.h,o.k],{value:[0,"value"]},null),(n()(),o.Hb(2,0,["",""])),o.Db(3,1)],function(n,l){n(l,1,0,o.rb(1,"",l.context.$implicit,""))},function(n,l){var e=o.Ib(l,2,0,n(l,3,0,o.zb(l.parent,0),l.context.$implicit));n(l,2,0,e)})}function k(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,12,"ion-item",[],null,null,null,h.Z,h.r)),o.ob(1,49152,null,0,g.G,[o.h,o.k],null,null),(n()(),o.pb(2,0,null,0,2,"ion-label",[],null,null,null,h.ab,h.s)),o.ob(3,49152,null,0,g.M,[o.h,o.k],null,null),(n()(),o.Hb(4,0,["",""])),(n()(),o.pb(5,0,null,0,3,"ion-button",[["class","download-btn"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.onClickDownload(n.parent.context.$implicit,e)&&o),o},h.K,h.c)),o.ob(6,49152,null,0,g.j,[o.h,o.k],null,null),(n()(),o.pb(7,0,null,0,1,"ion-icon",[["name","download"]],null,null,null,h.X,h.p)),o.ob(8,49152,null,0,g.B,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.pb(9,0,null,0,3,"ion-button",[["class","delete-btn"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.onClickDelete(n.parent.context.$implicit,e)&&o),o},h.K,h.c)),o.ob(10,49152,null,0,g.j,[o.h,o.k],null,null),(n()(),o.pb(11,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,h.X,h.p)),o.ob(12,49152,null,0,g.B,[o.h,o.k],{name:[0,"name"]},null)],function(n,l){n(l,8,0,"download"),n(l,12,0,"close")},function(n,l){n(l,4,0,l.parent.context.$implicit.name)})}function x(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,k)),o.ob(2,16384,null,0,v.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component,o=l.context.$implicit.name.toLowerCase().includes(e.searchService.searchInput.toLowerCase())||""==e.searchService.searchInput;n(l,2,0,o)},null)}function C(n){return o.Jb(0,[o.Bb(0,v.t,[]),(n()(),o.pb(1,0,null,null,23,"ion-content",[["padding",""],["style","position: relative;"]],null,null,null,h.S,h.k)),o.ob(2,49152,null,0,g.t,[o.h,o.k],null,null),(n()(),o.pb(3,0,null,0,12,"ion-row",[],null,null,null,h.eb,h.w)),o.ob(4,49152,null,0,g.hb,[o.h,o.k],null,null),(n()(),o.pb(5,0,null,0,10,"ion-item",[["class","filter-row"]],null,null,null,h.Z,h.r)),o.ob(6,49152,null,0,g.G,[o.h,o.k],null,null),(n()(),o.pb(7,0,null,0,0,"img",[["class","filter-icon"],["src","assets/imgs/settings_icon.png"]],null,null,null,null,null)),(n()(),o.pb(8,0,null,0,1,"label",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,["Filter"])),(n()(),o.pb(10,0,null,0,5,"ion-select",[["class","filter-select"],["value","showall"]],null,[[null,"ionChange"],[null,"ionBlur"]],function(n,l,e){var t=!0,i=n.component;return"ionBlur"===l&&(t=!1!==o.zb(n,13)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==o.zb(n,13)._handleChangeEvent(e.target.value)&&t),"ionChange"===l&&(t=!1!==i.filterDownloadListByGroup()&&t),t},h.hb,h.y)),o.Eb(5120,null,m.e,function(n){return[n]},[g.Kb]),o.ob(12,49152,null,0,g.lb,[o.h,o.k],{value:[0,"value"]},null),o.ob(13,16384,null,0,g.Kb,[o.k],null,null),(n()(),o.gb(16777216,null,0,1,null,y)),o.ob(15,278528,null,0,v.j,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null),(n()(),o.pb(16,0,null,0,3,"ion-list",[],null,null,null,h.bb,h.t)),o.ob(17,49152,null,0,g.N,[o.h,o.k],null,null),(n()(),o.gb(16777216,null,0,1,null,x)),o.ob(19,278528,null,0,v.j,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null),(n()(),o.pb(20,0,null,0,4,"ion-fab-button",[["class","upload-fab"],["size","small"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.upload()&&o),o},h.U,h.m)),o.ob(21,49152,null,0,g.w,[o.h,o.k],{size:[0,"size"]},null),(n()(),o.pb(22,0,null,0,0,"input",[["class","hidden-input"],["name",""],["style","display: none;"],["type","file"]],null,null,null,null,null)),(n()(),o.pb(23,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,h.X,h.p)),o.ob(24,49152,null,0,g.B,[o.h,o.k],{name:[0,"name"]},null)],function(n,l){var e=l.component;n(l,12,0,"showall"),n(l,15,0,e.groups),n(l,19,0,e.storageService.files),n(l,21,0,"small"),n(l,24,0,"add")},null)}function S(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"app-file-cabinet",[],null,null,null,C,w)),o.ob(1,114688,null,0,b,[t.a,i.a,c,p.a],null,null)],function(n,l){n(l,1,0)},null)}var O=o.lb("app-file-cabinet",b,S,{},{},[]),F=e("ZYCi");e.d(l,"FileCabinetPageModuleNgFactory",function(){return I});var I=o.mb(f,[],function(n){return o.wb([o.xb(512,o.j,o.bb,[[8,[d.a,O]],[3,o.j],o.x]),o.xb(4608,v.m,v.l,[o.u,[2,v.y]]),o.xb(4608,m.m,m.m,[]),o.xb(4608,g.a,g.a,[o.z,o.g]),o.xb(4608,g.Gb,g.Gb,[g.a,o.j,o.q]),o.xb(4608,g.Jb,g.Jb,[g.a,o.j,o.q]),o.xb(1073742336,v.b,v.b,[]),o.xb(1073742336,m.k,m.k,[]),o.xb(1073742336,m.d,m.d,[]),o.xb(1073742336,g.Cb,g.Cb,[]),o.xb(1073742336,F.n,F.n,[[2,F.t],[2,F.m]]),o.xb(1073742336,f,f,[]),o.xb(1024,F.k,function(){return[[{path:"",component:b}]]},[])])})}}]);
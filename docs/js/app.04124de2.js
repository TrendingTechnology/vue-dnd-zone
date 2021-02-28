(function(t){function e(e){for(var i,s,o=e[0],d=e[1],l=e[2],h=0,u=[];h<o.length;h++)s=o[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);c&&c(e);while(u.length)u.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var d=n[o];0!==r[d]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-dnd-zone/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=d;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"black",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-spacer"),n("v-toolbar-title",[t._v("vue-dnd-zone")]),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/supraniti/vue-dnd-zone",target:"_blank",large:"",icon:""}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-github")])],1)],1),n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-drag")]),t._v(" DATA DRIVEN DND ")],1),n("v-list-item-subtitle",[t._v(" BUILT FOR VUE ")])],1)],1),n("v-divider"),n("v-tabs",{attrs:{vertical:"",color:"black"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",{staticClass:"justify-start"},[t._v(" About ")]),n("v-tab",{staticClass:"justify-start"},[t._v(" Examples ")]),n("v-tab",{staticClass:"justify-start"},[t._v(" API ")])],1)],1),n("v-main",[n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("v-card",{staticClass:"elevation-5"},[n("dnd-zone",{attrs:{"handle-class":"handle","native-scroll":!1}},[n("v-card-text",[n("dnd-container",{staticClass:"row",attrs:{"dnd-model":t.about.children,"dnd-id":"about","vertical-search":t.$vuetify.breakpoint.xs}},[t._l(t.about.children,(function(e){return[n("dnd-item",{key:e.id,attrs:{"dnd-id":e.id,"dnd-model":e}},[n("v-col",{attrs:{cols:"12",sm:e.cols}},[n("v-card",{attrs:{dark:e.dark,color:e.color}},[n("v-card-actions",{staticClass:"pb-0"},[n("v-icon",{staticClass:"handle"},[t._v("mdi-drag")]),n("p",{staticClass:"title my-2",domProps:{textContent:t._s(e.title)}}),n("v-spacer")],1),n("v-card-text",{staticClass:"body-1 pt-0",staticStyle:{opacity:"1"}},[t._l(e.text,(function(e,i){return n("p",{key:i,staticClass:"my-2",domProps:{textContent:t._s(e)}})})),t._l(e.html,(function(e,i){return n("div",{key:i,domProps:{innerHTML:t._s(e)}})})),e.custom?n("div",[n("pre",[n("code",{staticStyle:{display:"block","white-space":"pre-wrap"}},[t._v("\n  <dnd-zone>\n    <dnd-container>\n      <dnd-item>\n        \x3c!-- item markup goes here --\x3e\n      </dnd-item>\n    </dnd-container>\n  </dnd-zone>\n\n")]),t._v("\n                            ")]),n("v-btn",{attrs:{text:"",small:""}},[t._v("Examples")])],1):t._e()],2)],1)],1)],1)]}))],2)],1)],1)],1)],1),n("v-tab-item",[n("Examples")],1)],1)],1)],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-5"},[n("dnd-zone",[n("recursive-grid",{attrs:{model:t.grid}})],1),n("dnd-zone",{attrs:{"mirror-min-height":0,"mirror-max-width":50,"transition-duration":.3}},[n("dnd-container",{staticClass:"row",staticStyle:{"max-width":"500px"},attrs:{"dnd-model":t.images,"dnd-id":"images"}},t._l(t.images,(function(e){return n("dnd-item",{key:e.id,attrs:{"dnd-model":e,"dnd-id":e.id}},[n("v-col",{staticClass:"d-flex child-flex",attrs:{cols:"3"}},[n("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image="+e.id,"lazy-src":"https://picsum.photos/10/6?image="+e.id,"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)})),1)],1),n("dnd-zone",[n("v-row",[n("v-card",{attrs:{"max-width":"100%",width:"500"}},[n("v-card-title",[t._v("LIST")]),n("v-card-text",[n("v-list",[n("v-subheader",[t._v("REPORTS")]),n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedListItem,callback:function(e){t.selectedListItem=e},expression:"selectedListItem"}},[n("dnd-container",{attrs:{"dnd-model":t.listModel.children,"dnd-id":t.listModel.id,"vertical-search":""}},t._l(t.listModel.children,(function(e){return n("dnd-item",{key:e.id,attrs:{"dnd-model":e,"dnd-id":e.id}},[n("v-list-item",{key:e.id},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.data.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.data.text)}})],1)],1)],1)})),1)],1)],1)],1)],1),n("v-card",{attrs:{"max-width":"100%",width:"500"}},[n("v-card-title",[t._v("LIST")]),n("v-card-text",[n("v-list",[n("v-subheader",[t._v("REPORTS 2")]),n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedListItem,callback:function(e){t.selectedListItem=e},expression:"selectedListItem"}},[n("dnd-container",{attrs:{"dnd-model":t.listModel2.children,"dnd-id":t.listModel2.id,"vertical-search":""}},t._l(t.listModel2.children,(function(e){return n("dnd-item",{key:e.id,attrs:{"dnd-model":e,"dnd-id":e.id}},[n("v-list-item",{key:e.id},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.data.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.data.text)}})],1)],1)],1)})),1)],1)],1)],1)],1)],1)],1),n("dnd-zone",{attrs:{"handle-class":"handle"}},[n("v-card",[n("v-card-title",[t._v("KANBAN")]),n("v-card-text",[n("v-row",[t._l(t.dndModel.children,(function(e){return[n("dnd-item",{key:e.id,attrs:{"dnd-model":e,"dnd-id":e.id}},[n("v-col",{staticClass:"ma-2",staticStyle:{border:"1px dashed red"},attrs:{cols:"3"}},[n("v-card",[n("v-card-title",{domProps:{textContent:t._s(e.data.title)}}),n("v-card-text",[n("dnd-container",{staticClass:"row",staticStyle:{"min-height":"50px",border:"1px solid black"},attrs:{"dnd-model":e.children,"dnd-id":e.id}},[t._l(e.children,(function(e){return[n("dnd-item",{key:e.id,attrs:{"dnd-model":e,"dnd-id":e.id}},[n("v-col",{staticClass:"ma-2 pa-0",attrs:{cols:"3"}},[n("v-card",[n("v-card-title",[n("v-icon",{staticClass:"handle"},[t._v("mdi-drag")]),t._v(" "+t._s(e.data.title)+" ")],1),n("v-card-text")],1)],1)],1)]}))],2)],1)],1)],1)],1)]}))],2)],1)],1)],1),n("dnd-zone",[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[n("v-system-bar",{attrs:{color:"pink darken-2",dark:""}},[n("v-spacer"),n("v-icon",[t._v("mdi-window-minimize")]),n("v-icon",[t._v("mdi-window-maximize")]),n("v-icon",[t._v("mdi-close")])],1),n("v-app-bar",{attrs:{dark:"",color:"pink"}},[n("v-app-bar-nav-icon"),n("v-toolbar-title",[t._v("My Music")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1)],1),n("v-container",[n("dnd-container",{staticClass:"row",attrs:{"dnd-model":t.cardModel.children,"dnd-id":"cards-example",dense:"","vertical-search":""}},[n("v-col",{key:"somethink",attrs:{cols:"12"}},[n("v-card",{attrs:{color:"#385F73",dark:""}},[n("v-card-title",{staticClass:"headline"},[t._v(" Unlimited music now ")]),n("v-card-subtitle",[t._v("Listen to your favorite artists and albums whenever and wherever, online and offline.")]),n("v-card-actions",[n("v-btn",{attrs:{text:""}},[t._v(" Listen Now ")])],1)],1)],1),t._l(t.cardModel.children,(function(e){return[n("dnd-item",{key:e.id,attrs:{"dnd-model":e,"dnd-id":e.id}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",{attrs:{color:e.color,dark:""}},[n("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[n("div",[n("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.title)}}),n("v-card-subtitle",{domProps:{textContent:t._s(e.artist)}}),n("v-card-actions",["Ellie Goulding"===e.artist?n("v-btn",{staticClass:"ml-2 mt-3",attrs:{fab:"",icon:"",height:"40px",right:"",width:"40px"}},[n("v-icon",[t._v("mdi-play")])],1):n("v-btn",{staticClass:"ml-2 mt-5",attrs:{outlined:"",rounded:"",small:""}},[t._v(" START RADIO ")])],1)],1),n("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[n("v-img",{attrs:{src:e.src}})],1)],1)])],1)],1)]}))],2)],1)],1)],1)],1)},o=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"dnd-grid-container ma-2",style:t.model.style,attrs:{color:t.model.color}},[t.model.id?n("v-card-actions",[n("v-icon",{staticClass:"handle"},[t._v("mdi-drag")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-folder-edit")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-folder-plus")])],1)],1):t._e(),n("v-card-title",{domProps:{textContent:t._s(t.model.title)}}),n("v-card-text",[n("dnd-container",{staticClass:"row",staticStyle:{"min-height":"50px",border:"1px dashed black"},attrs:{"dnd-id":t.model.id,"dnd-model":t.model.children}},[t._l(t.model.children,(function(t){return[n("dnd-item",{key:t.id,attrs:{"dnd-id":t.id,"dnd-model":t}},[n("recursive-grid",{attrs:{model:t}})],1)]}))],2)],1)],1)},l=[],c={name:"RecursiveGrid",props:["model"],data:function(){return{}}},h=c,u=n("2877"),m=n("6544"),p=n.n(m),v=n("8336"),f=n("b0af"),g=n("99d9"),b=n("132d"),y=n("2fa4"),w=Object(u["a"])(h,d,l,!1,null,null,null),C=w.exports;p()(w,{VBtn:v["a"],VCard:f["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VIcon:b["a"],VSpacer:y["a"]});var x={name:"Examples",props:["title"],data:function(){return{selectedListItem:1,grid:{id:0,title:"Root Element",color:"white",style:{width:"100%"},dark:!1,children:[{id:1,title:"Card Title",color:"red",style:{width:"auto"},dark:!1,children:[]},{id:2,title:"Card Title",color:"green",style:{width:"auto"},dark:!1,children:[]},{id:3,title:"Card Title",color:"blue",style:{width:"auto"},dark:!1,children:[]}]},cardModel:{id:"card",children:[{id:"card-0",color:"#1F7087",src:"https://cdn.vuetifyjs.com/images/cards/foster.jpg",title:"Supermodel",artist:"Foster the People"},{id:"card-1",color:"#952175",src:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",title:"Halcyon Days",artist:"Ellie Goulding"}]},listModel:{id:100,children:[{id:101,data:{text:"Real-Time",icon:"mdi-clock"}},{id:102,data:{text:"Audience",icon:"mdi-account"}},{id:103,data:{text:"Conversions",icon:"mdi-flag"}}]},listModel2:{id:200,children:[{id:201,data:{text:"Real-Time",icon:"mdi-clock"}},{id:202,data:{text:"Audience",icon:"mdi-account"}},{id:203,data:{text:"Conversions",icon:"mdi-flag"}}]},images:[{id:125},{id:126},{id:127},{id:128},{id:129},{id:130},{id:131},{id:132},{id:133}],dndModel:{id:94,children:[{id:1,children:[],data:{title:"A",content:"Lorem Ipsum",level:0}},{id:2,children:[{id:3,data:{title:"B1",content:"Lorem",level:1},children:[]},{id:4,data:{title:"B2",content:"Lorem",level:1},children:[]}],data:{title:"B",content:"Lorem Ipsum",level:0}},{id:5,children:[{id:6,children:[],data:{title:"0",content:"Lorem",level:1}},{id:7,children:[],data:{title:"1",content:"Lorem",level:1}},{id:8,children:[],data:{title:"2",content:"Lorem",level:1}},{id:9,children:[],data:{title:"3",content:"Lorem",level:1}},{id:10,children:[],data:{title:"4",content:"Lorem",level:1}},{id:11,children:[],data:{title:"5",content:"Lorem",level:1}},{id:12,children:[],data:{title:"6",content:"Lorem",level:1}}],data:{title:"C",content:"Lorem Ipsum",level:0}}]}}},methods:{},components:{RecursiveGrid:C}},O=x,_=n("40dc"),j=n("5bc1"),I=n("8212"),E=n("62ad"),P=n("a523"),k=n("adda"),S=n("8860"),M=n("da13"),L=n("5d23"),V=n("1baa"),D=n("34c3"),R=n("490a"),$=n("0fd9"),T=n("e0c7"),A=n("afd9"),B=n("2a7f"),Y=Object(u["a"])(O,s,o,!1,null,null,null),X=Y.exports;p()(Y,{VAppBar:_["a"],VAppBarNavIcon:j["a"],VAvatar:I["a"],VBtn:v["a"],VCard:f["a"],VCardActions:g["a"],VCardSubtitle:g["b"],VCardText:g["c"],VCardTitle:g["d"],VCol:E["a"],VContainer:P["a"],VIcon:b["a"],VImg:k["a"],VList:S["a"],VListItem:M["a"],VListItemContent:L["a"],VListItemGroup:V["a"],VListItemIcon:D["a"],VListItemTitle:L["c"],VProgressCircular:R["a"],VRow:$["a"],VSpacer:y["a"],VSubheader:T["a"],VSystemBar:A["a"],VToolbarTitle:B["a"]});var z={name:"App",components:{Examples:X},data:function(){return{drawer:!0,tab:0,about:{children:[{id:0,color:"grey darken-3",dark:!0,cols:5,title:"About",text:["vue-dnd-zone is a vue.js plugin for drag and drop functionality.","It is not a wrapper for an external js library, but a set of vue components managing the drag and drop event and data model state."]},{id:1,color:"grey darken-3",dark:!0,cols:5,title:"Features",text:["- Smooth transitions"," - Auto scroll while dragging","- Supports nested structures","- Lightweight (~4kb gzipped)","- Supports touch events"]},{id:2,color:"grey lighten-5",dark:!1,cols:4,title:"Installation",html:["<kbd>npm install vue-dnd-zone</kbd><br/><br/><code style=\"display: block;white-space: pre-wrap\">//main.js<br/>import VueDndZone from 'vue-dnd-zone'<br/>import 'vue-dnd-zone/vue-dnd-zone.css'</code>"]},{id:3,color:"grey lighten-5",dark:!1,cols:4,title:"Usage",custom:!0},{id:4,color:"deep-purple darken-3",dark:!0,cols:4,title:"Project Status",html:["vue-dnd-zone is currently in a POC (proof of concept) state.",'If you want to support its progress, star the <a href="https://github.com/supraniti/vue-dnd-zone" target="_blank" class="white--text">repository</a> on github.']}]}}}},N=z,Z=n("7496"),F=n("ce7e"),H=n("f6c4"),U=n("f774"),W=n("71a3"),G=n("c671"),J=n("fe57"),q=n("aac8"),K=Object(u["a"])(N,r,a,!1,null,null,null),Q=K.exports;p()(K,{VApp:Z["a"],VAppBar:_["a"],VAppBarNavIcon:j["a"],VBtn:v["a"],VCard:f["a"],VCardActions:g["a"],VCardText:g["c"],VCol:E["a"],VDivider:F["a"],VIcon:b["a"],VListItem:M["a"],VListItemContent:L["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VMain:H["a"],VNavigationDrawer:U["a"],VSpacer:y["a"],VTab:W["a"],VTabItem:G["a"],VTabs:J["a"],VTabsItems:q["a"],VToolbarTitle:B["a"]});var tt=n("f309");i["a"].use(tt["a"]);var et=new tt["a"]({}),nt=n("2909"),it=(n("a9e3"),n("159b"),n("b64b"),n("a434"),n("4de4"),n("d81d"),{install:function(t){t.component("DndZone",{props:{validate:{type:Function,default:function(t,e,n){if(t&&e&&n)return!0}},mirrorMinHeight:{type:Number,default:150},mirrorMaxWidth:{type:Number,default:500},calcInterval:{type:Number,default:150},shadowAnchor:{type:Function,default:function(){return this.$el}},mirrorAnchor:{type:Function,default:function(){return this.$el}},transitionDuration:{type:Number,default:.2},dragstartBuffer:{type:Number,default:50},nativeScroll:{type:Boolean,default:!0},handleClass:{type:[Boolean,String],default:!1}},data:function(){return{isDndZone:!0,dndState:"Idle",positionCache:null,lockPosition:!1,dataObject:null,dataObjectContainer:null,registeredContainers:{},shadow:null,mirror:null,transitions:{leaveContainer:{id:null,updated:null},enterContainer:{id:null,updated:null}},dragOffset:{x:0,y:0},intervalID:null,event:null,cursorX:null,cursorY:null,prevX:0,prevY:0,lastAction:0,cursorEl:null,passiveCallback:{passive:!0},scrollInvoked:{top:null,left:null,bottom:null,right:null},activeScroll:!1,shadowPos:{top:0,left:0,pageXOffset:0,pageYOffset:0}}},methods:{routeEvent:function(t){if("mouseup"===t.type||0===t.buttons)this.clear();else if("mousedown"===t.type&&1===t.buttons)this.event=t,this.init(t);else if("mousemove"===t.type&&1===t.buttons&&(this.event=t,this.animateMirror(),!this.nativeScroll)){var e=this.canScroll();for(var n in e)e[n]&&!this.scrollInvoked[n]&&this.scroll(n)}},init:function(t){"Idle"===this.dndState&&(this.dndState="DragStartBuffer",window.setTimeout(function(){var e=this;if("DragStartBuffer"===this.dndState){if(this.handleClass&&!t.target.classList.contains(this.handleClass))return void(this.dndState="Idle");var n=this.getValidItem(t.target);if(!n)return void(this.dndState="Idle");this.dataObject=n.dndModel;var i=this.getContainer(n);if(n&&i){this.dataObject=n.dndModel,this.updateDataObjectContainer(),this.addListeners(),this.$el.classList.add("dnd-zone"),document.documentElement.style.setProperty("--dnd-transition-duration",this.transitionDuration+"s");var r=n.$el,a=n.$el.getBoundingClientRect();this.animateShadow(a,r),this.animateMirror(a,r),this.nativeScroll||(this.activeScroll=!0),Object.keys(this.registeredContainers).forEach((function(t){e.registeredContainers[t].saveRects()})),clearInterval(this.intervalID),this.intervalID=window.setInterval(this.track,this.calcInterval),this.dndState="DragTrack"}else this.dndState="Idle"}}.bind(this),this.dragstartBuffer))},animateShadow:function(t,e){if(!this.shadow&&t&&e){this.shadow=e.cloneNode(!0);var n=this.shadow.style;n.setProperty("position","fixed","important"),n.setProperty("opacity","0.5","important"),n.setProperty("margin","0","important"),n.setProperty("visibility","visible","important"),n.setProperty("pointer-events","none","important"),n.setProperty("transition-duration",this.transitionDuration+"s","important"),n.setProperty("transition-property","all","important"),this.setRect(this.shadow,t),this.shadowAnchor().append(this.shadow)}else t&&(this.shadow.style.setProperty("transition-duration",this.transitionDuration+"s","important"),this.setRect(this.shadow,t))},animateMirror:function(t,e){if(!this.mirror&&t&&e){var n=document.createElement(e.parentElement.tagName),i=e.cloneNode(!0);n.append(i),this.cloneAttributes(n,e.parentElement),this.cloneAttributes(i,e),this.dragOffset.x=this.event.clientX-t.left,this.dragOffset.y=this.event.clientY-t.top;var r=this.mirrorMaxWidth/t.width,a=this.mirrorMinHeight/t.height,s=Math.min(1,Math.max(r,a));this.dragOffset.x*=s,this.dragOffset.y*=s,i.style.setProperty("transform","scale("+s+","+s+")"),i.style.setProperty("transform-origin","0 0"),i.style.setProperty("position","fixed","important"),i.classList.add("dnd-mirror"),i.style.setProperty("margin","0","important"),i.style.setProperty("width",t.width+"px","important"),i.style.setProperty("height",t.height+"px","important"),i.style.setProperty("pointer-events","none","important"),n.style.setProperty("padding","0","important"),n.style.setProperty("position","fixed","important"),n.style.setProperty("pointer-events","none","important"),n.style.setProperty("width","0px","important"),n.style.setProperty("height","0px","important"),this.mirror=i,this.mirrorAnchor().append(n)}this.mirror.style.setProperty("top",this.event.clientY-this.dragOffset.y+"px"),this.mirror.style.setProperty("left",this.event.clientX-this.dragOffset.x+"px")},containerUpdated:function(t){if(this.transitions.leaveContainer.id===t.dndId&&(this.transitions.leaveContainer.updated=!0),this.transitions.enterContainer.id===t.dndId&&(this.transitions.enterContainer.updated=!0),this.transitions.enterContainer.updated&&this.transitions.leaveContainer.updated){this.registeredContainers[this.transitions.enterContainer.id].saveRects(),this.updateDataObjectContainer(),this.dataObjectDomElement.classList.remove("dnd-move");var e=this.dataObjectDomElement;while(e&&e!==this.$el)e.classList.remove("dnd-move"),e=e.parentElement;var n=this.dataObjectDomElement.getBoundingClientRect();this.animateShadow(n);var i=[this.registeredContainers[this.transitions.leaveContainer.id],this.registeredContainers[this.transitions.enterContainer.id]];i.forEach((function(t){t.newRect.height===t.oldRect.height&&t.newRect.width===t.oldRect.width||(t.setRect(t.oldRect),t.$el.classList.add("dnd-transition"),window.requestAnimationFrame((function(){t.setRect(t.newRect),t.$el.addEventListener("transitionend",(function(){t.$el.classList.remove("dnd-transition"),t.unsetRect()}),{once:!0})})))}))}},track:function(){if(this.event&&"DragTrack"===this.dndState){if(this.lockPosition){var t=Math.abs(this.event.clientX-this.cursorX)+Math.abs(this.event.clientY-this.cursorY);if(t<100)return;this.lockPosition=!1}this.cursorEl=this.event.target,this.cursorX=this.event.clientX,this.cursorY=this.event.clientY}},clear:function(){if("Idle"!==this.dndState){this.removeListeners(),this.$el.classList.remove("dnd-zone");var t=this.mirror.getBoundingClientRect();if(!this.dataObjectDomElement)return void this.setIdleState();this.dataObjectDomElement.classList.remove("dnd-move");var e=this.dataObjectDomElement.getBoundingClientRect(),n=Math.abs(t.top-e.top)+Math.abs(t.left-e.left)+Math.abs(t.width-e.width)+Math.abs(t.height-e.height);if(n>0){this.mirror.style.setProperty("top",e.top+"px","important"),this.mirror.style.setProperty("left",e.left+"px","important"),this.mirror.style.setProperty("width",e.width+"px","important"),this.mirror.style.setProperty("height",e.height+"px","important"),this.mirror.style.setProperty("transform","scale(1,1)","important"),this.mirror.style.setProperty("transition-duration",this.transitionDuration+"s","important"),this.mirror.style.setProperty("transition-property","all","important"),this.mirror.classList.remove("dnd-mirror"),this.shadow.style.setProperty("top",e.top+"px","important"),this.shadow.style.setProperty("left",e.left+"px","important"),this.shadow.style.setProperty("width",e.width+"px","important"),this.shadow.style.setProperty("height",e.height+"px","important");var i=!0;this.mirror.addEventListener("transitionend",function(){i&&(i=!1,this.setIdleState())}.bind(this))}else this.setIdleState()}},setIdleState:function(){var t=this;this.dndState="Idle",this.shadow.parentElement.removeChild(this.shadow),this.mirror.parentElement.parentElement.removeChild(this.mirror.parentElement),this.activeScroll=null,this.dataObject=null,this.dataObjectContainer=null,this.shadow=null,this.mirror=null,this.event=null,this.cursorX=null,this.cursorY=null,this.cursorEl=null,this.prevX=null,this.prevY=null,Object.keys(this.registeredContainers).forEach((function(e){var n=t.registeredContainers[e];n.nr.hasChanged=!1,n.$el.classList.remove("dnd-transition"),n.unsetRect()}))},registerContainer:function(t){this.registeredContainers[t.dndId]=t},unregisterContainer:function(t){delete this.registeredContainers[t.dndId]},updateDataObjectContainer:function(){for(var t=Object.keys(this.registeredContainers),e=0;e<t.length;e++){var n=this.registeredContainers[t[e]];if(n.getDataObjectIndex(this.dataObject)>-1)return void(this.dataObjectContainer=n)}this.dataObjectContainer=null},scroll:function(t){this.scrollInvoked[t]=window.setInterval(function(){switch(t){case"top":window.scrollTo(window.pageXOffset,window.pageYOffset-this.scrollSpeed(this.event,document.documentElement));break;case"left":window.scrollTo(window.pageXOffset-this.scrollSpeed(this.event,document.documentElement),window.pageYOffset);break;case"bottom":window.scrollTo(window.pageXOffset,window.pageYOffset+this.scrollSpeed(this.event,document.documentElement));break;case"right":window.scrollTo(window.pageXOffset+this.scrollSpeed(this.event,document.documentElement),window.pageYOffset);break}this.shadow.style.setProperty("transition-duration","0s","important"),this.shadow.style.setProperty("top",this.shadowPos.top+this.shadowPos.pageYOffset-window.pageYOffset+"px"),this.canScroll()[t]&&this.activeScroll||(clearInterval(this.scrollInvoked[t]),this.scrollInvoked[t]=null,this.dataObjectContainer.saveRects())}.bind(this),16)},scrollSpeed:function(t,e){return Math.max(0,20+Math.max(0-t.clientY,0-t.clientX,t.clientY-e.clientHeight,t.clientX-e.clientWidth))},canScroll:function(){return{top:this.event.clientY<=20&&window.pageYOffset>0,left:this.event.clientX<=20&&window.pageXOffset>0,bottom:this.event.clientY>=document.documentElement.clientHeight-20&&window.pageYOffset<document.documentElement.scrollHeight-document.documentElement.clientHeight,right:this.event.clientX>=document.documentElement.clientWidth-20&&window.pageXOffset<document.documentElement.scrollWidth-document.documentElement.clientWidth}},muteEvent:function(t){return t.preventDefault(),t.stopPropagation(),!1},simulateMouseEvent:function(t){if("touchstart"===t.type&&(t.target.addEventListener("touchmove",this.simulateMouseEvent),t.target.addEventListener("touchend",this.simulateMouseEvent)),"touchend"===t.type&&this.clear(),"touchmove"===t.type&&"DragTrack"===this.dndState&&(t.preventDefault(),t.stopPropagation()),"touchmove"===t.type&&"DragStartBuffer"===this.dndState&&this.setIdleState(),t.touches.length>1)return!1;var e="touchstart"===t.type?"mousedown":"touchend"===t.type?"mouseup":"mousemove",n=new MouseEvent(e,{view:window,bubbles:!0,cancelable:!0,screenX:t.touches[0]?t.touches[0].screenX:0,screenY:t.touches[0]?t.touches[0].screenY:0,clientX:t.touches[0]?t.touches[0].clientX:0,clientY:t.touches[0]?t.touches[0].clientY:0,button:0,buttons:1}),i="touchmove"===t.type?document.elementFromPoint(n.clientX,n.clientY)||document.body:t.target;i.dispatchEvent(n)},cloneAttributes:function(t,e){Object(nt["a"])(e.attributes).forEach((function(e){t.setAttribute("id"===e.nodeName?"data-id":e.nodeName,e.nodeValue)}))},addListeners:function(){var t=this;document.body.addEventListener("mousemove",this.routeEvent),document.addEventListener("mouseup",(function(){t.clear()}),{once:!0})},removeListeners:function(){document.body.removeEventListener("mousemove",this.routeEvent),this.$el.removeEventListener("mouseup",this.routeEvent)},getItem:function(t){while(t&&t.$parent){if(t.isDraggable&&t.dndModel)return t;t=t.$parent}return null},getValidItem:function(t){while(t!==this.$el){if(t.__vue__)return this.getItem(t.__vue__);t=t.parentElement}return null},getContainer:function(t){if(!this.dataObject)return null;while(t&&t.$parent){if(t.isNestable&&t.dndModel&&t.dndZone==this&&!this.isSubset(t.dndModel,this.dataObject))return t;t=t.$parent}return null},getValidContainer:function(){var t=this.cursorEl;while(t&&t!==this.$el&&t!==document.body){if(t.__vue__)return this.getContainer(t.__vue__);t=t.parentElement}return null},isSubset:function(t,e){var n=this;return e.children&&e.children.length>0&&t!==e.children?Object.keys(e.children).some((function(i){n.isSubset(t,e.children[i])})):t===e.children},setRect:function(t,e){var n=t.style;this.shadowPos.left=e.left,this.shadowPos.top=e.top,this.shadowPos.pageXOffset=window.pageXOffset,this.shadowPos.pageYOffset=window.pageYOffset,n.setProperty("width",e.width+"px"),n.setProperty("height",e.height+"px"),n.setProperty("top",e.top+"px"),n.setProperty("left",e.left+"px")}},computed:{dataObjectComponent:function(){return this.dataObjectContainer?this.dataObjectContainer.getDataObjectComponent(this.dataObject)[0]:null},dataObjectDomElement:function(){return this.dataObjectComponent?this.dataObjectComponent.$el:null},cursorContainer:function(){return this.cursorEl&&this.dataObject?this.getValidContainer(this.cursorEl):null},cursorIndex:function(){return this.cursorContainer&&this.cursorX&&this.cursorY&&!this.lockPosition?this.cursorContainer.getIndex(this.cursorX,this.cursorY):null},cursorPosition:function(){return this.cursorContainer?this.cursorContainer.dndId+"-"+this.cursorIndex:null}},watch:{dataObjectDomElement:function(t,e){t&&t.style.setProperty("visibility","hidden","important"),e&&e.style.removeProperty("visibility")},cursorPosition:function(t){if(this.lockPosition)return this.positionCache;if(t&&this.dataObjectContainer){this.positionCache=t;var e=this.cursorContainer;if(!e)return;var n=Math.min(this.dataObjectContainer.dndModel.length-1,this.cursorIndex),i=this.dataObjectContainer.getDataObjectIndex(this.dataObject);if(this.dataObjectContainer==e){var r=Math.min(this.dataObjectContainer.dndModel.length-1,this.cursorIndex),a=this.dataObjectContainer.getDataObjectIndex(this.dataObject);if(a==r)return;if(!this.validate(this.dataObjectComponent,e,this))return;this.$emit("move",{from:{container:e,index:a},to:{container:e,index:r}}),this.dataObjectContainer.removeDataObject(this.dataObject),e.addDataObject(this.dataObject,r),this.lockPosition=!0,e.nr.hasChanged=!0,this.transitions.leaveContainer={id:this.dataObjectContainer.dndId,updated:!1},this.transitions.enterContainer={id:e.dndId,updated:!1}}else{if(e.dndZone!==this.dataObjectContainer.dndZone)return;if(!this.validate(this.dataObjectComponent,e,this))return;this.$emit("move",{from:{container:this.dataObjectContainer,index:i},to:{container:e,index:n}}),this.dataObjectContainer.removeDataObject(this.dataObject),this.dataObjectContainer.nr.hasChanged=!0,e.addDataObject(this.dataObject,this.cursorIndex),e.nr.hasChanged=!0,this.lockPosition=!0,this.transitions.leaveContainer={id:this.dataObjectContainer.dndId,updated:!1},this.transitions.enterContainer={id:e.dndId,updated:!1}}}}},mounted:function(){this.$el.addEventListener("mousedown",this.routeEvent),this.$el.addEventListener("touchstart",this.simulateMouseEvent),this.$el.addEventListener("drag",this.muteEvent,!1),this.$el.addEventListener("dragstart",this.muteEvent,!1)},beforeDestroy:function(){this.$el.removeEventListener("mousedown",this.routeEvent),this.$el.removeEventListener("touchstart",this.simulateMouseEvent),this.$el.removeEventListener("drag",this.muteEvent,!1),this.$el.removeEventListener("dragstart",this.muteEvent,!1)},render:function(){return this.$slots.default}}),t.component("DndContainer",{props:{tag:{type:String,default:"div"},dndId:{type:[Number,String],default:null},dndModel:{type:Array,default:function(){return[]}},verticalSearch:{type:Boolean,default:!1},isNestable:{type:Boolean,default:!0}},data:function(){return{itemCount:null,oldRect:null,newRect:null,dndZone:null,processing:!1,nr:{rects:null,hasChanged:!1,hasUpdated:!1}}},render:function(t){return t("transition-group",{props:{tag:this.tag,name:"dnd"},class:this.class,style:this.style,attrs:this.attrs},this.$slots.default)},methods:{addDataObject:function(t,e){0===this.dndModel.length||e>this.dndModel.length-1?this.dndModel.push(t):this.dndModel.splice(e,0,t)},removeDataObject:function(t){var e=this.dndModel.indexOf(t);this.dndModel.splice(e,1)},getDataObjectIndex:function(t){return this.dndModel.indexOf(t)},getDataObjectComponent:function(t){return this.$children[0].$children.filter((function(e){return e.dndModel===t}))},getRectangleMap:function(t){var e=[],n=1/0,i=-1/0,r=[],a=[],s=[];if(this.verticalSearch)for(var o=0;o<t.length;o++)e.push(t[o].bottom);else{for(var d=0;d<t.length;d++){n=Math.min(n,t[d].top),i=Math.max(i,t[d].bottom);var l=d===t.length-1||t[d].right>t[d+1].right;l?(a.push(t[d].right),e.push([n,i]),r.push([],a),s.push(d+1-a.length,d+1-a.length),a=[],n=d===t.length-1?1/0:t[d+1].bottom):a.push((t[d].right+t[d+1].left)/2)}r.push([]),s.push(t.length)}return{map:e.flat(),rows:r,pointers:s}},getIndex:function(t,e){var n=this.getRectangleMap(this.nr.rects);if(this.verticalSearch)return this.binarySearch(n.map,e);var i=this.binarySearch(n.map,e);return this.binarySearch(n.rows[i],t)+n.pointers[i]},getDndZone:function(t){while(t.$parent){if(t.isDndZone)return t;t=t.$parent}return null},register:function(){this.dndZone=this.getDndZone(this),this.dndZone&&this.dndZone.registerContainer(this)},unregister:function(){this.dndZone&&this.dndZone.unregisterContainer(this,!0)},binarySearch:function(t,e){var n=0,i=t.length-1,r=t.length;while(n<=i){var a=Math.floor((n+i)/2);t[a]>e?(r=a,i=a-1):n=a+1}return r},setRect:function(t){this.$el.style.setProperty("height",t.height+"px","important"),this.$el.style.setProperty("width",t.width+"px","important")},unsetRect:function(){this.$el.style.removeProperty("height"),this.$el.style.removeProperty("width")},saveRects:function(t){var e=this,n=Object(nt["a"])(this.$el.children);if(!t)for(var i=0;i<n.length;i++)if(n[i].classList.contains("dnd-move"))return void n[i].addEventListener("transitionend",(function(){e.saveRects(!0)}),{once:!0});this.nr.rects=n.map((function(t){return e.getValidItem(t)})).filter((function(t){return t})).map((function(t){return t.$el.getBoundingClientRect()}))},getItem:function(t){while(t&&t.$parent){if(t.isDraggable&&t.dndModel)return t;t=t.$parent}return null},getValidItem:function(t){while(t!==this.$el){if(t.__vue__)return this.getItem(t.__vue__);t=t.parentElement}return null}},mounted:function(){this.itemCount=this.dndModel.length,this.register(),this.oldRect=this.$el.getBoundingClientRect(),this.newRect=this.oldRect},beforeUpdate:function(){this.unsetRect(),this.nr.hasChanged&&(this.oldRect=this.$el.getBoundingClientRect())},updated:function(){this.nr.hasChanged&&(this.newRect=this.$el.getBoundingClientRect(),this.nr.hasChanged=!1,this.dndZone.containerUpdated(this))},beforeDestroy:function(){this.unsetRect()}}),t.component("DndItem",{props:{dndId:{type:[Number,String],default:null},handleClass:{type:[Boolean,String],default:!1},dndModel:{type:Object,default:function(){return{}}},isDraggable:{type:Boolean,default:!0}},render:function(){return this.$slots.default},mounted:function(){},updated:function(){}})}}),rt=it;n("b238");i["a"].use(rt),i["a"].config.productionTip=!1,new i["a"]({vuetify:et,render:function(t){return t(Q)}}).$mount("#app")},b238:function(t,e,n){}});
//# sourceMappingURL=app.04124de2.js.map
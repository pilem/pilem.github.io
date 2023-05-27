(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["inventory"],{a75b:function(t,e,n){"use strict";var a=n("f6c4"),r=n("d9bd");e["a"]=a["a"].extend({name:"v-main",created:function(){Object(r["d"])("v-content","v-main",this)},render:function(t){var e=a["a"].options.render.call(this,t);return e.data.staticClass+=" v-content",e.children[0].data.staticClass+=" v-content__wrap",t(e.tag,e.data,e.children)}})},e25f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",[n("v-toolbar",[n("v-toolbar-title",[t._v("Inventory")]),n("v-spacer"),n("form-new")],1)],1)],1),n("v-row",[n("v-col",[n("v-card",[n("v-card-title",[n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.inventoryItems,"items-per-page":20,search:t.search,loading:this.$store.getters.loaderState,"loading-text":"Searching inventory","no-data-text":"No objects matching request"}})],1)],1)],1)],1)],1)},r=[],o=(n("7db0"),n("96cf"),n("1da1")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{block:"",small:"",color:"primary"},on:{click:function(e){return e.stopPropagation(),t.openForm()}}},a),[t._v(" New ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{staticClass:"text--secondary",attrs:{color:"secondary"}},[n("v-btn",{attrs:{icon:"icon"},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),n("v-toolbar-title",{staticClass:"headline"},[t._v(" New inventory entry ")]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),n("v-btn",{attrs:{color:"primary",text:""},on:{click:t.insertNewEntry}},[t._v(" Save ")]),n("v-btn",{attrs:{color:"info",text:""},on:{click:t.saveAndInsertNew}},[t._v(" Save and insert new ")])],1)],1),n("v-card-text",[n("v-container",[n("v-row",[n("form-textfield",{attrs:{label:"Title/Name"},model:{value:t.newEntry.title,callback:function(e){t.$set(t.newEntry,"title",e)},expression:"newEntry.title"}}),n("form-textfield",{attrs:{label:"Value updated date"},model:{value:t.newEntry.valueUpdatedDate,callback:function(e){t.$set(t.newEntry,"valueUpdatedDate",e)},expression:"newEntry.valueUpdatedDate"}}),n("form-textfield",{attrs:{label:"Description"},model:{value:t.newEntry.description,callback:function(e){t.$set(t.newEntry,"description",e)},expression:"newEntry.description"}}),n("form-numberfield",{attrs:{label:"Value"},model:{value:t.newEntry.value,callback:function(e){t.$set(t.newEntry,"value",e)},expression:"newEntry.value"}}),n("form-numberfield",{attrs:{label:"Price"},model:{value:t.newEntry.price,callback:function(e){t.$set(t.newEntry,"price",e)},expression:"newEntry.price"}}),n("form-numberfield",{attrs:{label:"Quantity"},model:{value:t.newEntry.quantity,callback:function(e){t.$set(t.newEntry,"quantity",e)},expression:"newEntry.quantity"}})],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),n("v-btn",{attrs:{color:"primary",text:""},on:{click:t.insertNewEntry}},[t._v(" Save ")])],1)],1)],1)],1)},l=[],c=(n("4160"),n("a9e3"),n("159b"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),{methods:{generateUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return n.toString(16)}))}}}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:t.label,type:"number",hint:t.hint},on:{input:t.handleInput}})],1)},u=[],d={name:"FormNumber",props:{label:{type:String,default:null},hint:{type:String,default:null},value:{type:String,default:null}},computed:{},methods:{handleInput:function(t){this.$emit("input",t)}}},v=d,p=n("2877"),f=n("6544"),m=n.n(f),x=n("62ad"),b=n("8654"),h=Object(p["a"])(v,s,u,!1,null,null,null),y=h.exports;m()(h,{VCol:x["a"],VTextField:b["a"]});var w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{staticClass:"text-capitalize",attrs:{value:t.value,label:t.label,dense:"",hint:t.hint},on:{input:t.handleInput}})],1)},g=[],E={name:"FormText",props:{label:{type:String,default:null},hint:{type:String,default:null},value:{type:String,default:null}},computed:{},methods:{handleInput:function(t){this.$emit("input",t)}}},V=E,I=Object(p["a"])(V,w,g,!1,null,null,null),k=I.exports;m()(I,{VCol:x["a"],VTextField:b["a"]});var _={name:"FormNew",components:{formNumberfield:y,formTextfield:k},mixins:[c],data:function(){return{dialog:!1,saveAndInsert:!1,newEntry:{},currencies:[]}},computed:{},created:function(){this.resetForm()},methods:{openForm:function(){this.dialog=!0},saveAndInsertNew:function(){this.saveAndInsert=!0,this.insertNewEntry()},resetForm:function(){this.newEntry={description:null,value:0,valueUpdatedDate:null,price:0,title:"",quantity:0}},insertNewEntry:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=(new Date).toISOString(),n=this.newEntry,a={_id:this.generateUUID(),created:e,quantity:parseInt(n.quantity),value:Number(n.value),price:Number(n.price)},r=["description","valueUpdatedDate","title"],r.forEach((function(t){a[t]=n[t]})),console.log(a);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},C=_,S=n("8336"),N=n("b0af"),T=n("99d9"),$=n("a523"),D=n("169a"),F=n("132d"),U=n("0fd9"),j=n("2fa4"),O=n("71d9"),q=n("2a7f"),A=Object(p["a"])(C,i,l,!1,null,null,null),R=A.exports;m()(A,{VBtn:S["a"],VCard:N["a"],VCardActions:T["a"],VCardText:T["c"],VContainer:$["a"],VDialog:D["a"],VIcon:F["a"],VRow:U["a"],VSpacer:j["a"],VToolbar:O["a"],VToolbarItems:q["a"],VToolbarTitle:q["b"]});var B={name:"Inventory",components:{FormNew:R},data:function(){return{inventoryItems:[],search:null,headers:[{text:"Label",value:"name"}]}},computed:{},created:function(){},mounted:function(){this.$store.dispatch("getInventory")},beforeDestroy:function(){},methods:{getInventory:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.$store,n.commit("loaderActive"),console.log("Inventory prints this",e),a={selector:{},limit:100},t.prev=4,t.next=7,window.db.find(a);case 7:r=t.sent,this.inventoryItems=r.docs,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](4),n.dispatch("infoBridge",{color:"error",text:t.t0,level:"error"});case 14:n.commit("loaderInactive");case 15:case"end":return t.stop()}}),t,this,[[4,11]])})));function e(e){return t.apply(this,arguments)}return e}()}},J=B,P=n("a75b"),z=n("8fea"),L=Object(p["a"])(J,a,r,!1,null,null,null);e["default"]=L.exports;m()(L,{VCard:N["a"],VCardTitle:T["d"],VCol:x["a"],VContainer:$["a"],VContent:P["a"],VDataTable:z["a"],VRow:U["a"],VSpacer:j["a"],VTextField:b["a"],VToolbar:O["a"],VToolbarTitle:q["b"]})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["notes"],{"0841":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("v-container",{attrs:{fluid:""}},[i("v-navigation-drawer",{attrs:{app:"",right:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-sheet",{staticClass:"pa-4 primary lighten-2",attrs:{dark:""}},[i("v-icon",[t._v("mdi-tag")]),t._v(" Tags ")],1),i("v-sheet",{staticClass:"pa-1"},[i("v-list",{attrs:{nav:"",dense:"",subheader:""}},t._l(t.tagsList,(function(e,n){return i("v-list-item",{key:n,attrs:{link:"",to:{name:"notesTag",params:{tag:e.key}}}},[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.key)}})],1),i("v-list-item-action",[i("v-list-item-action-text",{domProps:{textContent:t._s(e.value)}})],1)],1)})),1)],1)],1),i("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[i("v-toolbar",{attrs:{flat:""}},[i("v-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.getNotesByTag()}}},[i("v-icon",[t._v("mdi-note-text")]),i("span",[t._v("Untagged")])],1),i("v-spacer"),i("v-btn",{staticClass:"ma-2",attrs:{color:"secondary"},on:{click:function(e){t.drawer=!t.drawer}}},[i("v-icon",{attrs:{left:""}},[t._v(" mdi-tag ")]),i("span",[t._v("Tags")]),i("v-icon",{attrs:{right:""}},[t._v(" mdi-menu ")])],1)],1),i("v-row",[i("router-view")],1)],1),i("NotesDetailed")],1)],1)},s=[],a=(i("fb6a"),i("96cf"),i("1da1")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-bottom-sheet",{attrs:{inset:t.$vuetify.breakpoint.mdAndUp,scrollable:""},model:{value:t.dialogItemDetailed,callback:function(e){t.dialogItemDetailed=e},expression:"dialogItemDetailed"}},[i("v-card",[i("v-card-text",[i("v-container",[i("v-row",[i("v-col",[i("v-text-field",{staticClass:"title",attrs:{value:t.selectedNote.title,label:"Title"},on:{change:function(e){return t.setDocField("title",e)}}}),i("v-textarea",{attrs:{value:t.selectedNote.description,rows:"2","auto-grow":"",label:"Description"},on:{change:function(e){return t.setDocField("description",e)}}}),i("v-combobox",{attrs:{items:t.tagsListItems,label:"Tags",multiple:"",chips:""},on:{change:function(e){return t.setDocField("tags",e)}},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}})],1)],1),i("v-row",[i("v-col",[i("p",{domProps:{textContent:t._s(t.selectedNote._id)}})])],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"mt-6",attrs:{text:"",color:"primary"},on:{click:t.archiveNote}},[t._v(" Archive ")]),i("v-btn",{staticClass:"mt-6",attrs:{text:"",color:"error"},on:{click:t.deleteNote}},[t._v(" Delete ")])],1)],1)],1)},r=[],l=i("b85c"),c=i("6c29"),d=i("fd33"),u={name:"NotesDetailed",mixins:[c["a"],d["a"]],computed:{selectedNote:function(){return this.$store.getters.selectedDoc},tags:{get:function(){return this.selectedNote.tags},set:function(t){this.selectedNote.tags=t}},tagsListItems:function(){var t,e=this.$store.getters.getTagList,i=[],n=Object(l["a"])(e);try{for(n.s();!(t=n.n()).done;){var s=t.value;i.push(s.key)}}catch(a){n.e(a)}finally{n.f()}return i}},methods:{hideNote:function(){this.$store.commit("dialogItemDetailedHide")},archiveNote:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getDoc(this.selectedNote._id);case 2:return e=t.sent,e.status="done",e.end=(new Date).toISOString(),e.archived=!0,t.next=8,this.putDoc(e);case 8:this.$store.dispatch("refreshDoc",this.selectedNote._id),this.hideNote();case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),deleteNote:function(){var t=confirm("Delete note?");t&&(this.deleteDoc(this.selectedNote._id),this.hideNote())}}},h=u,p=i("2877"),f=i("6544"),v=i.n(f),m=i("288c"),g=i("8336"),b=i("b0af"),x=i("99d9"),I=i("62ad"),S=i("2b5d"),D=i("a523"),y=i("0fd9"),w=i("2fa4"),_=i("8654"),k=i("a844"),V=Object(p["a"])(h,o,r,!1,null,null,null),C=V.exports;v()(V,{VBottomSheet:m["a"],VBtn:g["a"],VCard:b["a"],VCardActions:x["a"],VCardText:x["c"],VCol:I["a"],VCombobox:S["a"],VContainer:D["a"],VRow:y["a"],VSpacer:w["a"],VTextField:_["a"],VTextarea:k["a"]});var O={name:"Notes",components:{NotesDetailed:C},mixins:[c["a"]],data:function(){return{drawer:!1}},computed:{tagsList:function(){return this.$store.getters.getTagList}},mounted:function(){this.$store.commit("flushData"),this.$store.dispatch("populateTagsList","offpim/note-tag-count")},beforeDestroy:function(){this.$store.commit("appBarTabs",[]),this.$store.commit("flushData")},methods:{getNotesByTag:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getQuery("offpim/note-tag-count","No tag","No tag",!0);case 3:e=t.sent,this.$store.commit("addDataArray",e),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.errorHandler(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}(),getLastEntriesByCount:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,i,n,s,a,o=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:30,i=this.$store,i.commit("loaderActive"),n=(new Date).toISOString().slice(0,16),s={selector:{productivity:!0,type:"note",created:{$lte:n},$or:[{archived:{$exists:!1}},{archived:!1}]},limit:e,sort:[{created:"desc"}],use_index:"offpim_mango_indexes"},t.prev=5,t.next=8,this.getMango(s);case 8:a=t.sent,i.commit("addDataArray",a.docs),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](5),i.dispatch("infoBridge",{color:"error",text:t.t0,level:"error"});case 15:case"end":return t.stop()}}),t,this,[[5,12]])})));function e(){return t.apply(this,arguments)}return e}()}},T=O,$=i("132d"),N=i("8860"),j=i("da13"),A=i("1800"),M=i("5d23"),F=i("f6c4"),L=i("f774"),B=i("8dd9"),z=i("71d9"),R=Object(p["a"])(T,n,s,!1,null,null,null);e["default"]=R.exports;v()(R,{VBtn:g["a"],VContainer:D["a"],VIcon:$["a"],VList:N["a"],VListItem:j["a"],VListItemAction:A["a"],VListItemActionText:M["a"],VListItemContent:M["b"],VListItemTitle:M["d"],VMain:F["a"],VNavigationDrawer:L["a"],VRow:y["a"],VSheet:B["a"],VSpacer:w["a"],VToolbar:z["a"]})},2739:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{-ms-flex-item-align:center;align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=e},"288c":function(t,e,i){"use strict";i("a9e3");var n=i("5530"),s=(i("d0cd"),i("169a"));e["a"]=s["a"].extend({name:"v-bottom-sheet",props:{inset:Boolean,maxWidth:{type:[String,Number],default:"auto"},transition:{type:String,default:"bottom-sheet-transition"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-bottom-sheet":!0,"v-bottom-sheet--inset":this.inset})}}})},"2b5d":function(t,e,i){"use strict";i("7db0"),i("c975"),i("fb6a"),i("a434"),i("b0c0"),i("d3b7"),i("25f0"),i("8a79");var n=i("5530"),s=(i("2bfd"),i("b974")),a=i("c6a6"),o=i("80d2");e["a"]=a["a"].extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return s["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,e){var i=this,a=s["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(a.componentOptions.listeners=Object(n["a"])(Object(n["a"])({},a.componentOptions.listeners),{},{dblclick:function(){i.editingIndex=e,i.internalSearch=i.getText(t),i.selectedIndex=-1}})),a},onChipInput:function(t){s["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(t,e){this.autoSelectFirst&&a["a"].options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown:function(t){var e=t.keyCode;s["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===o["z"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===o["z"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();a["a"].options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():a["a"].options.methods.selectItem.call(this,t)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){var e;s["a"].options.methods.setValue.call(this,null!=(e=t)?e:this.internalSearch)},updateEditing:function(){var t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox:function(){var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this.getMenuIndex();if(!(t<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){var i=this.internalValue.slice();i.splice(e,1),this.setValue(i)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}},onPaste:function(t){if(this.multiple&&!this.searchIsDirty){var e=t.clipboardData.getData("text/vnd.vuetify.autocomplete.item+plain");e&&-1===this.findExistingIndex(e)&&(t.preventDefault(),s["a"].options.methods.selectItem.call(this,e))}}}})},"2bfd":function(t,e,i){var n=i("2739");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("45ef5b0a",n,!0,{sourceMap:!1,shadowMode:!1})},3008:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-data-iterator",{attrs:{items:this.$store.getters.getData,"item-key":"_id","items-per-page":20,loading:this.$store.getters.loaderState,"loading-text":"Getting Notes","no-data-text":"No notes matching request"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("v-row",t._l(e.items,(function(t){return i("v-col",{key:t._id,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[i("NotesItem",{attrs:{doc:t}})],1)})),1)]}}])})},s=[],a=(i("96cf"),i("1da1")),o=i("6c29"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[i("v-card",{attrs:{hover:"",ripple:"",disabled:t.isDeleted(t.doc._id),flat:t.isDeleted(t.doc._id)}},[i("v-card-title",{on:{click:t.showItemDetailed}},[t._v(" "+t._s(t.docTitle)+" ")]),i("v-card-text",{on:{click:t.showItemDetailed}},[t._v(" "+t._s(t.docDescription)+" ")]),i("v-card-actions",[i("v-spacer"),i("v-fab-transition",[i("v-speed-dial",{attrs:{absolute:"",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-btn",{directives:[{name:"show",rawName:"v-show",value:n,expression:"hover"}],attrs:{icon:"",small:"",fab:""}},[i("v-icon",[t._v("mdi-delete")])],1)]},proxy:!0}],null,!0)},[i("v-btn",{directives:[{name:"show",rawName:"v-show",value:n,expression:"hover"}],attrs:{fab:"",small:"",color:"yellow lighten-2"},on:{click:function(e){return t.deleteDoc(t.doc._id)}}},[i("v-icon",{attrs:{color:"black"}},[t._v(" mdi-radioactive ")])],1)],1)],1)],1),i("v-fade-transition",[t.isDeleted(t.doc._id)?i("v-overlay",{attrs:{absolute:"",color:"error","z-index":"3"}},[i("v-btn",{attrs:{text:""}},[t._v(" Deleted ")])],1):t._e()],1),i("v-fade-transition",[t.doc.archived?i("v-overlay",{attrs:{absolute:"",color:"info","z-index":"3"}},[i("v-btn",{attrs:{text:""}},[t._v(" Archived ")])],1):t._e()],1)],1)]}}])})},l=[],c=(i("a4d3"),i("e01a"),i("fb6a"),i("67de")),d={name:"NotesItems",components:{},mixins:[o["a"],c["a"]],props:{doc:{type:Object,default:function(){}}},data:function(){return{trashIconClicked:!1,itemsPerPage:8}},computed:{trashIcon:function(){return!!this.trashIconClicked},docTitle:function(){var t=this.doc.title;return t.length>60?t.slice(0,60)+"...":t},docDescription:function(){var t=this.doc.description||"";return t.length>120?t.slice(0,120)+"...":t}},methods:{isDeleted:function(t){return this.$store.getters.isDeleted(t)},toggleTrashIcon:function(){this.trashIconClicked=!this.trashIconClicked}}},u=d,h=i("2877"),p=i("6544"),f=i.n(p),v=i("8336"),m=i("b0af"),g=i("99d9"),b=i("0789"),x=i("16b7"),I=i("f2e7"),S=i("58df"),D=i("d9bd"),y=Object(S["a"])(x["a"],I["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(D["c"])("v-hover should only contain a single element",this),t)):(Object(D["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}}),w=i("132d"),_=i("a797"),k=i("2fa4"),V=i("c73b"),C=Object(h["a"])(u,r,l,!1,null,null,null),O=C.exports;f()(C,{VBtn:v["a"],VCard:m["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VFabTransition:b["c"],VFadeTransition:b["d"],VHover:y,VIcon:w["a"],VOverlay:_["a"],VSpacer:k["a"],VSpeedDial:V["a"]});var T={name:"NotesTag",components:{NotesItem:O},mixins:[o["a"]],props:{tag:{type:String,default:"No tag"}},data:function(){return{}},watch:{$route:function(t){t&&this.getNotesByTag()}},mounted:function(){this.getNotesByTag()},methods:{getNotesByTag:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getQuery("offpim/note-tag-count",this.tag,this.tag,!0);case 3:e=t.sent,this.$store.commit("addDataArray",e),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.errorHandler(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()}},$=T,N=i("62ad"),j=i("c377"),A=i("0fd9"),M=Object(h["a"])($,n,s,!1,null,null,null);e["default"]=M.exports;f()(M,{VCol:N["a"],VDataIterator:j["a"],VRow:A["a"]})},"67de":function(t,e,i){"use strict";e["a"]={methods:{showItemDetailed:function(){this.$store.commit("setSelectedDoc",this.doc),this.$store.commit("dialogItemDetailedShow")}}}},"8a79":function(t,e,i){"use strict";var n=i("23e7"),s=i("06cf").f,a=i("50c4"),o=i("5a34"),r=i("1d80"),l=i("ab13"),c=i("c430"),d="".endsWith,u=Math.min,h=l("endsWith"),p=!c&&!h&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!p&&!h},{endsWith:function(t){var e=String(r(this));o(t);var i=arguments.length>1?arguments[1]:void 0,n=a(e.length),s=void 0===i?n:u(a(i),n),l=String(t);return d?d.call(e,l,s):e.slice(s-l.length,s)===l}})},"8cd0":function(t,e,i){var n=i("d51d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("0c8ff548",n,!0,{sourceMap:!1,shadowMode:!1})},c6a6:function(t,e,i){"use strict";i("4de4"),i("7db0"),i("c975"),i("d81d"),i("45fc"),i("498a");var n=i("5530"),s=(i("2bfd"),i("b974")),a=i("8654"),o=i("d9f7"),r=i("80d2"),l=Object(n["a"])(Object(n["a"])({},s["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=s["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,i){return i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:function(){return l}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var i=Object(r["s"])(e,t.itemText),n=null!=i?String(i):"";return t.filter(e,String(t.internalSearch),n)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=s["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(n["a"])(Object(n["a"])({},l),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=s["a"].options.computed.listData.call(this);return t.props=Object(n["a"])(Object(n["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var i=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){i.internalSearch&&(1===t.length||i.autoSelectFirst)&&(i.$refs.menu.getTiles(),i.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===r["z"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===r["z"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==r["z"].backspace&&t!==r["z"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var i=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===i){var n=this.selectedItems.length,s=t!==n-1?t:t-1,a=this.selectedItems[s];a?this.selectItem(e):this.setValue(this.multiple?[]:void 0),this.selectedIndex=s}else this.selectedIndex=i}},clearableCallback:function(){this.internalSearch=void 0,s["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return t.data=Object(o["a"])(t.data,{attrs:{"aria-activedescendant":Object(r["q"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["q"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=s["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,i=e.value;e.value&&this.activateMenu(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;s["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){s["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){s["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){if(-1!==this.selectedIndex){var e=this.selectedItems[this.selectedIndex],i=this.getText(e);t.clipboardData.setData("text/plain",i),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}})},c73b:function(t,e,i){"use strict";i("caad"),i("d81d"),i("b0c0"),i("c7cd");var n=i("ade3"),s=(i("8cd0"),i("f2e7")),a=i("fe6c"),o=i("f40d"),r=i("a293"),l=i("58df");e["a"]=Object(l["a"])(a["a"],s["a"],o["a"]).extend({name:"v-speed-dial",directives:{ClickOutside:r["a"]},props:{direction:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){var t;return t={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed},Object(n["a"])(t,"v-speed-dial--direction-".concat(this.direction),!0),Object(n["a"])(t,"v-speed-dial--is-active",this.isActive),t}},render:function(t){var e=this,i=[],n={class:this.classes,directives:[{name:"click-outside",value:function(){return e.isActive=!1}}],on:{click:function(){return e.isActive=!e.isActive}}};if(this.openOnHover&&(n.on.mouseenter=function(){return e.isActive=!0},n.on.mouseleave=function(){return e.isActive=!1}),this.isActive){var s=0;i=(this.$slots.default||[]).map((function(e,i){return!e.tag||"undefined"===typeof e.componentOptions||"v-btn"!==e.componentOptions.Ctor.options.name&&"v-tooltip"!==e.componentOptions.Ctor.options.name?(e.key=i,e):(s++,t("div",{style:{transitionDelay:.05*s+"s"},key:i},[e]))}))}var a=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},i);return t("div",n,[this.$slots.activator,a])}})},d0cd:function(t,e,i){var n=i("fb3b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("498c5505",n,!0,{sourceMap:!1,shadowMode:!1})},d51d:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".v-speed-dial{position:relative;z-index:1}.v-speed-dial--absolute{position:absolute}.v-speed-dial--fixed{position:fixed}.v-speed-dial--absolute,.v-speed-dial--fixed{z-index:4}.v-speed-dial--absolute>.v-btn--floating,.v-speed-dial--fixed>.v-btn--floating{margin:0}.v-speed-dial--top{top:16px}.v-speed-dial--bottom{bottom:16px}.v-speed-dial--left{left:16px}.v-speed-dial--right{right:16px}.v-speed-dial--direction-left .v-speed-dial__list,.v-speed-dial--direction-right .v-speed-dial__list{height:100%;top:0;padding:0 16px}.v-speed-dial--direction-bottom .v-speed-dial__list,.v-speed-dial--direction-top .v-speed-dial__list{left:0;width:100%}.v-speed-dial--direction-top .v-speed-dial__list{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;bottom:100%}.v-speed-dial--direction-right .v-speed-dial__list{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;left:100%}.v-speed-dial--direction-bottom .v-speed-dial__list{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;top:100%}.v-speed-dial--direction-left .v-speed-dial__list{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;right:100%}.v-speed-dial__list{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:16px 0;position:absolute}.v-speed-dial__list .v-btn{margin:6px}.v-speed-dial:not(.v-speed-dial--is-active) .v-speed-dial__list{pointer-events:none}",""]),t.exports=e},fb3b:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".bottom-sheet-transition-enter,.bottom-sheet-transition-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%)}.v-bottom-sheet.v-dialog{-ms-flex-item-align:end;align-self:flex-end;border-radius:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;margin:0;overflow:visible}.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:70%}@media only screen and (max-width:599px){.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:none}}",""]),t.exports=e},fd33:function(t,e,i){"use strict";i("fb6a"),i("ac1f"),i("1276"),i("96cf");var n=i("1da1");e["a"]={computed:{doc:function(){return this.$store.getters.selectedDoc},dialogItemDetailed:{get:function(){return this.$store.getters.dialogItemDetailed},set:function(t){var e=t?"dialogItemDetailedShow":"dialogItemDetailedHide";this.$store.commit(e,"dialogItemDetailed")}},startDate:function(){var t=this.doc.startDate;return t?new Date(t).toISOString().substr(0,10):null},startTime:function(){var t=this.doc.startDate;return t?new Date(t).toISOString().slice(11,16):null},endDate:function(){var t=this.doc.endDate;return t?new Date(t).toISOString().substr(0,10):null}},methods:{getDateOnly:function(t){return t?new Date(t).toISOString().substr(0,10):null},getTimeOnly:function(t){return t?new Date(t).toISOString().slice(11,16):null},setDate:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,i){var n,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getDoc(this.doc._id);case 2:n=t.sent,s=new Date(i),a=new Date(n[e]),a.setFullYear(s.getFullYear()),a.setMonth(s.getMonth()),a.setDate(s.getDate()),this.setDocField(e,a.toISOString());case 9:case"end":return t.stop()}}),t,this)})));function e(e,i){return t.apply(this,arguments)}return e}(),setTime:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,i){var n,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getDoc(this.doc._id);case 2:n=t.sent,s=new Date(n[e]),a=i.split(":"),s.setUTCHours(a[0]),s.setMinutes(a[1]),this.setDocField(e,s.toISOString());case 8:case"end":return t.stop()}}),t,this)})));function e(e,i){return t.apply(this,arguments)}return e}(),setDocField:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,i){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.doc._id,t.next=3,this.getDoc(n);case 3:return s=t.sent,s[e]=i,t.next=7,this.putDoc(s);case 7:this.$store.dispatch("refreshDoc",n);case 8:case"end":return t.stop()}}),t,this)})));function e(e,i){return t.apply(this,arguments)}return e}()}}}}]);
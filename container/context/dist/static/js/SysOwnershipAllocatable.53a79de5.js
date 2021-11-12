(window.webpackJsonp=window.webpackJsonp||[]).push([["SysOwnershipAllocatable"],{"9a09":function(e,t,i){"use strict";i.r(t);var n,a=i("50da"),s=i("2e90"),o=i("e719"),l=i("3617"),r=i("600f"),d=i("402f");let c=class extends s.f{constructor(){super(...arguments),this.pageNumber=1,this.tableLoading=!1,this.tableItems=new Array,this.assignedItems=new Array,this.totalItems=0,this.totalPages=0,this.tableTitle="可配置人员信息",this.columnSlots=["status","reserved","gender","identity"],this.tableHeaders=[{text:"人员姓名",align:"center",value:"employeeName"},{text:"性别",align:"center",value:"gender"},{text:"身份",align:"center",value:"identity"},{text:"备注",align:"center",value:"description"},{text:"保留数据",align:"center",value:"reserved"},{text:"状态",align:"center",value:"status"}],this.pageSize=10,this.overlay=!1,this.skeletonLoading=!1,this.organizationId="",this.departmentId="",this.editedItem={},this.gender=new Array,this.identity=new Array,this.condition={employeeName:"",mobilePhoneNumber:"",email:"",gender:null,identity:null}}created(){this.getConstants(),this.skeletonLoading=!0,this.organizationId=this.$route.params.organizationId,this.departmentId=this.$route.params.departmentId,this.organizationId&&this.departmentId&&this.findAllocatableByPage(this.pageNumber)}getCompareKey(){return"employeeId"}pagination(e){this.pageNumber=e}onPageNumberChanged(e){this.findAllocatableByPage(e,this.condition)}findAllocatableByPage(e,t={}){this.tableLoading=!0,this.sysEmployeeService.fetchAllocatableByPage({pageNumber:e-1,pageSize:this.pageSize},{organizationId:this.organizationId,departmentId:this.departmentId,...t}).then(e=>{const t=e.data;this.tableLoading=!1,this.tableItems=t.content,this.totalPages=t.totalPages,this.totalItems=parseInt(t.totalElements,0),this.skeletonLoading&&(this.skeletonLoading=!1)}).catch(()=>{this.tableLoading=!1})}getConstants(){this.$enums.getItem(d.h.GENDER).then(e=>{this.gender=e}),this.$enums.getItem(d.h.IDENTITY).then(e=>{this.identity=e})}parseGender(e){return"number"==typeof e.gender?this.gender[e.gender].text:""}parseIdentity(e){return"number"==typeof e.identity?this.identity[e.identity].text:""}allocatableDeploy(){this.$lib.lodash.isEmpty(this.assignedItems)?this.$notify.warning("您还没有选择任何人员！"):(this.overlay=!0,this.sysEmployeeService.saveAllocatable({organizationId:this.organizationId,departmentId:this.departmentId,employees:this.assignedItems}).then(()=>{this.overlay=!1,this.$navigation.goBack(this.$route)}).catch(()=>{this.overlay=!1}))}search(){this.pageNumber=1,this.findAllocatableByPage(this.pageNumber,this.condition)}clear(){this.condition.employeeName="",this.condition.mobilePhoneNumber="",this.condition.email="",this.condition.gender=null,this.condition.identity=null,this.findAllocatableByPage(this.pageNumber,this.condition)}};Object(a.a)([o.Inject,Object(a.b)("design:type","function"==typeof(n=void 0!==r.l&&r.l)?n:Object)],c.prototype,"sysEmployeeService",void 0),Object(a.a)([Object(s.g)("pageNumber"),Object(a.b)("design:type",Function),Object(a.b)("design:paramtypes",[Number]),Object(a.b)("design:returntype",void 0)],c.prototype,"onPageNumberChanged",null),c=Object(a.a)([Object(s.a)({components:{HContentPanel:l.d,HActionButton:l.a,HTableItemChip:l.n,HTableItemStatus:l.p,HTableItemEditor:l.o,HDictionarySelect:l.g}})],c);var h=c,m=i("ba34"),u=i("eb4c"),g=i.n(u),b=i("6fc4"),p=i("3134"),y=i("2177"),v=i("a4fc"),f=i("81fa"),I=Object(m.a)(h,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h-content-panel",{attrs:{title:"配置人员归属",overlay:e.overlay}},[i("h-table-item-editor",{staticClass:"pl-0 pr-0",attrs:{overlay:e.overlay,clear:""},on:{submit:function(t){return e.allocatableDeploy()}},scopedSlots:e._u([{key:"primary",fn:function(){return[i("h-table",{attrs:{"show-select":"","external-pagination":"","table-headers":e.tableHeaders,"table-items":e.tableItems,"table-title":e.tableTitle,"page-size":e.pageSize,"total-items":e.totalItems,"total-pages":e.totalPages,"table-loading":e.tableLoading,"skeleton-loading":e.skeletonLoading,"column-slots":e.columnSlots,"item-key":e.getCompareKey()},on:{pagination:function(t){return e.pagination(t)}},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-card",{attrs:{flat:""}},[i("v-row",{attrs:{dense:""}},[i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"2"}},[i("v-text-field",{attrs:{label:"姓名",outlined:"",dense:"",clearable:"","hide-details":""},model:{value:e.condition.employeeName,callback:function(t){e.$set(e.condition,"employeeName",t)},expression:"condition.employeeName"}})],1),i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"2"}},[i("v-text-field",{attrs:{label:"手机号码",outlined:"",dense:"",clearable:"","hide-details":""},model:{value:e.condition.mobilePhoneNumber,callback:function(t){e.$set(e.condition,"mobilePhoneNumber",t)},expression:"condition.mobilePhoneNumber"}})],1),i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"2"}},[i("v-text-field",{attrs:{label:"EMAIL",outlined:"",dense:"",clearable:"","hide-details":""},model:{value:e.condition.email,callback:function(t){e.$set(e.condition,"email",t)},expression:"condition.email"}})],1),i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"2"}},[i("h-dictionary-select",{attrs:{dictionary:"gender",label:"性别",dense:"","hide-details":""},model:{value:e.condition.gender,callback:function(t){e.$set(e.condition,"gender",t)},expression:"condition.gender"}})],1),i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"2"}},[i("h-dictionary-select",{attrs:{dictionary:"identity",label:"身份",dense:"","hide-details":""},model:{value:e.condition.identity,callback:function(t){e.$set(e.condition,"identity",t)},expression:"condition.identity"}})],1),i("v-col",{attrs:{cols:"2"}},[i("h-button",{attrs:{icon:"","icon-name":"search",tooltip:"模糊搜索"},on:{click:function(t){return e.search()}}}),i("h-button",{attrs:{icon:"","icon-name":"delete",tooltip:"清空"},on:{click:function(t){return e.clear()}}})],1)],1)],1)]},proxy:!0},{key:"item.gender",fn:function(t){var i=t.item;return[e._v(" "+e._s(e.parseGender(i))+" ")]}},{key:"item.identity",fn:function(t){var i=t.item;return[e._v(" "+e._s(e.parseIdentity(i))+" ")]}},{key:"item.status",fn:function(e){var t=e.item;return[i("h-table-item-status",{attrs:{type:t.status}})]}},{key:"item.reserved",fn:function(e){var t=e.item;return[i("h-table-item-chip",{attrs:{status:t.reserved}})]}}],null,!0),model:{value:e.assignedItems,callback:function(t){e.assignedItems=t},expression:"assignedItems"}}),i("v-divider",{staticClass:"ma-5"})]},proxy:!0}]),model:{value:e.editedItem,callback:function(t){e.editedItem=t},expression:"editedItem"}})],1)}),[],!1,null,null,null);t.default=I.exports;g()(I,{VCard:b.a,VCol:p.a,VDivider:y.a,VRow:v.a,VTextField:f.a})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["OauthApplications"],{f7b4:function(e,t,n){"use strict";n.r(t);var a,i=n("50da"),r=n("2e90"),o=n("e719"),s=n("3617"),l=n("600f"),c=n("402f");let u=class extends c.f{constructor(){super(...arguments),this.pageNumber=1,this.tableTitle="终端应用信息",this.columnSlots=["actions","status","reserved","applicationType","technologyType"],this.tableHeaders=[{text:"APP_KEY",align:"center",value:"appKey"},{text:"APP_SECRET",align:"center",value:"appSecret"},{text:"应用名称",align:"center",value:"appName"},{text:"应用简写",align:"center",value:"appNameEn"},{text:"备注",align:"center",value:"description"},{text:"保留数据",align:"center",value:"reserved"},{text:"状态",align:"center",value:"status"},{text:"操作",align:"center",value:"actions",sortable:!1}]}getBaseService(){return this.oauthApplicationsService}onPageNumberChanged(e){this.findItemsByPage(e)}pagination(e){this.pageNumber=e}mounted(){super.mounted()}getItemKey(){return"applicationId"}getDomainName(){return"OauthApplications"}};Object(i.a)([o.Inject,Object(i.b)("design:type","function"==typeof(a=void 0!==l.d&&l.d)?a:Object)],u.prototype,"oauthApplicationsService",void 0),Object(i.a)([Object(r.g)("pageNumber"),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Number]),Object(i.b)("design:returntype",void 0)],u.prototype,"onPageNumberChanged",null),u=Object(i.a)([Object(r.a)({components:{HContainer:s.c,HActionButton:s.a,HTableItemChip:s.n,HTableItemStatus:s.p}})],u);var p=u,b=n("ba34"),m=n("eb4c"),d=n.n(m),g=n("bc77"),v=Object(b.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h-container",[n("h-table",{attrs:{"show-select":"","external-pagination":"","table-headers":e.tableHeaders,"table-items":e.tableItems,"page-size":e.pageSize,"total-items":e.totalItems,"total-pages":e.totalPages,"table-title":e.tableTitle,"table-loading":e.tableLoading,"skeleton-loading":e.skeletonLoading,"column-slots":e.columnSlots,"item-key":e.getItemKey()},on:{pagination:function(t){return e.pagination(t)}},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-btn",{staticClass:"mb-2 mr-2",attrs:{color:"primary",dark:""},on:{click:function(t){return e.createItem()}}},[e._v("申请APP_KEY")])]},proxy:!0},{key:"item.status",fn:function(e){var t=e.item;return[n("h-table-item-status",{attrs:{type:t.status}})]}},{key:"item.reserved",fn:function(e){var t=e.item;return[n("h-table-item-chip",{attrs:{status:t.reserved}})]}},{key:"item.actions",fn:function(t){var a=t.item;return[n("h-action-button",{attrs:{authorize:"",edit:"",remove:!a.reserved,content:"范围"},on:{authorize:function(t){return e.authorizeItem(a)},edit:function(t){return e.editItem(a)},remove:function(t){return e.deleteItem(a)}}})]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=v.exports;d()(v,{VBtn:g.a})}}]);
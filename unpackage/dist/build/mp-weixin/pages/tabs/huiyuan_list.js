(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabs/huiyuan_list"],{"016a":function(t,e,a){},"0207":function(t,e,a){"use strict";(function(t){function a(t){return s(t)||u(t)||i(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"===typeof t)return o(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(t,e):void 0}}function u(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return o(t)}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){var t=getApp().globalData.baseUrl;return{baseUrl:t,openId:"",yuangongid:"",huiyuan_list:"",pageCount:1,total:0,pageNo:2,pageSize:16,searchText:"",share:{title:"我的会员列表",path:"/pages/tabs/huiyuan_list"}}},onLoad:function(e){var a=this;this.openId=t.getStorageSync("openId");var n=this.baseUrl+"/huiyuan/wechat/"+this.openId+"?pageNo=1&pageSize="+this.pageSize;t.request({url:n,success:function(e){console.log("res=>",e);var n=e.data,i=n.status,u=n.message,s=n.result;200==i?(a.huiyuan_list=s.huiyuanList,a.pageCount=s.pageCount,a.total=s.total):t.showToast({title:u,duration:1e3,icon:"none"})}})},onShow:function(){var e=this;if(null==this.huiyuan_list||""==this.huiyuan_list||0==this.huiyuan_list.length){this.openId=t.getStorageSync("openId");var a=this.baseUrl+"/huiyuan/wechat/"+this.openId+"?pageNo=1&pageSize="+this.pageSize;t.request({url:a,success:function(a){console.log("res=>",a);var n=a.data,i=n.status,u=n.message,s=n.result;200==i?(e.huiyuan_list=s.huiyuanList,e.pageCount=s.pageCount,e.total=s.total):t.showToast({title:u,duration:1e3,icon:"none"})}})}},onPullDownRefresh:function(){var e=this,a=this.baseUrl+"/huiyuan/wechat/"+this.openId+"?pageNo=1&pageSize="+this.pageSize;t.request({url:a,success:function(a){var n=a.data,i=n.status,u=n.message,s=n.result;200==i?(e.huiyuan_list=s.huiyuanList,e.pageCount=s.pageCount,e.total=s.total,e.pageNo=2):t.showToast({title:u,duration:1e3,icon:"none"}),t.stopPullDownRefresh()}})},onReachBottom:function(){var e=this;if(this.pageNo<=this.pageCount){var n=this.baseUrl+"/huiyuan/wechat/"+this.openId+"?pageNo="+this.pageNo+"&pageSize="+this.pageSize;t.request({url:n,success:function(n){var i=n.data,u=i.status,s=i.message,o=i.result;200==u?(e.huiyuan_list=[].concat(a(e.huiyuan_list),a(o.huiyuanList)),e.pageCount=o.pageCount,e.total=o.total,e.pageNo++):t.showToast({title:s,duration:1e3,icon:"none"})}})}},onShareAppMessage:function(t){return{title:this.share.title,path:this.share.path}},onShareTimeline:function(t){return{title:this.share.title,path:this.share.path}},methods:{chazhao:function(){var e,a=this;e=""==this.searchText||null==this.searchText?this.baseUrl+"/huiyuan/wechat/"+this.openId+"?pageNo=1&pageSize="+this.pageSize:this.baseUrl+"/huiyuan/wechat/"+this.openId+"/search?searchText="+this.searchText,t.request({url:e,success:function(e){var n=e.data,i=n.status,u=n.message,s=n.result;200==i?(a.huiyuan_list=s.huiyuanList,""!=a.searchText&&null!=a.searchText||(a.pageCount=s.pageCount,a.total=s.total,a.pageNo=2)):(a.huiyuan_list=[],t.showToast({title:u,duration:1e3,icon:"none"})),a.searchText=""}})},getSearchStr:function(t){var e=t.detail.value;this.searchText=e.replace(/\s/g,"")},call:function(e){t.makePhoneCall({phoneNumber:e})},toHuiyuanDetails:function(e){t.navigateTo({url:"./details/huiyuandetails",success:function(a){t.setStorageSync("huiyuanid",e.id)}})}}};e.default=r}).call(this,a("543d")["default"])},"4ec3":function(t,e,a){"use strict";(function(t){a("709b");n(a("66fd"));var e=n(a("a583"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},"50af":function(t,e,a){"use strict";a.r(e);var n=a("0207"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=i.a},a3cd:function(t,e,a){"use strict";var n=a("016a"),i=a.n(n);i.a},a518:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement;t._self._c},u=[]},a583:function(t,e,a){"use strict";a.r(e);var n=a("a518"),i=a("50af");for(var u in i)"default"!==u&&function(t){a.d(e,t,(function(){return i[t]}))}(u);a("a3cd");var s,o=a("f0c5"),r=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=r.exports}},[["4ec3","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shimingrenzheng/add-or-update"],{"0951":function(e,n,t){"use strict";t.r(n);var r=t("f25e"),i=t("8648");for(var u in i)"default"!==u&&function(e){t.d(n,e,(function(){return i[e]}))}(u);t("61c8");var a,o=t("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"329d7ac0",null,!1,r["a"],a);n["default"]=c.exports},"13eb":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,i,u,a){try{var o=e[u](a),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,i)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){u(a,r,i,o,c,"next",e)}function c(e){u(a,r,i,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("75db"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{xingming:"",shenfenzheng:"",shoujihaoma:"",nianling:"",xingbie:"",touxiang:"",yonghuming:"",userid:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{xingming:!1,shenfenzheng:!1,shoujihaoma:!1,nianling:!1,xingbie:!1,touxiang:!1,yonghuming:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return a(r.default.mark((function i(){var u,a,o,c;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return u=e.getStorageSync("nowTable"),i.next=3,t.$api.session(u);case 3:if(a=i.sent,t.user=a.data,t.ruleForm.yonghuming=t.user.yonghuming,t.xingbieOptions="男,女".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=15;break}return t.ruleForm.id=n.id,i.next=13,t.$api.info("shimingrenzheng",t.ruleForm.id);case 13:a=i.sent,t.ruleForm=a.data;case 15:if(!n.cross){i.next=54;break}o=e.getStorageSync("crossObj"),i.t0=r.default.keys(o);case 18:if((i.t1=i.t0()).done){i.next=54;break}if(c=i.t1.value,"xingming"!=c){i.next=24;break}return t.ruleForm.xingming=o[c],t.ro.xingming=!0,i.abrupt("continue",18);case 24:if("shenfenzheng"!=c){i.next=28;break}return t.ruleForm.shenfenzheng=o[c],t.ro.shenfenzheng=!0,i.abrupt("continue",18);case 28:if("shoujihaoma"!=c){i.next=32;break}return t.ruleForm.shoujihaoma=o[c],t.ro.shoujihaoma=!0,i.abrupt("continue",18);case 32:if("nianling"!=c){i.next=36;break}return t.ruleForm.nianling=o[c],t.ro.nianling=!0,i.abrupt("continue",18);case 36:if("xingbie"!=c){i.next=40;break}return t.ruleForm.xingbie=o[c],t.ro.xingbie=!0,i.abrupt("continue",18);case 40:if("touxiang"!=c){i.next=44;break}return t.ruleForm.touxiang=o[c],t.ro.touxiang=!0,i.abrupt("continue",18);case 44:if("yonghuming"!=c){i.next=48;break}return t.ruleForm.yonghuming=o[c],t.ro.yonghuming=!0,i.abrupt("continue",18);case 48:if("userid"!=c){i.next=52;break}return t.ruleForm.userid=o[c],t.ro.userid=!0,i.abrupt("continue",18);case 52:i.next=18;break;case 54:t.styleChange();case 55:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return a(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.ruleForm.shenfenzheng||e.$validate.checkIdCard(e.ruleForm.shenfenzheng)){n.next=3;break}return e.$utils.msg("身份证应输入身份证格式"),n.abrupt("return");case 3:if(!e.ruleForm.shoujihaoma||e.$validate.isMobile(e.ruleForm.shoujihaoma)){n.next=6;break}return e.$utils.msg("手机号码应输入手机格式"),n.abrupt("return");case 6:if(!e.ruleForm.nianling||e.$validate.isIntNumer(e.ruleForm.nianling)){n.next=9;break}return e.$utils.msg("年龄应输入整数"),n.abrupt("return");case 9:if(!e.ruleForm.id){n.next=14;break}return n.next=12,e.$api.update("shimingrenzheng",e.ruleForm);case 12:n.next=16;break;case 14:return n.next=16,e.$api.add("shimingrenzheng",e.ruleForm);case 16:e.$utils.msgBack("提交成功");case 17:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},"61c8":function(e,n,t){"use strict";var r=t("ed84"),i=t.n(r);i.a},8648:function(e,n,t){"use strict";t.r(n);var r=t("13eb"),i=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=i.a},"8b43":function(e,n,t){"use strict";(function(e){t("daed");r(t("66fd"));var n=r(t("0951"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},ed84:function(e,n,t){},f25e:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var i=function(){var e=this,n=e.$createElement;e._self._c},u=[]}},[["8b43","common/runtime","common/vendor"]]]);
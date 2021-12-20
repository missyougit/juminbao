(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/logon/logon"],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/*!***********************************************************************!*\
  !*** D:/work/daima/juminbao/main.js?{"page":"pages%2Flogon%2Flogon"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _logon = _interopRequireDefault(__webpack_require__(/*! ./pages/logon/logon.vue */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_logon.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 13 */
/*!****************************************************!*\
  !*** D:/work/daima/juminbao/pages/logon/logon.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logon_vue_vue_type_template_id_41696864___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logon.vue?vue&type=template&id=41696864& */ 14);
/* harmony import */ var _logon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logon.vue?vue&type=script&lang=js& */ 16);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _logon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _logon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _logon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logon.vue?vue&type=style&index=0&lang=css& */ 18);
/* harmony import */ var _QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _logon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _logon_vue_vue_type_template_id_41696864___WEBPACK_IMPORTED_MODULE_0__["render"],
  _logon_vue_vue_type_template_id_41696864___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _logon_vue_vue_type_template_id_41696864___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/logon/logon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 14 */
/*!***********************************************************************************!*\
  !*** D:/work/daima/juminbao/pages/logon/logon.vue?vue&type=template&id=41696864& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_template_id_41696864___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./logon.vue?vue&type=template&id=41696864& */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_template_id_41696864___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_template_id_41696864___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_template_id_41696864___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_template_id_41696864___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/daima/juminbao/pages/logon/logon.vue?vue&type=template&id=41696864& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/*!*****************************************************************************!*\
  !*** D:/work/daima/juminbao/pages/logon/logon.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./logon.vue?vue&type=script&lang=js& */ 17);
/* harmony import */ var _QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/daima/juminbao/pages/logon/logon.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    var baseUrl = getApp().globalData.baseUrl;
    return {
      baseUrl: baseUrl,
      // phone: '',
      // password: '',
      phone: '13551266914',
      password: '123456',
      confirmPassword: '',
      isLogon: true,
      imageUrl: '../../static/images/shouye.jpg' };

  },
  onLoad: function onLoad() {},

  onShow: function onShow() {},

  methods: {

    wechatLogon: function wechatLogon() {var _this = this;

      var openId = uni.getStorageSync("openId");
      if (openId == null || openId == '') {
        uni.login({
          provider: 'weixin',
          success: function success(loginRes) {
            // 获取用户信息
            uni.getUserInfo({
              provider: 'weixin',
              success: function success(infoRes) {



                var yuangong = infoRes.userInfo;
                yuangong.code = loginRes.code;
                uni.request({
                  url: _this.baseUrl + '/yuangong/wechat/logon',
                  method: 'POST',
                  data: yuangong,
                  success: function success(res) {

                    console.log("--", infoRes);var _res$data =

                    res.data,status = _res$data.status,message = _res$data.message,result = _res$data.result;
                    if (status == 200) {
                      uni.showLoading({
                        title: '加载中' });

                      uni.setStorageSync("openId", result.openId);
                      uni.switchTab({
                        url: '/pages/tabs/huiyuan_list',
                        success: function success() {
                          uni.hideLoading();
                        } });

                    } else {
                      uni.showToast({
                        title: message,
                        duration: 1000,
                        icon: 'none' });

                    }

                  } });


              } });


          } });


      } else {
        uni.request({
          url: this.baseUrl + '/yuangong/wechatLogon/by/' + openId,
          success: function success(res) {var _res$data2 =
            res.data,status = _res$data2.status,message = _res$data2.message;
            if (status == 200) {
              uni.showLoading({
                title: '加载中' });

              uni.switchTab({
                url: '/pages/tabs/huiyuan_list',
                success: function success() {
                  uni.hideLoading();
                } });

            } else {
              uni.showToast({
                title: message,
                duration: 1000,
                icon: 'none' });

            }
          } });

      }

    },

    /**
        * 验证是否为手机号码（移动手机）
        */
    isMobilePhone: function isMobilePhone(source) {
      var regex = /^[1][3,4,5,7,8][0-9]{9}$/;
      return regex.test(source);
    },

    logon: function logon() {
      // 电话号码不能为空
      if (this.phone == null || this.phone == '') {
        uni.showToast({
          title: '电话号码不能为空',
          duration: 1000,
          icon: 'none' });

        return;
      }
      // 电话号码不正确
      var flag = this.isMobilePhone(this.phone);
      if (!flag) {
        uni.showToast({
          title: '电话号码不正确',
          duration: 1000,
          icon: 'none' });

        return;
      }
      // 密码不能为空
      if (this.password == null || this.password == '') {
        uni.showToast({
          title: '密码不能为空',
          duration: 1000,
          icon: 'none' });

        return;
      }
      // 密码位数不对
      if (this.password.length < 6) {
        uni.showToast({
          title: '密码不少于6位',
          duration: 1000,
          icon: 'none' });

        return;
      }

      var yuangong = { phone: this.phone, password: this.password };
      uni.request({
        url: this.baseUrl + '/yuangong/logon',
        method: 'POST',
        data: yuangong,
        success: function success(res) {var _res$data3 =

          res.data,status = _res$data3.status,message = _res$data3.message,result = _res$data3.result;

          if (status == 200) {
            uni.showLoading({
              title: '加载中' });

            uni.setStorageSync("yuangongid", result.id);
            uni.switchTab({
              url: '/pages/tabs/huiyuan_list',
              success: function success() {
                uni.hideLoading();
              } });


          } else {
            uni.showToast({
              title: message,
              duration: 1000,
              icon: 'none' });

          }

        } });

    },

    register: function register() {var _this2 = this;
      // 电话号码不能为空
      if (this.phone == null || this.phone == '') {
        uni.showToast({
          title: '电话号码不能为空',
          duration: 1000,
          icon: 'none' });

        return;
      }
      // 电话号码不正确
      var flag = this.isMobilePhone(this.phone);
      if (!flag) {
        uni.showToast({
          title: '电话号码不正确',
          duration: 1000,
          icon: 'none' });

        return;
      }
      // 密码不能为空
      if (this.password == null || this.password == '') {
        uni.showToast({
          title: '密码不能为空',
          duration: 1000,
          icon: 'none' });

        return;
      }
      // 密码位数不对
      if (this.password.length < 6) {
        uni.showToast({
          title: '密码不少于6位',
          duration: 1000,
          icon: 'none' });

        return;
      }
      // 两个密码不相同
      if (this.password != this.confirmPassword) {
        uni.showToast({
          title: '两个密码不相同',
          duration: 1000,
          icon: 'none' });

        return;
      }
      var yuangong = { phone: this.phone, password: this.password };
      uni.request({
        url: this.baseUrl + '/yuangong/register',
        method: 'POST',
        data: yuangong,
        success: function success(res) {var
          status = res.data.status;var
          message = res.data.message;
          if (status == 200 || status == 400) {
            _this2.isLogon = !_this2.isLogon;
            _this2.password = '';
            _this2.confirmPassword = '';
          }
          uni.showToast({
            title: message,
            duration: 1000,
            icon: 'none' });

        } });

    },

    // 获取输入的电话号码
    getPhone: function getPhone(e) {var
      value = e.detail.value;
      this.phone = value.replace(/\s/g, "");
    },
    // 获取输入的密码
    getPassword: function getPassword(e) {var
      value = e.detail.value;
      this.password = value.replace(/\s/g, "");
    },
    // 注册时获取输入的确认密码
    getConfirmPassword: function getConfirmPassword(e) {var
      value = e.detail.value;
      this.confirmPassword = value.replace(/\s/g, "");
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 18 */
/*!*************************************************************************************!*\
  !*** D:/work/daima/juminbao/pages/logon/logon.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../QMDownload/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./logon.vue?vue&type=style&index=0&lang=css& */ 19);
/* harmony import */ var _QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_QMDownload_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_logon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 19 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/daima/juminbao/pages/logon/logon.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[12,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/logon/logon.js.map
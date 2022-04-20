(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tasks: '',
      singleTaskData: {
        id: '',
        name: ''
      },
      alertType: '',
      alertMessage: ''
    };
  },
  mounted: function mounted() {
    this.fetchData();
  },
  methods: {
    closeModal: function closeModal(modalname) {
      this.$refs[modalname].hide();
    },
    fetchData: function fetchData() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/getTaskList').then(function (res) {
        _this.tasks = res.data.tasks;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    viewTask: function viewTask(event, data) {
      this.clearTaskData();
      this.singleTaskData.name = data.name;
      this.$refs['viewTaskModal'].show();
    },
    addTask: function addTask() {
      this.clearTaskData();
      this.$refs['addTaskModal'].show();
    },
    addTaskData: function addTaskData() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/addTask', {
        name: this.singleTaskData.name
      }).then(function (res) {
        if (res.data.responseCode == 1) {
          _this2.alertType = "alert-success";
          _this2.alertMessage = "Successfully added!!!";
        } else {
          _this2.alertType = "alert-danger";
          _this2.alertMessage = "Cannot add task!!!";
        }

        _this2.$refs['addTaskModal'].hide();

        _this2.fetchData();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    updateTask: function updateTask(event, data) {
      this.clearTaskData();
      this.singleTaskData.id = data.id;
      this.singleTaskData.name = data.name;
      this.$refs['updateTaskModal'].show();
    },
    updateTaskData: function updateTaskData() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/updateTask', {
        id: this.singleTaskData.id,
        name: this.singleTaskData.name
      }).then(function (res) {
        if (res.data.responseCode == 1) {
          _this3.alertType = "alert-success";
          _this3.alertMessage = "Successfully updated!!!";
        } else {
          _this3.alertType = "alert-danger";
          _this3.alertMessage = "Cannot update task!!!";
        }

        _this3.$refs['updateTaskModal'].hide();

        _this3.fetchData();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    deleteTask: function deleteTask(event, data) {
      this.clearTaskData();
      this.singleTaskData.id = data.id;
      this.singleTaskData.name = data.name;
      this.$refs['deleteTaskModal'].show();
    },
    deleteTaskData: function deleteTaskData() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/deleteTask', {
        id: this.singleTaskData.id
      }).then(function (res) {
        if (res.data.responseCode == 1) {
          _this4.alertType = "alert-success";
          _this4.alertMessage = "Successfully deleted!!!";
        } else {
          _this4.alertType = "alert-danger";
          _this4.alertMessage = "Cannot delete task!!!";
        }

        _this4.$refs['deleteTaskModal'].hide();

        _this4.fetchData();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    clearTaskData: function clearTaskData() {
      this.singleTaskData.name = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.alertMessage != ""
        ? _c(
            "div",
            {
              staticClass: "alert",
              class: _vm.alertType,
              attrs: { role: "alert" },
            },
            [_vm._v("\n        " + _vm._s(_vm.alertMessage) + "\n    ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-success btn-sm my-2",
          on: {
            click: function ($event) {
              return _vm.addTask()
            },
          },
        },
        [_c("i", { staticClass: "fa fa-plus" }), _vm._v(" Add New Task")]
      ),
      _vm._v(" "),
      _c("table", { staticClass: "table table-striped table-bordered" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.tasks, function (data, key) {
            return _c("tr", { key: key }, [
              _c("td", { staticClass: "text-center" }, [
                _vm._v(_vm._s(key + 1)),
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(data.name))]),
              _vm._v(" "),
              _c("td", { staticClass: "text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-sm",
                    on: {
                      click: function (event) {
                        return _vm.viewTask(event, data)
                      },
                    },
                  },
                  [_c("i", { staticClass: "fa fa-eye" })]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info btn-sm",
                    on: {
                      click: function (event) {
                        return _vm.updateTask(event, data)
                      },
                    },
                  },
                  [_c("i", { staticClass: "fa fa-pencil" })]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger btn-sm",
                    on: {
                      click: function (event) {
                        return _vm.deleteTask(event, data)
                      },
                    },
                  },
                  [_c("i", { staticClass: "fa fa-trash" })]
                ),
              ]),
            ])
          }),
          0
        ),
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "viewTaskModal",
          attrs: {
            "header-class": "border-0 py-0",
            "body-class": "text-justify",
            "hide-footer": "",
          },
        },
        [
          _c("div", { staticClass: "mt-3" }, [
            _c("hr"),
            _vm._v(" "),
            _c("p", [
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("Task name: "),
              ]),
              _vm._v(_vm._s(this.singleTaskData.name)),
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-secondary",
                on: {
                  click: function ($event) {
                    return _vm.closeModal("viewTaskModal")
                  },
                },
              },
              [_vm._v(" Close")]
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "addTaskModal",
          attrs: {
            "header-class": "border-0 py-0",
            "body-class": "text-justify",
            "hide-footer": "",
          },
        },
        [
          _c("div", { staticClass: "mt-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "addTask" } }, [_vm._v("Task Name")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.singleTaskData.name,
                    expression: "singleTaskData.name",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "addTask",
                  placeholder: "Please input your task name ...",
                },
                domProps: { value: _vm.singleTaskData.name },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.singleTaskData, "name", $event.target.value)
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", [
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-secondary",
                  on: {
                    click: function ($event) {
                      return _vm.closeModal("addTaskModal")
                    },
                  },
                },
                [_c("i", { staticClass: "fa fa-times" }), _vm._v(" Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-success",
                  on: {
                    click: function ($event) {
                      return _vm.addTaskData()
                    },
                  },
                },
                [_c("i", { staticClass: "fa fa-plus" }), _vm._v(" Add")]
              ),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "updateTaskModal",
          attrs: {
            "header-class": "border-0 py-0",
            "body-class": "text-justify",
            "hide-footer": "",
          },
        },
        [
          _c("div", { staticClass: "mt-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "addTask" } }, [_vm._v("Task Name")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.singleTaskData.name,
                    expression: "singleTaskData.name",
                  },
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.singleTaskData.name },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.singleTaskData, "name", $event.target.value)
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", [
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-secondary",
                  on: {
                    click: function ($event) {
                      return _vm.closeModal("updateTaskModal")
                    },
                  },
                },
                [_c("i", { staticClass: "fa fa-times" }), _vm._v(" Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-success",
                  on: {
                    click: function ($event) {
                      return _vm.updateTaskData()
                    },
                  },
                },
                [_c("i", { staticClass: "fa fa-book" }), _vm._v("  Update")]
              ),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "deleteTaskModal",
          attrs: {
            "header-class": "border-0 py-0",
            "body-class": "text-justify",
            "hide-footer": "",
          },
        },
        [
          _c("div", { staticClass: "text-center mt-3" }, [
            _c("hr"),
            _vm._v(" "),
            _c("p", [
              _vm._v("Are you sure to delete task # "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v(_vm._s(this.singleTaskData.name)),
              ]),
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", [
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-secondary",
                  on: {
                    click: function ($event) {
                      return _vm.closeModal("deleteTaskModal")
                    },
                  },
                },
                [_c("i", { staticClass: "fa fa-times" }), _vm._v(" Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-danger",
                  on: {
                    click: function ($event) {
                      return _vm.deleteTaskData()
                    },
                  },
                },
                [_c("i", { staticClass: "fa fa-trash" }), _vm._v(" Delete")]
              ),
            ]),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", { staticStyle: { width: "10%", "text-align": "center" } }, [
        _vm._v("SL"),
      ]),
      _vm._v(" "),
      _c("th", { staticStyle: { width: "60%" } }, [_vm._v("Task Name")]),
      _vm._v(" "),
      _c("th", { staticStyle: { width: "30%", "text-align": "center" } }, [
        _vm._v("Action"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
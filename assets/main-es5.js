function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var handlebars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! handlebars */
    "./node_modules/handlebars/dist/cjs/handlebars.js");
    /* harmony import */


    var handlebars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_1__);

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.runhandleBar();
        }
      }, {
        key: "runhandleBar",
        value: function runhandleBar() {
          var source = "<h1 class=\"visibility-hidden\">{{ help_center.name }}</h1>\n\n    <section id=\"main-content\" class=\"section hero\">\n      <div class=\"hero-inner\">\n        <h2 class=\"visibility-hidden\">{{ t 'search' }}</h2>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" focusable=\"false\" viewBox=\"0 0 12 12\" class=\"search-icon\" aria-hidden=\"true\">\n          <circle cx=\"4.5\" cy=\"4.5\" r=\"4\" fill=\"none\" stroke=\"currentColor\"/>\n          <path stroke=\"currentColor\" stroke-linecap=\"round\" d=\"M11 11L7.5 7.5\"/>\n        </svg>\n        {{search submit=false instant=settings.instant_search class='search search-full'}}\n      </div>\n    </section>\n\n    <div class=\"container\">\n      <section class=\"section knowledge-base\">\n        <h2 class=\"visibility-hidden\">{{ t 'categories' }}</h2>\n        <section class=\"categories blocks\">\n          <ul class=\"blocks-list\">\n            {{#each categories}}\n              {{#if ../has_multiple_categories}}\n                <li class=\"blocks-item\">\n                  <a href='{{url}}' class=\"blocks-item-link\">\n                    <span class=\"blocks-item-title\">{{name}}</span>\n                    <span class=\"blocks-item-description\">{{excerpt description}}</span>\n                  </a>\n                </li>\n              {{else}}\n                {{#each sections}}\n                  <li class=\"blocks-item\">\n                    <a href='{{url}}' class=\"blocks-item-link\">\n                      <span class=\"blocks-item-title\">\n                        {{name}}\n                      </span>\n                      <span class=\"blocks-item-description\">{{excerpt description}}</span>\n                    </a>\n                  </li>\n                {{/each}}\n              {{/if}}\n            {{/each}}\n          </ul>\n          {{pagination}}\n        </section>\n\n        {{#if promoted_articles}}\n          <section class=\"articles\">\n            <h2>{{t 'promoted_articles'}}</h2>\n            <ul class=\"article-list promoted-articles\">\n              {{#each promoted_articles}}\n                <li class=\"promoted-articles-item\">\n                    <a href=\"{{url}}\">\n                      {{title}}\n\n                      {{#if internal}}\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" focusable=\"false\" viewBox=\"0 0 16 16\" class=\"icon-lock\" title=\"{{t 'internal'}}\">\n                          <rect width=\"12\" height=\"9\" x=\"2\" y=\"7\" fill=\"currentColor\" rx=\"1\" ry=\"1\"/>\n                          <path fill=\"none\" stroke=\"currentColor\" d=\"M4.5 7.5V4a3.5 3.5 0 017 0v3.5\"/>\n                        </svg>\n                      {{/if}}\n                    </a>\n                </li>\n              {{/each}}\n            </ul>\n          </section>\n        {{/if}}\n      </section>\n\n      {{#if help_center.community_enabled}}\n        <section class=\"section home-section community\">\n          <h2>{{t 'community'}}</h2>\n          {{#link 'community' class='community-link'}}\n            {{t 'join_conversation'}}\n          {{/link}}\n\n          <div class=\"community-image\"></div>\n        </section>\n      {{/if}}\n\n      <section class=\"section home-section activity\">\n        {{#if settings.show_recent_activity}}\n          {{recent_activity}}\n        {{/if}}\n      </section>\n    </div>";
          var template = handlebars__WEBPACK_IMPORTED_MODULE_1__["compile"](source);
          var data = {
            "name": "Alan",
            "hometown": "Somewhere, TX",
            "kids": [{
              "name": "Jimmy",
              "age": "12"
            }, {
              "name": "Sally",
              "age": "4"
            }]
          };
          this.result = source;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 0,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _subcomponent_subcomponent_subcomponent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./subcomponent/subcomponent/subcomponent.component */
    "./src/app/subcomponent/subcomponent/subcomponent.component.ts");
    /* harmony import */


    var _othersubcomponent_othersubcomponent_othersubcomponent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./othersubcomponent/othersubcomponent/othersubcomponent.component */
    "./src/app/othersubcomponent/othersubcomponent/othersubcomponent.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _subcomponent_subcomponent_subcomponent_component__WEBPACK_IMPORTED_MODULE_4__["SubcomponentComponent"], _othersubcomponent_othersubcomponent_othersubcomponent_component__WEBPACK_IMPORTED_MODULE_5__["OthersubcomponentComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _subcomponent_subcomponent_subcomponent_component__WEBPACK_IMPORTED_MODULE_4__["SubcomponentComponent"], _othersubcomponent_othersubcomponent_othersubcomponent_component__WEBPACK_IMPORTED_MODULE_5__["OthersubcomponentComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/othersubcomponent/othersubcomponent/othersubcomponent.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/othersubcomponent/othersubcomponent/othersubcomponent.component.ts ***!
    \************************************************************************************/

  /*! exports provided: OthersubcomponentComponent */

  /***/
  function srcAppOthersubcomponentOthersubcomponentOthersubcomponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OthersubcomponentComponent", function () {
      return OthersubcomponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OthersubcomponentComponent = /*#__PURE__*/function () {
      function OthersubcomponentComponent() {
        _classCallCheck(this, OthersubcomponentComponent);
      }

      _createClass(OthersubcomponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OthersubcomponentComponent;
    }();

    OthersubcomponentComponent.ɵfac = function OthersubcomponentComponent_Factory(t) {
      return new (t || OthersubcomponentComponent)();
    };

    OthersubcomponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OthersubcomponentComponent,
      selectors: [["app-othersubcomponent"]],
      decls: 2,
      vars: 0,
      template: function OthersubcomponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Othersubcomponent in Angular works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVyc3ViY29tcG9uZW50L290aGVyc3ViY29tcG9uZW50L290aGVyc3ViY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OthersubcomponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-othersubcomponent',
          templateUrl: './othersubcomponent.component.html',
          styleUrls: ['./othersubcomponent.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/subcomponent/subcomponent/subcomponent.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/subcomponent/subcomponent/subcomponent.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SubcomponentComponent */

  /***/
  function srcAppSubcomponentSubcomponentSubcomponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubcomponentComponent", function () {
      return SubcomponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SubcomponentComponent = /*#__PURE__*/function () {
      function SubcomponentComponent() {
        _classCallCheck(this, SubcomponentComponent);
      }

      _createClass(SubcomponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubcomponentComponent;
    }();

    SubcomponentComponent.ɵfac = function SubcomponentComponent_Factory(t) {
      return new (t || SubcomponentComponent)();
    };

    SubcomponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubcomponentComponent,
      selectors: [["app-subcomponent"]],
      decls: 2,
      vars: 0,
      consts: [[2, "margin-bottom", "60px"]],
      template: function SubcomponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subcomponent in Angular works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmNvbXBvbmVudC9zdWJjb21wb25lbnQvc3ViY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubcomponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-subcomponent',
          templateUrl: './subcomponent.component.html',
          styleUrls: ['./subcomponent.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Zendesk\copenhagen_theme\angular-src\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
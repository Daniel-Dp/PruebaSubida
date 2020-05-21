function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tramites-tramites-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tramites/tramites.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tramites/tramites.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTramitesTramitesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"TogleMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Bienvenido</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-avatar>\n        <img src=\"assets/slides/avar.jpg\" alt=\"\">\n      </ion-avatar>\n          </ion-buttons>  \n       </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/tramites/tramites-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/tramites/tramites-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: TramitesPageRoutingModule */

  /***/
  function srcAppPagesTramitesTramitesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TramitesPageRoutingModule", function () {
      return TramitesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tramites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tramites.page */
    "./src/app/pages/tramites/tramites.page.ts");

    var routes = [{
      path: '',
      component: _tramites_page__WEBPACK_IMPORTED_MODULE_3__["TramitesPage"]
    }];

    var TramitesPageRoutingModule = function TramitesPageRoutingModule() {
      _classCallCheck(this, TramitesPageRoutingModule);
    };

    TramitesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TramitesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tramites/tramites.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/tramites/tramites.module.ts ***!
    \***************************************************/

  /*! exports provided: TramitesPageModule */

  /***/
  function srcAppPagesTramitesTramitesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TramitesPageModule", function () {
      return TramitesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _tramites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tramites-routing.module */
    "./src/app/pages/tramites/tramites-routing.module.ts");
    /* harmony import */


    var _tramites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tramites.page */
    "./src/app/pages/tramites/tramites.page.ts");

    var TramitesPageModule = function TramitesPageModule() {
      _classCallCheck(this, TramitesPageModule);
    };

    TramitesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tramites_routing_module__WEBPACK_IMPORTED_MODULE_5__["TramitesPageRoutingModule"]],
      declarations: [_tramites_page__WEBPACK_IMPORTED_MODULE_6__["TramitesPage"]]
    })], TramitesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tramites/tramites.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/tramites/tramites.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTramitesTramitesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYW1pdGVzL3RyYW1pdGVzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/tramites/tramites.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/tramites/tramites.page.ts ***!
    \*************************************************/

  /*! exports provided: TramitesPage */

  /***/
  function srcAppPagesTramitesTramitesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TramitesPage", function () {
      return TramitesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var TramitesPage = /*#__PURE__*/function () {
      function TramitesPage(menuCtrl) {
        _classCallCheck(this, TramitesPage);

        this.menuCtrl = menuCtrl;
        this.componentes = [];
      }

      _createClass(TramitesPage, [{
        key: "TogleMenu",
        value: function TogleMenu() {
          this.menuCtrl.toggle();
          /*hace mostrar y ocultar el boton*/
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TramitesPage;
    }();

    TramitesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    TramitesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tramites',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tramites.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tramites/tramites.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tramites.page.scss */
      "./src/app/pages/tramites/tramites.page.scss"))["default"]]
    })], TramitesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tramites-tramites-module-es5.js.map
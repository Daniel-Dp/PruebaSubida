function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"TogleMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Bienvenido</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-avatar>\n        <img src=\"assets/slides/avar.jpg\" alt=\"\">\n      </ion-avatar>\n          </ion-buttons>  \n       </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal =\"end\"> \n    <ion-fab-button color=\"morado\" >\n  <ion-icon name=\"add\" ></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button><ion-icon name=\"logo-facebook\" color=\"facebook\"></ion-icon></ion-fab-button>\n      <ion-fab-button><ion-icon name=\"logo-twitter\" color=\"secondary\"></ion-icon></ion-fab-button>\n      <ion-fab-button><ion-icon name=\"logo-instagram\" color=\"morado\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-slides pager=\"false\">\n  \n    <ion-slide *ngFor=\"let slide of slidesP\">   \n      <div    class=\"slide-img-padding\">\n        <img [src]=\"slide.img\">\n      </div>\n     <div>\n       <h3   [routerLink]=\"slide.redirecTo\" [innerHTML] =\"slide.titulo\"></h3>\n     </div>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/icon/Slide3.svg\"/>\n      <h4 >Realizar Tramites</h4>\n      <ion-button  routerLink=\"/tramites\" fill=\"clear\">Continuar<ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button>\n    </ion-slide>\n  \n  </ion-slides>\n      \n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-grid fixed>\n<ion-row>\n  <ion-col size=\"10\" offset=\"1\">\n<ion-button  style=\"height: 100%;\"  color=\"morado\" expand=\"full\"  shape=\"round\" mode=\"ios\"\n class=\"btn-primary\">\nMI HORARIO DE CLASES\n</ion-button>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"10\" offset=\"1\">\n<ion-button \nexpand=\"full\" \nfill=\"clear\"\nclass=\"btn-clear\">\nMi perfil\n</ion-button>\n  </ion-col>\n</ion-row>\n  </ion-grid>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".Fondo {\n  color: #1C9EF5;\n}\n\n.centrado {\n  text-align: center;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n/*.botonAbout{\n  text-align: center;\n\n}*/\n\nion-slide {\n  display: block;\n}\n\n.slide-img-padding {\n  padding: 40px;\n}\n\nh3 {\n  font-size: 30px;\n  font-weight: lighter;\n  margin-bottom: -10px;\n  color: #7b7575;\n}\n\nh4 {\n  font-size: 30px;\n  font-weight: lighter;\n  margin-bottom: 20px;\n  color: #7b7575;\n}\n\nion-footer {\n  background: #ffffff;\n}\n\n.btn-primary {\n  height: 60px;\n}\n\n.btn-clear {\n  color: #7b7575;\n  font-weight: lighter;\n}\n\nion-slides {\n  --bullet-background:grey;\n  --bullet-background-active:\t#8890B2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXERhbmllbFxcRGVza3RvcFxcaW9uaWNFdm9sXFxteUFwcC9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBQTtBQ0FKOztBREdFO0VBQ0Usa0JBQUE7QUNBSjs7QURJRTtFQUNFLHlCQUFBO0FDREo7O0FER0U7OztFQUFBOztBQU1BO0VBRUUsY0FBQTtBQ0hKOztBRFVBO0VBQ0EsYUFBQTtBQ1BBOztBRFNBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDTko7O0FEUUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNMRjs7QURPQTtFQUNJLG1CQUFBO0FDSko7O0FETUE7RUFDRSxZQUFBO0FDSEY7O0FES0E7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUNGRjs7QURJQTtFQUNFLHdCQUFBO0VBQ0EsbUNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuRm9uZG97XHJcblxyXG4gICAgY29sb3I6IzFDOUVGNTtcclxuICAgIFxyXG4gIH1cclxuICAuY2VudHJhZG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICB9XHJcbiBcclxuICBpb24tY29udGVudCBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xyXG4gIH1cclxuICAvKi5ib3RvbkFib3V0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgfSovXHJcbiAgXHJcbiAgXHJcbiAgaW9uLXNsaWRle1xyXG5cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICBcclxuICAgICAgXHJcbiAgICAgXHJcblxyXG59XHJcbi5zbGlkZS1pbWctcGFkZGluZ3tcclxucGFkZGluZzogNDBweDtcclxufVxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgICBjb2xvcjogIzdiNzU3NTtcclxufVxyXG5oNHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogIzdiNzU3NTtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG4uYnRuLXByaW1hcnl7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5idG4tY2xlYXJ7XHJcbiAgY29sb3I6ICM3Yjc1NzU7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuaW9uLXNsaWRlc3tcclxuICAtLWJ1bGxldC1iYWNrZ3JvdW5kXHQ6Z3JleTtcclxuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTpcdCM4ODkwQjI7XHJcbiAgXHJcblxyXG59IiwiLkZvbmRvIHtcbiAgY29sb3I6ICMxQzlFRjU7XG59XG5cbi5jZW50cmFkbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4vKi5ib3RvbkFib3V0e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn0qL1xuaW9uLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zbGlkZS1pbWctcGFkZGluZyB7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gIGNvbG9yOiAjN2I3NTc1O1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAjN2I3NTc1O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uYnRuLWNsZWFyIHtcbiAgY29sb3I6ICM3Yjc1NzU7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDpncmV5O1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTpcdCM4ODkwQjI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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

    var HomePage = /*#__PURE__*/function () {
      function HomePage(menuCtrl) {
        _classCallCheck(this, HomePage);

        this.menuCtrl = menuCtrl;
        this.slidesP = [{
          img: 'assets/icon/Slide1.svg',
          titulo: 'Notas actuales',
          redirecTo: '/informacion'
        }, {
          img: 'assets/icon/Slide4.svg',
          titulo: 'Mi CV',
          redirecTo: '/perfil'
        }, {
          img: 'assets/icon/Slide2.svg',
          titulo: 'Pagos pendientes',
          redirecTo: '/finanzas'
        }];
        this.componentes = [];
      }

      _createClass(HomePage, [{
        key: "TogleMenu",
        value: function TogleMenu() {
          this.menuCtrl.toggle();
          /*hace mostrar y ocultar el boton*/
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map
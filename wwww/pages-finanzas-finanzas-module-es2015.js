(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-finanzas-finanzas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/finanzas/finanzas.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/finanzas/finanzas.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"TogleMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Finanzas</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-avatar>\n        <img src=\"assets/slides/avar.jpg\" alt=\"\">\n      </ion-avatar>\n          </ion-buttons>  \n       </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/finanzas/finanzas-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/finanzas/finanzas-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FinanzasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanzasPageRoutingModule", function() { return FinanzasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _finanzas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finanzas.page */ "./src/app/pages/finanzas/finanzas.page.ts");




const routes = [
    {
        path: '',
        component: _finanzas_page__WEBPACK_IMPORTED_MODULE_3__["FinanzasPage"]
    }
];
let FinanzasPageRoutingModule = class FinanzasPageRoutingModule {
};
FinanzasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FinanzasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/finanzas/finanzas.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/finanzas/finanzas.module.ts ***!
  \***************************************************/
/*! exports provided: FinanzasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanzasPageModule", function() { return FinanzasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _finanzas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finanzas-routing.module */ "./src/app/pages/finanzas/finanzas-routing.module.ts");
/* harmony import */ var _finanzas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finanzas.page */ "./src/app/pages/finanzas/finanzas.page.ts");







let FinanzasPageModule = class FinanzasPageModule {
};
FinanzasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _finanzas_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinanzasPageRoutingModule"]
        ],
        declarations: [_finanzas_page__WEBPACK_IMPORTED_MODULE_6__["FinanzasPage"]]
    })
], FinanzasPageModule);



/***/ }),

/***/ "./src/app/pages/finanzas/finanzas.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/finanzas/finanzas.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpbmFuemFzL2ZpbmFuemFzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/finanzas/finanzas.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/finanzas/finanzas.page.ts ***!
  \*************************************************/
/*! exports provided: FinanzasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanzasPage", function() { return FinanzasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let FinanzasPage = class FinanzasPage {
    constructor(menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.componentes = [];
    }
    TogleMenu() {
        this.menuCtrl.toggle(); /*hace mostrar y ocultar el boton*/
    }
    ngOnInit() {
    }
};
FinanzasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
FinanzasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-finanzas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./finanzas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/finanzas/finanzas.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./finanzas.page.scss */ "./src/app/pages/finanzas/finanzas.page.scss")).default]
    })
], FinanzasPage);



/***/ })

}]);
//# sourceMappingURL=pages-finanzas-finanzas-module-es2015.js.map
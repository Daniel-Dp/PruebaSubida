(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-informacion-informacion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/informacion/informacion.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/informacion/informacion.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"TogleMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Info Académica</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-avatar>\n        <img src=\"assets/slides/avar.jpg\" alt=\"\">\n      </ion-avatar>\n          </ion-buttons>  \n       </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/informacion/informacion-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/informacion/informacion-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: InformacionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionPageRoutingModule", function() { return InformacionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _informacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./informacion.page */ "./src/app/pages/informacion/informacion.page.ts");




const routes = [
    {
        path: '',
        component: _informacion_page__WEBPACK_IMPORTED_MODULE_3__["InformacionPage"]
    }
];
let InformacionPageRoutingModule = class InformacionPageRoutingModule {
};
InformacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InformacionPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/informacion/informacion.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/informacion/informacion.module.ts ***!
  \*********************************************************/
/*! exports provided: InformacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionPageModule", function() { return InformacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _informacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./informacion-routing.module */ "./src/app/pages/informacion/informacion-routing.module.ts");
/* harmony import */ var _informacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./informacion.page */ "./src/app/pages/informacion/informacion.page.ts");







let InformacionPageModule = class InformacionPageModule {
};
InformacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _informacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["InformacionPageRoutingModule"]
        ],
        declarations: [_informacion_page__WEBPACK_IMPORTED_MODULE_6__["InformacionPage"]]
    })
], InformacionPageModule);



/***/ }),

/***/ "./src/app/pages/informacion/informacion.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/informacion/informacion.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZm9ybWFjaW9uL2luZm9ybWFjaW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/informacion/informacion.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/informacion/informacion.page.ts ***!
  \*******************************************************/
/*! exports provided: InformacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionPage", function() { return InformacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let InformacionPage = class InformacionPage {
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
InformacionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
InformacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-informacion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./informacion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/informacion/informacion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./informacion.page.scss */ "./src/app/pages/informacion/informacion.page.scss")).default]
    })
], InformacionPage);



/***/ })

}]);
//# sourceMappingURL=pages-informacion-informacion-module-es2015.js.map
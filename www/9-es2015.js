(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\"> <ion-menu-button></ion-menu-button> </ion-buttons>\n        <ion-title> Histórico </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let pagador of tabela.recebeuDe\">\n\n            <ion-item (click)=\"open(pagador)\">\n                <ion-label> {{pagador.nome}} </ion-label>\n                <div class=\"item-note\" slot=\"end\">\n                    <ion-label>\n                        <p>Ganho Anual: R$ {{pagador.ganhoAnual.toFixed(2)}}</p>\n                        <p>Total a Pagar: R$ {{pagador.totalAPagar.toFixed(2)}}</p>\n                    </ion-label>    \n                </div>\n            </ion-item>\n\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"danger\" (click)=\"delete(pagador)\">\n                    <ion-icon name=\"trash\" size=\"large\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");







let ListPageModule = class ListPageModule {
};
ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"] }])
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dao_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dao/table.service */ "./src/app/dao/table.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ListPage = class ListPage {
    constructor(dao, router) {
        this.dao = dao;
        this.router = router;
    }
    ngOnInit() {
        this.tabela = this.dao.tabela;
    }
    open(pagador) {
        const options = { state: { pagador } };
        this.router.navigate(["calculate"], options);
    }
    delete(pagador) {
        this.tabela.remover(pagador);
        this.dao.commit();
    }
};
ListPage.ctorParameters = () => [
    { type: _dao_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dao_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=9-es2015.js.map
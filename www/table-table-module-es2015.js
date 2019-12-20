(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-table-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/table/table.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/table/table.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\"> <ion-menu-button></ion-menu-button> </ion-buttons>\n        <ion-title>Tabela {{tabela.anoExercicio}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>Faixas IRPF</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <p>Faixa de ISENTO igual ou inferior a: R$ {{tabela.faixaIsento.toFixed(2)}}</p>\n            <p>Faixa de 7.5% igual ou inferior a: R$ {{faixa075().toFixed(2)}}</p>\n            <p>Faixa de 15% igual ou inferior a: R$ {{faixa150().toFixed(2)}}</p>\n            <p>Faixa de 22.5% igual ou inferior a: R$ {{faixa225().toFixed(2)}}</p>\n            <p>Faixa de 27.5% superior a: R$ {{faixa225().toFixed(2)}}</p>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>Tetos de Dedução</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <p>Educação: R$ {{tabela.tetoEducacao.toFixed(2)}}</p>\n            <p>Investimento em PGBL: 12%</p>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>INSS</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <p>Faixa de 8% igual ou inferior a: R$ {{inssLimite1()}}</p>\n            <p>Faixa de 9% igual ou inferior a: R$ {{inssLimite2()}}</p>\n            <p>Faixa de 11% igual ou inferior a: R$ {{inssLimite3()}}</p>\n            <p>Valor fixo de R$ {{inssAcimaLimite()}} acima de: R$ {{inssLimite3()}}</p>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/table/table.module.ts":
/*!***************************************!*\
  !*** ./src/app/table/table.module.ts ***!
  \***************************************/
/*! exports provided: TablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePageModule", function() { return TablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _table_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table.page */ "./src/app/table/table.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let TablePageModule = class TablePageModule {
};
TablePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{ path: '', component: _table_page__WEBPACK_IMPORTED_MODULE_5__["TablePage"] }])
        ],
        declarations: [_table_page__WEBPACK_IMPORTED_MODULE_5__["TablePage"]]
    })
], TablePageModule);



/***/ }),

/***/ "./src/app/table/table.page.scss":
/*!***************************************!*\
  !*** ./src/app/table/table.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/table/table.page.ts":
/*!*************************************!*\
  !*** ./src/app/table/table.page.ts ***!
  \*************************************/
/*! exports provided: TablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePage", function() { return TablePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dao_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dao/table.service */ "./src/app/dao/table.service.ts");
/* harmony import */ var src_model_tabela__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/model/tabela */ "./src/model/tabela.ts");




let TablePage = class TablePage {
    constructor(dao) {
        this.dao = dao;
    }
    ngOnInit() {
        this.tabela = this.dao.tabela;
    }
    faixa075() {
        return this.tabela.faixa075 + this.tabela.faixaIsento;
    }
    faixa150() {
        return this.faixa075() + this.tabela.faixa150;
    }
    faixa225() {
        return this.faixa150() + this.tabela.faixa225;
    }
    inssLimite1() {
        return src_model_tabela__WEBPACK_IMPORTED_MODULE_3__["Tabela"].inssLimite1.toFixed(2);
    }
    inssLimite2() {
        return src_model_tabela__WEBPACK_IMPORTED_MODULE_3__["Tabela"].inssLimite2.toFixed(2);
    }
    inssLimite3() {
        return src_model_tabela__WEBPACK_IMPORTED_MODULE_3__["Tabela"].inssLimite3.toFixed(2);
    }
    inssAcimaLimite() {
        return (src_model_tabela__WEBPACK_IMPORTED_MODULE_3__["Tabela"].taxaPadraoINSS * src_model_tabela__WEBPACK_IMPORTED_MODULE_3__["Tabela"].inssLimite3).toFixed(2);
    }
};
TablePage.ctorParameters = () => [
    { type: _dao_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"] }
];
TablePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: __webpack_require__(/*! raw-loader!./table.page.html */ "./node_modules/raw-loader/index.js!./src/app/table/table.page.html"),
        styles: [__webpack_require__(/*! ./table.page.scss */ "./src/app/table/table.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dao_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"]])
], TablePage);



/***/ })

}]);
//# sourceMappingURL=table-table-module-es2015.js.map
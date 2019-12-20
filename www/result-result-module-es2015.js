(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["result-result-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/result/result.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/result/result.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\"> <ion-back-button></ion-back-button> </ion-buttons>\n        <ion-title>Resultado</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-subtitle> <b>Total de Imposto a Pagar</b> </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content> <b>R$ {{pagador.totalAPagar.toFixed(2)}}</b> </ion-card-content>\n    </ion-card>\n    \n    <ion-card>\n        <ion-card-header>\n            <ion-card-subtitle>Faixa até R$ {{tabela.faixaIsento}} (Isento)</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content> R$ {{pagador.valorFaixaIsento}} * 0% = R$ 0.00 </ion-card-content>\n    </ion-card>\n    \n    <ion-card>\n        <ion-card-header>\n            <ion-card-subtitle> Faixa entre R$ {{tabela.faixaIsento.toFixed(2)}} e R$ {{tetoFaixa075()}} </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content> R$ {{pagador.valorFaixa075.toFixed(2)}} * 7.5% = R$ {{(pagador.valorFaixa075 * 0.075).toFixed(2)}} </ion-card-content>\n    </ion-card>\n    \n    <ion-card>\n        <ion-card-header>\n            <ion-card-subtitle> Faixa entre R$ {{tetoFaixa075()}} e R$ {{tetoFaixa150()}} </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content> R$ {{pagador.valorFaixa150.toFixed(2)}} * 15% = R$ {{(pagador.valorFaixa150 * 0.15).toFixed(2)}} </ion-card-content>\n    </ion-card>\n    \n    <ion-card>\n        <ion-card-header>\n            <ion-card-subtitle> Faixa entre R$ {{tetoFaixa150()}} e R$ {{tetoFaixa225()}} </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content> R$ {{pagador.valorFaixa225.toFixed(2)}} * 22.5% = R$ {{(pagador.valorFaixa225 * 0.225).toFixed(2)}} </ion-card-content>\n    </ion-card>\n    \n    <ion-card>\n        <ion-card-header>\n            <ion-card-subtitle> Faixa acima de R$ {{tetoFaixa225()}} </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content> R$ {{pagador.valorFaixa275.toFixed(2)}} * 27.5% = R$ {{(pagador.valorFaixa275 * 0.275).toFixed(2)}} </ion-card-content>\n    </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/result/result.module.ts":
/*!*****************************************!*\
  !*** ./src/app/result/result.module.ts ***!
  \*****************************************/
/*! exports provided: ResultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageModule", function() { return ResultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _result_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result.page */ "./src/app/result/result.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ResultPageModule = class ResultPageModule {
};
ResultPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{ path: '', component: _result_page__WEBPACK_IMPORTED_MODULE_5__["ResultPage"] }])
        ],
        declarations: [_result_page__WEBPACK_IMPORTED_MODULE_5__["ResultPage"]]
    })
], ResultPageModule);



/***/ }),

/***/ "./src/app/result/result.page.scss":
/*!*****************************************!*\
  !*** ./src/app/result/result.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/result/result.page.ts":
/*!***************************************!*\
  !*** ./src/app/result/result.page.ts ***!
  \***************************************/
/*! exports provided: ResultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPage", function() { return ResultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dao_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dao/table.service */ "./src/app/dao/table.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ResultPage = class ResultPage {
    constructor(router, dao) {
        this.router = router;
        this.dao = dao;
    }
    ngOnInit() {
        this.pagador = this.router.getCurrentNavigation().extras.state.pagador;
        this.tabela = this.dao.tabela;
        this.pagador.valorFaixaIsento = 0.0;
        this.pagador.valorFaixa075 = 0.0;
        this.pagador.valorFaixa150 = 0.0;
        this.pagador.valorFaixa225 = 0.0;
        this.pagador.valorFaixa275 = 0.0;
        this.pagador.totalAPagar = 0.0;
        this.tabela.calcularIRPF(this.pagador);
        this.dao.commit();
    }
    tetoFaixa075() {
        return (this.tabela.faixaIsento + this.tabela.faixa075).toFixed(2);
    }
    tetoFaixa150() {
        return (this.tabela.faixaIsento + this.tabela.faixa075 + this.tabela.faixa150).toFixed(2);
    }
    tetoFaixa225() {
        return (this.tabela.faixaIsento + this.tabela.faixa075 + this.tabela.faixa150 + this.tabela.faixa225).toFixed(2);
    }
};
ResultPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _dao_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"] }
];
ResultPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-result',
        template: __webpack_require__(/*! raw-loader!./result.page.html */ "./node_modules/raw-loader/index.js!./src/app/result/result.page.html"),
        styles: [__webpack_require__(/*! ./result.page.scss */ "./src/app/result/result.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _dao_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"]])
], ResultPage);



/***/ })

}]);
//# sourceMappingURL=result-result-module-es2015.js.map
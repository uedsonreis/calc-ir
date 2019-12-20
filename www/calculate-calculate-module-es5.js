(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculate-calculate-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/calculate/calculate.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/calculate/calculate.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\"> <ion-back-button></ion-back-button> </ion-buttons>\n        <ion-buttons slot=\"start\"> <ion-menu-button></ion-menu-button> </ion-buttons>\n        <ion-title>{{getTitle()}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n        <ion-item>\n            <ion-label position=\"floating\">Nome</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"pagador.nome\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Ganho Anual (R$)</ion-label>\n            <ion-input type=\"number\" pattern=\"[0-9]*\" [(ngModel)]=\"pagador.ganhoAnual\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Gastos com Educação (R$)</ion-label>\n            <ion-input type=\"number\" pattern=\"[0-9]*\" [(ngModel)]=\"educacao.valor\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Gastos com Saúde (R$)</ion-label>\n            <ion-input type=\"number\" pattern=\"[0-9]*\" [(ngModel)]=\"saude.valor\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Demais Deduções (R$)</ion-label>\n            <ion-input type=\"number\" pattern=\"[0-9]*\" [(ngModel)]=\"demais.valor\"></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <ion-button (click)=\"calculate()\" color=\"primary\" expand=\"block\">\n        <ion-icon name=\"flash\"></ion-icon> &nbsp; Calcular\n    </ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/calculate/calculate.module.ts":
/*!***********************************************!*\
  !*** ./src/app/calculate/calculate.module.ts ***!
  \***********************************************/
/*! exports provided: CalculatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatePageModule", function() { return CalculatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calculate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculate.page */ "./src/app/calculate/calculate.page.ts");







var CalculatePageModule = /** @class */ (function () {
    function CalculatePageModule() {
    }
    CalculatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _calculate_page__WEBPACK_IMPORTED_MODULE_6__["CalculatePage"] }])
            ],
            declarations: [_calculate_page__WEBPACK_IMPORTED_MODULE_6__["CalculatePage"]]
        })
    ], CalculatePageModule);
    return CalculatePageModule;
}());



/***/ }),

/***/ "./src/app/calculate/calculate.page.scss":
/*!***********************************************!*\
  !*** ./src/app/calculate/calculate.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91ZWRzb25yZWlzL0RvY3VtZW50cy9Qcm9qZXRvcy9hZGQvY2FsYy1pci9zcmMvYXBwL2NhbGN1bGF0ZS9jYWxjdWxhdGUucGFnZS5zY3NzIiwic3JjL2FwcC9jYWxjdWxhdGUvY2FsY3VsYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0ZS9jYWxjdWxhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDE1cHg7XG59IiwiaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/calculate/calculate.page.ts":
/*!*********************************************!*\
  !*** ./src/app/calculate/calculate.page.ts ***!
  \*********************************************/
/*! exports provided: CalculatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatePage", function() { return CalculatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_model_pagador__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/model/pagador */ "./src/model/pagador.ts");
/* harmony import */ var src_model_deducao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/model/deducao */ "./src/model/deducao.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dao_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dao/table.service */ "./src/app/dao/table.service.ts");






var CalculatePage = /** @class */ (function () {
    function CalculatePage(router, dao) {
        this.router = router;
        this.dao = dao;
    }
    CalculatePage.prototype.ngOnInit = function () {
        var state = this.router.getCurrentNavigation().extras.state;
        if (state === undefined || state === null) {
            this.pagador = new src_model_pagador__WEBPACK_IMPORTED_MODULE_2__["Pagador"]();
            this.saude = new src_model_deducao__WEBPACK_IMPORTED_MODULE_3__["Deducao"]();
            this.demais = new src_model_deducao__WEBPACK_IMPORTED_MODULE_3__["Deducao"]();
            this.educacao = new src_model_deducao__WEBPACK_IMPORTED_MODULE_3__["Deducao"]();
            this.educacao.teto = this.dao.tabela.tetoEducacao;
            this.pagador.pagou.push(this.educacao);
            this.pagador.pagou.push(this.saude);
            this.pagador.pagou.push(this.demais);
        }
        else {
            this.pagador = state.pagador;
            this.educacao = this.pagador.pagou[0];
            this.saude = this.pagador.pagou[1];
            this.demais = this.pagador.pagou[2];
        }
    };
    CalculatePage.prototype.getTitle = function () {
        if ((this.pagador.nome === null) || this.pagador.nome === undefined) {
            return "Novo Cálculo";
        }
        else {
            return this.pagador.nome;
        }
    };
    CalculatePage.prototype.calculate = function () {
        if ((this.pagador.ganhoAnual === undefined) || (this.pagador.ganhoAnual <= 0)) {
            this.pagador.ganhoAnual = 0.00;
        }
        this.pagador.pagou.forEach(function (deducao) {
            if ((deducao.valor === undefined) || (deducao.valor <= 0)) {
                deducao.valor = 0.00;
            }
        });
        var options = { state: { pagador: this.pagador } };
        this.router.navigate(["result"], options);
    };
    CalculatePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _dao_table_service__WEBPACK_IMPORTED_MODULE_5__["TableService"] }
    ]; };
    CalculatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calculate',
            template: __webpack_require__(/*! raw-loader!./calculate.page.html */ "./node_modules/raw-loader/index.js!./src/app/calculate/calculate.page.html"),
            styles: [__webpack_require__(/*! ./calculate.page.scss */ "./src/app/calculate/calculate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _dao_table_service__WEBPACK_IMPORTED_MODULE_5__["TableService"]])
    ], CalculatePage);
    return CalculatePage;
}());



/***/ }),

/***/ "./src/model/deducao.ts":
/*!******************************!*\
  !*** ./src/model/deducao.ts ***!
  \******************************/
/*! exports provided: Deducao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deducao", function() { return Deducao; });
var Deducao = /** @class */ (function () {
    function Deducao() {
    }
    return Deducao;
}());



/***/ }),

/***/ "./src/model/pagador.ts":
/*!******************************!*\
  !*** ./src/model/pagador.ts ***!
  \******************************/
/*! exports provided: Pagador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagador", function() { return Pagador; });
var Pagador = /** @class */ (function () {
    function Pagador() {
        this.pagou = new Array();
    }
    return Pagador;
}());



/***/ })

}]);
//# sourceMappingURL=calculate-calculate-module-es5.js.map
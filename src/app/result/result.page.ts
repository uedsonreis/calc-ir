import { Component, OnInit } from '@angular/core';
import { Tabela } from 'src/model/tabela';
import { Pagador } from 'src/model/pagador';
import { TableService } from '../dao/table.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-result',
    templateUrl: './result.page.html',
    styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

    tabela: Tabela;
    pagador: Pagador;

    constructor(private router: Router, private dao: TableService) {}

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

    public tetoFaixa075() {
		return (this.tabela.faixaIsento + this.tabela.faixa075).toFixed(2);
	}

	public tetoFaixa150() {
		return (this.tabela.faixaIsento + this.tabela.faixa075 + this.tabela.faixa150).toFixed(2);
	}

	public tetoFaixa225() {
		return (this.tabela.faixaIsento + this.tabela.faixa075 + this.tabela.faixa150 + this.tabela.faixa225).toFixed(2);
    }

}
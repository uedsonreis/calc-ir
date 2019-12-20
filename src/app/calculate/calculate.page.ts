import { Component, OnInit } from '@angular/core';
import { Pagador } from 'src/model/pagador';
import { Deducao } from 'src/model/deducao';
import { Router, NavigationExtras } from '@angular/router';
import { Tabela } from 'src/model/tabela';
import { TableService } from '../dao/table.service';

@Component({
    selector: 'app-calculate',
    templateUrl: './calculate.page.html',
    styleUrls: ['./calculate.page.scss'],
})
export class CalculatePage implements OnInit {

    pagador: Pagador;
    educacao: Deducao;
    saude: Deducao;
    demais: Deducao;

    constructor(private router: Router, private dao: TableService) {}

    ngOnInit(): void {
        const state = this.router.getCurrentNavigation().extras.state;

        if (state === undefined || state === null) {
            this.pagador = new Pagador();
            this.saude = new Deducao();
            this.demais = new Deducao();
            this.educacao = new Deducao();

            this.educacao.teto = this.dao.tabela.tetoEducacao;

            this.pagador.pagou.push(this.educacao);
            this.pagador.pagou.push(this.saude);
            this.pagador.pagou.push(this.demais);

        } else {
            this.pagador = state.pagador;
            this.educacao = this.pagador.pagou[0];
            this.saude = this.pagador.pagou[1];
            this.demais = this.pagador.pagou[2];
        }
    }

    getTitle(): string {
        if ((this.pagador.nome === null) || this.pagador.nome === undefined) {
            return "Novo Cálculo";
        } else {
            return this.pagador.nome;
        }
    }

    calculate() {
        if ((this.pagador.ganhoAnual === undefined) || (this.pagador.ganhoAnual <= 0)) {
            this.pagador.ganhoAnual = 0.00;
        }

        this.pagador.pagou.forEach(deducao => {
            if ((deducao.valor === undefined) || (deducao.valor <= 0)) {
                deducao.valor = 0.00;
            }
        });

        const options: NavigationExtras = { state: { pagador: this.pagador }};
        this.router.navigate(["result"], options);
    }

}
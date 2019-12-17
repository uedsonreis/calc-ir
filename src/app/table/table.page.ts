import { Component, OnInit } from '@angular/core';
import { TableService } from '../dao/table.service';
import { Tabela } from 'src/model/tabela';

@Component({
    selector: 'app-table',
    templateUrl: './table.page.html',
    styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

    private tabela: Tabela;

    constructor(private dao: TableService) {}

    ngOnInit() {
        this.tabela = this.dao.tabela;
    }

    faixa075(): number {
        return this.tabela.faixa075 + this.tabela.faixaIsento;
    }
    faixa150(): number {
        return this.faixa075() + this.tabela.faixa150;
    }
    faixa225(): number {
        return this.faixa150() + this.tabela.faixa225;
    }

    inssLimite1(): string {
        return Tabela.inssLimite1.toFixed(2);
    }
    inssLimite2(): string {
        return Tabela.inssLimite2.toFixed(2);
    }
    inssLimite3(): string {
        return Tabela.inssLimite3.toFixed(2);
    }
    inssAcimaLimite(): string {
        return (Tabela.taxaPadraoINSS * Tabela.inssLimite3).toFixed(2);
    }

}
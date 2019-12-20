import { Component, OnInit } from '@angular/core';
import { TableService } from '../dao/table.service';
import { Tabela } from 'src/model/tabela';
import { Pagador } from 'src/model/pagador';
import { NavigationExtras, Router } from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

    tabela: Tabela;

    constructor(private dao: TableService, private router: Router) {}

    ngOnInit() {
        this.tabela = this.dao.tabela;
    }

    open(pagador: Pagador): void {
        const options: NavigationExtras = { state: { pagador }};
        this.router.navigate(["calculate"], options);
    }

    delete(pagador: Pagador): void {
        this.tabela.remover(pagador);
        this.dao.commit();
    }

}
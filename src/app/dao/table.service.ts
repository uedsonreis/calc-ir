import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Tabela } from 'src/model/tabela';
import { Pagador } from 'src/model/pagador';

@Injectable({ providedIn: 'root' })
export class TableService {

    private static readonly PAYERS = "payers";

    constructor(public tabela: Tabela, private storage: Storage) {
        this.storage.ready().then(() => {
            this.storage.get(TableService.PAYERS).then((data: Pagador[]) => {
                if (data === undefined || data === null) {
                    this.tabela.recebeuDe = new Array<Pagador>();
                } else {
                    this.tabela.recebeuDe = data;
                }
            });
        });
    }

    public async commit(): Promise<void> {
        await this.storage.set(TableService.PAYERS, this.tabela.recebeuDe);
    }
}
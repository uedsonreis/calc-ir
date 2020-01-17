import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SwUpdate } from '@angular/service-worker';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    public appPages = [
        { title: 'Histórico', url: '/list', icon: 'list' },
        { title: 'Novo', url: '/calculate', icon: 'add' },
        { title: 'Tabela', url: '/table', icon: 'grid' }
    ];

    constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private swUpdate: SwUpdate) {
        this.initializeApp();
    }

    private initializeApp(): void {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            setInterval(() => {
                this.swUpdate.checkForUpdate();
              } , 21600);
        });
    }

}
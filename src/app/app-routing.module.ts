import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
    },
    {
        path: 'calculate',
        loadChildren: () => import('./calculate/calculate.module').then(m => m.CalculatePageModule)
    },
    {
        path: 'result',
        loadChildren: () => import('./result/result.module').then(m => m.ResultPageModule)
    },
    {
        path: 'table',
        loadChildren: () => import('./table/table.module').then(m => m.TablePageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConfig } from './configs/app.config'

const routes: Routes = [
  {
    path: AppConfig.routes.login,
    loadChildren: () => import('./core/components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: AppConfig.routes.dashboard,
    loadChildren: () => import('./core/components/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })
  ],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }

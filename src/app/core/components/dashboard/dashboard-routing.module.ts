import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AppConfig } from '../../../configs/app.config';

const dashboardPageRoutes: Routes = [
  {
    path: AppConfig.routes.dashboard,
    component: DashboardPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardPageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }

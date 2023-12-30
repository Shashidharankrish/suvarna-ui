import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const loginPageRoutes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: 'reset',
        component: ResetPasswordComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(loginPageRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LoginRoutingModule { }

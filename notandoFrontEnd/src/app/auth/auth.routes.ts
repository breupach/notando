import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    /*
    { path: '', component: IndexComponent },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
    { path: 'indexAdmin', component: IndexAdminComponent, canActivate: [ProdGuard], data: { expectedRol: ['admin']} },
    { path: 'indexUser', component: IndexUserComponent, canActivate: [ProdGuard], data: { expectedRol: ['admin','user']} },
    { path: 'indexAll', component: IndexAllComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
    */
  ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AuthRoutes { }

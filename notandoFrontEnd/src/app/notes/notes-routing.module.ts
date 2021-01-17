import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearNotasComponent } from './pages/crear-notas/crear-notas.component';
import { ListarNotasComponent } from './pages/listar-notas/listar-notas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listar', component: ListarNotasComponent },
      { path: 'crear', component: CrearNotasComponent },
      { path: '**', redirectTo: 'listar' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas
import { NotesRoutingModule } from './notes-routing.module';

// Componentes
import { ListarNotasComponent } from './pages/listar-notas/listar-notas.component';
import { CrearNotasComponent } from './pages/crear-notas/crear-notas.component';


@NgModule({
  declarations: [ListarNotasComponent, CrearNotasComponent],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }

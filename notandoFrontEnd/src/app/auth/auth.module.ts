import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas
import { AuthRoutingModule } from './auth-routing.module';

// Componentes
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { RecuperoComponent } from './pages/recupero/recupero.component';

@NgModule({
  declarations: [RegistroComponent, LoginComponent, RecuperoComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}

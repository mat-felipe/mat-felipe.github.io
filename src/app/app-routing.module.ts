import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebappComponent } from './webapp/webapp.component';
import { PaginaComponent } from "./pagina/pagina.component";
import { OutraPaginaComponent } from "./outra-pagina/outra-pagina.component";
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';
import { ReceberDadosComponent } from './receber-dados/receber-dados.component';
import { EnviarComponent } from './enviar/enviar.component';
import { DiretivaIfComponent } from './diretivas/diretiva-if/diretiva-if.component';
import { DiretivaForComponent } from './diretivas/diretiva-for/diretiva-for.component';
import { LoginComponent } from './login/login.component';
import { SegurancaService } from './seguranca.service';

const routes: Routes = [
  { path: 'webapp', component: WebappComponent, canActivate:[SegurancaService] },
  { path: 'pagina', component: PaginaComponent, canActivate:[SegurancaService]},
  { path: 'outra', component: OutraPaginaComponent, canActivate:[SegurancaService]},
  { path: 'property', component: PropertyComponent, canActivate:[SegurancaService]},
  { path: 'event', component: EventComponent, canActivate:[SegurancaService]},
  { path: 'mao-dupla', component: MaoDuplaComponent, canActivate:[SegurancaService]},
  { path: 'receber/:info1/:dado2/:teste', component: ReceberDadosComponent, canActivate:[SegurancaService]},
  { path: 'enviar', component: EnviarComponent, canActivate:[SegurancaService]},
  { path: 'diretiva-if', component: DiretivaIfComponent, canActivate:[SegurancaService]},
  { path: 'diretiva-for/:lista', component: DiretivaForComponent, canActivate:[SegurancaService]},
  { path: '', component: LoginComponent},
  
  { path: 'login', component: LoginComponent, canActivate:[SegurancaService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

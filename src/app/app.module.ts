import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebappComponent } from './webapp/webapp.component';
import { PaginaComponent } from './pagina/pagina.component';
import { OutraPaginaComponent } from './outra-pagina/outra-pagina.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ReceberDadosComponent } from './receber-dados/receber-dados.component';
import { EnviarComponent } from './enviar/enviar.component';
import { DiretivaIfComponent } from './diretivas/diretiva-if/diretiva-if.component';
import { DiretivaForComponent } from './diretivas/diretiva-for/diretiva-for.component';
import { LoginComponent } from './login/login.component';
import { SegurancaService } from './seguranca.service';
import { DiretivasModule } from './diretivas/diretivas.module';

@NgModule({
  declarations: [
    AppComponent,
    WebappComponent,
    PaginaComponent,
    OutraPaginaComponent,
    PropertyComponent,
    EventComponent,
    MaoDuplaComponent,
    HeaderComponent,
    MenuComponent,
    ReceberDadosComponent,
    EnviarComponent,
    DiretivaIfComponent,
    DiretivaForComponent,
    LoginComponent
  ],
  imports: [DiretivasModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SegurancaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

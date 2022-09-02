import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaIfComponent } from './diretiva-if/diretiva-if.component';
import { DiretivaForComponent } from './diretiva-for/diretiva-for.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DiretivaIfComponent, DiretivaForComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,  
    CommonModule
  ]
})
export class DiretivasModule { }

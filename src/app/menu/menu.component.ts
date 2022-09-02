import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
links!:Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.links = new Array();
    this.links.push({
      rota:"webapp",
      textContent:"WebApp",
      cor: "nav-icon far fa-circle text-success"
    });
    this.links.push({
      rota:"pagina",
      textContent:"Página",
      cor: "nav-icon far fa-circle text-secondary"
    });
    this.links.push({
      rota:"outra",
      textContent:"Outra",
      cor: "nav-icon far fa-circle text-primary"
    });
    this.links.push({
      rota:"property",
      textContent:"Property",
      cor: "nav-icon far fa-circle text-danger"
    });
    this.links.push({
      rota:"event",
      textContent:"Evento",
      cor: "nav-icon far fa-circle text-success"
    });
    this.links.push({
      rota:"mao-dupla",
      textContent:"Mão Dupla",
      cor: "nav-icon far fa-circle text-secondary"
    });
    this.links.push({
      rota:["receber", "Mateus", 30, "Floripa"],
      textContent:"Receber",
      cor: "nav-icon far fa-circle text-primary"
    });
    this.links.push({
      rota:"enviar",
      textContent:"Enviar",
      cor: "nav-icon far fa-circle text-danger"
    });
    this.links.push({
      rota:"diretiva-if",
      textContent:"IF",
      cor: "nav-icon far fa-circle text-success"
    });
  
  }

}

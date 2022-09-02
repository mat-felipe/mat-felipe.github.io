import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mao-dupla',
  templateUrl: './mao-dupla.component.html',
  styleUrls: ['./mao-dupla.component.css']
})
export class MaoDuplaComponent implements OnInit {

curso:string="Angular"

numero1!:number
numero2!:number
resultado!:number

  constructor() { }

  ngOnInit(): void {
  }

  somar(){
    this.resultado=this.numero1+this.numero2
    return this.resultado
  }
 

}

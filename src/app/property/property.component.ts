import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  //properties

  nome:string ="Agora eu entendi"
  sobrenome!:string
  idade:string = '29'
  email:string = "mateusgoettems@gmail.com"
  possuiAviao:boolean=true
  

  constructor() { }
  ngOnInit(): void {
    
  }

 

}

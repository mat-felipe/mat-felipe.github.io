import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  resultado!: number
  tamanho: number = 10

  constructor() { }

  ngOnInit(): void {
  }

  minhafunc() {
    alert('Mensagem qualquer')
  }

  somar() {
    this.resultado = 1 + 2
    //alert("1 + 2 = "+(1+2))
  }

  subtrair(a: number, b: number) {
    this.resultado = a - b
    //alert(`${a} - ${b} = ${a-b}`) 
  }

  multiplicar() {
    let a: number = Number(prompt("Informe o primeiro numero"))
    let b: number = Number(prompt("Informe o segundo numero"))
    this.resultado = a * b
  }

  dividir() {
    let a: number = Number(prompt("Informe o primeiro numero"))
    let b: number = Number(prompt("Informe o segundo numero"))
    this.resultado = a / b
  }

  aumentar() {
    this.tamanho += 10
  }

  diminuir() {
    this.tamanho -= 5
  }

}


import { NumberFormatStyle } from '@angular/common';
import {Component} from '@angular/core'
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html'
})

export class HelloComponent{

  nome : string;
  clientes : Cliente[];

  constructor(){
    this.nome = "Guilherme";

    let fulano = new Cliente('Fulano', 26);
    let cicrano = new Cliente('Cicrano', 36);
    let joao = new Cliente('João', 22);

    this.clientes = [fulano, cicrano, joao];

  }
}

class Cliente{
  constructor(
    public nome: string,
    public idade: number

  ){}
}

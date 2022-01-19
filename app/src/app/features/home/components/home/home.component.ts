import { Ihome } from './../../models/ihome';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public homeInfo: Ihome[] = [];

  constructor() {
    this.homeInfo = [
      {
        title: '¿Qué es "¿Dónde está mi libro?" ?',
        text: 'Se trata de un espacio donde los apasionados de la lectura pueden consultar dónde adquirir las ediciones más exclusivas de los libros de sus vidas.'
      },
      {
        title: '¿Cómo funciona?',
        text: 'Para acceder a la información de los libros disponibles y en qué librerías se pueden adquirir debes registrarte. Una vez registrado, accede al enlace "libros" o a "librerías" para ver el listado de unos u otros. Puedes hacer click en cada uno de ellos para acceder a su detalle más a fondo. Puedes usar el buscador para localizar algún libro que te interese y, si no lo encuentras, puedes añadirlo usando el formulario para que alguna librería pueda adquirirlo y ponerlo a vuestra disposición o, si eres profesional, puedes usar el formulario correspondiente para añadir los datos de tu librería y que los usuarios puedan contactarte.'
      }
    ]
  }

  ngOnInit(): void {
  }

}

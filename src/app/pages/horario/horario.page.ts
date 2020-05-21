import { Component, OnInit } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  componentes :Componente[] = [];

  constructor(private menuCtrl:MenuController) { }
  TogleMenu(){
    this.menuCtrl.toggle();/*hace mostrar y ocultar el boton*/
      }
  ngOnInit() {
  }

}

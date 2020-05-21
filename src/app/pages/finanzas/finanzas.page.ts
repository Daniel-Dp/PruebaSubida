import { Component, OnInit } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.page.html',
  styleUrls: ['./finanzas.page.scss'],
})
export class FinanzasPage implements OnInit {

  componentes :Componente[] = [];

  constructor(private menuCtrl:MenuController) { }
  TogleMenu(){
    this.menuCtrl.toggle();/*hace mostrar y ocultar el boton*/
      }

  ngOnInit() {
  }

}

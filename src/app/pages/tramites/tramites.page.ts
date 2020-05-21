import { Component, OnInit } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.page.html',
  styleUrls: ['./tramites.page.scss'],
})
export class TramitesPage implements OnInit {
  componentes :Componente[] = [];
  constructor(private menuCtrl:MenuController) { }
  TogleMenu(){
    this.menuCtrl.toggle();/*hace mostrar y ocultar el boton*/
      }

  ngOnInit() {
  }

}

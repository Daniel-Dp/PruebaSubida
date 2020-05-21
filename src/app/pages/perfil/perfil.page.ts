import { Component, OnInit } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  componentes :Componente[] = [];

  constructor(private menuCtrl:MenuController) { }
  TogleMenu(){
    this.menuCtrl.toggle();/*hace mostrar y ocultar el boton*/
      }

  ngOnInit() {
  }

}

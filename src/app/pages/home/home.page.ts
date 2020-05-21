import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Componente} from '../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slidesP:{img:String,titulo:String,redirecTo:String }[]=  [{
    img:'assets/icon/Slide1.svg',
    titulo:'Notas actuales',
     redirecTo:'/informacion'
  },
  
  {
    img:'assets/icon/Slide4.svg',
    titulo:'Mi CV',
    redirecTo:'/perfil'
  },
  {
    img:'assets/icon/Slide2.svg',
    titulo:'Pagos pendientes',
    redirecTo:'/finanzas'
  }
  ]
  
  componentes :Componente[] = [];

  constructor(private menuCtrl:MenuController) { }
  TogleMenu(){
    this.menuCtrl.toggle();/*hace mostrar y ocultar el boton*/
      }
    

  ngOnInit() {
   
  }

}

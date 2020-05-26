
import { Componente } from '../interfaces/interfaces';
import { MenuController } from '@ionic/angular';
import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.page.html',
  styleUrls: ['./tramites.page.scss'],
})
export class TramitesPage implements OnInit {

  get state() {
    return this.tramiteForm.get('state');
  }
  
  public errorMessages = {   
    state: [
      { type: 'required', message: 'Ingresar texto' },
      {
        type: 'maxlength',
        message: 'El maximo de caracteres es de 300'
      }
    ]
  };

  tramiteForm = this.formBuilder.group({

      state: ['',[Validators.required,Validators.maxLength(300)]]

  });

  componentes :Componente[] = [];
  constructor(private  menuCtrl:MenuController, private formBuilder:FormBuilder) { }
  public submit(){
    console.log(this.tramiteForm.value);
  } 
  TogleMenu(){
    this.menuCtrl.toggle();/*hace mostrar y ocultar el boton*/
      }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Componente } from 'src/app/pages/interfaces/interfaces';
import {ComponenteAlumno} from 'src/app/pages/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;
  componentesAlumno: Observable<ComponenteAlumno[]>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.componentes=this.dataService.getMenuOps();
    this.componentesAlumno=this.dataService.getMenuOps();
  }


}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Componente } from '../pages/interfaces/interfaces';
import {ComponenteAlumno} from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}
    getMenuOps(){
      return this.http.get<Componente[]>('assets/data/menu.json');
      return this.http.get<ComponenteAlumno[]>('assets/data/menuAlumno.json');
    }
    getUsers(){
      return this.http.get('https://jsonplaceholder.typicode.com/comments');
    }
}

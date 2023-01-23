import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
 
  constructor(private router:Router) { }
  nombre:any
  apellido:any
  direccion:any
  celular:any
  ano:any
  ngOnInit(): void {


  }
  navegacion(){
    this.router.navigate(['web2'])
    localStorage.setItem("value_nombre",this.nombre);
    localStorage.setItem("value_apellido",this.apellido);
    localStorage.setItem("value_direccion",this.direccion);
    localStorage.setItem("value_celular",this.celular);
    localStorage.setItem("value_ano",this.ano);
  }
  

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor(private router:Router) { }
nombre1:any
apellido1:any
direccion1:any
celular1:any
ano1:any
  ngOnInit(): void {
    this.recoger
  
  }
recoger(){
  this.nombre1=localStorage.getItem("value_nombre");
  this.apellido1=localStorage.getItem("value_apellido");
  this.direccion1=localStorage.getItem("value_direccion");
  this.celular1=localStorage.getItem("value_celular");
  this.ano1=localStorage.getItem("value_ano");
}

}

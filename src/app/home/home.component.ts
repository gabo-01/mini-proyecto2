import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personas=localStorage.getItem("personas");
  

  constructor() {
   }

  ngOnInit(): void {
  }

  alta(){
    
    if(this.personas!=null)
    personasA=JSON.parse(this.personas);
    else
    var personasA: Array<string>=[];

    const nombre = document.querySelector('#nombre') as HTMLInputElement;
    const sexo = document.querySelector('#sexo') as HTMLSelectElement;
    const correo = document.querySelector('#correo') as HTMLInputElement;
    const fecha = document.querySelector('#fecha') as HTMLInputElement;
    const persona = JSON.stringify(
      { nombre:nombre.value, 
      sexo:sexo.value,  
      correo:correo.value, 
      fecha:fecha.value });
    
    personasA.push(persona);
    localStorage.setItem("personas", JSON.stringify(personasA));
    nombre.value="";
    sexo.value="";
    correo.value="";
    fecha.value="";
  }
}

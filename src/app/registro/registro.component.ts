import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  

  constructor() {
    
  }

  ngOnInit(): void {
    var personas = localStorage.getItem("personas");
    if(personas!=null)
    personas = JSON.parse(personas);
    var tabla="<tr><th>Nombre</th><th>Sexo</th><th>Correo</th><th>Fecha de nacimiento</th></tr>";

    if (personas != null) {
      var alenght = personas.length;
      for (var i=0; i<alenght; i++) {
        var persona = JSON.parse(personas[i]);
        console.log(persona);
        tabla += "<tr><td>" + persona.nombre + "</td>";
        tabla += "<td>" + persona.sexo + "</td>";
        tabla += "<td>" + persona.correo + "</td>";
        tabla += "<td>" + persona.fecha + "</td>";
        tabla += "</tr>";
      }
       var x = document.querySelector('#listado') as HTMLTableElement;
       x.innerHTML=tabla;
    }
    
  }

}

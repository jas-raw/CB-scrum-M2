import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Aqi } from '../models/aqi.models';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  aqi: string;
  correo: string = "";
  password1: string = "";
  password2: string = "";
  terminos: string = "";
  
  mensaje1: string = "";
  mensaje2: string = "";
  mensaje3: string = "";
  mensaje4: string = "";
  


  constructor(private RegistroService: RegistroService) {

    this.aqi = "";




  }

  ngOnInit(): void {

  }

  getAQI(): void {
    this.RegistroService.consultarAQIDesdeElServidor().subscribe((data) => {
      let dataConvertida: Aqi = data as Aqi
      this.aqi = dataConvertida.aqi
    });
    

    if (this.correo == "") {
      this.mensaje1 = "Debe digitar su correo"
    }
    else {
      this.mensaje1=""
    }
    if (this.password1 == "") {
      this.mensaje2 = "Debe digitar una contraseña"
    }
    else{this.mensaje2=""}
    if (this.password2 == "" || this.password2 != this.password1) {
      this.mensaje3 = "Debe confirmar la contraseña o debe ser ingual a la contraseña suministrada"
    } else {
      this.mensaje3=""
    }
    if (this.terminos == "") {
      this.mensaje4 = "Debe aceptar los términos y condiciones para poder regitrarse"
    } else {
      this.mensaje4=""
    }
    

    
  }

 
}
    
  



import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { Aqi } from '../models/aqi.models';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  aqi: string;

  constructor(private RegistroService: RegistroService) {

    this.aqi = "";




  }

  ngOnInit(): void {
    console.log("Inicio")
  }

  getAQI(): void {
    this.RegistroService.consultarAQIDesdeElServidor().subscribe((data) => {
      let dataConvertida: Aqi = data as Aqi
      this.aqi = dataConvertida.aqi
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  consultarAQI(): string {
    return "hola"
  }

  consultarAQIDesdeElServidor() {
    const urlWebService = "http://localhost:3030/aqi";
    return this.http.get(urlWebService)

  }
}

import { Injectable } from '@angular/core';
import { BACK_URL } from '../constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url : string = BACK_URL

  constructor(private http: HttpClient) { } //inyeccion de dependencias

  getLogin(){
    const urlBack = this.url + 'get.login'
   return  this.http.get (urlBack)
  }

}

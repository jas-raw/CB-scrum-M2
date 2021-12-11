import { Injectable } from '@angular/core';
import { BACK_URL } from '../constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url: string = BACK_URL

  constructor(private http: HttpClient) { }

  getTasks(){
    const urlBack = this.url+'get-tasks'
    return this.http.get(urlBack)
  }

}

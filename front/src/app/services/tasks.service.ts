import { Injectable } from '@angular/core';
import { BACK_URL } from '../constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url: string = BACK_URL+'tasks/'

  constructor(private http: HttpClient) { }

  getTasks(){
    const urlBack = this.url
    return this.http.get(urlBack)
  }

  createTask(name: string){
    const urlBack = this.url+'create'
    const data = {
      name
    }
    return this.http.post(urlBack, data)
  }

  updateTask(name: string){
    const urlBack = this.url+'update'
    const data = {
      name
    }
    return this.http.patch(urlBack, data)
  }

  finalizeTask(name: string){
    const urlBack = this.url+'finalize'
    const data = {
      name
    }
    return this.http.patch(urlBack, data)
  }

}

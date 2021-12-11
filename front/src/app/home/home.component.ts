import { Component, OnInit } from '@angular/core';
import { TaskI } from '../interfaces/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks: TaskI[] = [{
    task_name: 'hola',
    create_at: new Date(),
    update_at: null,
    finalize_at: null
  }]

  constructor(private service: TasksService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe((data) => {
      console.log(data)
    })
  }

  save(e: any){
    e.preventDefault()
  }

  inProgress(e: any, i: number){
    e.preventDefault()
    this.tasks[i].update_at = new Date()
  }

  finalize(e: any, i: number){
    e.preventDefault()
    this.tasks[i].finalize_at = new Date()
  }

  logout(e: any){
    localStorage.removeItem('tk')
  }

}

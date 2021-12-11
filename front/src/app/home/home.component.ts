import { Component, OnInit } from '@angular/core';
import { TaskI } from '../interfaces/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  taskName: string = ''
  tasks: TaskI[] = []

  constructor(private service: TasksService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe((data) => {
      console.log(data)
    })
  }

  save(e: any){
    e.preventDefault()
    this.service.createTask(this.taskName).subscribe((data) => {
      console.log(data)
    })
  }

  inProgress(e: any, i: number){
    e.preventDefault()
    this.tasks[i].update_at = new Date()
    this.service.updateTask(this.taskName).subscribe((data) => {
      console.log(data)
    })
  }

  finalize(e: any, i: number){
    e.preventDefault()
    this.tasks[i].finalize_at = new Date()
    this.service.finalizeTask(this.taskName).subscribe((data) => {
      console.log(data)
    })
  }

  logout(e: any){
    localStorage.removeItem('tk')
  }

}

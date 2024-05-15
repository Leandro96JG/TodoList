import { TodoListService } from './../../services/service.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { TodoListModule } from '../../todo-list.module';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent implements OnInit{

  public toogleSide:boolean=false;

  public taskAddMesage:boolean=false;

 public todo:string[] = [];

 public done:string[] = [];

 public pending:string[]=[];



  constructor(){}

  ngOnInit(): void {
  this.todo = this.getItem('todo') || [];
  this.done = this.getItem('done') || [];
  this.pending = this.getItem('pending') || [];
  }





 newTask(task:string){
  if(!task)return;
  this.todo.push(task);
  this.taskAdd();
  this.saveItems('todo',this.todo);
 }


taskAdd(){
  this.taskAddMesage=true;
  setTimeout(()=>{
    this.taskAddMesage=false;
  },2000);


}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
     this.saveItems('todo',this.todo);
     this.saveItems('done',this.done);
     this.saveItems('pending',this.pending);



    }



  }

  removeTaskTodo(index:number){
    this.todo.splice(index,1);
    this.saveItems('todo',this.todo);

  }
  removeTaskDone(index:number){
    this.done.splice(index,1);
    this.saveItems('done',this.done);

  }
  removeTaskPending(index:number){
    this.pending.splice(index,1);
    this.saveItems('pending',this.pending);

  }


  saveItems(key:string,listTask:string[]) {
    this.setItem(key, listTask);
  }



  setItem(key: string, value: string[]): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): string[] {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }



}

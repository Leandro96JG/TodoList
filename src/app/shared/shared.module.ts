import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoListModule } from '../todo-list/todo-list.module';



@NgModule({
  declarations: [
    TodoCreateComponent
  ],
  imports: [
    CommonModule,
    TodoListModule,

  ],
  exports:[
    TodoCreateComponent,

  ]
})
export class SharedModule { }

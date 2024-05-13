import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { InputTaskComponent } from './components/input-task/input-task.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    InputTaskComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    TodoListRoutingModule
  ]
})
export class TodoListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { TimePageComponent } from './components/time-page/time-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    TimePageComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    TodoListRoutingModule
  ]
})
export class TodoListModule { }

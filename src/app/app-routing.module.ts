import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCreateComponent } from './shared/components/todo-create/todo-create.component';
import { DragAndDropComponent } from './todo-list/components/drag-and-drop/drag-and-drop.component';

const routes: Routes = [
  {
    path:'',
    component:TodoCreateComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

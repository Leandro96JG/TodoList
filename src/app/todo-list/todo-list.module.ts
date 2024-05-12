import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';



@NgModule({
  declarations: [
    DragAndDropComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],

  exports:[DragAndDropComponent]
})
export class TodoListModule { }

import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  exports:[
    DragDropModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule
  ]
})
export class MaterialModule { }

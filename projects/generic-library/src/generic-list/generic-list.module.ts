import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericListComponent } from './generic-list.component';



@NgModule({
  declarations: [GenericListComponent],
  imports: [
    CommonModule
  ],
  exports: [GenericListComponent]
})
export class GenericListModule { }

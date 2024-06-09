import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router'; // Import RouterModule

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule // Add RouterModule to imports
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageReadMoreComponent } from './page-read-more.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PageReadMoreComponent],
  exports: [PageReadMoreComponent]
})
export class PageReadMoreModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ABCComponent } from './abc.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'abc', component: ABCComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ABCRoutingModule { }

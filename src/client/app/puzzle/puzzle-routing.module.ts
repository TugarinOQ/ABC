import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PuzzleComponent } from './puzzle.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'puzzle', component: PuzzleComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PuzzleRoutingModule { }

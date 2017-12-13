import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuzzleComponent } from './puzzle.component';
import { PuzzleRoutingModule } from './puzzle-routing.module';

@NgModule({
  imports: [CommonModule, PuzzleRoutingModule],
  declarations: [PuzzleComponent],
  exports: [PuzzleComponent]
})
export class PuzzleModule { }

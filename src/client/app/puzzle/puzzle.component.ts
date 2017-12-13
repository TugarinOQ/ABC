import { Component, OnInit } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'app-puzzle',
  templateUrl: 'puzzle.component.html',
  styleUrls: ['puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  ngOnInit() {

    console.log('Puzzle');
  }
}

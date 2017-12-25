import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const puzzle = require('./module/puzzle.module.js');

@Component({
  moduleId: module.id,
  selector: 'app-puzzle',
  templateUrl: 'puzzle.component.html',
  styleUrls: ['puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  countPiecesInPuzzle = 4;
  isChoosePieces = true;

  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;

  constructor(private router: Router) { }

  ngOnInit() {

    console.log('Puzzle');
  }

  close(isChoosePieces: boolean) {

    if (!isChoosePieces) {

      this.isChoosePieces = !isChoosePieces;

      return;
    }

    this.router.navigateByUrl('/');
  }

  choosePuzzle(count: number) {

    this.isChoosePieces = false;

    this.countPiecesInPuzzle = count;

    puzzle(window, this.countPiecesInPuzzle);
  }

  //

  chooseImage(image: string) {

    //
  }
}

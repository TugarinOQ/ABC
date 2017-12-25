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

  images = [
    'http://www.embassybel.ru/i/upload/temp/belarus3522.jpg',
    'https://static.boredpanda.com/blog/wp-content/uploads/2016/01/i-create-whimsical-images-using-flowers__880.jpg'
  ];

  currentImage = '';
  idxCurrentImage = 0;

  countPiecesInPuzzle = 4;
  isChoosePieces = true;

  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;

  constructor(private router: Router) { }

  ngOnInit() {

    console.log('Puzzle');

    this.idxCurrentImage = this.getRandom();

    this.currentImage = this.images[ this.idxCurrentImage ];
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

    puzzle(window, this.countPiecesInPuzzle, () => this.chooseImage());
  }

  //

  chooseImage() {

    setTimeout(() => {

      window.alert('Выдатна. Вы паспяхова сабралі складанку.');

      this.idxCurrentImage = (this.idxCurrentImage === 0) ? 1 : 0;

      console.log(this.idxCurrentImage);

      this.currentImage = this.images[ this.idxCurrentImage ];

      puzzle(window, this.countPiecesInPuzzle, () => this.chooseImage(), this.currentImage);
    }, 1000);
  }

  getRandom() {

    return Math.floor(Math.random() * this.images.length);
  }
}

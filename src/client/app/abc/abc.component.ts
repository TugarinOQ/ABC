import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-abc',
  templateUrl: 'abc.component.html',
  styleUrls: ['abc.component.css'],
})

export class ABCComponent implements OnInit {

  private img_book: string;

  private activeWord: string;

  // letters: any[] = [
  //   { name: 'A', value: 'А' },
  //   { name: 'B', value: 'Б' },
  //   { name: 'V', value: 'В' },
  //   { name: 'G', value: 'Г' },
  //   { name: 'D', value: 'Д' },
  //   { name: 'DG', value: 'Дж' },
  //   { name: 'DZ', value: 'Дз' },
  //   { name: 'E', value: 'Е' },
  //   { name: 'EI', value: 'Ё' },
  //   { name: 'GG', value: 'Ж' },
  //   { name: 'Z', value: 'З' },
  //   { name: 'I', value: 'І' },
  //   { name: 'II', value: 'Й' },
  //   { name: 'K', value: 'К' },
  //   { name: 'L', value: 'Л' },
  //   { name: 'M', value: 'М' },
  //   { name: 'H', value: 'Н' },
  //   { name: 'O', value: 'О' },
  //   { name: 'P', value: 'П' },
  //   { name: 'R', value: 'Р' },
  //   { name: 'S', value: 'С' },
  //   { name: 'T', value: 'Т' },
  //   { name: 'Y', value: 'У' },
  //   { name: 'YY', value: 'Ў' },
  //   { name: 'F', value: 'Ф' },
  //   { name: 'X', value: 'Х' },
  //   { name: 'C', value: 'Ц' },
  //   { name: 'CH', value: 'Ч' },
  //   { name: 'SH', value: 'Ш' },
  //   { name: 'EE', value: 'Э' },
  //   { name: 'U', value: 'Ю' },
  //   { name: 'YA', value: 'Я' }
  // ];

  ngOnInit() {
    console.log('ABC');

    this.img_book = 'abc_cover';
  }

  changeCover(e: any) {

    const word = e.target.dataset.value;

    const link = `abc_${word}`;

    this.activeWord = word;

    this.img_book = link;
  }

  isActive(currentElement: string) {

    return (currentElement === this.activeWord);
  }
}

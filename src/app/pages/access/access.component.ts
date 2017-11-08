import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../services/alert.service';

@Component({
    selector: 'access',
    templateUrl: './access.component.html',
    styleUrls: ['./access.component.css']
})
export class AccessComponent {

  constructor(private router: Router, private alertService: AlertService) { }

  access(code) {

    if (!code) {

      this.alertService.error("Няправільны код доступу");

      return;
    }

    localStorage.setItem('key', code);

    this.router.navigateByUrl('/');
  }
}

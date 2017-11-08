import { Routes } from '@angular/router';

import { AccessComponent } from './pages/access/access.component';

import { MainComponent } from './pages/main/main.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'access',
    component: AccessComponent
  }
];

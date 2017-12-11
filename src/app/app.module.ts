import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { AccessComponent } from './pages/access/access.component';

import { AlertComponent } from './directives/alert/alert.component';
import { AlertService } from './services/alert.service';

import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    //
    AlertComponent,
    //
    MainComponent,
    AccessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {
        useHash: Boolean(history.pushState) === false
    })
  ],
  providers: [
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

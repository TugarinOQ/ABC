import { NgModule } from '@angular/core';
import { ABCComponent } from './abc.component';
import { ABCRoutingModule } from './abc-routing.module';

@NgModule({
  imports: [ABCRoutingModule],
  declarations: [ABCComponent],
  exports: [ABCComponent],
  providers: []
})
export class ABCModule { }

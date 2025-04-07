import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysticsRoutingModule } from './analystics-routing.module';
import { AnalysticsComponent } from './analystics.component';


@NgModule({
  declarations: [
    AnalysticsComponent
  ],
  imports: [
    CommonModule,
    AnalysticsRoutingModule
  ]
})
export class AnalysticsModule { }

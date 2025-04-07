import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysticsComponent } from './analystics.component';

const routes: Routes = [{ path: '', component: AnalysticsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysticsRoutingModule { }

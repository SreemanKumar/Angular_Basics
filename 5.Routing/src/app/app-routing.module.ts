import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicRoutingComponent } from './Routing/dynamic-routing/dynamic-routing.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'dynamic/:id', component: DynamicRoutingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

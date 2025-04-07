import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child-2/child-2.component';

const routes: Routes = [
  // {path:'parent',redirectTo:},
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'child-2', component: Child2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

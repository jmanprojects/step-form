import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FormPageComponent } from './pages/form-page/form-page.component';
import { PlanPageComponent } from './pages/plan-page/plan-page.component';
import { PickAddonsComponent } from './pages/pick-addons/pick-addons.component';
import { FinishComponent } from './pages/finish/finish.component';

const routes: Routes = [
  { path: 'form-p', component: FormPageComponent },
  { path: 'plan-page', component: PlanPageComponent },
  { path: 'pick-add', component: PickAddonsComponent },
  { path: 'final', component: FinishComponent },
  { path: '**', redirectTo: 'form-p' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }

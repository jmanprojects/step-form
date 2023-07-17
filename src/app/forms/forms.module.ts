import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { FormsRoutingModule } from './forms-routing.module';
import { LayouPageComponent } from './layouts/layou-page/layou-page.component';
import { PlanPageComponent } from './pages/plan-page/plan-page.component';
import { PlanButtonsComponent } from './components/plan-buttons/plan-buttons.component';
import { PickAddonsComponent } from './pages/pick-addons/pick-addons.component';
import { PickButtonsComponent } from './components/pick-buttons/pick-buttons.component';
import { FinishComponent } from './pages/finish/finish.component';
import { TableComponent } from './components/table/table.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonalInfoComponent,
    FormPageComponent,
    LayouPageComponent,
    PlanPageComponent,
    PlanButtonsComponent,
    PickAddonsComponent,
    PickButtonsComponent,
    FinishComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }

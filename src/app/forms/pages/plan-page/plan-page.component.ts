import { Component } from '@angular/core';
import { Plans } from '../../interfaces/plans.interface';
import { Router } from '@angular/router';
import { page } from '../../data/user.data';
import { planUserSelected } from '../../data/user.data';

@Component({
  selector: 'app-plan-page',
  templateUrl: './plan-page.component.html',
  styleUrls: ['./plan-page.component.css']
})
export class PlanPageComponent {

  planSelected: Plans[] = [];

  constructor( private router: Router ){}

  getPlan(plan: Plans[]): void{
    this.planSelected = plan;
  }

  nextStep():Router{
    page[0]= 2;
    this.router.navigateByUrl('forms/pick-add');
    return this.router;
  }
}

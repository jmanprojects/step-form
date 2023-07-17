import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Plans } from '../../interfaces/plans.interface';
import { planUserSelected } from '../../data/user.data';


@Component({
  selector: 'forms-plan-buttons',
  templateUrl: './plan-buttons.component.html',
  styleUrls: ['./plan-buttons.component.css']
})
export class PlanButtonsComponent implements OnInit{

  plan: Plans = planUserSelected;
  public  plans: Plans[] = [
    {
      id: 0,
      icon: 'assets/images/icon-arcade.svg',
      plan: 'Arcade',
      periodicity: [9, 90],
      offer: ['2 months free'],
    },
    {
      id:1,
      icon: 'assets/images/icon-advanced.svg',
      plan: 'Advanced',
      periodicity: [12,120],
      offer: ['2 months free'],
    },
    {
      id:2,
      icon: 'assets/images/icon-pro.svg',
      plan: 'Pro',
      periodicity: [15,160],
      offer: ['2 months free'],
    }
  ];
 

  public selectedPlan = 0;
  public selectedPeriod = this.plan.periodicitySelected;
  public wordPeriodPayment = '/mo';
  private finalPlanSelected: Plans[] = [];


  constructor(){}

  ngOnInit(): void {
    if(this.plan.id != 100){
      this.selectPlan(this.plan.id!);
      this.finalPLan.emit(this.finalPlanSelected);
    }
    else{
      this.selectPlan(this.selectedPlan);
      this.finalPLan.emit(this.finalPlanSelected);
    }
    
  }

  @Output()
  finalPLan: EventEmitter<Plans[]> = new EventEmitter<Plans[]>();

  selectPlan(plan: number):void{
    this.finalPlanSelected = [];
    this.selectedPlan = plan;
    this.plans.forEach(element => {
      element.periodicitySelected = this.selectedPeriod;
        if(plan === element.id){
          this.finalPlanSelected.push(element);
          planUserSelected.id = element.id;
          planUserSelected.icon = element.icon;
          planUserSelected.plan = element.plan;
          planUserSelected.periodicity = element.periodicity;
          planUserSelected.periodicitySelected = element.periodicitySelected;
        }
    });
    this.finalPLan.emit(this.finalPlanSelected);
  }

  paymentPeriod(period: number):void{
    this.finalPlanSelected = [];
    this.selectedPeriod = period;
    if(period == 0){
      this.wordPeriodPayment = '/mo';
    }else{
      this.wordPeriodPayment = '/yr';
    }
    this.plans.forEach(element => {
      element.periodicitySelected = this.selectedPeriod;
        if(this.selectedPlan === element.id){
          this.finalPlanSelected.push(element);
          planUserSelected.id = element.id;
          planUserSelected.icon = element.icon;
          planUserSelected.plan = element.plan;
          planUserSelected.periodicity = element.periodicity;
          planUserSelected.periodicitySelected = period;
        }
    });
    this.finalPLan.emit(this.finalPlanSelected);
  }

}

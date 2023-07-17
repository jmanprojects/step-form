import { Component, OnInit } from '@angular/core';
import { planUserSelected } from '../../data/user.data';
import { Plans } from '../../interfaces/plans.interface';
import { addsUserSelected } from '../../data/user.data';
import { Adds } from '../../interfaces/adds-on.interface';

@Component({
  selector: 'forms-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  public planUser: Plans = planUserSelected;
  public addsUser: Adds [] = addsUserSelected;
  public periodicityUser: number = 0;
  public wordPeriodicity: string = '';
  public wordPrice: string= '';
  total: number = 0;
  constructor(){}

  ngOnInit(): void {
    if(this.planUser.periodicity){
      if(this.planUser.periodicitySelected === 0){
        this.periodicityUser = this.planUser.periodicity[0];
        this.wordPeriodicity = 'Montly';
        this.wordPrice = '/mo';
      }
      else{
        this.periodicityUser = this.planUser.periodicity[1];
        this.wordPeriodicity = 'Yearly';
        this.wordPrice = '/yr';
      }
    }
    
    this.sumTotal();
  }


  sumTotal(): void {
    this.addsUser.forEach(element => {
      this.total += element.price; 
    });
    this.total += this.periodicityUser;
  }

  changePeriodicity(): void{
    this.total = 0;
    if(this.planUser.periodicity){
      if(this.planUser.periodicitySelected === 0){
        this.periodicityUser = this.planUser.periodicity[1];
        planUserSelected.periodicitySelected = 1;
        this.wordPeriodicity = 'Yearly';
        this.wordPrice = '/yr';
        
      }
      else{
        this.periodicityUser = this.planUser.periodicity[0];
        planUserSelected.periodicitySelected = 0;
        this.wordPeriodicity = 'Montly';
        this.wordPrice = '/mo';
      }

      this.sumTotal();
    }
  }

}

import { Component } from '@angular/core';
import { Adds } from '../../interfaces/adds-on.interface';
import { page } from '../../data/user.data';
import { Router } from '@angular/router';

@Component({
  selector: 'forms-pick-addons',
  templateUrl: './pick-addons.component.html',
  styleUrls: ['./pick-addons.component.css']
})
export class PickAddonsComponent {


  constructor(private router: Router){}

  addsSelected: Adds[] = [];
  
  getAdds(adds: Adds[]): void{
    this.addsSelected = adds;
  }

  nextStep():Router{
    page[0]= 3;
    this.router.navigateByUrl('forms/final');
    return this.router;
  }

 
}

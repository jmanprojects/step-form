import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Adds } from '../../interfaces/adds-on.interface';
import { addsUserSelected } from '../../data/user.data';

@Component({
  selector: 'forms-pick-buttons',
  templateUrl: './pick-buttons.component.html',
  styleUrls: ['./pick-buttons.component.css']
})
export class PickButtonsComponent implements OnInit{

  localAddUserSelect = addsUserSelected;

  public adds: Adds[] = [
    {
      id: 1,
      name: 'Online service',
      price: 1,
      description: 'Access to multiplayer games',
    },
    {
      id: 2,
      name: 'Larger storage',
      price: 2,
      description: 'Extra 1TB of cloud save',
    },
    {
      id: 3,
      name: 'Customizable profile',
      price: 2,
      description: 'Custom theme on your profile',
    }
  ];

    public checked = false;

  @Output()
  addsEmit: EventEmitter<Adds[]> = new EventEmitter<Adds[]>();
  selectedAdds: Adds [] = [];

  arrId: number  []= [];

  constructor(){
    
  }

  

   ngOnInit(): void {
   }

   

  searchElement(id: number): Adds | undefined{
    return addsUserSelected.find( (element) => {
      return element.id === id;
    });
  }

  selectAdds(checkId: number): void{
    var element = this.searchElement(checkId);

    if (element) {
      //addsUserSelected.splice(0, addsUserSelected.length);
      var index = addsUserSelected.indexOf(element);
      addsUserSelected.splice(index, 1);
    } else {
        this.adds.forEach(add => {
          if(add.id === checkId){
           // this.selectedAdds.push(add);
            addsUserSelected.push(add);
          }
        });
       
      }

      //this.addsEmit.emit(this.selectedAdds);
      
   // console.log(this.selectedAdds); 

  }

}

import { Component, EventEmitter, Output} from '@angular/core';
import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { page } from '../../data/user.data';

@Component({
  selector: 'forms-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {

  formStatus: number = 0;

  private formulario: string [] = [];

  @Output()
  pageEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) {}

  getForm(form?: FormGroup): void{
    this.formulario = form?.value;
  }


  nextPage():undefined | Router{
    if(this.formulario.length==0) {
      this.formStatus = 1;
      return ;
    }
    this.pageEmitter.emit(1);
    page[0]= 1;
    this.router.navigateByUrl('forms/plan-page');
    return this.router;
  }
}

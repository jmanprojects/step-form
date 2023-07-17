import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { user } from '../../data/user.data';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'form-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit{
  @Input()
  sendResp: number = 0;

  user: User = user;
  public userForm: FormGroup = this.fb.group({
    name: [this.user.name, [Validators.required, Validators.minLength(3)] ],
    email: [this.user.email, [Validators.required, Validators.email] ],
    phone: [this.user.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)],] 
   });
 
   constructor (private fb: FormBuilder) {

   }

   ngOnInit(): void {
    if(this.userForm.invalid){
      return
    }else{
      this.formValues.emit(this.userForm);
    }
   }

   @Output()
  formValues: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

   datas():void{
    if(this.userForm.invalid) {  return ;}
    user.name= this.userForm.value['name'];
    user.email= this.userForm.value['email'];
    user.phone= this.userForm.value['phone'];
    this.formValues.emit(this.userForm);
   }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent {
  public prueba: number = 1;

  confirmForm(): void{
    this.prueba = 0;
  }
}

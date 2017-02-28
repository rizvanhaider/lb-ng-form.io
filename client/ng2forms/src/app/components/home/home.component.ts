import { Component } from '@angular/core';
import { FORM } from '../../forms/simple';
@Component({
  selector: 'home-component',
  template: `
 <formio [form]="form" (submit)="onSubmit($event)"></formio>
 `,
})
export class HomeComponent  { 
   public form: any = FORM;

    onSubmit(value: any) {
        console.log('onSubmit');
        console.log(value);
		
    }

}

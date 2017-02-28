import { Component } from '@angular/core';
// import { FORM } from '../../forms/simple';
import { LoopBackConfig } from '../../sdk/index';


import { MyFormApi } from '../../sdk/services/index';

@Component({
    selector: 'home-component',
    template: `
 <formio [form]="form" (submit)="onSubmit($event)"></formio>
 `,
})
export class HomeComponent {

    public form : any;

    constructor(private myFormApi: MyFormApi) {
        LoopBackConfig.setBaseURL('http://127.0.0.1:3333');
        LoopBackConfig.setApiVersion('api');

        this.myFormApi.find().subscribe(
          function(response: any) {
              this.form = response[0].formSchema;
              console.log(response);
          }


        )
    }


    onSubmit(value: any) {
        console.log('onSubmit');
        console.log(value);

    }

}

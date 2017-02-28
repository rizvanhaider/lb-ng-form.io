import { Component } from '@angular/core';

import { LoopBackConfig } from '../../sdk/index';

import { Staff } from '../../sdk/models/index';
import { StaffApi } from '../../sdk/services/index';

@Component({
  selector: 'products-list',
  template: `
<sm-list>
    <sm-item *ngFor="let item of members">{{item.name}}</sm-item>
</sm-list>

 `,
})
export class ProductComponent  { 


    private staff: Staff = new Staff();
   members : any = [];

   constructor(private staffApi: StaffApi) {
    LoopBackConfig.setBaseURL('http://127.0.0.1:3333');
    LoopBackConfig.setApiVersion('api');

    this.staffApi.find().subscribe((data: any) =>
    this.members = data 

  )
  }

  
  products: any = [
    {
      icon : "pizza",
      title: "Pizza"
    },
    {
      icon : "bread",
      title: "Burger"
    }
  ]
}

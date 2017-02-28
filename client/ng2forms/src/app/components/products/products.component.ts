import { Component } from '@angular/core';

@Component({
  selector: 'products-list',
  template: `
<sm-list>
    <sm-item *ngFor="let item of products">{{item.title}}</sm-item>
</sm-list>

 `,
})
export class ProductComponent  { 
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

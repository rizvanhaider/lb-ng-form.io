import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
 <sm-menu title="Angular2" class="inverted teal">
    <a sm-item *ngFor="let item of items" [routerLink]="item.path" [icon]="item.icon">{{item?.title}}</a>

    <sm-menu class="menu right secondary">
        <a sm-item href="/" 
            image="http://semantic-ui.com/images/avatar/small/stevie.jpg">Elliot Fu</a>
        <a sm-item icon="sidebar big"></a>
    </sm-menu>
</sm-menu>
 <router-outlet></router-outlet>
 `,
})
export class AppComponent  { 
  name = 'Angular'; 
  items: any = [
    {
      icon : "",
      title: "Home",
      path : "/"
    },{
      icon : "home",
      title: "Home",
      path : "/home"
    },
    {
      icon : "cubes",
      title: "Products",
      path : "/products"
    }
  ]
}

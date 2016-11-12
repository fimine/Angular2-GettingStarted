import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{showTitle()}}</h1></div>
   <pm-products></pm-products>
    `
})
export class AppComponent {
 pageTitle: string = 'Acme Product Management';
  showTitle():string
 {
    
     return this.pageTitle;
    
 }

 }

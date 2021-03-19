import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}

// Pass data to a child component
// Right click on the app folder and use the Angular Generator to generate a new component named product-alerts.

//1.  The generator creates starter files for the three parts of the component:
//  - product-alerts.component.ts
//  - product-alerts.component.html
//  - product-alerts.component.css

//2.  Open product-alerts.component.ts. The @Component() decorator indicates that the following class is a component. @Component() also provides metadata about the component, including its selector, templates, and styles.

// Key features in the @Component() are as follows:

// The selector, app-product-alerts, identifies the component. By convention, Angular component selectors begin with the prefix app-, followed by the component name.
// The template and style filenames reference the component's HTML and CSS.
// The @Component() definition also exports the class, ProductAlertsComponent, which handles functionality for the component.

//3. To set up ProductAlertsComponent to receive product data, first import Input from @angular/core.
// import { Input } from '@angular/core';

//4. In the ProductAlertsComponent class definition, define a property named product with an @Input() decorator. The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.

//5. In the ProductAlertsComponent class definition, define a property named product with an @Input() decorator. The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.

//6. To display ProductAlertsComponent as a child of ProductListComponent, add the selector, <app-product-alerts> to product-list.component.html. Pass the current product as input to the component using property binding.

//Pass data to a parent component

//1. In product-alerts.component.ts, import Output and EventEmitter from @angular/core.

//2. In the component class, define a property named notify with an @Output() decorator and an instance of EventEmitter().Configuring ProductAlertsComponent with an @Output() allows the ProductAlertsComponent to emit an event when the value of the notify property changes.

//3. In product-alerts.component.html, update the Notify Me button with an event binding to call the notify.emit() method.

//4. Define the behavior that happens when the user clicks the button. The parent, ProductListComponent—not the ProductAlertsComponent—acts when the child raises the event. In product-list.component.ts, define an onNotify() method, similar to the share() method.

//5.Update the ProductListComponent to receive data from the ProductAlertsComponent.

// In product-list.component.html, bind <app-product-alerts> to the onNotify() method of the product list component. <app-product-alerts> is what displays the Notify Me button.

// Click the Notify Me button to trigger an alert which reads, "You will be notified when the product goes on sale".

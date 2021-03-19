import { Component } from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert("I shared it...you can close me now :) !");
  }

  onNotify() {
    window.alert(
      "You will be notified when the product goes on sale, you cheapass"
    );
  }
}

/*
Method for the product list 
*/

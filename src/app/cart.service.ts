import { Injectable } from "@angular/core";
import { ItemsService } from "./items.service";
import { element } from "@angular/core/src/render3";

@Injectable({
  providedIn: "root"
})
export class CartService {
  Cart: any = [];

  increaseQuantity(id) {
    var found = false;
    var ind = -1;
    for (let i = 0; i < this.Cart.length; i++) {
      if (this.Cart[i].id == id) {
        found = true;
        ind = i;
        break;
      }
    }
    if (found) {
      this.Cart[ind].qty++;
    } else {
      this.Cart.push({ id: id, qty: 1 });
    }
  }
  decreaseQuantity(id) {
    for (let i = 0; i < this.Cart.length; i++) {
      if (this.Cart[i].id == id) {
        this.Cart[i].qty--;
      }
    }
  }
  updateCart() {
    return this.Cart;
  }
  totalQuantity() {
    var sum: number = 0;
    this.Cart.forEach(element => {
      sum += element.qty;
    });
    return sum;
  }
  constructor() {}
}

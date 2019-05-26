import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ItemsService } from "../items.service";
import { CartService } from "../cart.service";
import { NavbarComponent } from "../navbar/navbar.component";
import "jquery";
declare var $: any;
import { ConvertActionBindingResult } from "@angular/compiler/src/compiler_util/expression_converter";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  // @Output() onAddtoCart = new EventEmitter<number>();
  to = "";
  from = "";
  category = "all";
  items = [];
  cart;
  constructor(_ItemsService: ItemsService, _CartService: CartService) {
    this.items = _ItemsService.getItems();
    this.cart = _CartService;
  }

  addToCart(id: number) {
    // this.cart.increaseQuantity(id);
    // var qty = this.cart.totalQuantity();
    // document.getElementById("Cart__").innerHTML = "Items in Cart :  " + qty;
    //   this.onAddtoCart.emit(id);
  }
  updateSpan() {
    var qty = this.cart.totalQuantity();
    document.getElementById("Cart__").innerHTML = "Items in Cart :  " + qty;
  }
  ngOnInit() {
    this.updateSpan();
  }
  convertRange = function(range: string) {
    this.prices = range.split("-");
  };
}

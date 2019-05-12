import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../items.service";
import { CartService } from "../cart.service";
import { ConvertActionBindingResult } from "@angular/compiler/src/compiler_util/expression_converter";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  to = "";
  from = "";
  category = "all";
  items = [];
  cart;
  constructor(_ItemsService: ItemsService, _CartService: CartService) {
    this.items = _ItemsService.getItems();
    this.cart = _CartService.Cart;
  }

  ngOnInit() {}
  convertRange = function(range: string) {
    this.prices = range.split("-");
  };
}

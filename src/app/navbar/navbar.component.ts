import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { CartService } from "../cart.service";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "jquery";
import { ACTIVE_INDEX } from "@angular/core/src/render3/interfaces/container";
declare var $: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  cart;
  qty = "";
  constructor(_CartService: CartService) {
    this.cart = _CartService;
  }
  ngOnInit() {
    $("ul li").on("click", function(event) {
      console.log(event);
      var classList = this.className.split(/\s+/);
      var x = classList.find(function(event) {
        return event == "active";
      });
      if (x == null) {
        $(event.target).parent().addClass("active");
        var m = $(event.target).parent().siblings();
       m.each(function(i,obj){
         $(this).removeClass("active");
       })
       
      }
    });
  }
}

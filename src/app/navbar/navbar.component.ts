import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { CartService } from "../cart.service";
import "jquery";
declare var $: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  cart;
  qty = "";
  constructor(_CartService: CartService) {
    this.cart = _CartService;
  }
  ngOnInit() {}
}

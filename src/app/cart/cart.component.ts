import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
import {ItemsService } from '../items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart ;
  items;
  itemsInCart;
  constructor(cartService:CartService,itemsService:ItemsService) {
    this.cart = cartService;
    this.items = itemsService;
   }

  ngOnInit() {
     this.cart.OnQuantityChange.subscribe(value => {
     //add more items :D 
    });

  }

}

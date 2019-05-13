import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item-card",
  templateUrl: "./item-card.component.html",
  styleUrls: ["./item-card.component.scss"]
})
export class ItemCardComponent implements OnInit {
  @Output() onItemAdded = new EventEmitter<number>();
  @Input("item") item: {
    name: string;
    price: number;
    balance: number;
    category: string;
    subCategory: string;
    Index: number;
  };
  onAddToCart(id: number) {
    this.onItemAdded.emit(id);
  }
  constructor() {}

  ngOnInit() {}
}

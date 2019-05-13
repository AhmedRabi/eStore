import { Component, OnInit, Input } from "@angular/core";
import { ItemsService } from "../items.service";

@Component({
  selector: "app-item-details-card",
  templateUrl: "./item-details-card.component.html",
  styleUrls: ["./item-details-card.component.scss"]
})
export class ItemDetailsCardComponent implements OnInit {
  images: { src: string; alt: string }[];
  currentImage: { src: string; alt: string } = { src: "", alt: "" };
  @Input() item: {
    name: string;
    price: number;
    balance: number;
    category: string;
    subCategory: string;
    Index: number;
  };
  constructor(_ItemsService: ItemsService) {
    this.images = _ItemsService.getImages();
    this.currentImage.src = _ItemsService.getImage(0).src;
    this.currentImage.alt = _ItemsService.getImage(0).alt;
  }
  changeCurrentImage(event) {
    this.currentImage.src = event.target.src;
    this.currentImage.alt = event.target.alt;
  }
  ngOnInit() {}
}

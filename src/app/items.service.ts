import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ItemsService {
  private images: { src: string; alt: string }[] = [
    { src: "http://www.placekitten.com/350/350", alt: "350*350 image" },
    { src: "http://www.placekitten.com/350/450", alt: "350*450 image" },
    { src: "http://www.placekitten.com/350/550", alt: "350*550 image" },
    { src: "http://www.placekitten.com/450/650", alt: "450*650 image" }
  ];
  getImages() {
    return this.images;
  }
  getImage(id: number) {
    return this.images[id];
  }
  private items: any = [
    {
      name: "Sony Xperia XZ3",
      price: 13000,
      balance: 30,
      category: "Electronics",
      subCategory: "Mobiles and Tablets",
      Index: 1
    },
    {
      name: "Samsung Galaxy S10+",
      price: 15000,
      balance: 15,
      category: "Electronics",
      subCategory: "Mobiles and Tablets",
      Index: 2
    },
    {
      name: "Samsung Galaxy Note8",
      price: 13000,
      balance: 25,
      category: "Electronics",
      subCategory: "Mobiles and Tablets",
      Index: 3
    },
    {
      name: "OnePlus 6T",
      price: 11000,
      balance: 10,
      category: "Electronics",
      subCategory: "Mobiles and Tablets",
      Index: 4
    },
    {
      name: "iPhone X",
      price: 24000,
      balance: 5,
      category: "Electronics",
      subCategory: "Mobiles and Tablets",
      Index: 5
    },
    {
      name: "iPad 3",
      price: 20000,
      balance: 35,
      category: "Electronics",
      subCategory: "Mobiles and Tablets",
      Index: 6
    },
    {
      name: "Adidas Feather",
      price: 700,
      balance: 30,
      category: "Men's Wear",
      subCategory: "Shoes",
      Index: 7
    },
    {
      name: "Dell G3",
      price: 17000,
      balance: 6,
      category: "Electronics",
      subCategory: "Laptops and PCs",
      Index: 8
    },
    {
      name: "Dell XPS 15 9560",
      price: 25000,
      balance: 320,
      category: "Electronics",
      subCategory: "Laptops and PCs",
      Index: 9
    },
    {
      name: 'Samsung LED TV 42"',
      price: 13000,
      balance: 30,
      category: "Electronics",
      subCategory: "TV and Home Theatre",
      Index: 10
    },
    {
      name: "Toshiba  Refrigerator 3 Door",
      price: 6000,
      balance: 30,
      category: "Home Essentials",
      subCategory: "Refregirators and Freezers",
      Index: 11
    },
    {
      name: "Unionaire i Cook Stainless Steel 5 Burners Gas Cooker",
      price: 6000,
      balance: 30,
      category: "Home Essentials",
      subCategory: "Ovens ,Ranges & Stoves",
      Index: 12
    }
  ];

  public getItems() {
    return this.items;
  }
  public updateItems(ID, item) {
    this.items[ID] = item;
  }
  public addItem(item) {
    this.items.push(item);
  }
  public getItem(index: number) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].Index === index) return this.items[i];
    }
    return null;
  }
  constructor() {}
}

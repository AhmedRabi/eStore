import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
 private items:object[]=[
    {name:"Sony Xperia XZ3",price:13000,balance:30,category:"Electronics",subCategory:"Mobiles and Tablets"},
    {name:"Samsung Galaxy S10+",price:15000,balance:15,category:"Electronics",subCategory:"Mobiles and Tablets"},
    {name:"Samsung Galaxy Note8",price:13000,balance:25,category:"Electronics",subCategory:"Mobiles and Tablets"},
    {name:"OnePlus 6T",price:11000,balance:10,category:"Electronics",subCategory:"Mobiles and Tablets"},
    {name:"iPhone X",price:24000,balance:5,category:"Electronics",subCategory:"Mobiles and Tablets"},
    {name:"iPad 3",price:20000,balance:35,category:"Electronics",subCategory:"Mobiles and Tablets"},
    {name:"Adidas Feather",price:700,balance:30,category:"Men's Wear",subCategory:"Shoes"},
    {name:"Dell G3",price:17000,balance:6,category:"Electronics",subCategory:"Laptops and PCs"},
    {name:"Dell XPS 15 9560",price:25000,balance:320,category:"Electronics",subCategory:"Laptops and PCs"},
    {name:"Samsung LED TV 42\"",price:13000,balance:30,category:"Electronics",subCategory:"TV and Home Theatre"},
    {name:"Toshiba GR-EFV45-S Refrigerator 3 Door- 16 Feet, Silver",price:6000,balance:30,category:"Home Essentials",subCategory:"Refregirators and Freezers"},
    {name:"Unionaire C6090SS-DC-511-IDSC-S i Cook Stainless Steel 5 Burners Gas Cooker - 60×90 cm",price:6000,balance:30,category:"Home Essentials",subCategory:"Ovens ,Ranges & Stoves"},
  ]

  public getItems()
  {
    return this.items;
  }
  public updateItems(id,item){
      this.items[id]=item;
  }
  public addItem (item){
    this.items.push(item);
  }
  constructor() { }
}

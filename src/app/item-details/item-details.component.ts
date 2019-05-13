import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { ItemsService } from "../items.service";

@Component({
  selector: "app-item-details",
  templateUrl: "./item-details.component.html",
  styleUrls: ["./item-details.component.scss"]
})
export class ItemDetailsComponent implements OnInit {
  private id = +this.route.snapshot.paramMap.get("id");
  Item = {};

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemsService,
    private location: Location
  ) {
    this.Item = itemService.getItem(this.id);
  }

  ngOnInit() {}
}

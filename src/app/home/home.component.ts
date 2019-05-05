import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = [];
  constructor(_ItemsService :ItemsService) {
    this.items = _ItemsService.getItems();
   }

  ngOnInit() {
  }

}

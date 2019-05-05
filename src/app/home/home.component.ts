import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  to = "";
  from = ""; 
  category ="Electronics";
  items = [];
  constructor(_ItemsService :ItemsService) {
    this.items = _ItemsService.getItems();
   }

  ngOnInit() {
  }
  convertRange = function(range:string){
    this.prices = range.split('-');
  }
}

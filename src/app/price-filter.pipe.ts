import { Pipe, PipeTransform } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { ItemsService } from './items.service';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(items: any[], from: string,to:string): any {
    if(from != "" && to != ""){
    var result:object[] = [];
    for (let i = 0; i < items.length; i++) {
      if( items[i].price <= parseInt(to) && items[i].price >= parseInt(from))
      result.push(items[i]);
    }
    return result;
  }
  return items;
}


}

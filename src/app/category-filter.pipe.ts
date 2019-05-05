import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(items: any, category: string): any {
    var result:any=[];
    if(category != ""){
      for (let i = 0; i < items.length; i++) {
          if(items[i].category == category)
          result.push(items[i]);        
      }
      return result;
    }
    return items;
  }

}

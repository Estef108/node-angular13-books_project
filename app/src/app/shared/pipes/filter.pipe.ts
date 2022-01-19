import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const result = [];
    for (const element of value){
      if(element.title.indexOf(arg) > -1){
        result.push(element);
      }
    }
    return result;
  }

}

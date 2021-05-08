import { Pipe, PipeTransform } from '@angular/core';
import { validateEventsArray } from '@angular/fire/firestore';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    const resultArray = [];
    if (validateEventsArray.length === 0 || filterString === '' || propName === '') {
      return value;
    }

    for (const item of value) {
      if(item[propName] === filterString) {
        resultArray.push(item)
      }
    }

    return resultArray;
  }

}
 
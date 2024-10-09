import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionSize'
})
export class DescriptionSizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const length:number = 95;
    let result:string = '';
    if (value.length >=length) {
      result = value.substring(0, length) + '...'
    } else result = value;
    return result;
  }

}

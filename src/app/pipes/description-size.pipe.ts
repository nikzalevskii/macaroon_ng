import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionSize'
})
export class DescriptionSizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

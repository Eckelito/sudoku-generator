import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueHide'
})
export class ValueHidePipe implements PipeTransform {

  transform(value: string, visible: boolean): string {
    return visible ? value : '';
  }

}

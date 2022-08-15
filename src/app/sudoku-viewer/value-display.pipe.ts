import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'valueDisplay'
})
export class ValueDisplayPipe implements PipeTransform {


  digToLetter(dig: number, minVal = 0, offset = 0): string{
    return dig > minVal ? String.fromCharCode((64 - offset) + dig) : dig.toString();
  }

  transform(value: number, option: number): string {
    switch(option){
      case 1:
        return this.digToLetter(value);
      case 2:
        return this.digToLetter(value, 10, 9)
      default:
        return value.toString();
    }
  }

}

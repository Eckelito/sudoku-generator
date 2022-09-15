import { Validator, FormControl, ValidatorFn, AbstractControl, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RangeValidation extends Validators{

  rangeValidation(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
        return { 'numRange': true };
      }
      return null;
    };
  }

}

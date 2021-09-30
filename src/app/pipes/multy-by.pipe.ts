import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multyBy'
})
export class MultyByPipe implements PipeTransform {

  transform(num: number, pow: number = 2): number {
    return num ** pow;
  }
}

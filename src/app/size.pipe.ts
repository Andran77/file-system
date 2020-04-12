import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {

  transform(value: number): string {
    let val = value.toFixed(1);
    val = val === '0.0' ? '' + (value*1024).toFixed(1) + ' bytes' : '' + val + ' KB';
    return val;
  }

}

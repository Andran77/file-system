import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'winDate'
})
export class WinDatePipe implements PipeTransform {

  transform(value: string): string {
    let winDate = new Date(value).toLocaleString();
    winDate = winDate.replace(/(\:\d\d\s)|(\,)/g, ' ');
    return winDate;
  }

}

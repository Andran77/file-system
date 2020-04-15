import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mcDate'
})
export class McDatePipe implements PipeTransform {

  transform(value: string): string {
    let vTime = value.length > 10 ? new Date(value).toLocaleTimeString().replace(/:\d\d\s/, ' ') : '12:00 AM';

    if (this.isTodayOrYesterday(value, 'today')) return 'Today at ' + vTime;
    if (this.isTodayOrYesterday(value, 'yesterday')) return 'Yesterday at ' + vTime;

    let vDate = this.addComma(new Date(value).toString().slice(4,15));
    return vDate + ' at ' + vTime;
  }

  addComma(data) {
    return data.replace(/(\w{3}\s\d{2})(\s\d{4})/, (value, firstPart, secondPart) => {
      return firstPart + ',' + secondPart;
    })
  }

  isTodayOrYesterday(date, day) {
    const todayTime = new Date(new Date().toLocaleString().slice(0, 9)).getTime();
    const currentDate = new Date(date).getTime();
    
    if (day === 'today') {
      const diffToday = currentDate - todayTime;
      return diffToday >= 0 && diffToday < 86400000
    }
    if (day === 'yesterday') {
      const diffYesterday = todayTime - currentDate;
      return diffYesterday >= 0 && diffYesterday <= 86400000
    }
  }

}

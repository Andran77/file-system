import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pathPipe'
})
export class PathPipePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/[a-z]*\//g, '');
  }

}

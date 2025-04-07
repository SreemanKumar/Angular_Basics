import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
  standalone: false
})
export class AppendPipe implements PipeTransform {

  transform(value: string, description: string): string {
    if(value == null) return value;
    return value + description;
  }

}

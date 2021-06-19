import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: string|undefined ): string {
    return value==undefined? 'USER' : value;
  }

}

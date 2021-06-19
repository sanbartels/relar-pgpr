import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(value: string|undefined ): string {
    return value==undefined? '/assets/user.png' : value;
  }

}

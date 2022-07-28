import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anteprima'
})
export class AnteprimaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.substring(0, 14) + "...";
  }

}

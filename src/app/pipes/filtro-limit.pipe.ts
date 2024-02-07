import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroLimit'
})
export class FiltroLimitPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

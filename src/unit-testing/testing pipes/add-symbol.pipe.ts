import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSymbol'
})
export class AddSymbolPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `@${value}`;
  }

}

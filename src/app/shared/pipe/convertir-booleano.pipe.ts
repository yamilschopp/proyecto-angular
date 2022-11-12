import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirBooleano'
})
export class ConvertirBooleanoPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {
    return value? args[0] : args[1];
  }

}

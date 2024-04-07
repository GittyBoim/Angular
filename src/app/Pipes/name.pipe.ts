import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value:any):any{
    if(value==="")
        return;
      return value[0].toUpperCase()+value.substring(1);
  }

}

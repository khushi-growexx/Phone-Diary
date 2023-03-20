import { Pipe, PipeTransform } from '@angular/core';
import { ContactService } from './contact.service';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  constructor(private contact:ContactService){}

  transform(value: Date): String {
    
  }

}

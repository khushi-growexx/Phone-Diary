import { Component } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  constructor(private contact: ContactService){

  }
  data = this.contact.data

  deleteRow(index: any){
    this.data.splice(index,1)
  }

}

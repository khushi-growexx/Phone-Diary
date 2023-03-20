import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  data = [
    {
      'index': 1,
      'name': 'khushi',
      'phone': '123123123',
      'gender': 'female',
      'DOB': new Date("22 March 2002"),
      'age': 21,
    },
    {
      'index': 2,
      'name': 'mansi',
      'phone': '12316758123',
      'gender': 'female',
      'DOB': new Date("4 May 1998"),
      'age': 25,
    },
    {
      'index': 3,
      'name': 'ram',
      'phone': '12433123',
      'gender': 'male',
      'DOB': new Date("17 Octomber 2006"),
      'age': 56,
    },
    {
      'index': 4,
      'name': 'shyam',
      'phone': '1231267329',
      'gender': 'male',
      'DOB': new Date("1 January 2003"),
      'age': 21,
    },
  ];
}

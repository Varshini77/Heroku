import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'

})

export class ContactService {
  constructor() { }

  con : Contact[] =[

    {
      pname: "Jim Halpert",
      pemailid:"jim1234@gmail.com",
      pnumber: 9997765432,
      paddress: "Banglore"
      
    },
    {
    pname: "Michal Scott",
    pemailid:"scott9876@gmail.com",
    pnumber: 7778899452,
    paddress: "Banglore"
    },
    {
    pname: "Dwight Schrute",
    pemailid:"shrute9876@gmail.com",
    pnumber: 9987653212,
    paddress: "Banglore"
    }
  

  ];

  public getContactDetails(): any{

  const conObservable = new Observable(observe =>{

    setTimeout(() => {

      observe.next(this.con);

    },1000);

  });

  return conObservable;

  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private contactObject = new BehaviorSubject<Contact|undefined>(undefined);
  constructor() { }

  setContact(contact: Contact) {
    this.contactObject.next(contact);
  }

  getContact() {
    return this.contactObject.asObservable();
  }

}

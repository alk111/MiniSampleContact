import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = "http://localhost:9002/contact/";

  constructor(private httpClient:HttpClient) {  }

  getContactList(): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}all`);
  }

  saveContact(contact:Contact): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,contact);
  }

  getContactById(id:number): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}${id}`)
  }

  updateContact(contact:Contact): Observable<any>{
    return this.httpClient.put(`${this.baseUrl}`,contact);
  }

  deleteContact(id:number): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}${id}`)
  }
}

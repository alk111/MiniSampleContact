import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from "../contact.service";
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
 
  contacts:Contact[]=[];

  constructor(public contactService: ContactService,
    private router:Router,
    private sharedResource:SharedService){}

  ngOnInit(): any {
      this.contactService.getContactList().subscribe(data=>{
        this.contacts = data.data;
      })
  }

  updateButton(contact:Contact){
    // this.router.navigate([`update-contact`,contact])
    this.sharedResource.setContact(contact);
    console.log("Update Button is Click");
    console.log();
        
    this.router.navigate([`update-contact`])
  }

  deleteButton(id:number){
    this.contactService.deleteContact(id).subscribe(
      data=>{console.log(data.data);});
    this.contactService.getContactList().subscribe(data=>{
      this.contacts = data.data;
    })
  }

}

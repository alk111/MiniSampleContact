import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  id!: number;
  // contact: Contact = new Contact;
  contactForm!: FormGroup;
  contact!:Contact;
  newContact:Contact=new Contact();

  constructor(private contactService:ContactService,
    private router:Router,
    private route:ActivatedRoute,
    private fb:FormBuilder,
    private sharedResource:SharedService){}

  ngOnInit(): void {
    this.sharedResource.getContact().subscribe(
      data=>{
        this.contact = data!;
        console.log(this.contact);
        
      }
    );
    // this.id = this.route.snapshot.params[`id`]
    this.contactForm = this.fb.group({
      contact_name : new FormControl(this.contact.contact_name),
      contact_number : new FormControl(this.contact.contact_number),
      user_id : new FormControl(this.contact.user_id)
    })
    
    // this.contactService.getContactById(this.id).subscribe(
    //   data=>{
    //     this.contactForm = data.data
    //   }
    // );
  }

  

  goToContactList(){
    this.router.navigate([`/contact`])
  };

  onSubmit(){
    console.log(this.contactForm.value);
    this.newContact.contact_id = this.contact.contact_id;
    this.newContact.contact_name = this.contactForm.controls['contact_name'].value;
    this.newContact.contact_number = this.contactForm.controls[`contact_number`].value;
    this.newContact.user_id = this.contactForm.controls['user_id'].value;
    console.log("This is new Contact");
    console.log(this.newContact);
    this.contactService.updateContact(this.newContact).subscribe(
      data=> {
        this.goToContactList()
      }
    )
  }

}

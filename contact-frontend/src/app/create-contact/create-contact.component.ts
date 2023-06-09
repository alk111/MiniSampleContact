import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit{

  // contact : Contact = new Contact();

  contactForm!:FormGroup;
// contact_name: FormControl<any>;
  constructor(private contactService:ContactService,
    private router:Router, public fb:FormBuilder){}
  
  ngOnInit(): void {
    this.contactForm=this.fb.group({
      contact_name:new FormControl(''),
    // contact_id:new FormControl(''),
    contact_number:new FormControl(''),
    user_id:new FormControl(''),
    });
    
  }

  saveContact(){
    this.contactService.saveContact(this.contactForm.value).subscribe(
      data=>{
        console.log(data);
        this.goToContactList();
      },
      err=>console.error(err)
    );
  }

  goToContactList(){
    this.router.navigate([`/contact`])
  }

  onSubmit(){
    console.log(this.contactForm.value);
    console.log(this.contactForm.controls['contact_number'].value)
    // console.log(this.contact);
    this.saveContact();    
  }
;


}

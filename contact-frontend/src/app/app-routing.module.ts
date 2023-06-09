import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { UpdateEmployeeComponent } from './update-contact/update-contact.component';

const routes: Routes = [
  {path:`contact`, component : ContactListComponent},
  {path: ``, redirectTo:`contact`, pathMatch: `full`},
  {path:`create-contact`, component : CreateContactComponent},
  {path:`update-contact`, component : UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

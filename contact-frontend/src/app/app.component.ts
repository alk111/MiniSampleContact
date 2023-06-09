import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Contact } from './contact';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact';
  contact = new FormControl();
}

import { Component } from '@angular/core';
import { NavbarComponent } from "../../app/navbar/navbar.component";

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

}

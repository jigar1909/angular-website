import { Component } from '@angular/core';
import { AboutConainerComponent } from "../about-conainer/about-conainer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutConainerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}

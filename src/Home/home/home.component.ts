import { Component } from '@angular/core';
import { HomeBannerComponent } from "../home-banner/home-banner.component";
import { HomeContianerComponent } from "../home-container/home-contianer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeBannerComponent, HomeContianerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

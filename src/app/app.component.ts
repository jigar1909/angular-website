import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeContianerComponent } from "../Home/home-container/home-contianer.component";
import { HomeBannerComponent } from '../Home/home-banner/home-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeBannerComponent, NavbarComponent, HomeContianerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}

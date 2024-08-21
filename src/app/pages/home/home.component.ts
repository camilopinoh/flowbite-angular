import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HeroSectionComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

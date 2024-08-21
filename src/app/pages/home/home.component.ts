import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { JumbotronComponent } from "./components/jumbotron/jumbotron.component";

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HeroSectionComponent, ContactFormComponent, JumbotronComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

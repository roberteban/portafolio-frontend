import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero.component';
import { AboutComponent } from '../../about/components/about.component';
import { ServicesComponent } from '../../services/components/services.component';
import { PortfolioListComponent } from '../../portfolio/components/portfolio-list.component';
import { ContactFormComponent } from '../../contact/components/contact-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioListComponent,
    ContactFormComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-services></app-services>
    <app-portfolio-list></app-portfolio-list>
    <app-contact-form></app-contact-form>
  `,
  styles: []
})
export class HomePageComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../components/about.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, AboutComponent],
  template: `<app-about></app-about>`,
  styles: []
})
export class AboutPageComponent {}

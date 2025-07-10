import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from '../components/services.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, ServicesComponent],
  template: `<app-services></app-services>`,
  styles: []
})
export class ServicesPageComponent {}

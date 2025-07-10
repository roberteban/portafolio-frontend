import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioListComponent } from '../components/portfolio-list.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [CommonModule, PortfolioListComponent],
  template: `
    <app-portfolio-list></app-portfolio-list>
  `,
  styles: []
})
export class PortfolioPageComponent {}

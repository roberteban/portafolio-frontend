import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioListComponent } from '../components/portfolio-list.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [CommonModule, PortfolioListComponent],
  template: `
    <main class="portfolio-page">
      <app-portfolio-list></app-portfolio-list>
    </main>
  `,
  styles: [`
    .portfolio-page {
      min-height: 100vh;
      background: #0a0a0a;
    }
  `]
})
export class PortfolioPageComponent {}

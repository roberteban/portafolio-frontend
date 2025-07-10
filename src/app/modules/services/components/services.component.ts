import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services-section">
      <div class="container">
        <div class="services-header">
          <h2 class="section-title">WHAT I DO</h2>
          <h3 class="section-heading">SPECIALIZING IN</h3>
        </div>

        <div class="services-grid">
          <div class="service-card" *ngFor="let service of services">
            <div class="service-icon">
              <i [class]="service.icon"></i>
            </div>
            <div class="service-content">
              <h4 class="service-title">{{ service.title }}</h4>
              <p class="service-description">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      padding: 6rem 2rem;
      background: #0a0a0a;
      color: #fff;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
    }

    .services-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      color: #6366f1;
      font-size: 0.9rem;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 0.5rem;
    }

    .section-heading {
      font-size: 2.2rem;
      font-weight: 600;
    }

    .services-grid {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }

    .service-card {
      background: #1f1f1f;
      padding: 2rem;
      border-radius: 1rem;
      display: flex;
      gap: 1.25rem;
      align-items: flex-start;
      transition: transform 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-4px);
    }

    .service-icon {
      width: 60px;
      height: 60px;
      background: #4f46e5;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      flex-shrink: 0;
    }

    .service-icon i {
      font-size: 1.5rem;
      color: #fff;
    }

    .service-title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .service-description {
      color: #cbd5e1;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .service-card {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-code',
      title: 'Front-end Development',
      description: 'Building responsive and interactive interfaces with Angular and modern web technologies.'
    },
    {
      icon: 'fas fa-server',
      title: 'Back-end Development',
      description: 'Creating robust APIs and services using Node.js, Express, and MongoDB.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Design',
      description: 'Designing clean and user-friendly layouts with accessibility and usability in mind.'
    }
  ];
}

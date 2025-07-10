import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="overlay">
        <div class="content">
          <h1 class="title">Soy Roberto Castillo</h1>
          <h2 class="subtitle">Desarrollador Fullstack</h2>
          <p class="description">
            Transformo ideas en soluciones digitales modernas y funcionales.
          </p>

          <div class="social-icons">
            <a href="https://github.com/roberteban" target="_blank" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/roberto-castillo-riquelme/" target="_blank" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="mailto:robertocastillocontact@gmail.com" aria-label="Email">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/images/workspace.jpg');
      background-size: cover;
      background-position: center;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      text-align: center;
      padding: 2rem;
    }

    .overlay {
      background: rgba(0, 0, 0, 0.75);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .content {
      color: #fff;
      max-width: 700px;
    }

    .title {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: 1.8rem;
      color: #a3a3a3;
      margin-bottom: 1rem;
    }

    .description {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      font-size: 1.8rem;
    }

    .social-icons a {
      color: #fff;
      transition: color 0.3s ease;
    }

    .social-icons a:hover {
      color: #4f46e5;
    }

    @media (max-width: 768px) {
      .title {
        font-size: 2rem;
      }
      .subtitle {
        font-size: 1.2rem;
      }
    }
  `]
})
export class HeroComponent { }

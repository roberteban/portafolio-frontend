import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section">
      <div class="about-container">
        <div class="image-wrapper">
          <img src="/assets/images/code-bg.jpg" alt="Workspace" />
        </div>
        <div class="text-wrapper">
          <h3 class="section-title">ABOUT ME</h3>
          <h2 class="name">I'm Roberto Castillo</h2>
          <p>
            I'm a Full Stack Developer who enjoys transforming ideas into digital solutions. I work with modern technologies like Angular, Node.js and MongoDB.
          </p>
          <p>
            My focus is on building fast, accessible and scalable applications that offer great user experiences, both visually and functionally.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      background-color: #121212;
      padding: 6rem 2rem;
      display: flex;
      justify-content: center;
    }

    .about-container {
      max-width: 1100px;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      align-items: center;
    }

    .image-wrapper {
      flex: 1 1 400px;
      display: flex;
      justify-content: center;
    }

    .image-wrapper img {
      width: 100%;
      max-width: 450px;
      border-radius: 8px;
      border: 2px solid #fff;
    }

    .text-wrapper {
      flex: 1 1 500px;
      color: #e5e7eb;
    }

    .section-title {
      color: #6366f1;
      font-weight: 700;
      margin-bottom: 0.5rem;
      font-size: 1rem;
      letter-spacing: 1px;
    }

    .name {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: #fff;
    }

    .text-wrapper p {
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
      .about-container {
        flex-direction: column;
        text-align: center;
      }

      .image-wrapper img {
        max-width: 100%;
      }

      .text-wrapper {
        padding: 0 1rem;
      }
    }
  `]
})
export class AboutComponent {}

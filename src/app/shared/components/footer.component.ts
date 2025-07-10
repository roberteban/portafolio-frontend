import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-left">
          <img src="assets/images/logo.png" alt="Logo RC" class="logo" />
        </div>
        <div class="footer-right">
          <p>&copy; {{ currentYear }} Roberto Castillo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #0a0a0a;
      color: #ccc;
      padding: 2rem 0;
      border-top: 1px solid #222;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    .logo {
      height: 32px;
      width: 32px;
    }

    .footer-right p {
      margin: 0;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .footer-right {
        font-size: 0.85rem;
      }
    }
  `]
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}

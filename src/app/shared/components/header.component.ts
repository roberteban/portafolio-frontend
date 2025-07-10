import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
template: `
  <header class="navbar">
    <div class="container">
      <div class="logo" routerLink="/" style="cursor: pointer;">
        <img src="assets/images/logo.png" alt="Logo RC" />
      </div>
      
      <nav class="nav-links" [class.active]="isMenuOpen">
        <a href="#about" (click)="closeMenu()">ABOUT</a>
        <a href="#services" (click)="closeMenu()">SERVICES</a>
        <a href="#portfolio" (click)="closeMenu()">PORTFOLIO</a>
        <a href="#contact" (click)="closeMenu()">CONTACT</a>
      </nav>
      
      <button class="menu-toggle" (click)="toggleMenu()" [attr.aria-expanded]="isMenuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
`,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(10, 10, 10, 0.95);
      backdrop-filter: blur(10px);
      color: white;
      z-index: 1000;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
      padding: 0.8rem 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-weight: 600;
      font-size: 1.1rem;
    }

    .logo img {
      height: 32px;
      width: 32px;
      object-fit: contain;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-links a {
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      position: relative;
      transition: color 0.3s ease;
    }

    .nav-links a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -4px;
      height: 2px;
      width: 0;
      background: #4f46e5;
      transition: width 0.3s ease;
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      gap: 0.3rem;
    }

    .menu-toggle span {
      width: 25px;
      height: 3px;
      background: #fff;
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      .nav-links {
        position: fixed;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(10, 10, 10, 0.98);
        flex-direction: column;
        padding: 2rem 1.5rem;
        gap: 1.5rem;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }

      .nav-links.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .menu-toggle {
        display: flex;
      }

      .menu-toggle[aria-expanded="true"] span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      .menu-toggle[aria-expanded="true"] span:nth-child(2) {
        opacity: 0;
      }

      .menu-toggle[aria-expanded="true"] span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}

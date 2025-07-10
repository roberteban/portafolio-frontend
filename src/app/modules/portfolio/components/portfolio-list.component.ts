import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../../core/services/github.service';
import { Repository } from '../../../core/models/repository.model';
import { PortfolioCardComponent } from './portfolio-card.component';

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [CommonModule, PortfolioCardComponent],
  template: `
    <section id="portfolio" class="portfolio-section">
      <div class="container">
        <div class="portfolio-header">
          <h2 class="section-title">PORTFOLIO</h2>
          <h3 class="section-heading">LATEST PROJECTS</h3>
          <button class="sync-btn" (click)="syncRepositories()" [disabled]="isLoading">
            <i class="fas fa-sync" [class.fa-spin]="isLoading"></i>
            {{ isLoading ? 'Syncing...' : 'Sync GitHub' }}
          </button>
        </div>
       
        <div *ngIf="isLoading && repositories.length === 0" class="loading-state">
          <div class="spinner"></div>
          <p>Loading projects...</p>
        </div>

        <div *ngIf="error" class="error-state">
          <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <p>{{ error }}</p>
            <button class="retry-btn" (click)="loadRepositories()">Try Again</button>
          </div>
        </div>

        <div *ngIf="!isLoading && !error && repositories.length === 0" class="empty-state">
          <div class="empty-message">
            <i class="fab fa-github"></i>
            <p>No projects found. Sync with GitHub to load your repositories.</p>
          </div>
        </div>

        <div *ngIf="repositories.length > 0" class="portfolio-grid">
          <app-portfolio-card
            *ngFor="let repo of repositories; trackBy: trackByFn"
            [repository]="repo">
          </app-portfolio-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .portfolio-section {
      padding: 4rem 0;
      background: #0a0a0a;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .portfolio-header {
      text-align: center;
      margin-bottom: 3rem;
      position: relative;
    }

    .section-title {
      color: #4f46e5;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }

    .section-heading {
      color: #fff;
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 2rem;
      text-transform: uppercase;
    }

    .sync-btn {
      background: #4f46e5;
      color: #fff;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 5px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0 auto;
    }

    .sync-btn:hover:not(:disabled) {
      background: #3730a3;
      transform: translateY(-2px);
    }

    .sync-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .sync-btn .fa-spin {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    /* Grid principal - horizontal layout */
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    /* Para pantallas grandes, forzar 3 columnas */
    @media (min-width: 1200px) {
      .portfolio-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }
    }

    /* Para tablets */
    @media (max-width: 1024px) {
      .portfolio-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }
    }

    /* Para móviles */
    @media (max-width: 768px) {
      .portfolio-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      
      .container {
        padding: 0 1rem;
      }
      
      .section-heading {
        font-size: 2rem;
      }
    }

    /* Estados de carga, error y vacío */
    .loading-state, .error-state, .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3rem;
      text-align: center;
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #333;
      border-top: 4px solid #4f46e5;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 1rem;
    }

    .loading-state p, .error-state p, .empty-state p {
      color: #ccc;
      font-size: 1.1rem;
      margin: 0;
    }

    .error-message, .empty-message {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .error-message i, .empty-message i {
      font-size: 3rem;
      color: #4f46e5;
      margin-bottom: 1rem;
    }

    .retry-btn {
      background: #4f46e5;
      color: #fff;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 5px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.3s ease;
      margin-top: 1rem;
    }

    .retry-btn:hover {
      background: #3730a3;
    }
  `]
})
export class PortfolioListComponent implements OnInit {
  repositories: Repository[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.loadRepositories();
  }

  loadRepositories() {
    this.isLoading = true;
    this.error = null;
   
    this.githubService.getRepositories().subscribe({
      next: (response) => {
        this.repositories = response.success ? response.data.slice(0, 3) : [];
        this.error = response.success ? null : 'No repositories found';
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to load projects. Please try again.';
        this.isLoading = false;
      }
    });
  }

  syncRepositories() {
    this.isLoading = true;
    this.error = null;

    this.githubService.syncRepositories().subscribe({
      next: (response) => {
        if (response.success) {
          this.loadRepositories();
        } else {
          this.error = 'Failed to sync repositories';
          this.isLoading = false;
        }
      },
      error: () => {
        this.error = 'Failed to sync with GitHub. Please try again.';
        this.isLoading = false;
      }
    });
  }

  trackByFn(index: number, item: Repository): string {
    return item._id || item.name;
  }
}
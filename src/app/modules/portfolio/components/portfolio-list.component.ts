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
      padding: 5rem 2rem;
      background-color: #0a0a0a;
      color: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .portfolio-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .section-title {
      color: #4f46e5;
      font-weight: 600;
      letter-spacing: 2px;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .section-heading {
      font-size: 2rem;
      font-weight: bold;
    }

    .sync-btn {
      background-color: transparent;
      border: 1px solid #4f46e5;
      color: #4f46e5;
      padding: 0.5rem 1.25rem;
      font-size: 0.9rem;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 1rem;
      transition: all 0.3s ease;
    }

    .sync-btn:hover {
      background-color: #4f46e5;
      color: white;
    }

    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      justify-content: center;
    }

    .loading-state,
    .error-state,
    .empty-state {
      text-align: center;
      margin-top: 2rem;
    }

    .retry-btn {
      background: #ef4444;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      margin-top: 1rem;
      border-radius: 5px;
      cursor: pointer;
    }

    .retry-btn:hover {
      background: #dc2626;
    }

    .spinner {
      border: 4px solid rgba(255, 255, 255, 0.2);
      border-top: 4px solid #4f46e5;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin: 0 auto 1rem;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
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

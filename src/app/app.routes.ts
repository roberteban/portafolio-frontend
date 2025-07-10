import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/home/pages/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./modules/contact/pages/contact-page.component').then(
        (m) => m.ContactPageComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

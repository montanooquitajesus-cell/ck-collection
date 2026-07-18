import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'coleccion',
    loadComponent: () =>
      import('./features/collection/collection.component').then((m) => m.CollectionComponent),
  },
  {
    path: 'coleccion/:id',
    loadComponent: () =>
      import('./features/dress-detail/dress-detail.component').then((m) => m.DressDetailComponent),
  },
  {
    path: 'masajes',
    loadComponent: () =>
      import('./features/massages/massages.component').then((m) => m.MassagesComponent),
  },
  {
    path: 'masajes/:id',
    loadComponent: () =>
      import('./features/massage-detail/massage-detail.component').then(
        (m) => m.MassageDetailComponent
      ),
  },
  {
    path: 'como-rentar',
    loadComponent: () => import('./features/how/how.component').then((m) => m.HowComponent),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

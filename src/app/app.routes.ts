import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'routing-training',
  },
  {
    path: 'routing-training',
    loadChildren: () =>
      import('./routing-training/routing-training.routes').then((r) => r.ROUTING_TRAINING_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'routing-training',
  },
];

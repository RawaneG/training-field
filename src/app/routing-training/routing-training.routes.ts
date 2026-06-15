import { Routes } from '@angular/router';

export const ROUTING_TRAINING_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./routing-training').then((c) => c.RoutingTraining),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./routing-training-detail/routing-training-detail').then(
        (c) => c.RoutingTrainingDetail,
      ),
  },
];

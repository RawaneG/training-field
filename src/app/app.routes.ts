import { Routes } from '@angular/router';
import { adminGuard } from './admin/guards/admin-guard';
import { userResolver } from './users/resolvers/user-resolver';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('./home-page/home-page').then((c) => c.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login-page/login-page').then((c) => c.LoginPage),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard-page/dashboard-page').then((c) => c.DashboardPage),
  },
  {
    path: 'users/:id',
    resolve: {
      user: userResolver,
    },
    loadComponent: () =>
      import('./users/user-detail-page/user-detail-page').then((c) => c.UserDetailPage),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./users/users-list-page/users-list-page').then((c) => c.UsersListPage),
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () => import('./admin/admin.routes').then((r) => r.ADMIN_ROUTES),
  },
  {
    path: 'not-found',
    loadComponent: () => import('./not-found-page/not-found-page').then((c) => c.NotFoundPage),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

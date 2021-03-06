import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

//review why AuthGuard is not working correctly

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
  },
  {
  path: 'list', loadChildren: () => import('./pages/tasks/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'new', loadChildren: () => import('./pages/tasks/new/new.module').then(m => m.NewModule)
  },
  {
    path: 'edit', loadChildren: () => import('./pages/tasks/edit/edit.module').then(m => m.EditModule)
  },
  {
    path: 'history', loadChildren: () => import('./pages/tasks/history/history.module').then(m => m.HistoryModule)
  },
  { 
    path: 'productivity', loadChildren: () => import('./pages/tasks/productivity/productivity.module').then(m => m.ProductivityModule)
  }, {
    path: 'details', loadChildren: () => import('./pages/tasks/details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

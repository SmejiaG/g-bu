import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'sessions',
    loadChildren: () => import('./sessions/sessions.module').then(mod => mod.SessionsModule)
  },
  {
    path: '',
    redirectTo: 'sessions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

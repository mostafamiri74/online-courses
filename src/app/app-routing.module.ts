import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PanelComponent } from './modules/panel/panel.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CourseComponent } from './modules/course/course.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'panel',
    canActivate: [AuthGuard],
    component: PanelComponent,
    loadChildren: () =>
      import('./modules/panel/panel.module').then((m) => m.PanelModule),
  },
  {
    path: 'course/:course-name',
    loadChildren: () =>
      import('./modules/course/course.module').then((m) => m.CourseModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./modules/cart/cart.module').then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

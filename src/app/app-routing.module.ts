import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../pages/Home/Home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'member',
    loadChildren: () =>
      import('../pages/Member/Member.module').then((m) => m.MemberPageModule),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

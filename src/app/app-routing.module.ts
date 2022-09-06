import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';

const home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./features/home/home.module').then(mod => mod.HomeModule),
}

const lorem: Route = {
  path: 'lorem',
  loadChildren: () => import('./features/lorem/lorem.module').then(mod => mod.LoremModule),
}

const routes: Routes = [
  home,
  lorem,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

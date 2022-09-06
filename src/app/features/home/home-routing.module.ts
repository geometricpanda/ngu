import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';


const _default: Route = {
  path: '',
  component: HomePageComponent,
}

const routes: Routes = [
  _default
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

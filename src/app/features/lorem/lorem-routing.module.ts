import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {LoremGeneratedPageComponent} from './lorem-generated-page/lorem-generated-page.component';
import {LoremGeneratedTitleResolver} from './lorem-generated-title.resolver';
import {LoremGeneratorResolver} from './lorem-generator.resolver';
import {LoremGeneratorGuard} from './lorem-generator.guard';

const _default: Route = {
  path: '',
  pathMatch: 'full',
  title: LoremGeneratedTitleResolver,
  component: LoremGeneratedPageComponent,
  canActivate: [LoremGeneratorGuard],
  resolve: {
    lorem: LoremGeneratorResolver,
  }
}

const _sentences: Route = {
  path: ':count',
  title: LoremGeneratedTitleResolver,
  component: LoremGeneratedPageComponent,
  canActivate: [LoremGeneratorGuard],
  resolve: {
    lorem: LoremGeneratorResolver,
  }
}

const routes: Routes = [
  _default,
  _sentences,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoremRoutingModule {
}

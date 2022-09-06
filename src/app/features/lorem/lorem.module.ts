import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoremRoutingModule } from './lorem-routing.module';
import { LoremGeneratedPageComponent } from './lorem-generated-page/lorem-generated-page.component';


@NgModule({
  declarations: [
    LoremGeneratedPageComponent
  ],
  imports: [
    CommonModule,
    LoremRoutingModule
  ]
})
export class LoremModule { }

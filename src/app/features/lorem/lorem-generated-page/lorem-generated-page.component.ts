import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, CanActivate, Router} from '@angular/router';
import type {Lorem} from '../../../common/services';
import {LoremData} from '../lorem-generator.resolver';

@Component({
  selector: 'app-lorem-generated-page',
  templateUrl: './lorem-generated-page.component.html',
  styleUrls: ['./lorem-generated-page.component.css'],
})
export class LoremGeneratedPageComponent implements OnInit {

  loremData: LoremData = this
    .activatedRoute
    .snapshot
    .data['lorem'];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.loremData.error) {
      throw new Error(`Error: ${this.router.url}\nThere was an error generating this page`);
    }
  }

}

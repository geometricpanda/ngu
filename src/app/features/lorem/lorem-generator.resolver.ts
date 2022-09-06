import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {catchError, map, Observable, of} from 'rxjs';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import type {Lorem} from '../../common/services';
import {LoremService} from '../../common/services';

export interface LoremData {
  data?: Lorem;
  error: boolean;
}


@Injectable({
  providedIn: 'root',
})
export class LoremGeneratorResolver implements Resolve<LoremData> {

  constructor(
    private loremService: LoremService,
    @Inject(PLATFORM_ID) private platformId: string,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<LoremData> {
    const {
      count = 1,
    } = route.params;

    return this.loremService
      .generate(count)
      .pipe(map((data) => {
        if (data.length === 10) {
          throw new Error('Some Fake Error');
        }
        return data;
      }))
      .pipe(map(data => ({data, error: false})))
      .pipe(catchError(() => of({data: undefined, error: true})))
  }
}

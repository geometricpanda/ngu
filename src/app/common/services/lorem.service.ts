import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';
import type {Lorem} from './lorem.interface';

@Injectable({
  providedIn: 'root',
})
export class LoremService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  generate(
    sentences: string | number = 3,
    startWithLorem = true,
  ): Observable<Lorem> {

    const url = new URL('https://baconipsum.com/api/');
    url.searchParams.set('type', 'all-meat');
    url.searchParams.set('paras', sentences.toString());
    url.searchParams.set('start-with-lorem', startWithLorem ? '1' : '0');
    return this.httpClient.get<Lorem>(url.toString())

  }

}

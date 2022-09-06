import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';
import type {Lorem} from './lorem.interface';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {map, of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoremService {

  constructor(
    private httpClient: HttpClient,
    private transferState: TransferState,
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

    const stateKey = makeStateKey<Lorem>(url.toString());

    return this.transferState.hasKey(stateKey)
      ? of(this.transferState.get(stateKey, []))
      : this.httpClient
        .get<Lorem>(url.toString())
        .pipe(tap(data => this.transferState.set(stateKey, data)));
  }

}

import {Injectable} from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoremGeneratedTitleResolver implements Resolve<string> {
  resolve(route: ActivatedRouteSnapshot): string {
    const {count} = route.params;
    return !count
      ? 'Lorem Ipsum'
      : `${count} sentence(s) of Lorem Ipsum`;
  }
}

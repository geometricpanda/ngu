import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoremGeneratorGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const {
      count = 1,
    } = route.params;

    return +count > 0;
  }

}

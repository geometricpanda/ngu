import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoremGeneratorGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const {
      count = 1,
    } = route.params;

    return (+count > 0)
      ? true
      : this.router.createUrlTree(['/'])
  }

}

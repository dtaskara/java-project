import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {TokenStorageService} from '../token-storage.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _tokenStorage: TokenStorageService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const isAuth = this._tokenStorage.getToken();

    if (isAuth == null) {
      return true;
    }

    console.log('Has a token. Redirecting to home page...');

    this._router.navigateByUrl('home');
    return false;
  }


}

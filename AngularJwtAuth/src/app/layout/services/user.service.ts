import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/test/user';
  private pmUrl = 'http://localhost:8080/api/test/pm';
  private adminUrl = 'http://localhost:8080/api/test/admin';

  private readonly GET_ALL_USERS = 'http://localhost:8080/api/admin/users';
  private readonly GET_USER_BY_ID = '/api/admin/user';
  private readonly CREATE_USER = '/api/admin/user/create';
  private readonly UPDATE_USER = '/api/admin/user/update';
  private readonly DELETE_USER = '/api/admin/user/delete';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.GET_ALL_USERS);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(this.GET_USER_BY_ID + '/' + id);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(this.CREATE_USER, user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(this.UPDATE_USER, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.DELETE_USER + '/' + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DressService {

  private baseUrl = 'http://localhost:8080/api/product/dress';
  private getByPage = 'http://localhost:8080/api/product/dress/page';

  constructor(private http: HttpClient) { }

  getDress(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDress(dress: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create`, dress);
  }

  updateDress(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, value);
  }

  deleteDress(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getDressList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getDressListByPage(page, size): Observable<any> {
    return this.http.get(this.getByPage + '/' + page + '/' + size);
  }

}

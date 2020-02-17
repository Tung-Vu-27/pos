import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private baseUrl = 'http://localhost:8080/api/sales';

  constructor(private http: HttpClient) {}

  // @desc    CRUD service method to create new sale
  // @params  Sales sale object
  // @return  NA
  createSale(sale: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, sale);
  }
}

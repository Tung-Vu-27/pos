import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sales } from '../models/sales.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  salesList: Sales[];

  private baseUrl = 'http://localhost:8080/api/sales';

  constructor(private http: HttpClient) {}

  // @desc    Refresh and populate salesList
  // @params  None
  // @return  NA
  refreshSalesList() {
    this.http
      .get(`${this.baseUrl}`)
      .toPromise()
      .then(res => (this.salesList = res as Sales[]));
  }

  // @desc    CRUD service method to create new sale
  // @params  Sales sale object
  // @return  NA
  createSale(sale: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, sale);
  }

  // @desc    CRUD service method to create delete sale
  // @params  Sales sale object
  // @return  NA
  deleteEmployee(id: number) {
    return this.http.delete(`${this.baseUrl}`);
  }
}

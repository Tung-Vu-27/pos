import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Sales } from "../models/sales.model";
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: "root"
})
export class SalesService {
  salesList: Sales[];

  // PRODUCTION LINK: private baseUrl = 'https://icecreampos.azurewebsites.net/api/Sales';
  private baseUrl = "https://localhost:32780/api/Sales";

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
  // @params  total, paymentType, cash, change
  // @return  NA
  createSale(
    total: number,
    paymentType: string,
    cash: number,
    change: number
  ): Observable<Object> {
    // Set string date format
    var today = new Date();
    var date =
      today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;

    // Create new sale object
    let newSale = new Sales();
    newSale.Date = dateTime;
    newSale.Total = total;
    newSale.PaymentType = paymentType;
    newSale.Cash = cash;
    newSale.Change = change;

    return this.http.post(`${this.baseUrl}`, newSale);
  }

  // @desc    CRUD service method to create delete sale
  // @params  Sales sale object
  // @return  NA
  deleteSale(id: number) {
    return this.http.delete(`${this.baseUrl}`);
  }
}

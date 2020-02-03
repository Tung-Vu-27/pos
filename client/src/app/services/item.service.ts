import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  workingData: Item;
  itemList: Item[];

  readonly rootURL = "https://localhost:44338/api";

  constructor(private http: HttpClient) {}

  postItem(workingData: Item) {
    return this.http.post(this.rootURL + "/Item", workingData);
  }

  refreshList() {
    this.http
      .get(this.rootURL + "/Item")
      .toPromise()
      .then(res => (this.itemList = res as Item[]));
  }
}

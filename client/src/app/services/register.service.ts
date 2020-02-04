import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor() {}

  itemList: Item[] = [];

  // @desc    Add new item to current order Item array
  // @params  name, unitPrice
  // @access  Public
  addItem(name: string, unitPrice: number) {
    let newItem = new Item();
    newItem.ItemID = uuid();
    newItem.Name = name;
    newItem.UnitPrice = unitPrice;
    this.itemList.push(newItem);
  }
}

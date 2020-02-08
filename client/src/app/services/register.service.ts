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
  addItem(name: string, quantity: number, unitPrice: number) {
    let newItem = new Item();
    newItem.ItemID = uuid();
    newItem.Name = name;
    newItem.Quantity = quantity;
    newItem.UnitPrice = unitPrice;
    newItem.Subtotal = quantity * unitPrice;
    this.itemList.push(newItem);
  }

  // @desc    Function to remove item from item array
  // @params  id
  // @access  Public
  removeItem(id: string) {
    for (var i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].ItemID === id) {
        this.itemList.splice(i, 1);
      }
    }
  }
}

import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor() {}

  itemList: Item[] = [];
  subtotal: number = 0;
  tax: number = 0;
  total: number = 0;
  inProgress: boolean = true; // Used to determine if ongoing sale is taking place. If false, reset all register values.

  // Used to display two decimal number
  subtotalStr: string;
  taxStr: string;
  totalStr: string;

  // Once sale is made, this turns true which displays cash change
  // amount if paid in cash.
  saleMade: boolean = false;

  // @desc    Add new item to current order Item array
  // @params  name, unitPrice
  // @return  None
  public addItem(name: string, quantity: number, unitPrice: number) {
    if (this.itemExists(name)) {
      this.increaseQuantity(name);
      this.refreshValues();
    } else {
      let newItem = new Item();
      newItem.Id = uuid();
      newItem.Name = name;
      newItem.Quantity = quantity;
      newItem.UnitPrice = unitPrice;
      newItem.Subtotal = quantity * unitPrice;
      this.itemList.push(newItem);
      this.refreshValues();
    }
  }

  // @desc    Function to remove item from item array by id (used for "Remove" btn)
  // @params  id
  // @Return  None
  public removeItemById(id: string) {
    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].Id === id) {
        this.itemList.splice(i, 1);
      }
    }
    this.refreshValues();
  }

  // @desc    Function to remove item from item array by name (private method used for decreaseQuantity)
  // @params  itemName
  // @Return  None
  private removeItemByName(itemName: string) {
    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].Name === itemName) {
        this.itemList.splice(i, 1);
      }
    }
  }

  // @desc    Find item, then increment quantity.
  // @params  name
  // @Return  None
  public increaseQuantity(name: string) {
    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].Name === name) {
        this.itemList[i].Quantity++;
        this.itemList[i].Subtotal =
          this.itemList[i].Quantity * this.itemList[i].UnitPrice;

        this.refreshValues();
      }
    }
  }

  // @desc    Find item, then increment quantity.
  // @params  name
  // @Return  None
  public decreaseQuantity(name: string) {
    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].Name === name) {
        // If quantity is 0, then remove it from the list.
        if (this.itemList[i].Quantity === 1) {
          this.removeItemByName(name);
          this.refreshValues();
        } else {
          this.itemList[i].Quantity--;
          this.itemList[i].Subtotal =
            this.itemList[i].Quantity * this.itemList[i].UnitPrice;
          this.refreshValues();
        }
      }
    }
  }

  // @desc    Returns true if item is already in basket.
  // @params  name
  // @Return  None
  private itemExists(name: string) {
    var exists = false;

    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].Name === name) {
        exists = true;
      }
    }
    return exists;
  }

  // @desc    Refresh subtotal, tax, and total values
  // @params  None
  // @Return  None
  public refreshValues() {
    // Refresh subtotals
    this.subtotal = 0;
    for (let i = 0; i < this.itemList.length; i++) {
      this.subtotal += this.itemList[i].Subtotal;
    }
    this.subtotalStr = (Math.round(this.subtotal * 100) / 100).toFixed(2);

    // Refresh taxes: MN sales tax is 6.875%
    this.tax = this.subtotal * 0.06875;
    this.taxStr = (Math.round(this.tax * 100) / 100).toFixed(2);

    // Refresh total
    this.total = this.subtotal + this.tax;
    this.totalStr = (Math.round(this.total * 100) / 100).toFixed(2);
    console.log(this.total + this.totalStr);
  }

  // @desc    Reset all values including array
  // @params  None
  // @Return  None
  public reset() {
    this.subtotal = 0;
    this.tax = 0;
    this.total = 0;
    for (let i = this.itemList.length-1; i >= 0; i--) {
      this.itemList.pop();
    }
    for (let i = 0; i < this.itemList.length; i++) {
      console.log(this.itemList[i]);
    }
    this.refreshValues();
    this.inProgress = true;
  }

  // @desc    If in progress, reset all values including array. (used in menu-btn component)
  // @params  None
  // @Return  None
  public checkIfInProgress() {
    if(this.inProgress == false) {
      this.reset();
    }
  }
}

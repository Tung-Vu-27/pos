import { Component, OnInit } from "@angular/core";
import { RegisterService } from "src/app/services/register.service";
import { Globals } from "../../../globals";

@Component({
  selector: "app-menu-btns",
  templateUrl: "./menu-btns.component.html",
  styleUrls: ["./menu-btns.component.scss"]
})
export class MenuBtnsComponent implements OnInit {
  constructor(public service: RegisterService, public globals: Globals) {}

  ngOnInit() {}

  // @desc    UI method to add item to current order
  // @params  itemName
  // @Return  None
  addItem(itemName: string) {
    // Switch cases determine item prices stored in Globals
    switch (itemName) {
      case "Chocolate Cone":
        this.service.checkIfInProgress();
        this.service.addItem(itemName, 1, this.globals.conePrice);
        break;
      case "Vanilla Cone":
        this.service.checkIfInProgress();
        this.service.addItem(itemName, 1, this.globals.conePrice);
        break;
      case "Strawberry Cone":
        this.service.checkIfInProgress();
        this.service.addItem(itemName, 1, this.globals.conePrice);
        break;
      case "Chocolate Bowl":
        this.service.checkIfInProgress();
        this.service.addItem(itemName, 1, this.globals.bowlPrice);
        break;
      case "Vanilla Bowl":
        this.service.checkIfInProgress();
        this.service.addItem(itemName, 1, this.globals.bowlPrice);
        break;
      case "Strawberry Bowl":
        this.service.checkIfInProgress();
        this.service.addItem(itemName, 1, this.globals.bowlPrice);
        break;
      case "Sm Soft Drink":
        this.service.checkIfInProgress();
        this.service.addItem(itemName, 1, this.globals.smDrinkPrice);
        break;
      case "Md Soft Drink":
        this.service.checkIfInProgress();
        this.service.addItem(itemName, 1, this.globals.mdDrinkPrice);
        break;
      case "Lg Soft Drink":
        this.service.checkIfInProgress();
        this.service.addItem(itemName, 1, this.globals.lgDrinkPrice);
        break;
    }
  }
}

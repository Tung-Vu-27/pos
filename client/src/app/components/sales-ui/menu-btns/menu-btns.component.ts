import { Component, OnInit } from "@angular/core";
import { RegisterService } from "src/app/services/register.service";

@Component({
  selector: "app-menu-btns",
  templateUrl: "./menu-btns.component.html",
  styleUrls: ["./menu-btns.component.scss"]
})
export class MenuBtnsComponent implements OnInit {
  constructor(private service: RegisterService) {}

  ngOnInit() {}

  // @desc    UI method to add item to current order
  // @params  itemName
  // @Return  None
  addItem(itemName: string) {
    this.service.addItem(itemName, 1, 2.99);
  }

}

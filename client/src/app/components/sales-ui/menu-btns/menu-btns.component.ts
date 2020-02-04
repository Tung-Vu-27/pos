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

  addVanillaCone() {
    this.service.addItem("Vanilla Cone", 2.99);
    console.log(this.service.itemList);
  }
}

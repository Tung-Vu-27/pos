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

  addCone(flavor: string) {
    this.service.addItem(flavor + " Cone", 1, 2.99);
  }

  addBowl(flavor: string) {
    // this.service.addItem(flavor + " Bowl", 5.99);
  }

}

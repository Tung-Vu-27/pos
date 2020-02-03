import { Component, OnInit } from "@angular/core";
import { Globals } from "../../globals";

@Component({
  selector: "app-admin-ui",
  templateUrl: "./admin-ui.component.html",
  styleUrls: ["./admin-ui.component.scss"]
})
export class AdminUIComponent implements OnInit {

  constructor(globals: Globals) {
    globals.page = "admin";
    console.log(globals.page);
  }

  ngOnInit() {}
}

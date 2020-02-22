import { Component, OnInit } from "@angular/core";
import { Globals } from "../../globals";
import { SalesService } from "../../services/sales.service";

@Component({
  selector: "app-admin-ui",
  templateUrl: "./admin-ui.component.html",
  styleUrls: ["./admin-ui.component.scss"]
})
export class AdminUIComponent implements OnInit {


  ngOnInit() {
    this.salesService.refreshSalesList();
  }

  constructor(globals: Globals, public salesService: SalesService) {
    globals.page = "admin";
  }



}

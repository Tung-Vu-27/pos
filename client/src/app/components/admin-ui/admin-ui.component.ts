import { Component, OnInit } from "@angular/core";
import { Globals } from "../../globals";
import { SalesService } from "../../services/sales.service";
import { Sales } from '../../models/sales.model';

@Component({
  selector: "app-admin-ui",
  templateUrl: "./admin-ui.component.html",
  styleUrls: ["./admin-ui.component.scss"]
})
export class AdminUIComponent implements OnInit {


  ngOnInit() {
    this.service.refreshSalesList();
  }

  constructor(globals: Globals, public service: SalesService) {
    globals.page = "admin";
  }



}

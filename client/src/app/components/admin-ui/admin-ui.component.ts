import { Component, OnInit, ViewChild } from "@angular/core";
import { Globals } from "../../globals";
import { SalesService } from "../../services/sales.service";




@Component({
  selector: "app-admin-ui",
  templateUrl: "./admin-ui.component.html",
  styleUrls: ["./admin-ui.component.scss"]
})
export class AdminUIComponent implements OnInit {



  
  constructor(globals: Globals, private service: SalesService) {
    globals.page = "admin";
    console.log(globals.page);
  }

  ngOnInit() {
    this.service.refreshSalesList();

  }

}

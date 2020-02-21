import { Component, OnInit } from '@angular/core';
import { Globals } from "../../globals";
import { SalesService} from "../../services/sales.service";

@Component({
  selector: 'app-sales-ui',
  templateUrl: './sales-ui.component.html',
  styleUrls: ['./sales-ui.component.scss']
})
export class SalesUIComponent implements OnInit {

  constructor(globals: Globals, public service: SalesService) { 
    globals.page = "sales";
    console.log(globals.page);
  }

  ngOnInit() {
    this.service.refreshSalesList();
  }

}

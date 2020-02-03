import { Component, OnInit } from '@angular/core';
import { Globals } from "../../globals";

@Component({
  selector: 'app-sales-ui',
  templateUrl: './sales-ui.component.html',
  styleUrls: ['./sales-ui.component.scss']
})
export class SalesUIComponent implements OnInit {

  constructor(globals: Globals) { 
    globals.page = "sales";
    console.log(globals.page);
  }

  ngOnInit() {
    
  }

}

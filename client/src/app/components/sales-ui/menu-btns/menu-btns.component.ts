import { Component, OnInit } from '@angular/core';
import { Item } from "../../../models/item.model";
import { ItemService } from "../../../services/item.service";

@Component({
  selector: 'app-menu-btns',
  templateUrl: './menu-btns.component.html',
  styleUrls: ['./menu-btns.component.scss']
})
export class MenuBtnsComponent implements OnInit {

  itemModel: Item;

  constructor(private service: ItemService) {
    
   }

  ngOnInit() {
  }

  addVanillaCone() {
    this.itemModel = new Item();
    this.itemModel.Name = "Vanilla";
    this.itemModel.Quantity = 1;
    this.itemModel.UnitPrice = 2.99;

    this.service.postItem(this.itemModel).subscribe(res => {
      this.service.refreshList();
    })
  }
}

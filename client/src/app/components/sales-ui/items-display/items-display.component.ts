import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-items-display',
  templateUrl: './items-display.component.html',
  styleUrls: ['./items-display.component.scss']
})
export class ItemsDisplayComponent implements OnInit {

  constructor(public service: RegisterService) { }

  ngOnInit() {
  }

  // @desc    UI method to remove item from current order
  // @params  id
  // @Return  None
  removeItem(id: string) {
    this.service.removeItemById(id);
  }

  // @desc    UI method to increase qty of item
  // @params  itemName
  // @Return  None
  increaseQty(itemName: string) {
    this.service.increaseQuantity(itemName);
  }

  // @desc    UI method to decrease qty of item
  // @params  itemName
  // @Return  None
  decreaseQty(itemName: string) {
    this.service.decreaseQuantity(itemName);
  }

}

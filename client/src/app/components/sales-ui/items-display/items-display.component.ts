import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-items-display',
  templateUrl: './items-display.component.html',
  styleUrls: ['./items-display.component.scss']
})
export class ItemsDisplayComponent implements OnInit {

  constructor(private service: RegisterService) { }

  ngOnInit() {
  }

}

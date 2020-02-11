import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private service: RegisterService) { 

  }


  
  ngOnInit() {
 
  }
  
  

}

import { Injectable } from "@angular/core";

// This class is used for setting prices globally, so that you 
// don't need to repeatedly set prices for adding items. 
@Injectable()
export class Globals {
  page: string = "";
  conePrice: number = 2.99;
  bowlPrice: number = 3.99;
  smDrinkPrice: number = .99;
  mdDrinkPrice: number = 1.49;
  lgDrinkPrice: number = 1.99;
}

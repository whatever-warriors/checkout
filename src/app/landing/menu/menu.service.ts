import { Injectable } from "@angular/core";
import { Entree } from "./entree.model";

import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class MenuService {

  menu: Entree[] = [];

  menuChanged = new Subject<Entree[]>();

  constructor(private http: HttpClient) {}

  fetchMenu() {
    this.http
      .get<Entree[]>(
        'https://checkout-17e0b-default-rtdb.firebaseio.com/entrees.json'
      )
      .subscribe(menu => {
        this.setMenu(menu);
      }
      ,(error: any) => {
        console.log(error);
      }
      );

      return this.menu.slice();
  }

  storeMenu() {
    let menu = this.getMenu();
    this.http
      .put(
        'https://checkout-17e0b-default-rtdb.firebaseio.com/entrees.json',
        menu
        )
      .subscribe(response => {
      console.log(response)
    });
  }

  setMenu(menu: Entree[]) {
    this.menu = menu;
    this.menuChanged.next(this.menu);

    this.storeMenu();
  }

  getMenu() {
    return this.menu.slice();
  }

  getMenuItem(id: string) {
    return this.menu[+id];
  }

  // addMenuItem() {

  // }

  // updateMenu() {

  // }

  // deleteMenuItem() {

  // }

}

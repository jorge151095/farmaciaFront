import { Component, KeyValueDiffer, KeyValueDiffers, KeyValueChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements DoCheck {
  private totalShoppingDiffer: KeyValueDiffer<any, any>;
  code: string = '';
  shoppingCart = [{code: '1be', name: 'name', price: 3, quantity: 1}, {code: '2be', name: 'name2', price: 5, quantity: 4}];
  totalShopping = '0';

  constructor(private _differs: KeyValueDiffers) {
    this.totalShoppingDiffer = this._differs.find(this.totalShopping).create();
    this.getTotal();
  }

  totalShoppingChanged(changes: KeyValueChanges<string, any>) {
    console.log('changes');
    /* If you want to see details then use
      changes.forEachRemovedItem((record) => ...);
      changes.forEachAddedItem((record) => ...);
      changes.forEachChangedItem((record) => ...);
    */
  }

  ngDoCheck(): void {
    const changes = this.totalShoppingDiffer.diff(this.totalShopping);
    if (changes) {
      this.totalShoppingChanged(changes);
    }
}

  add() {}

  getTotal() {
    this.totalShopping = '0';
    for (const article of this.shoppingCart) {
      this.totalShopping = this.totalShopping + (article.price * article.quantity);
    }
  }

  deleteAll() {
    this.shoppingCart = [];
  }

  deleteOne(index) {
    this.shoppingCart.splice(index, 1);
  }


}

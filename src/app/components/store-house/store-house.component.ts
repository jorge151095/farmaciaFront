import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-store-house',
  templateUrl: './store-house.component.html',
  styleUrls: ['./store-house.component.css']
})
export class StoreHouseComponent {
  stores = [];
  valueSelected = '';
  code = '';
  stock = '';
  products = [];
  product = {};
  unitiesProductM = 0;
  priceBuyProductM = 0;

  constructor(private _appService: AppService) {
    // Get stores
    this._appService.getAll('stores')
      .subscribe( (data: any ) => {
        this.stores = data;
    }, (err: any) => {
        console.log(err);
    });
  }

  save() {
    // Get stock currents from db
    this._appService.getAll(`StockCurrents?code=${this.code}&storeId=${this.valueSelected}`)
      .subscribe( (data: any ) => {
          if (data !== null) {
            this.stock = data.Stock;
          } else {
            this.stock = '0';
          }
      }, (error: any ) => {
        console.log(error);
    });
    // Get products depend code from db
    this._appService.getAll(`Products/${this.code}`)
      .subscribe( (data: any ) => {
        if (data !== null) {
          this.products = data;
        } else {
          console.log('result null');
        }
      }, (error: any ) => {
        console.log(error);
    });
  }

  onChangeVendor(event) {
    // Update product to show
    for (const product of this.products) {
      if (product.Id == event.target.value) {
        this.product = product;
      }
    }
  }

}

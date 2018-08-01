import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  code: string = '';
  shoppingCart = [];
  totalShopping = 0;

  constructor(private _appService: AppService, private _toastr: ToastrService) {
    this.getTotal();
  }

  add() {
    this._appService.getById(`Products`, this.code)
      .subscribe( (data: any ) => {
          if (data !== null ) {
            this.prepareData(data);
          }
      }, (error: any ) => {
        this._toastr.error('Producto no encontrado', 'Error');
    });
    this.code = '';
  }

  prepareData(data) {
    let flagExists: boolean = false;
    for (const product of this.shoppingCart) {
      if (product.Code == data.Code) {
        product.Quantity++;
        flagExists = true;
      }
    }
    if (!flagExists) {
      data.Quantity = 1;
      this.shoppingCart.push(data);
    }
    this.getTotal();
  }

  getTotal() {
    this.totalShopping = 0;
    for (const article of this.shoppingCart) {
      if (article.Quantity !== null) {
        this.totalShopping = this.totalShopping + (article.SellPrice * article.Quantity);
      }
    }
  }

  deleteAll() {
    this.shoppingCart = [];
    this.getTotal();
  }

  deleteOne(index) {
    this.shoppingCart.splice(index, 1);
    this.getTotal();
  }

}

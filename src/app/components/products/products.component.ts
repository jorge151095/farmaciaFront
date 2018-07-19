import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  code = '';
  product = {
    Code: '',
    Name: '',
    Description: '',
    UnitType: '',
    Laboratory: '',
    Formulas: '',
    SellPrice: 0,
    BuyPrice: 0,
    PublicPrice: 0,
    Discount: 0,
    DiscountPercent: 0,
    Promotion: 0,
    PromotionPercent: 0,
    IVA: 0,
    IEPS: 0,
    Image: '',
    VendorId: 0
  };
  unitTypes = ['PZA', 'CAJA'];
  constructor() {
  }

  search() {

  }

}

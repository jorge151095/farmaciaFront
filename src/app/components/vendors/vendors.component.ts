import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  vendor: Object = {
    name: '',
    email: '',
    phone: ''
  };
  constructor(private _appService: AppService) { }

  ngOnInit() {
  }

  save() {
    console.log(this.vendor);
    this._appService.postQuery('vendors', this.vendor)
      .subscribe( (data: any ) => {
          console.log(data);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private _appService: AppService, private _toastr: ToastrService) { }

  ngOnInit() {
  }

  save() {
    this._appService.postQuery('vendors', this.vendor)
      .subscribe( (data: any ) => {
        this._toastr.success('Proveedor Guardado', 'Correcto');
      }, (error: any) => {
        this._toastr.success('No se pudo completar la operación', 'Error');
      });
  }

}

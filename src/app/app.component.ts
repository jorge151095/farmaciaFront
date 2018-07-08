import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private _appService: AppService) {
    this._appService.getAll('stores')
      .subscribe( (data: any ) => {
          console.log(data);
      });
  }
  title = 'app';
  stores = [];
}

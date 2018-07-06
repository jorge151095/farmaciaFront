import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private _appService: AppService) {
    /*this._appService.postQuery()
      .subscribe( (data: any ) => {
          console.log(data);
      });*/
    /*this._appService.getQuery()
      .subscribe( (data: any ) => {
          console.log(data);
      });*/
  }
  title = 'app';
  stores = [];
}

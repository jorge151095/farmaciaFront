// Angular components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// User  components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SalesComponent } from './components/sales/sales.component';
import { ProductsComponent } from './components/products/products.component';
import { StoreHouseComponent } from './components/store-house/store-house.component';
import { VendorsComponent } from './components/vendors/vendors.component';

// Router components
import { ROUTES } from './app.routes';

// Forms
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SalesComponent,
    ProductsComponent,
    StoreHouseComponent,
    VendorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot( ROUTES, { useHash: false} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

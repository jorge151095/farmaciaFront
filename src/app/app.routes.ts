import { Routes } from '@angular/router';
import { SalesComponent } from './components/sales/sales.component';
import { ProductsComponent } from './components/products/products.component';
import { StoreHouseComponent } from './components/store-house/store-house.component';
import { VendorsComponent } from './components/vendors/vendors.component';

export const ROUTES: Routes = [
    { path: 'sales', component: SalesComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'storeHouse', component: StoreHouseComponent},
    { path: 'vendors', component: VendorsComponent},
    { path: '', pathMatch: 'full', redirectTo: 'sales'},
    { path: '**', pathMatch: 'full', redirectTo: 'sales'}
];

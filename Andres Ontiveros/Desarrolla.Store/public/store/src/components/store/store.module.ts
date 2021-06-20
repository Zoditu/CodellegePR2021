import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store';
import { HeaderComponent } from '../menuHeader/menuHeader';
import { CatalogComponent } from '../catalog/catalog';
import { InicioComponent } from '../inicio/inicio';
import { LoginComponent } from '../login/login';
import { RegisterComponent } from '../register/register';
import { AccountComponent } from '../account/account';
import { DetallesCarritoComponent } from '../detallesCarrito/detallesCarrito';
import { CheckoutComponent } from '../checkout/checkout';
import { ConfirmationComponent } from '../confirmation/confirmation';
import { AcercaDeComponent } from '../AcercaDe/AcercaDe';
import { FooterComponent } from '../menuFooter/menuFooter';

import { LoaderComponent } from '../loader/loader';

const routes : Routes = [
  {path: "catalog", component: CatalogComponent},
  {path: "", component: InicioComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  { path: 'account', component: AccountComponent },
  { path: 'detallesCarrito', component: DetallesCarritoComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'acercaDe', component: AcercaDeComponent }
];

@NgModule({
  declarations: [
    StoreComponent,
    HeaderComponent,
    CatalogComponent,
    FooterComponent,
    DetallesCarritoComponent,
    LoaderComponent,
    CheckoutComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [StoreComponent]
})
export class StoreModule {}
 
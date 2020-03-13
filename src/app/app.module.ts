import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlatinumAndPalladiumPricesService } from './shared/services/platinum-and-palladium-prices.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PlatinumAndPalladiumPricesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

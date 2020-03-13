import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PPPQuandl } from './shared/models/pppquandl';
import { PlatinumAndPalladiumPricesService } from './shared/services/platinum-and-palladium-prices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electricus';

  ppprices: PPPQuandl

  constructor(private service: PlatinumAndPalladiumPricesService, ) {
    service.getPPPrices().subscribe(data => this.ppprices = data);
    console.log(this.ppprices.dataset)
  }
}

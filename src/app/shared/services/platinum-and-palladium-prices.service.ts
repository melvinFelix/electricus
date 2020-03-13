import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from 'rxjs';
import { PPPQuandl } from '../models/pppquandl';

@Injectable({
  providedIn: 'root'
})
export class PlatinumAndPalladiumPricesService {

  private pppquandl$ = new Observable<PPPQuandl>();
  private quandl = {
    base: "https://www.quandl.com/api/v3/datasets/LPPM/PALL.json",
    start: "start_date=2020-02-13",
    end: "end_date=2020-02-13",
    api_key: "api_key=XvGtkK3NusTxxSzBw-zR"
  };
  private quandlUrl = `${this.quandl.base}?${this.quandl.start}&${this.quandl.end}&${this.quandl.api_key}`;
  

  constructor(private http:HttpClient) {
    this.pppquandl$ = http.get<PPPQuandl>(this.quandlUrl);
  }

  getPPPrices() {
    return this.pppquandl$;
  } 
}

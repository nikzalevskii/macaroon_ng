import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  count:number = 0;
  sumOrder:number = 0;
  constructor() { }
}

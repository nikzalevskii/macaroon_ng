import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  count:number = 0;
  // sumOrder:string | null = null;
  sumOrder:number = 0;
  constructor() { }
}

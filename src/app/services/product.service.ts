import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  constructor() { }

  getProducts():ProductType[] {
    return [
      {
        image: '1.png',
        name: 'Макарун с малиной',
        amount: '1 шт.',
        price: 1.7,
      },
      {
        image: '2.png',
        name: 'Макарун с манго',
        amount: '1 шт.',
        price: 1.7,
      },
      {
        image: '3.png',
        name: 'Пирог с ванилью',
        amount: '1 шт.',
        price: 1.7,
      },
      {
        image: '4.png',
        name: 'Пирог с фисташками',
        amount: '1 шт.',
        price: 1.7,
      },
    ];
  }

}

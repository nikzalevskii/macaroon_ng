import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductInterface} from "../../interfaces/product.interface";
import {FormInterface} from "../../interfaces/form.interface";

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {
  @Input() product:ProductInterface = {} as ProductInterface;
  @Input() i:number = 0;
  @Output() makeAnOrder= new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  toOrderProduct() {
    this.makeAnOrder.emit();
  }

}

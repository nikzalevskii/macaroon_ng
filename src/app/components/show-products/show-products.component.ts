import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {OrderService} from "../../services/order.service";
import {FormType} from "../../types/form.type";

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {
  @Input() product:ProductType = {} as ProductType;
  @Input() i:number = 0;
  @Output() makeAnOrder= new EventEmitter<void>();

  public formValues: FormType = {
    productName: '',
    clientName: '',
    clientPhone: '',
  }
  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
  }

  toOrderProduct() {
    this.makeAnOrder.emit();
  }

}

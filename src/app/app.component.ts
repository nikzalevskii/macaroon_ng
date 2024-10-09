import {AfterViewInit, Component, ElementRef, LOCALE_ID, NgModule, DEFAULT_CURRENCY_CODE ,OnInit, ViewChild} from '@angular/core';
import {registerLocaleData} from "@angular/common";
import {FormType} from "./types/form.type";
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {OrderService} from "./services/order.service";
import {ShowAdvantagesComponent} from "./components/show-advantages/show-advantages.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{
    provide: LOCALE_ID,
    // provide: DEFAULT_CURRENCY_CODE,
    // useValue: 'ru-RU'
    useValue: 'en-EN'
  },
  ]
})


export class AppComponent implements OnInit, AfterViewInit {
  public title: string = 'macaroon';

  public phone: string = '+375 (29) 368-98-68';
  public instLink: string = 'https://www.instagram.com/';

  public showPresent: boolean = true;

  @ViewChild(ShowAdvantagesComponent) aboutElement!: ShowAdvantagesComponent;

  public products: ProductType[] = [];

  public formValues: FormType = {
    productName: '',
    clientName: '',
    clientPhone: '',
  }

  constructor(private productService: ProductService, public orderService: OrderService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  ngAfterViewInit() {

  }


  getChildElement():HTMLElement {
    return this.aboutElement.getChildDiv().nativeElement;
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public appToCart(product: ProductType, target: HTMLElement): void {
    alert(`"${product.name}" добавлен в корзину!`);
    this.scrollTo(target);
    this.formValues.productName = product.name.toUpperCase();
    this.orderService.count++;
    // this.orderService.sumOrder = this.orderService.sumOrder ?
    //   (Number(this.orderService.sumOrder) + product.price).toFixed(2) : product.price.toFixed(2);
    this.orderService.sumOrder += product.price;
  }

  public createOrder() {
    if (!this.formValues.productName) {
      alert('Выберите пиццу');
      return;
    }
    if (!this.formValues.clientName) {
      alert('Заполните имя');
      return;
    }
    if (!this.formValues.clientPhone) {
      alert('Заполните телефон');
      return;
    }

    //   запрос backend
    alert('Спасибо за заказ. С Вами свяжутся в ближайшее время');
    this.orderService.count = 0;
    // this.orderService.sumOrder = null;
    this.orderService.sumOrder = 0;
    this.formValues = {
      productName: '',
      clientName: '',
      clientPhone: '',
    }
  }

  addClass(target: HTMLElement, className: string): void {
    target.classList.add(className);
  }

  removeClass(target: HTMLElement, className: string): void {
    target.classList.remove(className);
  }


}

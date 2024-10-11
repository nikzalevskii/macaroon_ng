import {AfterViewInit, Component, ElementRef, LOCALE_ID, NgModule, DEFAULT_CURRENCY_CODE ,OnInit, ViewChild} from '@angular/core';
import {registerLocaleData} from "@angular/common";
import {FormInterface} from "./interfaces/form.interface";
import {ProductInterface} from "./interfaces/product.interface";
import {ProductService} from "./services/product.service";
import {OrderService} from "./services/order.service";
import {ShowAdvantagesComponent} from "./components/show-advantages/show-advantages.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent implements OnInit, AfterViewInit {
  public title: string = 'macaroon';

  public phone: string = '375293689868';
  public instLink: string = 'https://www.instagram.com/';

  public showPresent: boolean = true;

  @ViewChild(ShowAdvantagesComponent) aboutElement!: ShowAdvantagesComponent;

  public products: ProductInterface[] = [];

  public formValues: FormInterface = {
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

  public appToCart(product: ProductInterface, target: HTMLElement): void {
    alert(`"${product.name}" добавлен в корзину!`);
    this.scrollTo(target);
    this.formValues.productName = product.name.toUpperCase();
    this.orderService.count++;
    this.orderService.sumOrder += product.price;
  }

  public createOrder():void {
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

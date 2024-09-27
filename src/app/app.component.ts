import { Component } from '@angular/core';

interface Advantages {
  title: string
  description:string
}

interface Product {
  image:string
  name: string
  amount: string
  price: string
}

interface FormType {
  productName: string
  clientName: string
  clientPhone: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./styles/adaptive.scss','./styles/animations.scss', ]
})


export class AppComponent {

  public phone:string = '+375 (29) 368-98-68';
  public instLink = 'https://www.instagram.com/';

  public showPresent:boolean = false;

  public advantages:Advantages[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },
  ]

  public products: Product[] = [
    {
      image: '1.png',
      name: 'Макарун с малиной',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: '2.png',
      name: 'Макарун с манго',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: '3.png',
      name: 'Пирог с ванилью',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: '4.png',
      name: 'Пирог с фисташками',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
  ]

  public formValues: FormType = {
    productName: '',
    clientName: '',
    clientPhone: '',
  }

  public scrollTo(target:HTMLElement):void {
    target.scrollIntoView({behavior:'smooth'});
  }

  public appToCart(product:Product, target:HTMLElement ):void {
    this.scrollTo(target);
    this.formValues.productName = product.name.toUpperCase();
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

    this.formValues = {
      productName: '',
      clientName: '',
      clientPhone: '',
    }

  }

  addClass (target:HTMLElement, className:string):void {
    target.classList.add(className);
  }
  removeClass (target:HTMLElement, className:string):void {
    target.classList.remove(className);
  }


}

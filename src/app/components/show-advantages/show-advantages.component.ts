import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {AdvantagesInterface} from "../../interfaces/advantages.interface";

@Component({
  selector: 'app-show-advantages',
  templateUrl: './show-advantages.component.html',
  styleUrls: ['./show-advantages.component.scss']
})
export class ShowAdvantagesComponent implements OnInit, AfterViewInit {
  @ViewChild('about') aboutChildElement!: ElementRef;

  public advantages: AdvantagesInterface[] = [
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
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

  }

  getChildDiv(): ElementRef {
    return this.aboutChildElement;
  }

}

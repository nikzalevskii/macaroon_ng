import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { ShowAdvantagesComponent } from './components/show-advantages/show-advantages.component';
import { ButtonEffectsDirective } from './directives/button-effects.directive';
import {ProductService} from "./services/product.service";
import { DescriptionSizePipe } from './pipes/description-size.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowProductsComponent,
    ShowAdvantagesComponent,
    ButtonEffectsDirective,
    DescriptionSizePipe,
    PhoneFormatPipe,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [ProductService,
    {
      provide: LOCALE_ID,
      useValue: 'ru-RU'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

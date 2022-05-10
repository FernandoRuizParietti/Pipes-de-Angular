import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Aca importo los modulos de una cosa a la vez
/* import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card'; */

//Aca importo mi modulo personalizado
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Cambiar el locale de la App
import localeEs from "@angular/common/locales/es-AR";
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    SharedModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-AR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

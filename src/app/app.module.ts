import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import { registerLocaleData } from "@angular/common";
import localeRu from '@angular/common/locales/ru'

import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';
import {FormComponent} from './form/form.component';
import {PipesComponent} from './pipesComp/pipes.component';
import {DirectComponent} from './direct/direct.component';

import {StylesDirective} from './directives/styles.directive';
import {ShowDirective} from './directives/show.directive';
import { MultyByPipe } from './pipes/multy-by.pipe';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PostFilterComponent } from './post-filter/post-filter.component';
import { CounterComponent } from './counter/counter.component';
import { FormGlobalComponent } from './form-global/form-global.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwitchComponent } from './switch/switch.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientComponent} from "./http-client/http-client.component";

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    StylesDirective,
    ShowDirective,
    PipesComponent,
    DirectComponent,
    MultyByPipe,
    LocalDatePipe,
    FilterPipe,
    PostFilterComponent,
    CounterComponent,
    FormGlobalComponent,
    SwitchComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

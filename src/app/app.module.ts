import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardsComponent } from './component/cards/cards.component';
import { LoadingComponent } from './component/loading/loading.component';
import { ModalDetailsComponent } from './component/modal-details/modal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    LoadingComponent,
    ModalDetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

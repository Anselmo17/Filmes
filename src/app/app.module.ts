import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardsComponent } from './component/cards/cards.component';
import { LoadingComponent } from './component/loading/loading.component';
import { ModalDetailsComponent } from './component/modal-details/modal-details.component';
import { ModalComponent } from './component/modal/modal.component';
import { PaginationComponent } from './component/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    LoadingComponent,
    ModalDetailsComponent,
    ModalComponent,
    PaginationComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

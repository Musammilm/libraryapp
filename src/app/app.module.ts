import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { SearchbooksComponent } from './searchbooks/searchbooks.component';
import { DeletebooksComponent } from './deletebooks/deletebooks.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbooksComponent,
    SearchbooksComponent,
    DeletebooksComponent,
    ViewbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

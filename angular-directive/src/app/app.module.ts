import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { StyleDirective } from './directives/style.directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

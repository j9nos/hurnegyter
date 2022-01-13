/*
 * File: app.module.ts
 * Author: Olah Janos Gergely
 * Copyright: 2022, olajg
 * Group: Szoft N/2
 * Date: 2022-01-13
 * Github: https://github.com/olahjg/
 * Licenc: GNU GPL
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

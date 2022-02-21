import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FightCardComponent } from './fight-card/fight-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FightCardHeaderComponent } from './fight-card/fight-card-header/fight-card-header.component';
import { DatePipe } from '@angular/common';
import { FightCardBodyComponent } from './fight-card/fight-card-body/fight-card-body.component';
import { FightCardTimescaleComponent } from './fight-card/fight-card-timescale/fight-card-timescale.component';
import { FightCardImageComponent } from './fight-card/fight-card-image/fight-card-image.component';

@NgModule({
  declarations: [
    AppComponent,
    FightCardComponent,
    FightCardHeaderComponent,
    FightCardBodyComponent,
    FightCardTimescaleComponent,
    FightCardImageComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

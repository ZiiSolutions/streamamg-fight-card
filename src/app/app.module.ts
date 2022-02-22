import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FightCardComponent } from './fight-card/fight-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FightCardHeaderComponent } from './fight-card/fight-card-header/fight-card-header.component';
import { DatePipe } from '@angular/common';
import { FightCardTimescaleComponent } from './fight-card/fight-card-timescale/fight-card-timescale.component';
import { FightCardImageComponent } from './fight-card/fight-card-image/fight-card-image.component';
import { FightCardDetailComponent } from './fight-card/fight-card-detail/fight-card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FightCardComponent,
    FightCardHeaderComponent,
    FightCardDetailComponent,
    FightCardTimescaleComponent,
    FightCardImageComponent,
  ],
  imports: [BrowserModule, HttpClientModule, HammerModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

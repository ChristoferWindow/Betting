import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetsListBigComponent } from './bets-list-big/bets-list-big.component';
import { BetCreateComponent } from './bet-create/bet-create.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { TeamBetsListComponent } from './team-bets-list/team-bets-list.component';
import { BetPageComponent } from './bet-page/bet-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { betsReducer } from './bets.reducer';
import { BetItemComponent } from './bet-item/bet-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BetsListBigComponent,
    BetCreateComponent,
    TeamCreateComponent,
    TeamEditComponent,
    TeamPageComponent,
    TeamBetsListComponent,
    BetPageComponent,
    HeaderComponent,
    FooterComponent,
    TeamsListComponent,
    HomeComponent,
    BetItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot({ bets: betsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

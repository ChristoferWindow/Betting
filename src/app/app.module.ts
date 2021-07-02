import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BetsListBigComponent} from './bets-list-big/bets-list-big.component';
import {BetCreateComponent} from './bet-create/bet-create.component';
import {TeamCreateComponent} from './team-create/team-create.component';
import {TeamEditComponent} from './team-edit/team-edit.component';
import {TeamPageComponent} from './team-page/team-page.component';
import {TeamBetsListComponent} from './team-bets-list/team-bets-list.component';
import {BetPageComponent} from './bet-page/bet-page.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TeamsListComponent} from './teams-list/teams-list.component';
import {HomeComponent} from './home/home.component';
import {StoreModule} from '@ngrx/store';
import {BetItemComponent} from './bet-item/bet-item.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {betsReducer} from './store/bets/bets.selector';
import {teamsReducer} from './store/teams/teams.selector';
import { HomeLandingImageComponent } from './home-landing-image/home-landing-image.component';
import { TeamItemComponent } from './team-item/team-item.component';

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
        HomeLandingImageComponent,
        TeamItemComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        StoreModule.forRoot(teamsReducer),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

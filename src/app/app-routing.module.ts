import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BetCreateComponent} from './bet-create/bet-create.component';
import {BetPageComponent} from './bet-page/bet-page.component';
import {TeamsListComponent} from './teams-list/teams-list.component';
import {HomeComponent} from './home/home.component';
import {TeamCreateComponent} from './team-create/team-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'team', component: TeamsListComponent },
  { path: 'team/create', component: TeamCreateComponent },
  { path: 'bet/create', component: BetCreateComponent },
  { path: 'bet', component: BetPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

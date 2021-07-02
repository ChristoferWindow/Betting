import {Component, OnInit} from '@angular/core';
import {BetItem} from '../interfaces/bet-item';
import {nanoid} from 'nanoid';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BetsState} from '../store/bets/bets.reducer';
import {Store} from '@ngrx/store';
import {AddBetAction} from '../store/bets/bets.actions';

@Component({
    selector: 'app-bet-create',
    templateUrl: './bet-create.component.html',
    styleUrls: ['./bet-create.component.scss']
})
export class BetCreateComponent implements OnInit {

    betCreateGroup: FormGroup = this.fb.group({
        name: ['', Validators.required],
        logo: ['', Validators.required],
        team2: ['', Validators.required],
        team2Rate: ['', Validators.required],
    });

    constructor(private fb: FormBuilder, private store: Store<BetsState>) {
    }

    ngOnInit(): void {
    }

    submitValue(): void {
        if (this.betCreateGroup.valid) {
            const betItem: BetItem = {
                _id: nanoid(),
                teams: {
                    team1: {
                        teamId: this.betCreateGroup.get('team1')?.value,
                        rate: this.betCreateGroup.get('team1Rate')?.value
                    }, team2: {
                        teamId: this.betCreateGroup.get('team2')?.value,
                        rate: this.betCreateGroup.get('team2Rate')?.value
                    }
                }
            };
            // alert(betItem.teams.team1.teamId);
            console.log(betItem, 'betItem');
            this.store.dispatch(new AddBetAction(betItem));
            this.betCreateGroup.reset();
        }
    }
}

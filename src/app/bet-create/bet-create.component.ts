import {Component, OnInit} from '@angular/core';
import {BetItem} from '../interfaces/bet-item';
import {nanoid} from 'nanoid';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BetsService} from '../services/bets-service';

@Component({
    selector: 'app-bet-create',
    templateUrl: './bet-create.component.html',
    styleUrls: ['./bet-create.component.scss']
})
export class BetCreateComponent implements OnInit {

    betCreateGroup: FormGroup = this.fb.group({
        team1: ['', Validators.required],
        team1Rate: ['', Validators.required],
        team2: ['', Validators.required],
        team2Rate: ['', Validators.required],
    });

    constructor(private fb: FormBuilder, private betsService: BetsService) {
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
            // this.betsService.addItem(betItem);
            this.betCreateGroup.reset();
        }
    }

}

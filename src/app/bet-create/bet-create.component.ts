import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BetItem} from '../interfaces/bet-item';
import {nanoid} from 'nanoid';
import {FormControl, FormGroup} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-bet-create',
    templateUrl: './bet-create.component.html',
    styleUrls: ['./bet-create.component.scss']
})
export class BetCreateComponent implements OnInit {

    @Output() submitItem: EventEmitter<BetItem> = new EventEmitter<BetItem>();


    team1 = new FormControl('');
    team1Rate = new FormControl('');
    team2 = new FormControl('');
    team2Rate = new FormControl('');

    ngOnInit(): void {
        this.team1 = new FormControl('');
        this.team1Rate = new FormControl('');
        this.team2 = new FormControl('');
        this.team2Rate = new FormControl('');
    }

    submitValue(newBetForm: any): void {
        // if (newBetForm.valid) {
        alert(newBetForm.team1);
        const betItem: BetItem = {
            _id: nanoid(),
            teams: {
                team1: {
                    teamId: newBetForm.team1,
                    rate: newBetForm.team1Rate
                }, team2: {
                    teamId: newBetForm.team2,
                    rate: newBetForm.team2Rate
                }
            }
        };
        this.submitItem.emit(betItem);
        newBetForm.resetForm();
        // }
    }
}

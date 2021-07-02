import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {TeamItem} from '../interfaces/team-item';
import {nanoid} from 'nanoid';
import {AddTeamAction} from '../store/teams/teams.actions';
import {TeamsState} from '../store/teams/teams.reducer';

@Component({
    selector: 'app-team-create',
    templateUrl: './team-create.component.html',
    styleUrls: ['./team-create.component.scss']
})
export class TeamCreateComponent implements OnInit {


    teamCreateGroup: FormGroup = this.fb.group({
        teamName: ['', Validators.required],
        teamLogo: ['', Validators.required],
    });

    constructor(private fb: FormBuilder, private store: Store<TeamsState>) {
    }

    ngOnInit(): void {
    }

    submitValue(): void {
        if (this.teamCreateGroup.valid) {
            const teamItem: TeamItem = {
                _id: nanoid(),
                name: this.teamCreateGroup.get('teamName')?.value,
                logo: this.teamCreateGroup.get('teamLogo')?.value
            };
            // alert(teamItem.teams.team1.teamId);
            console.log(teamItem, 'teamItem');
            this.store.dispatch(new AddTeamAction(teamItem));
            this.teamCreateGroup.reset();
        }
    }
}

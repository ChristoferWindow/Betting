import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TeamItem} from '../interfaces/team-item';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})

export class TeamItemComponent implements OnInit {
  @Input() item: TeamItem | undefined;
  @Output() remove: EventEmitter<TeamItem> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }
}

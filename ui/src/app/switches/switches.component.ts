import {Component, OnInit} from '@angular/core';
import {Switch, SWITCHES, RovState} from '../RovState';
import {RovStateService} from '../rovstate.service';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
  providers: [RovStateService]
})

export class SwitchesComponent implements OnInit {

  rovService: RovStateService;
  switchState: Switch[];

  constructor(rovService: RovStateService) {
    this.rovService = rovService;
  }

  changeState() {
    this.rovService.pushState(new RovState(this.switchState));
  }

  ngOnInit() {
    this.rovService.state.subscribe((newTelemetry: RovState) => {
      console.log('component subscfriptioin triggerd: ' + typeof newTelemetry);
      this.switchState = newTelemetry.switchState;
    });

  }
}

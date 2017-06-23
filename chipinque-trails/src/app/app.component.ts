import { Component } from '@angular/core';

import { Landmarks } from './landmarks.data';

import { PavementRoads } from './pavementroads.data';
import { FireRoads } from './fireroads.data';
import { SingleTracks } from './singletracks.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  landmarks = Landmarks;

  pavementRoads = PavementRoads;
  fireRoads = FireRoads;
  singleTracks = SingleTracks;
}

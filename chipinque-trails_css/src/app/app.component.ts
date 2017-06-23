import { Component } from '@angular/core';

import { Trail } from './trail.interface';
import { SingleTracks } from './singletracks.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  singleTracks = SingleTracks;
}

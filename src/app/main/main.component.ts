import { Component } from '@angular/core';
import { ProfileDataComponent } from '../profile-data/profile-data.component';
import { ClearmeComponent } from '../clearme/clearme.component';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: ClearmeComponent;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  panelOpenState = false;
  value = 'Clear me';
    longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;
}

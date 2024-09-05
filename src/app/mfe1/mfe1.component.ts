import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoadMfeService } from '../load-mfe.service';

@Component({
  selector: 'app-mfe1',
  standalone: true,
  imports: [],
  templateUrl: './mfe1.component.html',
  styleUrl: './mfe1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class Mfe1Component {
  constructor(private loadMfeService: LoadMfeService) {
    this.loadMfeService.loadScript('https://webcomponent2908.blob.core.windows.net/mfe1/main.js');
  }
}

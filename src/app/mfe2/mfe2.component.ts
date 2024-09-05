import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoadMfeService } from '../load-mfe.service';

@Component({
  selector: 'app-mfe2',
  standalone: true,
  imports: [],
  templateUrl: './mfe2.component.html',
  styleUrl: './mfe2.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class Mfe2Component {
  constructor(private loadMfeService: LoadMfeService) {
    this.loadMfeService.loadScript('https://testeangular.azurewebsites.net/main.js');
  }
}

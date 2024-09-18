import { Component, CUSTOM_ELEMENTS_SCHEMA, Renderer2  } from '@angular/core';
import { LoadMfeService } from '../load-mfe.service';

@Component({
  selector: 'app-csonline-mfe',
  standalone: true,
  imports: [],
  templateUrl: './csonline-mfe.component.html',
  styleUrl: './csonline-mfe.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class CsonlineMfeComponent {
  constructor(private loadMfeService: LoadMfeService, private renderer: Renderer2) {
    this.loadMfeService.loadScript('https://webcomponent2908.blob.core.windows.net/mfe-csonline/main.js');
    // this.loadExternalStyle('https://webcomponent2908.blob.core.windows.net/mfe-csonline/styles.css');
  }


  loadExternalStyle(url: string): void {
    const link = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    this.renderer.appendChild(document.head, link);
  }
}

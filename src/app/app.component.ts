import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector   : 'app-root',
  standalone : true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl   : './app.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  
  title = 'child';
  show  = false;

  ngOnInit(): void {
    this.loadScript('https://webcomponent2908.blob.core.windows.net/mfe1/main.js');
    this.loadScript('https://testeangular.azurewebsites.net/main.js');
  }

  toggleChild() {
    this.show = !this.show;
  }
  onChange(e: any) {
    this.title = e?.target?.value;
  }

  loadScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => {
      console.log(`${src} script loaded`);
    };
    script.onerror = (error) => {
      console.error(`Failed to load ${src}`, error);
    };
    document.body.appendChild(script);
  }
}

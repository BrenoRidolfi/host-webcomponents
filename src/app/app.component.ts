import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router, RouterEvent, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AuthLibService } from 'auth-lib-by-breno-ridolfi';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
  
  constructor(private service: AuthLibService) {
    service.login('Breno','xx');
  }
  

  ngOnInit(): void {

    // this.loadScript('https://mfe-csonline-breno.azurewebsites.net/main.js');
  }


}

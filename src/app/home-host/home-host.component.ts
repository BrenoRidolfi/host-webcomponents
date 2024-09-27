import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib-by-breno-ridolfi';

@Component({
  selector: 'app-home-host',
  standalone: true,
  imports: [],
  templateUrl: './home-host.component.html',
  styleUrl: './home-host.component.scss'
})
export class HomeHostComponent {

  constructor(private service: AuthLibService) {
    this.userName = service.user;

  }

  public userName: string = '';

}

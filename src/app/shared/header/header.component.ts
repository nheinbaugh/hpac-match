import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'hpac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private mainPage: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      console.log(event);
      if (event.url && event.url === '/') {
        this.mainPage = true;
      } else {
        this.mainPage = false;
      }
    })
  }

}

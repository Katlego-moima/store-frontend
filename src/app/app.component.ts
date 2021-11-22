import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 
import { filter } from 'rxjs/operators';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OnlineStore';


  // constructor(public router: Router) {

  //   this.router.events.subscribe(event => {

  //     if (event instanceof NavigationEnd) {
  //       ga('set', 'page', event.urlAfterRedirects);
  //       ga('send', 'pageview');
  //     }
  //   });
  // }

  constructor(private router: Router) {}

  ngOnInit() {
      this.setUpAnalytics();
  }

  setUpAnalytics() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
        
      }
    });
  }
}

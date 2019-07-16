import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private title: Title, private route: ActivatedRoute) {}

  // Manages titles when switching pages
  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd)) // filtering list of events to find instances of NavigationEnd
      .pipe(map(() => this.route)) // Black magic
      .pipe(map(route => {
        while (route.firstChild) {
          route = route.firstChild; // Traverses tree of routes
        }

        return route; // Returns a "leaf" on the tree
      })
    )
    .subscribe(route => {
      const routeData = route.snapshot.data;
      this.title.setTitle(routeData.title);
    });
  }
}

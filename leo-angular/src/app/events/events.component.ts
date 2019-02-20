import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'fdl-events',
  styleUrls: ['./events.component.scss'],
  templateUrl: './events.component.html',

})
export class FdlEventsComponent implements OnInit {

  constructor(private router: Router,
              private titleService: Title) { }

  ngOnInit() {
    this.setTitle('Veranstaltungen');
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}

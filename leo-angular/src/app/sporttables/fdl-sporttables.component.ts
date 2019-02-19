import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'fdl-sporttables',
  styleUrls: ['./fdl-sporttables.component.scss'],
  templateUrl: './fdl-sporttables.component.html',
})
export class FdlSporttablesComponent implements OnInit {

  constructor(private router: Router,
              private titleService: Title) { }

  ngOnInit() {
    this.setTitle('Sporttabellen');
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}

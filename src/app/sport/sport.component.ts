import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'gs-sport',
  styleUrls: ['./sport.component.scss'],
  templateUrl: './sport.component.html',
})
export class GsSportComponent implements OnInit {

  constructor(private router: Router,
              private titleService: Title) { }

  ngOnInit() {
    this.setTitle('Sporttabellen');
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}

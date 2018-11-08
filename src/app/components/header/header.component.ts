import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { COUNTRIES } from '../../shared/countries';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  countries:any;
  countries_keys:any;

  constructor(
    public router: Router
  ) {
  }

  ngOnInit() {
    this.countries = COUNTRIES;
    this.countries_keys = Object.keys(this.countries);
  }

}

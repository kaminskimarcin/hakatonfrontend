import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

declare function require(path: string);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '3M Barcode Scanner';
  imageSrc = require('../assets/3m-science-png-logo-18 (1).png');

  constructor(private titleService: Title, private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }


  public openScanner() {
    this.router.navigate(['/scan']);
  }

  navigateToReports() {
    this.router.navigate(['/reports']);
  }
}

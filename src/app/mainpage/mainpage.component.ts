import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PathComponent } from '../path/path.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent {
  desiredXPosition: number = 250;
  desiredYPosition: number = 250;
}

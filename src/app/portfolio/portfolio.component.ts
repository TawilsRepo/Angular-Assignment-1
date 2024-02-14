import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  pics: string[] = [
    'assets/poert1.png',
    'assets/port2.png',
    'assets/port3.png',
    'assets/poert1.png',
    'assets/port2.png',
    'assets/port3.png'
  ];

  modalNames: string[] = [
    '1',
    '2',
    '3'
  ]; 
}

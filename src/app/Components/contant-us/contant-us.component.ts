import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contant-us',
  templateUrl: './contant-us.component.html',
  styleUrls: ['./contant-us.component.scss']
})
export class ContantUsComponent implements OnInit {

  date=Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}

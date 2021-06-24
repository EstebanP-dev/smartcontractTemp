import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.scss']
})
export class PacksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  packs = [
    {
      claim: 0.007,
      price: 110,
    },
    {
      claim: 0.015,
      price: 310,
    },
    {
      claim: 0.031,
      price: 510,
    },
  ]
}

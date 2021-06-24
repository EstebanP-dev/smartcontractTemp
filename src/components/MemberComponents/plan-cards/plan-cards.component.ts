import { Component, OnInit } from '@angular/core';
import { faBolt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'PlanCards',
  templateUrl: './plan-cards.component.html',
  styleUrls: ['./plan-cards.component.scss'],
})
export class PlanCardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ////////////////////////////////////////////////////////////////
  faBolt = faBolt;
  faChevronDown = faChevronDown;
  ////////////////////////////////////////////////////////////////

  cards = [
    {
      id: 1,
      trx: Math.floor(Math.random() * (999 - 1) + 1),
      wallet: Math.floor(Math.random() * (99.99 - 1.0) + 1.0),
    },
    {
      id: 2,
      trx: Math.floor(Math.random() * (999 - 1) + 1),
      wallet: Math.floor(Math.random() * (99.99 - 1.0) + 1.0),
    },
    {
      id: 3,
      trx: Math.floor(Math.random() * (999 - 1) + 1),
      wallet: Math.floor(Math.random() * (99.99 - 1.0) + 1.0),
    },
  ];
}

import { Component, OnInit } from '@angular/core';
import {
  faBolt,
  faCheck,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'CompensationPlans',
  templateUrl: './compensation-plans.component.html',
  styleUrls: ['./compensation-plans.component.scss'],
})
export class CompensationPlansComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ////////////////////////////////////////////////////////////////
  faCheck = faCheck;
  faChevronDown = faChevronDown;
  faBolt = faBolt;
  ////////////////////////////////////////////////////////////////

  OnlyAvailable = true;

  cards = [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
    {
      id: '5',
    },
    {
      id: '6',
    },
    {
      id: '7',
    },
    {
      id: '8',
    },
    {
      id: '9',
    },
    {
      id: '10',
    },
    {
      id: '11',
    },
    {
      id: '12',
    },
    {
      id: '13',
    },
  ];
}

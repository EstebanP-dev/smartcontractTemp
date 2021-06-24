import { Component, OnInit } from '@angular/core';
import {
  faUserCircle,
  faSortDown,
  faSortUp,
  faCopy,
  faPoll,
  faSlidersH,
  faTimes,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import Swal from 'sweetalert2';

@Component({
  selector: 'AccountSlidebar',
  templateUrl: './account-slidebar.component.html',
  styleUrls: ['./account-slidebar.component.scss'],
})
export class AccountSlidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  faUserCircle = faUserCircle;
  faSortDown = faSortDown;
  faSortUp = faSortUp;
  faCopy = faCopy;
  faChartLine = faPoll;
  faSlidersH = faSlidersH;
  faTimes = faTimes;
  faBars = faBars;

  isDolar = true;
  screenSelectController = false;
  isOnAside = true;

  ActiveScreenSelect = () =>
    (this.screenSelectController = !this.screenSelectController);

  ActiveAside = () => (this.isOnAside = !this.isOnAside);

  ChangePrice = (dolar: boolean) =>
    dolar ? (this.isDolar = true) : (this.isDolar = false);

  tinyAlert() {
    Swal.fire('Copied!');
  }

  crypto = {
    name: 'Tron',
    icon: '../../../assets/images/trx.png',
    usd: 0.0669,
    eur: 0.0563,
  };
  ////////////////////////////////////////////////////////////////
  number = Math.floor(Math.random() * (99999 - 10000) + 10000);
  trx = Math.floor(Math.random() * (999 - 100) + 100);
  price =
    Math.round(
      (this.isDolar ? this.trx * this.crypto.usd : this.trx * this.crypto.eur) *
        100
    ) / 100;
  ////////////////////////////////////////////////////////////////
  personal = Math.floor(Math.random() * (99 - 1) + 1);
  ////////////////////////////////////////////////////////////////
  affiliateLink = 'https://imgur.com/gallery/Wg3zebg';
  ////////////////////////////////
  trxWallet = 'THmCiSXLgRBND1etK6xynQ7FuYeuCMjo7e';
  ///////////////////////////////
  members = Math.floor(Math.random() * (999999 - 100000) + 100000).toString();
  members_today = Math.floor(Math.random() * (99 - 10) + 10).toString();
  earned = Math.floor(
    Math.random() * (999999999 - 100000000) + 100000000
  ).toString();
  earned_today = Math.floor(Math.random() * (99999 - 10000) + 10000).toString();

  AddDecimalSign(number: string) {
    let array = [];
    let end = number.length - 1;
    for (let i = 0; i <= end; i++) {
      if (i % 3 == 0) {
        array.push(number[i]);
        array.push(',');
      } else {
        array.push(number[i]);
      }
    }
    if (array[end] === ',') {
      array.pop();
      return array.toString();
    } else {
      return array.toString();
    }
  }

  boxContent = [
    {
      value: this.members,
      title: 'Total Members:',
    },
    {
      value: this.members_today,
      title: 'New Today:',
    },
    {
      value: this.earned,
      title: 'Total Earned:',
    },
    {
      value: this.earned_today,
      title: 'Earned Today:',
    },
  ];
  ///////////////////////////////////////
  matrixContract = 'TXhdP2yNcUTRrYGyVgNkgqqFjL1sQvCVb1';
  ///////////////////////////////
  unilvlContract = 'TS9tMpfMv9NxQULSKEVRZYAwPgmDYebz2Y';
}

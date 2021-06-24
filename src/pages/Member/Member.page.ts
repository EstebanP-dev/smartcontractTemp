import { Component, OnInit } from '@angular/core';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'Member',
  templateUrl: './Member.page.html',
  styleUrls: ['./Member.page.scss'],
})
export class MemberPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  faSlidersH = faSlidersH;
}

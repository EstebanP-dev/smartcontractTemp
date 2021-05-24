import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ContactUs',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contact = {
    logo: "../../assets/images/logo.png",
    information: {
      link: "WWW.ASES.CO",
      phone: 42130003010,
      email: 'ANDRES@ASES.CO'
    },
  }

}

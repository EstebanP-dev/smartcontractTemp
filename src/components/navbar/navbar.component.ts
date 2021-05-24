import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private zone:NgZone) {}

  ngOnInit(): void {}

  SliderbarController = false;

  ActiveSliderbarMenu(){
    this.SliderbarController = !this.SliderbarController;
    console.log("Buenos dias! ", this.SliderbarController);
  }
    
}

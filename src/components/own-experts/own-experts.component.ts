import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'OwnExperts',
  templateUrl: './own-experts.component.html',
  styleUrls: ['./own-experts.component.scss']
})
export class OwnExpertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  experts = [
    {
      name: "David Drake",
      jobTitle: "Diseñador de UI",
      image: "../../assets/images/face1.jpg"
    },
    {
      name: "David Drake",
      jobTitle: "Diseñador de UI",
      image: "../../assets/images/face2.jpg"
    },
    {
      name: "David Drake",
      jobTitle: "Diseñador de UI",
      image: "../../assets/images/face3.jpg"
    },
    {
      name: "David Drake",
      jobTitle: "Diseñador de UI",
      image: "../../assets/images/face1.jpg"
    },
    {
      name: "David Drake",
      jobTitle: "Diseñador de UI",
      image: "../../assets/images/face2.jpg"
    },
    {
      name: "David Drake",
      jobTitle: "Diseñador de UI",
      image: "../../assets/images/face3.jpg"
    },
    {
      name: "David Drake",
      jobTitle: "Diseñador de UI",
      image: "../../assets/images/face1.jpg"
    },
    {
      name: "David Drake",
      jobTitle: "Diseñador de UI",
      image: "../../assets/images/face2.jpg"
    },
    {
      name: "David Drake",
      jobTitle: "Diseñador de UI",
      image: "../../assets/images/face3.jpg"
    },
  ]

}

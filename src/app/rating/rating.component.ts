import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  myarr=['A','B','C'];
  status=true;
  constructor() { }

  ngOnInit() {
  }


  printmyname()
  {

      console.log("I am usman");

  }
}

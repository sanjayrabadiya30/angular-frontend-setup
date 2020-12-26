import { Component, OnInit } from '@angular/core';

var $ ;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  
  /* hover effecet */
  hovered = '';
  changeStyle(linkName, typeOfMove) {
    if (typeOfMove === 'out') {
      this.hovered = '';
    } else {
      this.hovered = linkName;
    }
  }

  

  ngOnInit(): void {
  }

}

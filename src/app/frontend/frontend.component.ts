import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FrontendComponent implements OnInit {

  constructor() { 
    this.loadScript();
  }

  ngOnInit(): void {
  }

  public loadScript() {
    var dynamiccss = [      
      "../../../assets/frontend/css/front-style.css",
    ];

    for (var i = 0; i < dynamiccss.length; i++) {
      let node = document.createElement("link");
      node.href = dynamiccss[i];
      node.type = "text/css";
      node.rel = "stylesheet";
      document.getElementsByTagName("head")[0].appendChild(node);
    }

    var dynamicjs = [
      // "../../../assets/frontend/js/isotope.pkgd.min.js"
    ];

    for (var i = 0; i < dynamicjs.length; i++) {
      let node = document.createElement("script");
      node.src = dynamicjs[i];
      node.type = "text/javascript";
      node.async = false;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
  }

}

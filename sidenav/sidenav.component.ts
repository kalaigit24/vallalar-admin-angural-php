import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isExpanded = true;

  constructor() { }


  ngOnInit() {
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isExpanded = false;
    }
    else
    {
      this.isExpanded = true;
    }
  }

}

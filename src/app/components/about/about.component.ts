import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //HERE WE SHOW INFOS FOR CONTACTS
  infos={prenom:"Raed",email:"raedone23@yahoo.com"}
  constructor() { }

  ngOnInit() {
  }

}

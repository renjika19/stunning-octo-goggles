import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  // String message = "Some Welcome Message"

  //public SpringbootFirstWebApplication(){
  constructor() { }

  ngOnInit() {
    console.log(this.message)
  }

}

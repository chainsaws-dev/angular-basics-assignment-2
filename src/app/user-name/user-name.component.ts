import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {
  CurrentUserName = '';
  ButtonComitDisable = true;
  constructor() { }

  ngOnInit(): void {
  }

  onInputChanged(event: Event): void {
    this.CurrentUserName = (<HTMLInputElement>event.target).value;
  }

  onInputUserName(event: Event): void {
    if (this.CurrentUserName !== '')  {
      this.ButtonComitDisable = false;
    } else {
      this.ButtonComitDisable = true;
    }
  }

  onClickCommitUsername(event: Event): void {
    this.CurrentUserName = '';
    this.ButtonComitDisable = true;
    console.log('Click');
  }
}

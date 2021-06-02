import { Component, OnInit } from '@angular/core';
import { SharedService } from '@ng-mf/shared';

@Component({
  selector: 'shell-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  user = this.sharedService.userName;
  newName = '';
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  update() {
    this.sharedService.userName.next(this.newName);
  }
}

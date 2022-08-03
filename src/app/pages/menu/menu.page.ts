import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Storage } from '@capacitor/storage';

const TOKEN_DATA = 'my-token'


@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})

export class menuPage implements OnInit {
  USER_DATA;

  constructor(private authService: AuthenticationService,
    private router: Router) {  }

  ngOnInit(): void {
    this.getUserData();

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  async getUserData(){
    await Storage.get({ key: TOKEN_DATA }).then(token => {
      this.USER_DATA = JSON.parse(token.value);
    });
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

}

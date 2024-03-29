import { Component, OnInit } from '@angular/core';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {


  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  async signin() {
    await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/login', { replaceUrl:true });
  }
  async signup() {
    await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/signup', { replaceUrl:true });
  }

}

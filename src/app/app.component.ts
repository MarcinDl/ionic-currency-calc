import { Component, ElementRef, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  routerHidden:boolean = true;
  @ViewChild("splash", {static: false}) splash:ElementRef;

  constructor(
    private platform:Platform
  ) {
  }

  ngOnInit(){
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then( () => {
      setTimeout( () => {
        this.routerHidden = false;
        this.splash.nativeElement.style.display = "none";
      },2000)
    })
  }
}

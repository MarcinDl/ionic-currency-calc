import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { WcagService } from 'src/app/services/wcag.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  contrast:boolean
  constructor(
    private modalController:ModalController,
    private wcag:WcagService
  ) { }

  ngOnInit() {
    this.darkModeOn = this.wcag.darkMode;
    this.bigFontOn = this.wcag.bigFont;
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  darkModeOn:boolean;
  darkMode(){
    this.wcag.darkMode = !this.darkModeOn;
    this.darkModeOn = !this.darkModeOn;
  }
  bigFontOn:boolean;
  bigFont(){
    this.wcag.bigFont = !this.bigFontOn;
    this.bigFontOn = !this.bigFontOn;
  }
}

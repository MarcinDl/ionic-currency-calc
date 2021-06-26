import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  darkModeOn:boolean = false;
  darkMode(){
    this.wcag.darkMode = !this.darkModeOn;
    this.darkModeOn = !this.darkModeOn;
  }
}

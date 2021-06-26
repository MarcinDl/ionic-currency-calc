import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';
import { WcagService } from '../services/wcag.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalController:ModalController,
    private wcag:WcagService
  ) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      swipeToClose:true,
      mode: "ios",
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  darkModeOn:boolean;
  ngDoCheck(){
    this.darkModeOn = this.wcag.darkMode;
  }
}

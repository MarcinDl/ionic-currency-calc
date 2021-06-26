import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalController:ModalController
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
}

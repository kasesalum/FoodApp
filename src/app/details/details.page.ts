import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Item, MenuItem, MenuItemCart } from '../models/item';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  receivedData = { 'offers': []}
  selectedMenuItems: MenuItemCart[] = [];
  
  itemsToBuy = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private navCtrl: NavController
  ) {
    try {
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation()) {
          this.receivedData = this.router.getCurrentNavigation().extras.state.selected;
          console.log('received data', this.receivedData);
        }
      });
    } catch (e) {
      console.log(e);
    }
   
  }

  setReceivedData(receivedData) {
    this.receivedData = receivedData;
  }

  ngOnInit() {
    try {
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation()) {
          this.receivedData = this.router.getCurrentNavigation().extras.state.selected;
        }
      });
    } catch(e) {
      console.log(e);
    }
    
  }

  addToCart(menuItemSelected) {
    try {
      this.receivedData.offers.forEach(element => {
        if (element.id === menuItemSelected.id) {
          element.quantity = element.quantity + 1;
        }
      });
    } catch (y) {
      console.log(y);
    }
 
  }

  removeFromCart(menuItemSelected) {
    try {
      
    this.receivedData.offers.forEach(element => {
      if (element.id === menuItemSelected.id) {
        element.quantity = 0;
      }
    });
    } catch (d) {
      console.log(d);
    }
  }

  confirmBuy() {
    this.receivedData.offers.forEach(element => {
      if (element.quantity > 0) {
        this.itemsToBuy.push(element);
      }
    });
    console.log('items to buy', this.itemsToBuy);

    
    let navigationExtras: NavigationExtras = {
			state: {
        items: this.itemsToBuy
			}
    };
		this.navCtrl.navigateForward(['cart'], navigationExtras);
  }
  /**

  heart() {
    this.receivedData.likes = this.receivedData.likes + 1;
  }

  navigate() {
    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
      .then(
        () => {
          let url = 'http://maps.google.com/maps';
          if (this.device.platform.toLowerCase() === 'ios') {
            url = 'maps://maps.apple.com/';
          }
          url = url + '?q=' + this.receivedData.address + ', Salto, Buenos Aires';
          // window.location.href = url;
          const browser = this.iab.create(url, '_blank', 'location=yes');
          browser.on('loadstart').subscribe((event: InAppBrowserEvent) => {
            const closeUrl = 'https://www.dreamvisionary.com/thankyou';
            if (event.url === closeUrl) {
              browser.close();
            }
          });
          // window.location.href = 'maps://maps.apple.com/?q=' + this.receivedData.address + ', Salto, Buenos Aires';
        },
        error => {
          this.showOnceToast('No has otorgado permisos para GPS.');
        }
      );
  }

  call() {
    this.callNumber.callNumber(this.receivedData.phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  share() {
    const msg = this.receivedData.name + ' ' + this.receivedData.phone + ' ' + this.receivedData.address;
    this.socialSharing.share(msg, null).then(() => {
      console.log('shared');
    }).catch((e) => {
      this.showOnceToast('No has otorgado permisos para compartir.');
    });
  }


  showOnceToast(msg: string) {
    this.toastCtrl.dismiss().then((obj) => {
    }).catch(() => {
    }).finally(() => {
      this.presentToast(msg);
    });
  }

  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: 'bottom',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            console.log('Close clicked');
          }
        }
      ]
    });

    await toast.present();
  }
     */
}

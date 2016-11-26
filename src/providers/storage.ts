import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';


@Injectable()
export class localStorage {

  constructor(public storage: Storage) {
  }


  getIsAgree() {
    return this.storage.get('isAgree');  
  }
 
  saveIsAgree(value){
    this.storage.set('isAgree', value);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  constructor() { }
  alertMe(message:string){
    return alert(message);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessage() {
    return ['m1', 'm2', 'm3'];
  }
}

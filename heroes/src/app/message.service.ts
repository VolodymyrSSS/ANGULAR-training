import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = []; // the service exposes its cache of messages

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}

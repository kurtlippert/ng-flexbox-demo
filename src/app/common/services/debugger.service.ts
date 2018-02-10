import { Injectable } from '@angular/core';

@Injectable()
export class DebuggerService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  get() {
    return this.messages;
  }
}

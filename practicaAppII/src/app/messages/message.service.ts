import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Message } from './message.model';

@Injectable()
export class MessageService {
  private subject = new Subject<Message>();

  reportMessage(msg: Message): void {
    this.subject.next(msg);
  }

  get messages(): Observable<Message> {
    return this.subject.asObservable();
  }
}
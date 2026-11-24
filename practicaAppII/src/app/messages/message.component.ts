import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
  selector: 'app-message',
  standalone: false,
  template: `
    @if (lastMessage) {
      <div [style.padding]="'8px 12px'"
           [style.marginBottom]="'12px'"
           [style.borderRadius]="'4px'"
           [style.color]="'#fff'"
           [style.backgroundColor]="lastMessage.error ? '#dc3545' : '#198754'">
        {{ lastMessage.text }}
      </div>
    }
  `
})
export class MessageComponent implements OnInit {
  lastMessage: Message | null = null;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.messages.subscribe(msg => {
      this.lastMessage = msg;
    });
  }
}
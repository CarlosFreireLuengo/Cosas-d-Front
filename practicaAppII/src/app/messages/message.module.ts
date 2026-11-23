import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from './message.service';
import { MessageComponent } from './message.component';

@NgModule({
  imports: [CommonModule, MessageComponent],
  providers: [MessageService],
  exports: [MessageComponent]
})
export class MessagesModule {}
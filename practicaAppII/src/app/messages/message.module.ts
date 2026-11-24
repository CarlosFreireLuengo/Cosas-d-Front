import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from './message.service';
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [MessageComponent],
  imports: [CommonModule],
  providers: [MessageService],
  exports: [MessageComponent]
})
export class MessagesModule {}
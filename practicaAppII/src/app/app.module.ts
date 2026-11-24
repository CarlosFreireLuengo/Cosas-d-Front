import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MessagesModule } from './messages/message.module';
import { AppComponent } from './app.content';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    CoreModule,
    MessagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
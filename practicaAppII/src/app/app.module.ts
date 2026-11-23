import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MessagesModule } from './messages/message.module';
export class AppComponent {}

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    MessagesModule
  ]
})
export class AppModule {}
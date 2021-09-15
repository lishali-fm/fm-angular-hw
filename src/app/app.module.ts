import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LiveSwitchComp } from './app.liveswitch';

@NgModule({
  declarations: [
    LiveSwitchComp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LiveSwitchComp]
})
export class AppModule { 

}

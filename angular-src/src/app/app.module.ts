import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubcomponentComponent } from './subcomponent/subcomponent/subcomponent.component';
import { OthersubcomponentComponent } from './othersubcomponent/othersubcomponent/othersubcomponent.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, SubcomponentComponent, OthersubcomponentComponent]
})
export class AppModule { }

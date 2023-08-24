import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { LinkComponent } from './header/link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

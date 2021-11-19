import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';

import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, NotpagefoundComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}

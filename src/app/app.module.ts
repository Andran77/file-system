import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { MacOsComponent } from './mac-os/mac-os.component';
import { HomeComponent } from './home/home.component';
import { WinOsComponent } from './win-os/win-os.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertDialogComponent,
    MacOsComponent,
    HomeComponent,
    WinOsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

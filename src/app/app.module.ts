import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { HomeComponent } from './home/home.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { MacOsComponent } from './mac-os/mac-os.component';
import { WinOsComponent } from './win-os/win-os.component';
import { MacFilesComponent } from './mac-os/mac-files/mac-files.component';
import { MyDatePipe } from './my-date.pipe';
import { PathPipePipe } from './path-pipe.pipe';
import { SizePipe } from './size.pipe';
import { ResizableModule } from 'angular-resizable-element';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertDialogComponent,
    MacOsComponent,
    WinOsComponent,
    MacFilesComponent,
    MyDatePipe,
    PathPipePipe,
    SizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ResizableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

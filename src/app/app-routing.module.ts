import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MacOsComponent } from './mac-os/mac-os.component';
import { HomeComponent } from './home/home.component';
import { WinOsComponent } from './win-os/win-os.component';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mac', component: MacOsComponent },
  { path: 'win', component: WinOsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

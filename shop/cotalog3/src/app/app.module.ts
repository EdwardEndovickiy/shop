import {Routes, RouterModule} from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { VideoComponent } from './video/video.component';

const appRoutes: Routes = [
    { path: '', component: VideoComponent},
    { path: 'items', component: ItemsComponent},
    { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    VideoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

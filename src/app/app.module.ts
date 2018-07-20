import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { PrevSettingAlertComponent } from './prev-setting-alert/prev-setting-alert.component';
import { SubtitlesSettingsComponent } from './subtitles-settings/subtitles-settings.component';
import { UsageModalBroadcastComponent } from './usage-modal-broadcast/usage-modal-broadcast.component';
import { UsageModalOnlineComponent } from './usage-modal-online/usage-modal-online.component';
import { UsageModalTheatricalComponent } from './usage-modal-theatrical/usage-modal-theatrical.component';
import { SubtitlerComponent } from './subtitler/subtitler.component';

@NgModule({
  declarations: [
    AppComponent,
    PrevSettingAlertComponent,
    SubtitlesSettingsComponent,
    UsageModalBroadcastComponent,
    UsageModalOnlineComponent,
    UsageModalTheatricalComponent,
    SubtitlerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

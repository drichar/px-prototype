import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { PrevSettingAlertComponent } from './prev-setting-alert/prev-setting-alert.component';
import { UsageModalComponent } from './usage-modal/usage-modal.component';
import { SubtitlesSettingsComponent } from './subtitles-settings/subtitles-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    PrevSettingAlertComponent,
    UsageModalComponent,
    SubtitlesSettingsComponent
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

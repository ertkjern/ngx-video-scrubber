/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {VideoScrubberModule} from '../src/index';


@Component({
  selector: 'app',
  template: `<ngx-video-scrubber></ngx-video-scrubber>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, VideoScrubberModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

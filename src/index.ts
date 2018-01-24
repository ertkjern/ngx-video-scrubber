import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoScrubberComponent} from './video-scrubber.component';
import {VideoScrubberDirective} from './video-scrubber.directive';

export * from './video-scrubber.component';
export * from './video-scrubber.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoScrubberComponent,
    VideoScrubberDirective,
  ],
  exports: [
    VideoScrubberComponent,
    VideoScrubberDirective,
  ]
})
export class VideoScrubberModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: VideoScrubberModule,
      providers: []
    };
  }
}

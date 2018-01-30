import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-video-scrubber',
  templateUrl: 'video-scrubber.component.html',
  styleUrls: ['video-scrubber.component.css']
})
export class VideoScrubberComponent {
  @Input() mp4: string;
  @Input() mov: string;
  @Input() ogg: string;
  @Input() height: number;
  calculatedHeight: number;

  constructor() {
  }

  onVideoLoaded(video) {
    if(this.height > 0){
      this.calculatedHeight = this.height; // don't do height calculation. Set manually.
    } else {
      if (video.target) {
        this.calculatedHeight = Math.floor(video.target.duration) * 250; // 250 = video duration * playback constant
      }
    }
  }

}

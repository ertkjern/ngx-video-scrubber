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
  duration: number;

  constructor() {
  }

  onVideoLoaded(video) {
    if (video.target) {
      this.duration = Math.floor(video.target.duration) * 250;
    }
  }

}
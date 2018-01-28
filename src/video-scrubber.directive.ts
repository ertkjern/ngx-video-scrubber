import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[videoScrubber]',
})

export class VideoScrubberDirective {
  private videoTimer: any;

  constructor(private el: ElementRef) {
    this.videoTimer = setInterval(() =>
            el.nativeElement.currentTime = (window.pageYOffset / 400),
        80);
  }

  @HostListener('window;scroll', ['$event'])
  onWindowScroll($event: any) {
    this.el.nativeElement.pause();
  }
}

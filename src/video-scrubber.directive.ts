import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[videoScrubber]'
})
export class VideoScrubberDirective {

  constructor(private el: ElementRef) {
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { VideoScrubberComponent } from './video-scrubber.component';

describe('VideoScrubberComponent', () => {

  let comp:    VideoScrubberComponent;
  let fixture: ComponentFixture<VideoScrubberComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
          VideoScrubberComponent
      ],
    });

    fixture = TestBed.createComponent(VideoScrubberComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    de = fixture.debugElement.query(By.css('video'));
    el = de.nativeElement;
  });

  it('el be true', () => {
    expect(el).toBe(true);
  });
});

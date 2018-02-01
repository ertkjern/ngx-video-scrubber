# ngx-video-scrubber

[![npm version](https://badge.fury.io/js/ngx-video-scrubber.svg)](https://badge.fury.io/js/ngx-video-scrubber)
[![Build Status](https://travis-ci.org/ertkjern/ngx-video-scrubber.svg?branch=master)](https://travis-ci.org/ertkjern/ngx-video-scrubber)

Ngx-video-scrubber is an Angular X component, used to scrub a video during scrolling. Inspired by the websites of Apple.

[DEMO](https://vinoppskrifter.net/)

## Installation

To install this library, run:

```bash
$ npm install ngx-video-scrubber
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { VideoScrubberModule } from 'ngx-video-scrubber';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VideoScrubberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use its components.

```xml
<ngx-video-scrubber [mp4]="'../assets/test.mp4'"></ngx-video-scrubber>
```

## Parameters

Currently there are support for three movie formats. All can be used as input to the component. One is mandatory, the rest is optional.

| Input         | Default Value | Optional      | Description   |
| ------------- | ------------- | ------------- | ------------- |
| mp4           | undefined     | true          | Movie to scrub|
| mov           | undefined     | true          | Movie to scrub|
| ogg           | undefined     | true          | Movie to scrub|
| height        | undefined     | true          | Override the calculated height of the movie. Used if you want a shorter scroll animation|

## Why is my movie lagging?

The number of keyframes might not be optimal. It is suggested to run the video trough [FFMPEG](https://www.ffmpeg.org/) before using it in the component.

To get the video to scroll smoothly run the following command in ffmpeg.

```bash
ffmpeg -i input.mp4 -g 10 output.mp4
```

## License

MIT © [Ertkjern](mailto:orjanert@gmail.com)

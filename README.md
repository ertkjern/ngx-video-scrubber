# ngx-video-scrubber

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

// Import your library
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

| Input         |
| ------------- |
| mp4           |
| mov           |
| ogg           |


## Why is my movie lagging?

The number of keyframes might not be optimal. It is suggested to run the video trough FFMPEG before using it in the component.

To get the video to scroll smoothly run the following command in ffmpeg.

```bash
ffmpeg -i input.mp4 -g 10 output.mp4
```

## License

MIT © [Ørjan Ertkjern](mailto:orjanert@gmail.com)

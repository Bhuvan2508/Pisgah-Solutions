import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-webdevelopment',
  templateUrl: './webdevelopment.component.html',
  styleUrls: ['./webdevelopment.component.css']
})
export class WebdevelopmentComponent implements OnInit {
  videoUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    const videoId = 'mhtzcO6k1o8?si=uNaTYlzFIcU5nyw2'; // Replace with actual YouTube video ID
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/mhtzcO6k1o8?si=uNaTYlzFIcU5nyw2`);
   }

  ngOnInit(): void {
  }

}

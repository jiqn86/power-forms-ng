import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent {
pdfSrc: SafeUrl = '';
  constructor(private sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  /**
   * Gets the URL to show or download
   * @param e string
   */
  getUrl(e: string): void {
    this.pdfSrc = this.sanitizeUrl(e);
  }

  /**
   * Sanitizes the url before it is shown or downloaded
   * @param url string
   * @returns SafeResourceUrl
   */
  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

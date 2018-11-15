import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { Lightbox, LightboxConfig, LightboxEvent, LIGHTBOX_EVENT, IEvent } from 'angular2-lightbox';
import {Subscription} from 'rxjs/Subscription';

declare var $: any;

export interface IAlbum {
  src: string;
  caption?: string;
  thumb: string;
  type?: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: [
    '../../../../assets/plugins/gallery/css/animated-masonry-gallery.css',
    '../../../../../node_modules/angular2-lightbox/lightbox.css',
    './gallery.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit, OnDestroy {
  public _albums: Array<IAlbum>;
  private _options: Object;
  private _subscription: Subscription;
  constructor(private _lightbox: Lightbox, private _lightboxEvent: LightboxEvent, private _lighboxConfig: LightboxConfig) {
    const gallery = sessionStorage.getItem('gallery');
    if (!gallery) {
      sessionStorage.setItem('gallery', '1');
      window.location.reload();
    }
  }

  ngOnInit() {
    this._albums = [];
    this._options = {};
    for (let i = 1; i <= 18; i++) {
      const src = 'assets/images/assets/studio' + i + '.jpg';
      const caption = 'Image Studio ' + i + ' caption here';
      const thumb = 'assets/images/assets/studio' + i + '.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb,
        type: 'studio'
      };

      const src1 = 'assets/images/assets/landscape' + i + '.jpg';
      const caption1 = 'Image Landscape ' + i + ' caption here';
      const thumb1 = 'assets/images/assets/landscape' + i + '.jpg';
      const album1 = {
        src: src1,
        caption: caption1,
        thumb: thumb1,
        type: 'landscape'
      };

      this._albums.push(album);
      this._albums.push(album1);
    }

    this._lighboxConfig.fadeDuration = 1;
  }

  ngOnDestroy() {
    sessionStorage.removeItem('gallery');
  }

  open(index: number): void {
    this._subscription = this._lightboxEvent.lightboxEvent$.subscribe((event: IEvent) => this._onReceivedEvent(event));
    this._lightbox.open(this._albums, index, { wrapAround: true, showImageNumberLabel: true });
  }

  private _onReceivedEvent(event: IEvent): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      this._subscription.unsubscribe();
    }
  }

}

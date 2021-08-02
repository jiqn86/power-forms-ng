import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormModel } from '../../models/form';
import { PhotosService } from '../../services/photos.service';
import { Photos } from '../../models/photos';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output () urltoMain: EventEmitter<string> = new EventEmitter();
  info: FormModel[] = [];
  loading = true;

  // data: FormModel[] = [];
  // photos: Photos[] = [];

  constructor( private photosService: PhotosService) {
    // this.loading = true;
    // // jsonplaceholder - Servicio photos
    // this.photosService.getPhotos().subscribe(resp => {
    //   this.photos = resp;
    //   console.log(this.photos);
    //   this.loading = false;
    // });
  }

  ngOnInit(): void {
  }

  getLoading(e: boolean){
    this.loading = e;
  }
  updateData(e: FormModel[]) {
    this.info = e;
  }

  exportUrl(e: string) {
    this.urltoMain.emit(e);
  }
}

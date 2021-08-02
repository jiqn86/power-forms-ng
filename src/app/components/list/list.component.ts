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

  data: FormModel[] = [];
  loading: boolean;
  photos: Photos[] = [];
  @Output () urltoMain: EventEmitter<string> = new EventEmitter();

  constructor( private photosService: PhotosService) {
    this.loading = true;
    // jsonplaceholder - Servicio photos
    this.photosService.getPhotos().subscribe(resp => {
      this.photos = resp;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

  getLoading(e: boolean){
    this.loading = e;
  }
  updateData(e: FormModel[]) {
    this.data = e;
  }

  exportUrl(e: string) {
    this.urltoMain.emit(e);
  }
}

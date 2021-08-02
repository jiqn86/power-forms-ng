import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from '../models/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor( private http: HttpClient) { }

  getPhotos(): Observable<Photos[]>{
    return this.http.get<Photos[]>('http://localhost:80/local.php');
  }
}

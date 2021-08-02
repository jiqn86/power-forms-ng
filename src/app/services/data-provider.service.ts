import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormModel } from '../models/form';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private http: HttpClient) {}

  /**
   * Http connection to get the data from server
   * @returns Observable<FormModel[]>
   */
  getInfo(): Observable<FormModel[]>{
    return this.http.get<FormModel[]>('http://localhost:80/local.php');
  }

}

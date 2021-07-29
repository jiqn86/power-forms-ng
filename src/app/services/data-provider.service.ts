import { Injectable } from '@angular/core';
import { FormModel } from '../models/form';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private data: FormModel[] = [
    {
      name: 'titulo1',
      description: 'descripcion 1',
      url: 'assets/pdf/ui.png',
      img: 'assets/img/p.png'

    },
    {
      name: 'titulo2',
      description: 'descripcion 2',
      url: 'assets/pdf/ui.png',
      img: 'assets/img/p1.png'

    },
    {
      name: 'titulo3',
      description: 'descripcion 3',
      url: 'assets/pdf/ui.png',
      img: 'assets/img/p2.png'

    },
    {
      name: 'titulo4',
      description: 'descripcion 4',
      url: 'www',
      img: 'assets/img/p3.png'

    },
    {
      name: 'titulo5',
      description: 'descripcion 5',
      url: 'assets/pdf/ui.png',
      img: 'assets/img/p4.png',

    },
  ];

  constructor() {}

  getData(): FormModel[]{
    return this.data;
  }
}

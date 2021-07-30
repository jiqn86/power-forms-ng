import { Injectable } from '@angular/core';
import { FormModel } from '../models/form';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private data: FormModel[] = [
    {
      id: 1,
      name: 'titulo1',
      description: 'descripcion 1',
      url: 'assets/pdf/ui.png',
      img: 'assets/img/p.png'

    },
    {
      id: 2,
      name: 'titulo2',
      description: 'descripcion 2',
      url: 'assets/pdf/ui.png',
      img: 'assets/img/p1.png'

    },
    {
      id: 3,
      name: 'titulo3',
      description: 'descripcion 3',
      url: 'assets/pdf/ui.png',
      img: 'assets/img/p2.png'

    },
    {
      id: 4,
      name: 'titulo4',
      description: 'descripcion 4',
      url: 'www',
      img: 'assets/img/p3.png'

    },
    {
      id: 5,
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

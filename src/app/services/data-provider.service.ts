import { Injectable } from '@angular/core';
import { FormModel } from '../models/form';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private data: FormModel[] = [
    {
      id: 1,
      name: 'Severance Agreement',
      description: 'Open Adaptive Form',
      url: 'assets/pdf/ui.png',
      img: 'assets/img/p.png'
    },
    {
      id: 2,
      name: 'Onboard candidate',
      description: 'Open Adaptive Form 2',
      url: 'assets/pdf/ui.png',
      img: 'assets/img/p1.png'
    },
    {
      id: 3,
      name: 'Human resources',
      description: 'Open Adaptive Form 3',
      url: 'assets/pdf/ui.png',
      img: 'assets/img/p2.png'
    },
    {
      id: 4,
      name: 'Confidentiality Agreement',
      description: 'Open Adaptive Form 4',
      url: 'www',
      img: 'assets/img/p3.png'
    },
    {
      id: 5,
      name: 'Confidentiality',
      description: 'Open Adaptive Form 5',
      url: 'assets/pdf/ui.png',
      img: 'assets/img/p4.png',
    },
  ];

  constructor() {}

  getData(): FormModel[]{
    return this.data;
  }
}

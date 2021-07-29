import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styles: [
  ]
})
export class ListSearchComponent implements OnInit {
  @Input() item: any = {};

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      console.log(params.text));
  }

}

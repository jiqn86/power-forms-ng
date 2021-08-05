import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('EMIT URL VALUE', () => {
    let url = '';
    component.urlExport.subscribe((e: string) =>{
      url = e;
    });
    component.getUrl('http://test.com');
    fixture.detectChanges();
    expect(url).toBe('http://test.com');

  });
});

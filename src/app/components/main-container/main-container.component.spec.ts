import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContainerComponent } from './main-container.component';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { By} from '@angular/platform-browser';

describe('MainContainerComponent', () => {
  let component: MainContainerComponent;
  let fixture: ComponentFixture<MainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContainerComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('VIEW A DEFAULT IMAGE', () => {
    const element: HTMLElement = fixture.debugElement.query(By.css('.content-a')).nativeElement;
    expect(element.innerHTML).toContain('.png');
    });

  it('LOADING THE IFRAME', () => {
    if (component.pdfSrc !== ''){
    let pdfFrame: HTMLElement = fixture.debugElement.query(By.css('#pdfFrame')).nativeElement;
    expect(pdfFrame.innerHTML).toContain('iframe');
    }
  });


});

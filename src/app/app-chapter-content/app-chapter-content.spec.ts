import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChapterContent } from './app-chapter-content';

describe('AppChapterContent', () => {
  let component: AppChapterContent;
  let fixture: ComponentFixture<AppChapterContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppChapterContent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppChapterContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  AppChapterNavbar} from './app-chapter-navbar';

describe('BibleChapterComponentComponent', () => {
  let component: AppChapterNavbar;
  let fixture: ComponentFixture<AppChapterNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppChapterNavbar ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppChapterNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BibleinfoProviderService } from '../bibleinfo-provider.service';

@Component({
  selector: 'app-chapter-navbar',
  templateUrl: './app-chapter-navbar.html',
  styleUrls: ['./app-chapter-navbar.css'],
})
export class AppChapterNavbar implements OnInit {

  @Output() changeToNextBook: EventEmitter<any> = new EventEmitter();
  @Output() changeToNextChapter: EventEmitter<any> = new EventEmitter();
  @Output() changeToPreviousBook: EventEmitter<any> = new EventEmitter();
  @Output() changeToPreviousChapter: EventEmitter<any> = new EventEmitter();

  indexOfBook: number = 0;
  chapters: number[] = []; // array of numbers to iterate with ngFor on template
  maxChapters: number | null = 50; // number of all chapters in chosen Book
  bibleInfo = this.bibleInfoService.BibleInfo;

  selectForm = this.formBuilder.group({ 
    bookName: 50, // Value to set deafult book
    chapters: 0,
  });
  
  constructor(
    private router: Router,
    private bibleInfoService: BibleinfoProviderService,
    private formBuilder: FormBuilder,
  ) {}
  
  nextBook() {
    this.changeToNextBook.emit();
  }

  nextChapter() {
    this.changeToNextChapter.emit();
  }
  
  goToPreviousBook() {
    this.changeToPreviousBook.emit();
  }

  goToPreviousChapter() {
    this.changeToPreviousChapter.emit();
  }

  // Get index of current selected chapter
  getIndex(event:any ):void {
    this.indexOfBook = event.target!["selectedIndex"];
  }

  // Use index of current selected chapter to navigate through bible
  navigate(value: number | string): void {
    let indexOfChapter: number | string = +value;
    indexOfChapter = indexOfChapter - 1;
    this.router.navigateByUrl('bible/'+ this.indexOfBook + '/' + indexOfChapter);
  }

  // Use number of chapters from observable to create array of numbers that we use in template in order
  // to display them with ngFor
  createSelectChapters(): number[] {
    let array: number[] = [];
    for(let i = 1; i <= this.maxChapters!; i++) {
      array.push(i);
    }
    return array;
  }

  ngOnInit(): void {
    // Subscribe to select input to get number of all the chapters of each book specified in the service
    this.selectForm.get('bookName')?.valueChanges.subscribe(chapters => {
      this.maxChapters = chapters;
      this.chapters = this.createSelectChapters();
      this.selectForm.get('chapters')?.setValue(1);
    });
    this.chapters = this.createSelectChapters();
  } 
}

import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BibleinfoProviderService } from '../bibleinfo-provider.service';

@Component({
  selector: 'app-chapter-navbar',
  templateUrl: './app-chapter-navbar.html',
  styleUrls: ['./app-chapter-navbar.css']
})
export class AppChapterNavbar implements OnInit {

  @Output() changeToNextBook: EventEmitter<any> = new EventEmitter();
  @Output() changeToNextChapter: EventEmitter<any> = new EventEmitter();
  @Output() changeToPreviousBook: EventEmitter<any> = new EventEmitter();
  @Output() changeToPreviousChapter: EventEmitter<any> = new EventEmitter();

  indexOfBook: number = 0
  chapters: number[] = []; // array of numbers to iterate with ngFor on template
  maxChapters: number | null = 50; // number of all chapters in chosen Book
  bibleInfo = this.bibleInfoService.BibleInfo;
  selectForm = this.formBuilder.group({ 
    bookName: 50,
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

  createSelectChapters(): number[] {
    let array: number[] = [];
    for(let i = 1; i <= this.maxChapters!; i++) {
      array.push(i);
    }
    return array;
  }

  getIndex(event:any ):void {
    this.indexOfBook = event.target!["selectedIndex"];
    console.log(this.indexOfBook);
  }

  navigate(value: number | string): void {
    let indexOfChapter: number | string = +value;
    indexOfChapter = indexOfChapter - 1
    this.router.navigateByUrl('bible/'+ this.indexOfBook + '/' + indexOfChapter)
  }

  ngOnInit(): void {
    this.selectForm.get('bookName')?.valueChanges.subscribe(chapters => {
      this.maxChapters = chapters
      this.chapters = this.createSelectChapters();
      this.selectForm.get('chapters')?.setValue(1);
    })
    this.chapters = this.createSelectChapters();
  } 
}

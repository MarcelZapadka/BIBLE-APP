import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-navbar',
  templateUrl: './app-chapter-navbar.html',
  styleUrls: ['./app-chapter-navbar.css']
})
export class AppChapterNavbar implements OnInit {
  selectedChapterNumber:number = 1;
  selectedBookIndex:number = 0;
  @Output() changeToNextBook: EventEmitter<any> = new EventEmitter();
  @Output() changeToNextChapter: EventEmitter<any> = new EventEmitter();
  @Output() changeToPreviousBook: EventEmitter<any> = new EventEmitter();
  @Output() changeToPreviousChapter: EventEmitter<any> = new EventEmitter(); 
  chapters = [
    {chapter:1},
    {chapter:2},
    {chapter:3},
    {chapter:4},
    {chapter:5},
    {chapter:6},
    {chapter:7},
    {chapter:8},
    {chapter:9},
    {chapter:10},
    {chapter:11},
    {chapter:12},
    {chapter:13},
    {chapter:14},
    {chapter:15},
    {chapter:16},
    {chapter:17},
    {chapter:18},
    {chapter:19},
    {chapter:20},
    {chapter:21},
    {chapter:22},
    {chapter:23},
    {chapter:24},
    {chapter:25},
    {chapter:26},
    {chapter:27},
    {chapter:28},
    {chapter:29},
    {chapter:30},
    {chapter:31},
    {chapter:32},
    {chapter:33},
    {chapter:34},
    {chapter:35},
    {chapter:36},
    {chapter:37},
    {chapter:38},
    {chapter:39},
    {chapter:40},
    {chapter:41},
    {chapter:42},
    {chapter:43},
    {chapter:44},
    {chapter:45},
    {chapter:46},
    {chapter:47},
    {chapter:48},
    {chapter:49},
    {chapter:50},
    {chapter:51},
    {chapter:52},
    {chapter:53},
    {chapter:54},
    {chapter:55},
    {chapter:56},
    {chapter:57},
    {chapter:58},
    {chapter:59},
    {chapter:60},
    {chapter:61},
    {chapter:62},
    {chapter:63},
    {chapter:64},
    {chapter:65},
    {chapter:66},
    {chapter:67},
    {chapter:68},
    {chapter:69},
    {chapter:70},
    {chapter:71},
    {chapter:72},
    {chapter:73},
    {chapter:74},
    {chapter:75},
    {chapter:76},
    {chapter:77},
    {chapter:78},
    {chapter:79},
    {chapter:80},
    {chapter:81},
    {chapter:82},
    {chapter:83},
    {chapter:84},
    {chapter:85},
    {chapter:86},
    {chapter:87},
    {chapter:88},
    {chapter:89},
    {chapter:90},
    {chapter:91},
    {chapter:92},
    {chapter:93},
    {chapter:94},
    {chapter:95},
    {chapter:96},
    {chapter:97},
    {chapter:98},
    {chapter:99},
    {chapter:100},
    {chapter:101},
    {chapter:102},
    {chapter:103},
    {chapter:104},
    {chapter:105},
    {chapter:106},
    {chapter:107},
    {chapter:108},
    {chapter:109},
    {chapter:110},
    {chapter:111},
    {chapter:112},
    {chapter:113},
    {chapter:114},
    {chapter:115},
    {chapter:116},
    {chapter:117},
    {chapter:118},
    {chapter:119},
    {chapter:120},
    {chapter:121},
    {chapter:122},
    {chapter:123},
    {chapter:124},
    {chapter:125},
    {chapter:126},
    {chapter:127},
    {chapter:128},
    {chapter:129},
    {chapter:130},
    {chapter:131},
    {chapter:132},
    {chapter:133},
    {chapter:134},
    {chapter:135},
    {chapter:136},
    {chapter:137},
    {chapter:138},
    {chapter:139},
    {chapter:140},
    {chapter:141},
    {chapter:142},
    {chapter:143},
    {chapter:144},
    {chapter:145},
    {chapter:146},
    {chapter:147},
    {chapter:148},
    {chapter:149},
    {chapter:150},
  ]

  actualChaptersNumbersforBook = this.chapters
   
  constructor(
    private router: Router,
  ) {}
  
  nextBook() {
    this.changeToNextBook.emit()
  }

  nextChapter() {
    this.changeToNextChapter.emit()
  }
  
  goToPreviousBook() {
    this.changeToPreviousBook.emit()
  }

  goToPreviousChapter() {
    this.changeToPreviousChapter.emit()
  }

  selectBookAndChapterWithNavBar () {
    let actualChapter = 0
    actualChapter = this.selectedChapterNumber - 1
    this.router.navigateByUrl('bible/'+ this.selectedBookIndex + '/' + actualChapter)
    }

  changeChapterAmmountDynamically() {
    if (this.selectedBookIndex == 0) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0,50)
     } else if (this.selectedBookIndex == 1) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 40)
     } else if (this.selectedBookIndex == 2) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 27)
     } else if (this.selectedBookIndex == 3) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 36)
     } else if (this.selectedBookIndex == 4) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 34)
     } else if (this.selectedBookIndex == 5) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 24)
     } else if (this.selectedBookIndex == 6) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 21)
     } else if (this.selectedBookIndex == 7) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 4)
     } else if (this.selectedBookIndex == 8) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 31)
     } else if (this.selectedBookIndex == 9) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 24)
     } else if (this.selectedBookIndex == 10) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 22)
     } else if (this.selectedBookIndex == 11) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 25)
     } else if (this.selectedBookIndex == 12) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 29)
     } else if (this.selectedBookIndex == 13) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 36)
     } else if (this.selectedBookIndex == 14) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 10)
     } else if (this.selectedBookIndex == 15) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 13)
     } else if (this.selectedBookIndex == 16) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 10)
     } else if (this.selectedBookIndex == 17) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 42)
     } else if (this.selectedBookIndex == 18) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 150)
     } else if (this.selectedBookIndex == 19) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 31)
     } else if (this.selectedBookIndex == 20) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 12)
     } else if (this.selectedBookIndex == 21) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 8)
     } else if (this.selectedBookIndex == 22) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 66)
     } else if (this.selectedBookIndex == 23) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 52)
     } else if (this.selectedBookIndex == 24) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 5)
     } else if (this.selectedBookIndex == 25) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 48)
     } else if (this.selectedBookIndex == 26) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 12)
     } else if (this.selectedBookIndex == 27) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 14)
     } else if (this.selectedBookIndex == 28) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 3)
     } else if (this.selectedBookIndex == 29) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 9)
     } else if (this.selectedBookIndex == 30) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 1)
     } else if (this.selectedBookIndex == 31) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 4)
     } else if (this.selectedBookIndex == 32) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 7)
     } else if (this.selectedBookIndex == 33) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 3)
     } else if (this.selectedBookIndex == 34) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 3)
     } else if (this.selectedBookIndex == 35) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 3)
     } else if (this.selectedBookIndex == 36) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 2)
     } else if (this.selectedBookIndex == 37) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 14)
     } else if (this.selectedBookIndex == 38) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 4)
     } else if (this.selectedBookIndex == 39) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 28)
     } else if (this.selectedBookIndex == 40) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 16)
     } else if (this.selectedBookIndex == 41) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 24)
     } else if (this.selectedBookIndex == 42) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 21)
     } else if (this.selectedBookIndex == 43) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 28)
     } else if (this.selectedBookIndex == 44) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 16)
     } else if (this.selectedBookIndex == 45) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 16)
     } else if (this.selectedBookIndex == 46) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 13)
     } else if (this.selectedBookIndex == 47) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 6)
     } else if (this.selectedBookIndex == 48) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 6)
     } else if (this.selectedBookIndex == 49) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 4)
     } else if (this.selectedBookIndex == 50) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 4)
     } else if (this.selectedBookIndex == 51) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 5)
     } else if (this.selectedBookIndex == 52) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 3)
     } else if (this.selectedBookIndex == 53) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 6)
     } else if (this.selectedBookIndex == 54) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 4)
     } else if (this.selectedBookIndex == 55) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 3)
     } else if (this.selectedBookIndex == 56) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 1)
     } else if (this.selectedBookIndex == 57) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 13)
     } else if (this.selectedBookIndex == 58) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 5)
     } else if (this.selectedBookIndex == 59) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 5)
     } else if (this.selectedBookIndex == 60) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 3)
     } else if (this.selectedBookIndex == 61) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 5)
     } else if (this.selectedBookIndex == 62) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 1)
     } else if (this.selectedBookIndex == 63) {
      this.actualChaptersNumbersforBook = this.chapters.slice(0, 1)
     } else if (this.selectedBookIndex == 64) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 1)
     } else if (this.selectedBookIndex == 65) {
       this.actualChaptersNumbersforBook = this.chapters.slice(0, 22)
     }
   }

  ngOnInit(): void {
  this.changeChapterAmmountDynamically();
  } 
}

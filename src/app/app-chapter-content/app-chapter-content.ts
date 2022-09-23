import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnBibleProviderService, Verse, } from '../en-bible-provider.service';

@Component({
  selector: 'app-chapter-content',
  templateUrl: './app-chapter-content.html',
  styleUrls: ['./app-chapter-content.css']
})

export class AppChapterContent implements OnInit {
  bookNumber: number = 0;
  chapter: number = 0;
  verseList: Verse[] = [];
  actualBookInfo:string = ''
  actualChapterInfo:number = 1;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bibleProvider: EnBibleProviderService,
  ) {}

  previousBook() {
    if (this.bookNumber === 0) {
      return;
    }
    this.bookNumber = this.bookNumber - 1;
    this.chapter = 0;
    this.router.navigateByUrl('bible/' + this.bookNumber + '/' + this.chapter);
  }

  previousChapter() {
    if (this.bookNumber === 0 && this.chapter === 0 || this.bookNumber !== 0 && this.chapter === 0) {
      return;
    }
    this.chapter = this.chapter - 1;
    this.router.navigateByUrl('bible/' + this.bookNumber + '/' + this.chapter);
  }

  nextBook() {
    if (this.bookNumber === 65) {
      return
    }
    this.bookNumber = this.bookNumber + 1;
    this.chapter = 0;
    this.router.navigateByUrl('bible/' + this.bookNumber + '/' + this.chapter);
  }

  nextChapter() {
    if (this.actualBookInfo == 'Book of Genesis' && this.chapter == 49) {
       return
    } else if (this.actualBookInfo == 'Book of Exodus' && this.chapter == 39) {
     return
    } else if (this.actualBookInfo == 'Book of Leviticus' && this.chapter == 27) {
     return
    } else if (this.actualBookInfo == 'Book of Numbers' && this.chapter == 35) {
     return
    } else if (this.actualBookInfo == 'Book of Deuteronomy' && this.chapter == 33) {
     return
    } else if (this.actualBookInfo == 'Book of Joshua' && this.chapter == 23) {
     return
    } else if (this.actualBookInfo == 'Book of Judges' && this.chapter == 20) {
     return
    } else if (this.actualBookInfo == 'Book of Ruth' && this.chapter == 3) {
     return
    } else if (this.actualBookInfo == 'First book of Samuel' && this.chapter == 30) {
     return
    } else if (this.actualBookInfo == 'Second book of Samuel' && this.chapter == 23) {
     return
    } else if (this.actualBookInfo == 'First book of Kings' && this.chapter == 21) {
     return
    } else if (this.actualBookInfo == 'Second book of Kings' && this.chapter == 24) {
     return
    } else if (this.actualBookInfo == 'First book of Chronicles' && this.chapter == 29) {
     return
    } else if (this.actualBookInfo == 'Second book of Chronicles' && this.chapter == 35) {
     return
    } else if (this.actualBookInfo == 'Book of Ezra' && this.chapter == 9) {
     return
    } else if (this.actualBookInfo == 'Book of Nehemiah' && this.chapter == 12) {
     return
    } else if (this.actualBookInfo == 'Book of Esther' && this.chapter == 9) {
     return
    } else if (this.actualBookInfo == 'Book of Job' && this.chapter == 42) {
     return
    } else if (this.actualBookInfo == 'Psalms' && this.chapter == 149) {
     return
    } else if (this.actualBookInfo == 'Book of Proverbs' && this.chapter == 30) {
     return
    } else if (this.actualBookInfo == 'Ecclesiastes' && this.chapter == 11) {
     return
    } else if (this.actualBookInfo == 'Song of Songs' && this.chapter == 7) {
     return
    } else if (this.actualBookInfo == 'Book of Isaiah' && this.chapter == 65) {
     return
    } else if (this.actualBookInfo == 'Book of Jeremiah' && this.chapter == 51) {
     return
    } else if (this.actualBookInfo == 'Lamentations' && this.chapter == 4) {
     return
    } else if (this.actualBookInfo == 'Book of Ezekiel' && this.chapter == 47) {
     return
    } else if (this.actualBookInfo == 'Book of Daniel' && this.chapter == 11) {
     return
    } else if (this.actualBookInfo == 'Book of Hosea' && this.chapter == 13) {
     return
    } else if (this.actualBookInfo == 'Book of Joel' && this.chapter == 2) {
     return
    } else if (this.actualBookInfo == 'Book of Amos' && this.chapter == 8) {
     return
    } else if (this.actualBookInfo == 'Book of Obadiah' && this.chapter == 0) {
     return
    } else if (this.actualBookInfo == 'Book of Jonah' && this.chapter == 3) {
     return
    } else if (this.actualBookInfo == 'Book of Micah' && this.chapter == 6) {
     return
    } else if (this.actualBookInfo == 'Book of Nahum' && this.chapter == 2) {
     return
    } else if (this.actualBookInfo == 'Book of Habakkuk' && this.chapter == 2) {
     return
    } else if (this.actualBookInfo == 'Book of Zephaniah' && this.chapter == 2) {
     return
    } else if (this.actualBookInfo == 'Book of Haggai' && this.chapter == 1) {
     return
    } else if (this.actualBookInfo == 'Book of Zechariah' && this.chapter == 13) {
     return
    } else if (this.actualBookInfo == 'Book of Malachi' && this.chapter == 3) {
     return
    } else if (this.actualBookInfo == 'Gospel of Matthew' && this.chapter == 27) {
     return
    } else if (this.actualBookInfo == 'Gospel of Mark' && this.chapter == 15) {
     return
    } else if (this.actualBookInfo == 'Gospel of Luke' && this.chapter == 23) {
     return
    } else if (this.actualBookInfo == 'Gospel of John' && this.chapter == 20) {
     return
    } else if (this.actualBookInfo == 'Acts of the Apostles' && this.chapter == 27) {
     return
    } else if (this.actualBookInfo == 'Letter of Paul the apostle to the Romans' && this.chapter == 15) {
     return
    } else if (this.actualBookInfo == 'First letter of Paul the apostle to the Corinthians' && this.chapter == 15) {
     return
    } else if (this.actualBookInfo == 'Second letter of Paul the apostle to the Corinthians' && this.chapter == 12) {
     return
    } else if (this.actualBookInfo == 'Letter of Paul the apostle to the Galatians' && this.chapter == 5) {
     return
    } else if (this.actualBookInfo == 'Letter of Paul the apostle to the Ephesians' && this.chapter == 5) {
     return
    } else if (this.actualBookInfo == 'Letter of Paul the apostle to the Philippians' && this.chapter == 3) {
     return
    } else if (this.actualBookInfo == 'Letter of Paul the apostle to the Colossians' && this.chapter == 3) {
     return
    } else if (this.actualBookInfo == 'First letter of Paul the apostle to the Thessalonians' && this.chapter == 4) {
     return
    } else if (this.actualBookInfo == 'Second letter of Paul the apostle to the Thessalonians' && this.chapter == 2) {
     return
    } else if (this.actualBookInfo == 'First letter of Paul the apostle to Timothy' && this.chapter == 5) {
     return
    } else if (this.actualBookInfo == 'Second letter of Paul the apostle to Timothy' && this.chapter == 3) {
     return
    } else if (this.actualBookInfo == 'Letter of Paul the apostle to Titus' && this.chapter == 2) {
     return
    } else if (this.actualBookInfo == 'Letter of Paul the apostle to Philemon' && this.chapter == 0) {
     return
    } else if (this.actualBookInfo == 'Letter to the Hebrews' && this.chapter == 12) {
     return
    } else if (this.actualBookInfo == 'Letter of James the apostle' && this.chapter == 4) {
     return
    } else if (this.actualBookInfo == 'First letter of Peter the apostle' && this.chapter == 4) {
     return
    } else if (this.actualBookInfo == 'Second letter of Peter the apostle' && this.chapter == 2) {
     return
    } else if (this.actualBookInfo == 'First letter of John the apostle' && this.chapter == 4) {
     return
    } else if (this.actualBookInfo == 'Second letter of John the apostle' && this.chapter == 0) {
     return
    } else if (this.actualBookInfo == 'Third letter of John the apostle' && this.chapter == 0) {
     return
    } else if (this.actualBookInfo == 'The letter of Jude' && this.chapter == 0) {
     return
    } else if (this.actualBookInfo == 'Book of Revelation' && this.chapter == 21) {
     return
    }
    this.chapter = this.chapter + 1;
    this.router.navigateByUrl('bible/' + this.bookNumber + '/' + this.chapter);
 }
 
  changeActualBookInfo() {
    switch(this.bookNumber) {
      case 0:
        this.actualBookInfo = 'Book of Genesis'
        break;
  
      case 1:
        this.actualBookInfo = 'Book of Exodus'
        break;
  
      case 2:
        this.actualBookInfo = 'Book of Leviticus'
        break;
  
      case 3:
        this.actualBookInfo = 'Book of Numbers'
        break;
  
      case 4:
        this.actualBookInfo = 'Book of Deuteronomy'
        break;
  
      case 5:
        this.actualBookInfo = 'Book of Joshua'
        break;
  
      case 6:
        this.actualBookInfo = 'Book of Judges'
        break;
  
      case 7:
        this.actualBookInfo = 'Book of Ruth'
        break;
  
      case 8:
        this.actualBookInfo = 'First book of Samuel'
        break;
  
      case 9:
        this.actualBookInfo = 'Second book of Samuel'
        break;
  
      case 10:
        this.actualBookInfo = 'First book of Kings'
        break;
  
      case 11:
        this.actualBookInfo = 'Second book of Kings'
        break;
  
      case 12:
        this.actualBookInfo = 'First book of Chronicles'
        break;
  
      case 13:
        this.actualBookInfo = 'Second book of Chronicles'
        break;
  
      case 14:
        this.actualBookInfo = 'Book of Ezra'
        break;
  
      case 15:
        this.actualBookInfo = 'Book of Nehemiah'
        break;
  
      case 16:
        this.actualBookInfo = 'Book of Esther'
        break;
  
      case 17:
        this.actualBookInfo = 'Book of Job'
        break;
  
      case 18:
        this.actualBookInfo = 'Psalms'
        break;
  
      case 19:
        this.actualBookInfo = 'Book of Proverbs'
        break;
  
      case 20:
        this.actualBookInfo = 'Ecclesiastes'
        break;
  
      case 21:
        this.actualBookInfo = 'Song of Songs'
        break;
  
      case 22:
        this.actualBookInfo = 'Book of Isaiah'
        break;
  
      case 23:
        this.actualBookInfo = 'Book of Jeremiah'
        break;
  
      case 24:
        this.actualBookInfo = 'Lamentations'
        break;
  
      case 25:
        this.actualBookInfo = 'Book of Ezekiel'
        break;
  
      case 26:
        this.actualBookInfo = 'Book of Daniel'
        break;
  
      case 27:
        this.actualBookInfo = 'Book of Hosea'
        break;
  
      case 28:
        this.actualBookInfo = 'Book of Joel'
        break;
  
      case 29:
        this.actualBookInfo = 'Book of Amos'
        break;
  
      case 30:
        this.actualBookInfo = 'Book of Obadiah'
        break;
  
      case 31:
        this.actualBookInfo = 'Book of Jonah'
        break;
  
      case 32:
        this.actualBookInfo = 'Book of Micah'
        break;
  
      case 33:
        this.actualBookInfo = 'Book of Nahum'
        break;
  
      case 34:
        this.actualBookInfo = 'Book of Habakkuk'
        break;
  
      case 35:
        this.actualBookInfo = 'Book of Zephaniah'
        break;
  
      case 36:
        this.actualBookInfo = 'Book of Haggai'
        break;
  
      case 37:
        this.actualBookInfo = 'Book of Zechariah'
        break;
  
      case 38:
        this.actualBookInfo = 'Book of Malachi'
        break;
  
      case 39:
        this.actualBookInfo = 'Gospel of Matthew'
        break;
  
      case 40:
        this.actualBookInfo = 'Gospel of Mark'
        break;
  
      case 41:
        this.actualBookInfo = 'Gospel of Luke'
        break;
  
      case 42:
        this.actualBookInfo = 'Gospel of John'
        break;
  
      case 43:
        this.actualBookInfo = 'Acts of the Apostles'
        break;
  
      case 44:
        this.actualBookInfo = 'Letter of Paul the apostle to the Romans'
        break;
  
      case 45:
        this.actualBookInfo = 'First letter of Paul the apostle to the Corinthians'
        break;
  
      case 46:
        this.actualBookInfo = 'Second letter of Paul the apostle to the Corinthians'
        break;
  
      case 47:
        this.actualBookInfo = 'Letter of Paul the apostle to the Galatians'
        break;
  
      case 48:
        this.actualBookInfo = 'Letter of Paul the apostle to the Ephesians'
        break;
  
      case 49:
        this.actualBookInfo = 'Letter of Paul the apostle to the Philippians'
        break;
  
      case 50:
        this.actualBookInfo = 'Letter of Paul the apostle to the Colossians'
        break;
  
      case 51:
        this.actualBookInfo = 'First letter of Paul the apostle to the Thessalonians'
        break;
  
      case 52:
        this.actualBookInfo = 'Second letter of Paul the apostle to the Thessalonians'
        break;
  
      case 53:
        this.actualBookInfo = 'First letter of Paul the apostle to Timothy'
        break;
  
      case 54:
        this.actualBookInfo = 'Second letter of Paul the apostle to Timothy'
        break;
  
      case 55:
        this.actualBookInfo = 'Letter of Paul the apostle to Titus'
        break;
  
      case 56:
        this.actualBookInfo = 'Letter of Paul the apostle to Philemon'
        break;
  
      case 57:
        this.actualBookInfo = 'Letter to the Hebrews'
        break;
  
      case 58:
        this.actualBookInfo = 'Letter of James the apostle'
        break;
  
      case 59:
        this.actualBookInfo = 'First letter of Peter the apostle'
        break;
  
      case 60:
        this.actualBookInfo = 'Second letter of Peter the apostle'
        break;
  
      case 61:
        this.actualBookInfo = 'First letter of John the apostle'
        break;
  
      case 62:
        this.actualBookInfo = 'Second letter of John the apostle'
        break;
  
      case 63:
        this.actualBookInfo = 'Third letter of John the apostle'
        break;
  
      case 64:
        this.actualBookInfo = 'The letter of Jude'
        break;
  
      case 65:
        this.actualBookInfo = 'Book of Revelation'
        break;
    }
  } 

  changeActualChapterInfo() {
    switch(this.chapter) {
      default: this.actualChapterInfo = this.chapter + 1
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data: any) => {
      console.log('URL parametry: ', data);
      this.bookNumber = +data.params.book;
      this.chapter = +data.params.chapter;
      this.verseList = this.bibleProvider.getChapterForBook(+this.bookNumber, +this.chapter);
      this.changeActualBookInfo();
      this.changeActualChapterInfo();
    });
  }
}

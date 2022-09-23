import { Component,} from '@angular/core';

@Component({
  selector: 'app-roott',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = "BibleOnline ";
  canEdit = false;
  
  title: string= 'MyOurBible';
  szukajText: string = '';

  onSearch (searchValue: string) {
      this.szukajText = searchValue;
      console.log(this.szukajText);
  }
}
  

  
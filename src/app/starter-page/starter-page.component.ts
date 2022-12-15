import { Component } from '@angular/core';
import { faBookBible, faPen, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-starter-page',
  templateUrl: './starter-page.component.html',
  styleUrls: ['./starter-page.component.css']
})
export class StarterPageComponent {
  bibleIcon = faBookBible;
  pencilIcon = faPen;
  infoIcon = faInfoCircle;
  
  constructor(
    private router: Router
  ) {}
  
  goToBibleApp() {
    this.router.navigateByUrl('/bible/0/0');
  }
}


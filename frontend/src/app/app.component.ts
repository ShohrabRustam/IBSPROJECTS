import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened:boolean =false;
  title = 'frontend';

  open(){
    this.opened = !this.opened;
  }

}

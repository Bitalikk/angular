import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Dynamic title`
  number = 42
  arr = [1, 2, 3]
  obj = {
    a: 1,
    b: {
      c: 2
    }
  }
  inputValue = ''
  // img = 'https://icon-library.net/images/react-icon/react-icon-13.jpg'

  constructor() {
    // setTimeout(() => {
    //   console.log('Timeout is over')
    //   this.img = 'https://www.clearpeaks.com/wp-content/uploads/2017/09/Angular.png'
    // }, 5000)
  }

  onInput(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onClick() {
    console.log('Click')
  }
  onBlur(str: string) {
    this.inputValue = str;
  }

}

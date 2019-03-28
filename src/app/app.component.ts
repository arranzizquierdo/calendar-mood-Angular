import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  today: string = null;
  inputMood: string = null;

  ngOnInit() {
    this.getCurrentDate();
  }

  getCurrentDate = () => {
    let currentDay = new Date();

    const dd = currentDay.getDate();
    const mm = currentDay.getMonth()+1;
    const yyyy = currentDay.getFullYear();

    this.today = `${yyyy}-${mm}-${dd}`;
  }

  handleChange = target => {
    if (target.id.includes('inputMood')) {
      this.inputMood = target.value
    } else {
      this[target.id] = target.value;
    }
    console.log(target)
  }
}

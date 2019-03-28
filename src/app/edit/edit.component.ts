import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  @Input() today;
  @Input() inputMood;
  @Input() handleChange;
  constructor() { }

  ngOnInit() {
  }

}

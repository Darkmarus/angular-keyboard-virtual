import { Component, OnInit } from '@angular/core';
import { Key } from '../model/key';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
})
export class KeyboardComponent implements OnInit {
  message: string = '';

  constructor(private utilityService: UtilityService) {}

  ngOnInit() {}

  get alphanumeric(): Key[][] {
    return this.utilityService.alphanumeric;
  }

  onClickKey(value: string) {
    if ('Backspace' == value) {
      this.message = this.message.slice(0, -1);
    } else {
      this.message += value;
    }
  }
}

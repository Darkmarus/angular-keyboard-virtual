import { Injectable } from '@angular/core';
import { Key } from './model/key';

@Injectable({ providedIn: 'root' })
export class UtilityService {
  constructor() {}

  get alphanumeric(): Key[][] {
    return [
      [
        new Key({ label: '1' }),
        new Key({ label: '2' }),
        new Key({ label: '3' }),
        new Key({ label: '4' }),
        new Key({ label: '5' }),
        new Key({ label: '6' }),
        new Key({ label: '7' }),
        new Key({ label: '8' }),
        new Key({ label: '9' }),
        new Key({ label: '0' }),
        new Key({ label: '¿' }),
        new Key({ label: '←', value: 'Backspace', space: 2 }),
      ],
      [
        new Key({ label: 'q' }),
        new Key({ label: 'w' }),
        new Key({ label: 'e' }),
        new Key({ label: 'r' }),
        new Key({ label: 't' }),
        new Key({ label: 'y' }),
        new Key({ label: 'u' }),
        new Key({ label: 'i' }),
        new Key({ label: 'o' }),
        new Key({ label: 'p' }),
      ],
      [
        new Key({ label: 'a' }),
        new Key({ label: 's' }),
        new Key({ label: 'd' }),
        new Key({ label: 'f' }),
        new Key({ label: 'g' }),
        new Key({ label: 'h' }),
        new Key({ label: 'j' }),
        new Key({ label: 'k' }),
        new Key({ label: 'l' }),
      ],
      [
        new Key({ label: 'z' }),
        new Key({ label: 'x' }),
        new Key({ label: 'c' }),
        new Key({ label: 'v' }),
        new Key({ label: 'b' }),
        new Key({ label: 'n' }),
        new Key({ label: 'm' }),
        new Key({ label: '.' }),
        new Key({ label: ',' }),
        new Key({ label: '?' }),
      ],
      [new Key({ label: '——', value: ' ', space: 6 })],
    ];
  }
}

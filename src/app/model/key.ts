export class Key {
  private _label: string;
  private _value: string;
  private _space: number;

  constructor(params: { label: string; value?: string; space?: number }) {
    this._label = params.label;
    this._value = params.value ?? params.label;
    this._space = params.space ?? 1;
  }

  get label() {
    return this._label;
  }

  get value() {
    return this._value;
  }

  get space() {
    return this._space;
  }
}

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionService {

  private _locale: string;

  set locale(value: string) {
    this._locale = value;
  }
  get locale(): string {
    return this._locale || 'en-US';
  }
}

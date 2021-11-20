import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservablesUserService {
  activatedEmitter = new EventEmitter<boolean>();

  constructor() { }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ng4-header',
  templateUrl: './ng4-header.component.html',
  styleUrls: ['./ng4-header.component.css']
})
export class Ng4HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}

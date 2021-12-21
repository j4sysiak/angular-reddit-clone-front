import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-ng4-header',
  templateUrl: './ng4-header.component.html',
  styleUrls: ['./ng4-header.component.css']
})
export class Ng4HeaderComponent {

  constructor(private dataStorageService: DataStorageService) {
  }
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }
}

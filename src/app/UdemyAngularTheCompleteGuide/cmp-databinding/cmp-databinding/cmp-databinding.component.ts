import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-databinding',
  templateUrl: './cmp-databinding.component.html',
  styleUrls: ['./cmp-databinding.component.css']
})
export class CmpDatabindingComponent  {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

}

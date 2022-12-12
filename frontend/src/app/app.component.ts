import { Component } from '@angular/core';
import {ApiService} from "./api.service";
import {first} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private api: ApiService) {
  }
  onClick() {
    this.api.getHello().pipe(first()).subscribe((text: any)=>{
      alert(text)
    })
  }
}

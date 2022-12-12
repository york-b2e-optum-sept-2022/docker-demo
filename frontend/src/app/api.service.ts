import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private base_url: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  getHello() {
    return this.http.get(`${this.base_url}/hello`, {responseType: "text"})
  }
}

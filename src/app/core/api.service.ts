import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL: string = 'http://www.server.com/api/';
  constructor(private httpClient: HttpClient) {}

  public get(url: string) {
    return this.httpClient.get(`${this.apiURL}/${url}`);
  }

  public post(url: string, data) {
    return this.httpClient.post(`${this.apiURL}/${url}`, data);
  }

  public put(url: string, data) {
    return this.httpClient.put(`${this.apiURL}/${url}`, data);
  }

  public delete(url: string, data) {
    return this.httpClient.delete(`${this.apiURL}/${url}`);
  }
}

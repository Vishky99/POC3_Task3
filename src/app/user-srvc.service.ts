import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserSrvcService {

  private baseUrl = "http://localhost:8080";

  constructor( private httpClient: HttpClient) { }

  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}/users`);
  }

  addUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/users`, user);
  }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/users/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/users/${id}`, user);
  }

  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/users/${id}`);
  }

  permDeleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/deleteuser/${id}`);
  }
}

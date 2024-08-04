import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { debounceTime, Observable ,of} from 'rxjs';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl='https://reqres.in/api';
private userCache = new Map<number, any>(); 
  private pageCache = new Map<number, any>(); 
  constructor(private http:HttpClient) { }
  getUsers(page: number): Observable<any> {
    if (this.pageCache.has(page)) {
      return of(this.pageCache.get(page)); // Return cached data
    } else {
      return this.http.get<any>(`${this.baseUrl}/users?page=${page}`).pipe(
        tap(response => this.pageCache.set(page, response)) // Cache the response
      );
    }
  }

  getUser(id: number): Observable<any> {
    if (this.userCache.has(id)) {
      return of(this.userCache.get(id)); 
    } else {
      return this.http.get<any>(`${this.baseUrl}/users/${id}`).pipe(
        tap(response => this.userCache.set(id, response.data)) // Cache the response
      );
    }
  }
}

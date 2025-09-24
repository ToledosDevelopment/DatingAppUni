import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/api/`;

  login(creds: any) {
    return this.http.post(this.baseUrl + "account/login", creds);
  }
}
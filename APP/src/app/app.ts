import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { environment } from '../environments/environment';
import { lastValueFrom } from 'rxjs';
import { Nav } from './layout/nav/nav';
import { AccountService } from '../core/services/account-service';
import { Home } from '../features/home/home';

@Component({
  selector: 'app-root',
  imports: [Nav, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private accountService = inject(AccountService);
  private http = inject(HttpClient);

  protected readonly title = signal('Dating App')
  protected members = signal<any>([]);

  async ngOnInit(): Promise<void> {
    this.setCurrentUser();
    this.members.set(await this.getMembers())
  }

  setCurrentUser(): void {
    const userString = localStorage.getItem("user");
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

  async getMembers(): Promise<Object> {
    try {
      return lastValueFrom(this.http.get(`${environment.apiUrl}/api/members`))
    }
    catch (error) {
      console.error(error);
      throw error;
    }
  }
}

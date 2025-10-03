import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { environment } from '../environments/environment';
import { lastValueFrom } from 'rxjs';
import { Nav } from './layout/nav/nav';
import { AccountService } from '../core/services/account-service';
import { User } from '../types/user';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly router = inject(Router);
}

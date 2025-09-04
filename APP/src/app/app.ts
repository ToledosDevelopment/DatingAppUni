import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { response } from 'express';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private http = inject(HttpClient);
  protected readonly title = signal('Dating App')
  
  ngOnInit(): void {
    this.http.get(`${environment.apiUrl}/api/members`).subscribe({
      next : response => console.log(response),
      error: error=> console.error(error),
      complete: ()=> console.log("Complete")
    })
  }
}

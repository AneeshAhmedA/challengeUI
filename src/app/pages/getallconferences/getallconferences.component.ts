import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-getallconferences',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './getallconferences.component.html',
  styleUrl: './getallconferences.component.css'
})
export class GetallconferencesComponent {
  conferences: Conference[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.ConferenceDetails();
  }

  ConferenceDetails() {
    this.http
      .get<Conference[]>('http://localhost:5172/api/Conference')
      .subscribe(
        (response) => {
          this.conferences = response;
          console.log(this.conferences);
        },
        (error) => {
          console.error('Error fetching conferences:', error);
        }
      );
  }
}

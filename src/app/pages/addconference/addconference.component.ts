import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-addconference',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './addconference.component.html',
  styleUrl: './addconference.component.css'
})
export class AddconferenceComponent {
  conference: Conference;
  successMessage: string = '';
  conferenceId: number | undefined;

  constructor(private http: HttpClient, private router: Router) {
    this.conference = new Conference();
  }

  addConference() {
    this.http.post<any>('http://localhost:5172/api/Conference', this.conference)
      .subscribe(
        (response) => {
          console.log('Conference created successfully. Response:', response);
          this.conferenceId = response.conferenceID; 
          this.successMessage = 'Conference created successfully, Your Conference ID is: ' + this.conferenceId;
        },
        (error) => {
          console.error('Error adding Conference:', error);
          this.successMessage = '';
        }
      );
  }
}

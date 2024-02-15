import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-searchconference',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './searchconference.component.html',
  styleUrl: './searchconference.component.css'
})
export class SearchconferenceComponent {
  conferenceId?: number = 0;
  conference: Conference;
  errMsg: String = '';
  isConferenceExist: boolean = false;
  originalConference: Conference = {} as Conference;

  constructor(
    private http: HttpClient,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.conference = new Conference();
    this.activateRoute.params.subscribe((params) => (this.conferenceId = params['cid']));
    this.search();
  }

  search() {
    this.http
      .get<Conference>('http://localhost:5172/api/Conference/' + this.conferenceId)
      .subscribe((response) => {
        if (response != null) {
          this.conference = response;
          this.originalConference = { ...this.conference };
          this.isConferenceExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Conference Id';
          this.isConferenceExist = false;
        }
      });
  }
}

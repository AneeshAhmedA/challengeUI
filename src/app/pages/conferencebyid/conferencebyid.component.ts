import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-conferencebyid',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './conferencebyid.component.html',
  styleUrl: './conferencebyid.component.css'
})
export class ConferencebyidComponent {
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

  updateConference() {
    this.http.put('http://localhost:5172/api/Conference/' + this.conferenceId, this.conference)
      .subscribe(
        (response) => {
          console.log('Conference updated successfully:', response);
          this.router.navigateByUrl('admin-dashboard/getconference');
        },
        (error) => {
          console.error('Error updating conference:', error);
        }
      );
  }

  delete() {
    this.http
      .delete('http://localhost:5172/api/Conference/' + this.conferenceId)
      .subscribe(
        (response) => {
          console.log('Conference deleted successfully:', response);
          this.router.navigateByUrl('admin-dashboard/getconference');
        },
        (error) => {
          console.error('Error deleting conference:', error);
        }
      );
  }
}
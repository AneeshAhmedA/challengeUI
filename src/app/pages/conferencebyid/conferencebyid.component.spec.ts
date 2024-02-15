import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencebyidComponent } from './conferencebyid.component';

describe('ConferencebyidComponent', () => {
  let component: ConferencebyidComponent;
  let fixture: ComponentFixture<ConferencebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferencebyidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConferencebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

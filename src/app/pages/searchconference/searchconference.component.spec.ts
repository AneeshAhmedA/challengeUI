import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchconferenceComponent } from './searchconference.component';

describe('SearchconferenceComponent', () => {
  let component: SearchconferenceComponent;
  let fixture: ComponentFixture<SearchconferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchconferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchconferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallconferencesComponent } from './getallconferences.component';

describe('GetallconferencesComponent', () => {
  let component: GetallconferencesComponent;
  let fixture: ComponentFixture<GetallconferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallconferencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallconferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

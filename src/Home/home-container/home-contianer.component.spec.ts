import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContianerComponent } from './home-contianer.component';

describe('HomeContianerComponent', () => {
  let component: HomeContianerComponent;
  let fixture: ComponentFixture<HomeContianerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContianerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeContianerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

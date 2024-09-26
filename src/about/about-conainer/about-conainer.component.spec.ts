import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutConainerComponent } from './about-conainer.component';

describe('AboutConainerComponent', () => {
  let component: AboutConainerComponent;
  let fixture: ComponentFixture<AboutConainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutConainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutConainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingImageComponent } from './home-landing-image.component';

describe('HomeLandingImageComponent', () => {
  let component: HomeLandingImageComponent;
  let fixture: ComponentFixture<HomeLandingImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLandingImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLandingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsListBigComponent } from './bets-list-big.component';

describe('BetsListBigComponent', () => {
  let component: BetsListBigComponent;
  let fixture: ComponentFixture<BetsListBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetsListBigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsListBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

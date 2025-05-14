import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgragarComponent } from './agragar.component';

describe('AgragarComponent', () => {
  let component: AgragarComponent;
  let fixture: ComponentFixture<AgragarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgragarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgragarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

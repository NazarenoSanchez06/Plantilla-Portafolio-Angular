import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcerdeDeMiComponent } from './acerde-de-mi.component';

describe('AcerdeDeMiComponent', () => {
  let component: AcerdeDeMiComponent;
  let fixture: ComponentFixture<AcerdeDeMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcerdeDeMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcerdeDeMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

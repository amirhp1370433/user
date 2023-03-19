import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearmeComponent } from './clearme.component';

describe('ClearmeComponent', () => {
  let component: ClearmeComponent;
  let fixture: ComponentFixture<ClearmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

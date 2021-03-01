import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarburantComponent } from './create-carburant.component';

describe('CreateCarburantComponent', () => {
  let component: CreateCarburantComponent;
  let fixture: ComponentFixture<CreateCarburantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCarburantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarburantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

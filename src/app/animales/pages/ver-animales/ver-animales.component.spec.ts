import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAnimalesComponent } from './ver-animales.component';

describe('VerAnimalesComponent', () => {
  let component: VerAnimalesComponent;
  let fixture: ComponentFixture<VerAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAnimalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparknoteComponent } from './sparknote.component';

describe('SparknoteComponent', () => {
  let component: SparknoteComponent;
  let fixture: ComponentFixture<SparknoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparknoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparknoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

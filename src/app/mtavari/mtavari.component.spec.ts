import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtavariComponent } from './mtavari.component';

describe('MtavariComponent', () => {
  let component: MtavariComponent;
  let fixture: ComponentFixture<MtavariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtavariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtavariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

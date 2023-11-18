import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaciaComponent } from './informacia.component';

describe('InformaciaComponent', () => {
  let component: InformaciaComponent;
  let fixture: ComponentFixture<InformaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformaciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

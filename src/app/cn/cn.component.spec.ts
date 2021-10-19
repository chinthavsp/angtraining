import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnComponent } from './cn.component';

describe('CnComponent', () => {
  let component: CnComponent;
  let fixture: ComponentFixture<CnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

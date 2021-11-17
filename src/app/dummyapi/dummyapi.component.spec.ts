import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyapiComponent } from './dummyapi.component';

describe('DummyapiComponent', () => {
  let component: DummyapiComponent;
  let fixture: ComponentFixture<DummyapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

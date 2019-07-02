import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireDonComponent } from './faire-don.component';

describe('FaireDonComponent', () => {
  let component: FaireDonComponent;
  let fixture: ComponentFixture<FaireDonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaireDonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaireDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

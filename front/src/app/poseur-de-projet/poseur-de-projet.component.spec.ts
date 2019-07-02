import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoseurDeProjetComponent } from './poseur-de-projet.component';

describe('PoseurDeProjetComponent', () => {
  let component: PoseurDeProjetComponent;
  let fixture: ComponentFixture<PoseurDeProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoseurDeProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoseurDeProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

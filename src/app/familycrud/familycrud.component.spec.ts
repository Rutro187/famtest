import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilycrudComponent } from './familycrud.component';

describe('FamilycrudComponent', () => {
  let component: FamilycrudComponent;
  let fixture: ComponentFixture<FamilycrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilycrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilycrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

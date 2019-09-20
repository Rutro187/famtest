import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilysearchComponent } from './familysearch.component';

describe('FamilysearchComponent', () => {
  let component: FamilysearchComponent;
  let fixture: ComponentFixture<FamilysearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilysearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

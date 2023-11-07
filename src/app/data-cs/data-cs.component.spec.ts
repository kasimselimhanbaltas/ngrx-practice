import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCsComponent } from './data-cs.component';

describe('DataCsComponent', () => {
  let component: DataCsComponent;
  let fixture: ComponentFixture<DataCsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataCsComponent]
    });
    fixture = TestBed.createComponent(DataCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

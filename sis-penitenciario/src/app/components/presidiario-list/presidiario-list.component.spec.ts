import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidiarioListComponent } from './presidiario-list.component';

describe('PresidiarioListComponent', () => {
  let component: PresidiarioListComponent;
  let fixture: ComponentFixture<PresidiarioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresidiarioListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresidiarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

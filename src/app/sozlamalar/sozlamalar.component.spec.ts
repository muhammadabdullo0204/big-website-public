import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SozlamalarComponent } from './sozlamalar.component';

describe('SozlamalarComponent', () => {
  let component: SozlamalarComponent;
  let fixture: ComponentFixture<SozlamalarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SozlamalarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SozlamalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

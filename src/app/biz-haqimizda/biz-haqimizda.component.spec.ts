import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizHaqimizdaComponent } from './biz-haqimizda.component';


describe('BizHaqimizdaComponent', () => {
  let component: BizHaqimizdaComponent;
  let fixture: ComponentFixture<BizHaqimizdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BizHaqimizdaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BizHaqimizdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

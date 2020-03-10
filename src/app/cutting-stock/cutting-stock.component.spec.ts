import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingStockComponent } from './cutting-stock.component';

describe('CuttingStockComponent', () => {
  let component: CuttingStockComponent;
  let fixture: ComponentFixture<CuttingStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuttingStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttingStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

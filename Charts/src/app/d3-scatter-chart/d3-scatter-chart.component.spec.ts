import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ScatterChartComponent } from './d3-scatter-chart.component';

describe('D3ScatterChartComponent', () => {
  let component: D3ScatterChartComponent;
  let fixture: ComponentFixture<D3ScatterChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3ScatterChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ScatterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

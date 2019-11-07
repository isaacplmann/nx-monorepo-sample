import { async, TestBed } from '@angular/core/testing';
import { CustomersUiModule } from './customers-ui.module';

describe('CustomersUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomersUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomersUiModule).toBeDefined();
  });
});

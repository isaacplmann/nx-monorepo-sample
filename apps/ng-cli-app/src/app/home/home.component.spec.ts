import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CustomerService } from '../customers/customer.service';
import { EMPTY } from 'rxjs';
import { SharedModule } from '../shared/shared.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    const customerServiceMock = jasmine.createSpyObj<CustomerService>('CustomerService', ['getCustomerOfTheDay']);
    customerServiceMock.getCustomerOfTheDay.and.returnValue(EMPTY);

    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [HomeComponent],
      providers: [
        { provide: CustomerService, useValue: customerServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

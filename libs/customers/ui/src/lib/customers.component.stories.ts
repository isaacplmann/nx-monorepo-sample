import { CustomersComponent } from './customers.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CustomerService } from '@ng-cli-app/customers/data';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './customers-ui.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

export default {
  title: 'CustomersComponent'
};

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
      BrowserModule,
      MatSortModule,
      MatTableModule,
      MatPaginatorModule,
      RouterModule.forRoot([
        {
          path: '**',
          component: CustomerListComponent
        }
      ]),
      HttpClientModule
    ],
    declarations: [CustomerListComponent],
    providers: [
      {
        provide: APP_BASE_HREF,
        useValue: '/'
      }
    ]
  },
  component: CustomersComponent,
  props: {}
});

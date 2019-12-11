import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersComponent } from './customers.component';

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

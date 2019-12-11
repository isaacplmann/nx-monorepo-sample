import { CustomersUiModule } from '../customers-ui.module';
import { CustomerService } from '@ng-cli-app/customers/data';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

export default {
  title: 'CustomerListComponent'
};

export const primary = () => ({
  moduleMetadata: {
    imports: [
      CustomersUiModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatSortModule,
      MatTableModule,
      MatPaginatorModule
    ]
  },
  template: '<app-customer-list></app-customer-list>',
  props: {}
});

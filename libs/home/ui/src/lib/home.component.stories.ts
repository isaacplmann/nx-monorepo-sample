import { HomeComponent } from './home.component';
import { SharedComponentsModule } from '@ng-cli-app/shared/components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

export default {
  title: 'HomeComponent'
};

export const primary = () => ({
  moduleMetadata: {
    imports: [SharedComponentsModule, HttpClientModule]
  },
  component: HomeComponent,
  props: {}
});

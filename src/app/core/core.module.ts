import { NgModule, Optional, SkipSelf, Provider, forwardRef } from '@angular/core';

import { SidenavMenuComponent } from 'app/core/sidenav-menu.component';
import { LayoutBarComponent } from 'app/core/layout-bar.component';
import { TopBarComponent } from 'app/core/top-bar.component';
import { MenuBarComponent } from 'app/core/menu-bar.component';

import { SharedModule } from 'app/shared/shared.module';
import { Messages } from 'app/messages/messages';
import { NotificationService } from 'app/core/notification.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { FormatService } from 'app/core/format.service';
import { TranslationLoaderService } from 'app/core/translation-loader.service';
import { LayoutService } from 'app/core/layout.service';
import { LoginService } from 'app/core/login.service';
import { PersonalMenuComponent } from 'app/core/personal-menu.component';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { ApiDateAdapter } from 'app/core/api-date-adapter';
import { MenuService } from 'app/shared/menu.service';
import { StateManager } from 'app/core/state-manager';
import { PushNotificationsService } from 'app/core/push-notifications.service';
import { ApiInterceptor } from 'app/core/api.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CountriesResolve } from 'app/countries.resolve';
import { BreadcrumbService } from './breadcrumb.service';
import { LightboxModule } from 'angular2-lightbox';
import { NextRequestState } from './next-request-state';
import { SvgIconRegistry } from 'app/core/svg-icon-registry';
import { DataForUiHolder } from 'app/core/data-for-ui-holder';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
};
export const DATE_ADAPTER_PROVIDER: Provider = {
  provide: DateAdapter,
  useExisting: forwardRef(() => ApiDateAdapter)
};
export function materialDateFormatsFactory(formatService: FormatService) {
  return formatService.materialDateFormats.value;
}
export const DATE_FORMATS_PROVIDER: Provider = {
  provide: MAT_DATE_FORMATS,
  useFactory: materialDateFormatsFactory,
  deps: [FormatService]
};

/**
 * Module that declares components used only by the core app module
 */
@NgModule({
  declarations: [
    LayoutBarComponent,
    TopBarComponent,
    MenuBarComponent,
    SidenavMenuComponent,
    PersonalMenuComponent
  ],
  imports: [
    SharedModule,
    LightboxModule
  ],
  exports: [
    LayoutBarComponent,
    TopBarComponent,
    MenuBarComponent,
    SidenavMenuComponent,
    PersonalMenuComponent,
    LightboxModule
  ],
  providers: [
    NextRequestState,
    ApiInterceptor,
    Messages,
    TranslationLoaderService,
    DataForUiHolder,
    ErrorHandlerService,
    FormatService,
    LayoutService,
    NotificationService,
    BreadcrumbService,
    StateManager,
    LoginService,
    MenuService,
    PushNotificationsService,
    CountriesResolve,
    ApiDateAdapter,
    SvgIconRegistry,
    API_INTERCEPTOR_PROVIDER,
    DATE_ADAPTER_PROVIDER,
    DATE_FORMATS_PROVIDER
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: SharedModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. '
        + 'It should only be imported in AppModule');
    }

  }
}

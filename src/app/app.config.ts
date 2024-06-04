import {ApplicationConfig} from '@angular/core';
import {provideRouter, withDebugTracing} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()), provideAnimationsAsync()]
};

export const getApiUrl = (): string => {
    return 'http://localhost:8080/api/v1';
}

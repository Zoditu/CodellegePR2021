import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HeaderModule } from './components/menu-header/menuHeader.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HeaderModule).catch(err => console.error(err));
platformBrowserDynamic().bootstrapModule(StoreModule).catch(err => console.error(err));

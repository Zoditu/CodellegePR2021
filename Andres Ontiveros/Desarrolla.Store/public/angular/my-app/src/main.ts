import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { CartInfoModule } from './CartInfo/CartInfo.module';
import { UsuarioModule } from './Usuario/Usuario-module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  platformBrowserDynamic().bootstrapModule(CatalogoModule)
  .catch(err => console.error(err));

  platformBrowserDynamic().bootstrapModule(CartInfoModule)
  .catch(err => console.error(err));

  platformBrowserDynamic().bootstrapModule(UsuarioModule)
  .catch(err => console.error(err));

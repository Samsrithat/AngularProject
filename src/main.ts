import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './app/Home/app.MainModule';


platformBrowserDynamic().bootstrapModule(MainModule)
  .catch(err => console.error(err));

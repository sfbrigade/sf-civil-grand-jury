import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

if (process.env.ENV === 'production') {
    // Production
} else {
    // Development and test
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AdminAppModule } from './admin/app.module';

platformBrowserDynamic().bootstrapModule(AdminAppModule);

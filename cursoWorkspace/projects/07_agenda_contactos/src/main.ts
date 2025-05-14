import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AgendajsonComponent } from './app/agendajson/agendajson.component';

bootstrapApplication(AgendajsonComponent, appConfig)
  .catch((err) => console.error(err));

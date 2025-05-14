import { NotasComponent } from './../../cursoWorkspace/projects/06_notas/src/app/notas/notas.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(NotasComponent, appConfig)
  .catch((err) => console.error(err));

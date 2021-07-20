// routerConfig.ts

import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

const appRoutes: Routes = [
  { path: 'button', 
    component: ButtonComponent 
  },

  {
    path: 'about',
    component: AboutComponent
  },

  { path: 'footer', 
  component: FooterComponent 
},
    { path: 'header', 
component: HeaderComponent 
},
    { path: 'task', 
component: TasksComponent
},
{ path: 'task-item', 
component: TaskItemComponent }


];
export default appRoutes;
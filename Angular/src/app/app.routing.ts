import { NewEquipamentComponent } from './new-equipament/new-equipament.component';
import { IndexComponent } from './index/index.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowEquipamentComponent } from './show-equipament/show-equipament.component';

const APP_ROUTES: Routes = [
  { path: '', component: IndexComponent },  
  { path: 'new', component: NewEquipamentComponent },
  { path: 'show/:id', component: ShowEquipamentComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
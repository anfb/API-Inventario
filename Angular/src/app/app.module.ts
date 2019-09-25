import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewEquipamentComponent } from './new-equipament/new-equipament.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowEquipamentComponent } from './show-equipament/show-equipament.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEquipamentComponent,
    ShowEquipamentComponent,
    IndexComponent,
    ShowEquipamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewEquipamentComponent,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSymbolPipe } from '../unit-testing/testing pipes/add-symbol.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddSymbolPipe    
  ],
  imports: [
    BrowserModule,      
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }

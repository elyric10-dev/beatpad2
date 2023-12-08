import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeatpadComponent } from './components/beatpad/beatpad.component';
import { HeaderComponent } from './components/beatpad/header/header.component';
import { LeftPadComponent } from './components/beatpad/body/left-pad/left-pad.component';
import { RightPadComponent } from './components/beatpad/body/right-pad/right-pad.component';
import { CenterControlComponent } from './components/beatpad/body/center-control/center-control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { PerformanceButtonComponent } from './components/beatpad/components/performance-button/performance-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BeatpadComponent,
    HeaderComponent,
    LeftPadComponent,
    RightPadComponent,
    CenterControlComponent,
    PerformanceButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

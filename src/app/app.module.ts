import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SudokuViewerComponent } from './sudoku-viewer/sudoku-viewer.component';
import { SudokuOptionsComponent } from './sudoku-options/sudoku-options.component';
import { ValueDisplayPipe } from './pipes/value-display.pipe';
import { ValueHidePipe } from './pipes/value-hide.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SudokuViewComponent } from './sudoku-view/sudoku-view.component';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuViewerComponent,
    SudokuOptionsComponent,
    ValueDisplayPipe,
    ValueHidePipe,
    SudokuViewComponent,
    ListViewComponent,
  ],
  imports: [
    MatSliderModule,
    MatSelectModule,
    MatSidenavModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

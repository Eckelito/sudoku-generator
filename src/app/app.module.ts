import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SudokuViewerComponent } from './sudoku-viewer/sudoku-viewer.component';
import { SudokuOptionsComponent } from './sudoku-options/sudoku-options.component';
import { SudokuCreateComponent } from './sudoku-create/sudoku-create.component';
import { ValueDisplayPipe } from './sudoku-viewer/value-display.pipe';
import { ValueHidePipe } from './sudoku-viewer/value-hide.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SudokuViewerComponent,
    SudokuOptionsComponent,
    SudokuCreateComponent,
    ValueDisplayPipe,
    ValueHidePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SudokuViewComponent } from './sudoku-view/sudoku-view.component';
import { ListViewComponent } from './list-view/list-view.component';

const routes: Routes = [{path: '', component: SudokuViewComponent},
{path: 'list', component: SudokuViewComponent},
{path: 'view', component: ListViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}



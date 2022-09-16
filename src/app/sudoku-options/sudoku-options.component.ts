import { Component, OnInit } from '@angular/core';
import { SudokuCoreService } from '../sudoku-core.service';
import { SudokuStorageService } from '../sudoku-storage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RangeValidation } from '../validators/range-validation';
import { MatInputModule } from '@angular/material/input';
import { MatSlider } from '@angular/material/slider';


@Component({
  selector: 'app-sudoku-options',
  templateUrl: './sudoku-options.component.html',
  styleUrls: ['./sudoku-options.component.scss']
})
export class SudokuOptionsComponent implements OnInit {

  constructor(public sudokuCore: SudokuCoreService, public sudokuStorage: SudokuStorageService, private rangeValidation: RangeValidation) {
  }
  isCreatingSudoku = false;

  sudokuSizeOptions = [2, 3, 4]
  sudokuSizeDefault = 3;
  displayOptions = [
    { name: "digits", value: 0 },
    { name: "letters", value: 1 },
    { name: "letters above 9 only", value: 2 }
  ]
  displaySettingDefault = this.displayOptions[0];
  visiblePercentageDefault = 100;

  toPercent(num: number): string {
    return num + '%';
  }

  settingsForm = new FormGroup({
    sudokuSize: new FormControl(3, [
      Validators.required]),
    percentVisible: new FormControl(this.visiblePercentageDefault, [
      Validators.required,
      this.rangeValidation.rangeValidation(0, 100)]),
    display: new FormControl(this.displaySettingDefault, [
      Validators.required
    ]),
    name: new FormControl('', [
      Validators.required
    ])
  }
  )

  onInputChange(event: any) {
    this.settingsForm.get("percentVisible")?.setValue(event.value);
  }

  hideLabel(slider: MatSlider) {
    slider.blur();
  }

  printSudokuList(event: any) {
    alert(JSON.stringify(this.sudokuCore.sudoku));
  }

  ngOnInit(): void {
    this.settingsForm.get("sudokuSize")!.valueChanges.subscribe((n) => {
      if (!this.isCreatingSudoku) {
        this.isCreatingSudoku = true;
        this.sudokuCore.createSudoku(n ? n : 0)
        this.isCreatingSudoku = false;
      }
    }
    );
    this.settingsForm.get("percentVisible")!.valueChanges.subscribe((n) =>
      this.sudokuCore.setPercentVisible(n ? n : 0));
    this.settingsForm.get("display")!.valueChanges.subscribe((o) =>
      this.sudokuCore.setDisplaySetting(o ? o.value : 0));
    this.settingsForm.get("name")!.valueChanges.subscribe((s) =>
      this.sudokuCore.setName(s ?? ''));
  }
}

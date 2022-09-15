import { refCount } from "rxjs";
import { shuffleArray } from "./shuffleArray";

export interface Cell {
    val: number;
    column: number;
    row: number;
    region: number;
    queue: number[];
    index: number;
    visible: boolean;
}

export class Sudoku {
    list: Cell[];
    columns: Cell[][];
    rows: Cell[][];
    regions: Cell[][];
    regionWidth: number;
    gridWidth: number;

    constructor(list: Cell[], columns: Cell[][], rows: Cell[][],
        regions: Cell[][], regionWidth: number, gridWidth: number) {
        this.list = list;
        this.columns = columns;
        this.rows = rows;
        this.regions = regions;
        this.regionWidth = regionWidth;
        this.gridWidth = gridWidth;
    }
}


let regionWidth: number;
let gridWidth: number;
let gridSize: number;
let digits: number[];

let list: Cell[];
let columns: Cell[][];
let rows: Cell[][];
let regions: Cell[][];

function addNestedArrays(arr: any[], n: number): void {
    for (let i = 0; i < n; i++) {
        arr.push([]);
    }
}

function columnOf(i: number): number {
    return i % gridWidth;
}

function rowOf(i: number): number {
    return Math.floor(i / gridWidth);
}

function regionOf(c: number, r: number): number {
    return Math.floor(r / regionWidth) * regionWidth + Math.floor(c / regionWidth);
}

function digitsRandOrder(): number[] {
    return shuffleArray([...digits]);
}

function createCells(): void {
    for (let i = 0; i < gridSize; i++) {
        let column: number = columnOf(i);
        let row: number = rowOf(i);
        let region: number = regionOf(column, row);
        const cell: Cell = {
            val: 0,
            column: column,
            row: row,
            region: region,
            queue: digitsRandOrder(),
            index: 0,
            visible: true
        }
        list.push(cell)
    }
}

function populateGroups(): void {
    for (let i = 0; i < gridSize; i++) {
        let cell: Cell = list[i];
        columns[cell.column].push(cell);
        rows[cell.row].push(cell);
        regions[cell.region].push(cell);
    }
}

function areaContains(area: Cell[], n: number): boolean {
    for (let cell of area) {
        if (cell.val === n) {
            return true;
        }
    }
    return false;
}

function numToChar(n: Number): String {
    return n.toString(gridWidth + 1).toUpperCase();
}

function setValue(i: number): number {
    let cell = list[i];
    let compatDigFound = false;
    while (cell.index < cell.queue.length && !compatDigFound) {
        let n = cell.queue[cell.index]!;
        cell.index++;

        if (!areaContains(columns[cell.column], n) &&
            !areaContains(rows[cell.row], n) &&
            !areaContains(regions[cell.region], n)) {
            cell.val = n;
            compatDigFound = true;
        }
    }
    if (compatDigFound) {
        return i + 1;
    } else {
        cell.index = 0;
        cell.val = 0;
        return i - 1;
    }
}

function createBoard(rw: number) {
    regionWidth = rw;
    gridWidth = regionWidth * regionWidth;
    gridSize = gridWidth * gridWidth;
    digits = [];
    for (let i = 0; i < gridWidth; i++) {
        digits.push(i + 1);
    }

    list = [];
    columns = [];
    rows = [];
    regions = [];
    addNestedArrays(columns, gridWidth);
    addNestedArrays(rows, gridWidth);
    addNestedArrays(regions, gridWidth);
}

function run(): boolean {
    createCells();
    populateGroups();

    let cycleCount = 0;
    let cycleCap = 500000;
    let index = 0;
    while (index < gridSize) {
        index = setValue(index);
        cycleCount++;
        if (cycleCount >= cycleCap) {
            return false;
        }
    }
    return true;
}

export function generateSudoku(rw: number): Sudoku {
    let succesful = false;
    do {
        createBoard(rw);
        succesful = run();
    } while (!succesful);

    return new Sudoku(list, columns, rows, regions, regionWidth, gridWidth);

}

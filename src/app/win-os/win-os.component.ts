import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
	ResizeEvent
} from 'angular-resizable-element';


@Component({
  selector: 'app-win-os',
  templateUrl: './win-os.component.html',
  styleUrls: ['./win-os.component.scss']
})
export class WinOsComponent {
  name = 'Angular 5';
  displayedColumns = ['path', 'date', 'size'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  
	onResizeEnd(event: ResizeEvent, columnName): void {
		if (event.edges.right) {
			const cssValue = event.rectangle.width + 'px';
			const columnElts = document.getElementsByClassName('mat-column-' + columnName);
			for (let i = 0; i < columnElts.length; i++) {
				const currentEl = columnElts[i] as HTMLDivElement;
				currentEl.style.width = cssValue;
			}
		}
	}
}


export interface Element {
  path: string;
  date: string;
  size: number;
}

const ELEMENT_DATA: Element[] = [
  { path: 'Hydrogen', size: 1.0079, date: 'H'},
  { path: 'Helium', size: 4.0026, date: 'He'},
  { path: 'Lithium', size: 6.941, date: 'Li'},
  { path: 'Beryllium', size: 9.0122, date: 'Be'},
  { path: 'Boron', size: 10.811, date: 'B'},
  { path: 'Carbon', size: 12.0107, date: 'C'},
  { path: 'Nitrogen', size: 14.0067, date: 'N'},
  { path: 'Oxygen', size: 15.9994, date: 'O'},
  { path: 'Fluorine', size: 18.9984, date: 'F'},
  { path: 'Neon', size: 20.1797, date: 'Ne'},
  { path: 'Sodium', size: 22.9897, date: 'Na'},
  { path: 'Magnesium', size: 24.305, date: 'Mg'},
  { path: 'Aluminum', size: 26.9815, date: 'Al'},
  { path: 'Silicon', size: 28.0855, date: 'Si'},
  { path: 'Phosphorus', size: 30.9738, date: 'P'},
  { path: 'Sulfur', size: 32.065, date: 'S'},
  { path: 'Chlorine', size: 35.453, date: 'Cl'},
  { path: 'Argon', size: 39.948, date: 'Ar'},
  { path: 'Potassium', size: 39.0983, date: 'K'},
  { path: 'Calcium', size: 40.078, date: 'Ca'},
];

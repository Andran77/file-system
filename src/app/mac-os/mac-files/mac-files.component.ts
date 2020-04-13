import { Component, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { FileService, File } from '../../file.service'
import { SortingService } from 'src/app/sorting.service';

@Component({
  selector: 'app-mac-files',
  templateUrl: './mac-files.component.html',
  styleUrls: ['./mac-files.component.scss']
})
export class MacFilesComponent {

  @Input() path: string;
  @Input() searchText: string;
  @Output() selectedFolder = new EventEmitter<string>();

  fileItems: Array<File> = [];
  sortByName: Boolean = true;
  sortByNameK: Boolean = true;
  sortByDate: Boolean = false;
  sortByDateK: Boolean = false;
  sortBySize: Boolean = false;
  sortBySizeK: Boolean = false;

  constructor(
    public fileService: FileService,
    public sortService: SortingService
  ) { }

  ngOnChanges(changes: SimpleChange) {
    if (changes.hasOwnProperty('searchText')) {
      if (changes['searchText'].currentValue) {
        this.fileItems = this.getSearchFiles();
      }
      if (!changes['searchText'].currentValue) {
        this.fileItems = this.getFiles();
      }
    } else if (changes.hasOwnProperty('path')) {
      this.path = changes['path'].currentValue;
      this.fileItems = this.getFiles();
    }
  }

  getFiles() {
    const regPath = this.path ? this.path.replace(/[a-z]*\//g, '[a-z]*\\/') : '';
    const files = this.fileService.getFiles().filter(file => {
      const regex = new RegExp('^' + regPath + '[a-z\.]*$');
      return regex.test(file.path) && file.path.startsWith(this.path);
    })
    if (this.sortByName) {
      let kaf = this.sortByNameK ? 1 : -1;
      return this.sortService.sortFileByName(files, kaf);
    }
    if (this.sortByDate) {
      let kaf = this.sortByDateK ? 1 : -1;
      return this.sortService.sortFileByDate(files, kaf);
    }
    if (this.sortBySize) {
      let kaf = this.sortBySizeK ? 1 : -1;
      return this.sortService.sortFileBySize(files, kaf);
    }
  }

  getSearchFiles() {
    const files = this.fileService.getFiles().filter(file => {
      const fileName = file.path.match(/[a-z\.]*$/)[0];
      return fileName.includes(this.searchText);
    })
    if (this.sortByName) {
      let kaf = this.sortByNameK ? 1 : -1;
      return this.sortService.sortFileByName(files, kaf);
    }
    if (this.sortByDate) {
      let kaf = this.sortByDateK ? 1 : -1;
      return this.sortService.sortFileByDate(files, kaf);
    }
    if (this.sortBySize) {
      let kaf = this.sortBySizeK ? 1 : -1;
      return this.sortService.sortFileBySize(files, kaf);
    }
  }

  sortBy(field) {
    let kaf;
    switch(field) {
      case 'name':
        this.sortByDate = false;
        this.sortByDateK = false;
        this.sortBySize = false;
        this.sortBySizeK = false;
        this.sortByName = true;
        this.sortByNameK = !this.sortByNameK;
        kaf = this.sortByNameK ? 1 : -1;
        this.fileItems = this.sortService.sortFileByName(this.fileItems, kaf);
        break;
      case 'date':
        this.sortByName = false;
        this.sortByNameK = false;
        this.sortBySize = false;
        this.sortBySizeK = false;
        this.sortByDate = true;
        this.sortByDateK = !this.sortByDateK;
        kaf = this.sortByDateK ? 1 : -1;
        this.fileItems = this.sortService.sortFileByDate(this.fileItems, kaf);
        break;
      case 'size':
        this.sortByName = false;
        this.sortByNameK = false;
        this.sortByDate = false;
        this.sortByDateK = false;
        this.sortBySize = true;
        this.sortBySizeK = !this.sortBySizeK;
        kaf = this.sortBySizeK ? 1 : -1;
        this.fileItems = this.sortService.sortFileBySize(this.fileItems, kaf);
        break;
    }
  }

  numToArray(): any[] {
    const num = 30 - this.fileItems.length;
    return Array(num);
  }

  selectFolder(file) {
    if (file.type === 'folder') {
      this.selectedFolder.emit(file.path);
    }
  }

  getFileIcon(path) {
    return 'file ' + 'file-' + path.replace(/.*\./, '');
  }

  getFolderSize(path) {
    return this.fileService.getFolderSize(path);
  }
}

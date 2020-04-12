import { Component, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { FileService, File } from '../../file.service'
import { summaryForJitFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-mac-files',
  templateUrl: './mac-files.component.html',
  styleUrls: ['./mac-files.component.scss']
})
export class MacFilesComponent {

  @Input() path: string;
  @Output() selectedFolder = new EventEmitter<string>();

  fileItems: Array<File> = [];
  sortByName: Boolean = true;
  sortByNameK: Boolean = true;
  sortByDate: Boolean = false;
  sortByDateK: Boolean = false;
  sortBySize: Boolean = false;
  sortBySizeK: Boolean = false;

  constructor(public fileService: FileService) { }

  ngOnChanges(changes: SimpleChange) {
    this.path = changes['path'].currentValue;
    this.fileItems = this.getFiles();
  }

  getFiles() {
    const regPath = this.path ? this.path.replace(/[a-z]*\//g, '[a-z]*\\/') : '';
    const files = this.fileService.getFiles().filter(file => {
      const regex = new RegExp('^' + regPath + '[a-z\.]*$');
      return regex.test(file.path) && file.path.startsWith(this.path);
    })
    return this.sortFileByName(files, 1);
  }

  sortFileByName(files, k) {
    return files.sort(function (a, b) {
      console.log(a.path, 'aaa');
      console.log(b.path, 'bbb')
      if (a.path > b.path) {
        return 1*k;
      }
      if (a.path < b.path) {
        return -1*k;
      }
      return 0;
    });
  }

  sortFileByDate(files, k) {
    return files.sort(function (a, b) {
      console.log(a.path, 'aaa');
      console.log(b.path, 'bbb')
      if (a.path > b.path) {
        return 1*k;
      }
      if (a.path < b.path) {
        return -1*k;
      }
      return 0;
    });
  }

  sortFileBySize(files, k) {
    return files.sort(function (a, b) {
      console.log(a.path, 'aaa');
      console.log(b.path, 'bbb')
      if (a.path > b.path) {
        return 1*k;
      }
      if (a.path < b.path) {
        return -1*k;
      }
      return 0;
    });
  }

  sortBy(field) {
    console.log(field, 'field')
    switch(field) {
      case 'name':
        this.sortByDate = false;
        this.sortByDateK = false;
        this.sortBySize = false;
        this.sortBySizeK = false;
        this.sortByName = true;
        this.sortByNameK = !this.sortByNameK;
        let kaf = this.sortByNameK ? 1 : -1;
        this.fileItems = this.sortFileByName(this.fileItems, kaf);
        break;
      case 'date':
        this.sortByName = false;
        this.sortByNameK = false;
        this.sortBySize = false;
        this.sortBySizeK = false;
        this.sortByDate = true;
        this.sortByDateK = !this.sortByDateK;
        break;
      case 'size':
        this.sortByName = false;
        this.sortByNameK = false;
        this.sortByDate = false;
        this.sortByDateK = false;
        this.sortBySize = true;
        this.sortBySizeK = !this.sortBySizeK;
        break;
    }
  }

  numToArray(): any[] {
    const num = 20 - this.fileItems.length;
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
}

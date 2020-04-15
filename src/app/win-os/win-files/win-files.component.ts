import { Component, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { FileService, File } from '../../file.service'
import { SortingService } from 'src/app/sorting.service';

@Component({
  selector: 'app-win-files',
  templateUrl: './win-files.component.html',
  styleUrls: ['./win-files.component.scss']
})

export class WinFilesComponent {
  
  @Input() path: string;
  @Input() searchText: string;
  @Output() selectedFolder = new EventEmitter<string>();

  fileItems: Array<File> = [];

  fileType = {
    folder: 'File folder',
    file: {
      txt: 'Text Document',
      pdf: 'PDF Document',
      csv: 'CSV Document',
      doc: 'Word Document',
    }
  };
  sortObj = {
    name: {
      sort: true,
      index: true,
    },
    date: {
      sort: false,
      index: false,
    },
    type: {
      sort: false,
      index: false,
    },
    size: {
      sort: false,
      index: false,
    }
  };

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
    const key = Object.keys(this.sortObj).find(key => this.sortObj[key].sort);
    const kaf = this.sortObj[key].index ? 1 : -1;

    return this.sortService.sortFile(key, files, kaf);
  }

  getSearchFiles() {
    const files = this.fileService.getFiles().filter(file => {
      const fileName = file.path.match(/[a-z\.]*$/)[0];
      return file.path.startsWith(this.path) && fileName.includes(this.searchText);
    })
    const key = Object.keys(this.sortObj).find(key => this.sortObj[key].sort);
    const kaf = this.sortObj[key].index ? 1 : -1;

    return this.sortService.sortFile(key, files, kaf);
  }

  sortBy(field) {
    let kaf;
    Object.keys(this.sortObj).map(key => {
      if (key===field) {
        this.sortObj[key].sort = true;
        this.sortObj[key].index = !this.sortObj[key].index;
        kaf = this.sortObj[key].index ? 1 : -1;
      } else {
        this.sortObj[key].sort = false;
        this.sortObj[key].index = false;
      }
    })
    this.fileItems = this.sortService.sortFile(field, this.fileItems, kaf);
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
    return 'file ' + 'file-win-' + path.replace(/.*\./, '');
  }

  getFolderSize(path) {
    return this.fileService.getFolderSize(path);
  }

  clickFolder(index) {
    document.getElementById('row-'+index).childNodes.forEach(child => {
      child.childNodes[0] ? child.childNodes[0]['className'] = 'add-border add-background' : null;
    });
    for (let i = 0; i < this.fileItems.length; i++) {
      if (i !== index) {
        document.getElementById('row-'+i).childNodes.forEach(child => {
          child.childNodes[0] ? child.childNodes[0]['className'] = '' : null;
        });
      }
    }
  }

  clickContent(event) {
    if (event.path.length === 10) {
      for (let i = 0; i < this.fileItems.length; i++) {
        document.getElementById('row-'+i).childNodes.forEach(child => {
          child.childNodes[0] ? 
            child.childNodes[0]['className'] = child.childNodes[0]['className'] ? 'add-border' : ''
            : null;
        });
      }
    }
  }

  getFileType(file) {
    if (file.type === 'folder') return this.fileType.folder;

    const fType = file.path.replace(/.*\./, '');
    return this.fileType.file[fType];
  }
}

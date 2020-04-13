import { Component } from '@angular/core';
import { File } from '../../file.service'

@Component({
  selector: 'app-win-files',
  templateUrl: './win-files.component.html',
  styleUrls: ['./win-files.component.scss']
})

export class WinFilesComponent {
  
  fileItems: File[] = [
    { path: 'Hydrogen', size: 1.0079, modificationDate: 'H', type: 'file' },
    { path: 'Helium', size: 4.0026, modificationDate: 'He', type: 'file' },
    { path: 'Lithium', size: 6.941, modificationDate: 'Li', type: 'file' },
    { path: 'Beryllium', size: 9.0122, modificationDate: 'Be', type: 'file' },
    { path: 'Boron', size: 10.811, modificationDate: 'B', type: 'file' },
    { path: 'Carbon', size: 12.0107, modificationDate: 'C', type: 'file' },
  ];

  // fileItems: Array<File> = [];
  sortByName: Boolean = true;
  sortByNameK: Boolean = true;
  sortByDate: Boolean = false;
  sortByDateK: Boolean = false;
  sortBySize: Boolean = false;
  sortBySizeK: Boolean = false;

  sortBy(field) {
    let kaf;
    // switch(field) {
    //   case 'name':
    //     this.sortByDate = false;
    //     this.sortByDateK = false;
    //     this.sortBySize = false;
    //     this.sortBySizeK = false;
    //     this.sortByName = true;
    //     this.sortByNameK = !this.sortByNameK;
    //     kaf = this.sortByNameK ? 1 : -1;
    //     this.fileItems = this.sortService.sortFileByName(this.fileItems, kaf);
    //     break;
    //   case 'date':
    //     this.sortByName = false;
    //     this.sortByNameK = false;
    //     this.sortBySize = false;
    //     this.sortBySizeK = false;
    //     this.sortByDate = true;
    //     this.sortByDateK = !this.sortByDateK;
    //     kaf = this.sortByDateK ? 1 : -1;
    //     this.fileItems = this.sortService.sortFileByDate(this.fileItems, kaf);
    //     break;
    //   case 'size':
    //     this.sortByName = false;
    //     this.sortByNameK = false;
    //     this.sortByDate = false;
    //     this.sortByDateK = false;
    //     this.sortBySize = true;
    //     this.sortBySizeK = !this.sortBySizeK;
    //     kaf = this.sortBySizeK ? 1 : -1;
    //     this.fileItems = this.sortService.sortFileBySize(this.fileItems, kaf);
    //     break;
    // }
  }

  selectFolder(file) {
    // if (file.type === 'folder') {
    //   this.selectedFolder.emit(file.path);
    // }
  }

  getFileIcon(path) {
    return 'file ' + 'file-' + path.replace(/.*\./, '');
  }

  getFolderSize(path) {
    return 13;
    // return this.fileService.getFolderSize(path);
  }
}

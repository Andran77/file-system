import { Injectable, Injector } from '@angular/core';
import { FileService } from './file.service';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  static fileType = {
    folder: 'File folder',
    file: {
      txt: 'Text Document',
      pdf: 'PDF Document',
      csv: 'CSV Document',
      doc: 'Word Document',
    }
  };

  static fileService = new FileService();

  sortFile(field, files, k) {
    switch(field) {
      case 'name':
        return this.sortFileByName(files, k);
      case 'date':
        return this.sortFileByDate(files, k);
      case 'size':
        return this.sortFileBySize(files, k);
      case 'type':
        return this.sortFileByType(files, k);
    }
  }

  sortFileByName(files, k) {
    return files.sort(function (a, b) {
      const aName = a.path.match(/[a-z\.]*$/)[0];
      const bName = b.path.match(/[a-z\.]*$/)[0];
      if (aName > bName) {
        return 1*k;
      }
      if (aName < bName) {
        return -1*k;
      }
      return 0;
    });
  }

  sortFileByDate(files, k) {
    return files.sort(function (a, b) {
      const aDate = new Date(a.modificationDate).getTime();
      const bDate = new Date(b.modificationDate).getTime();
      if (aDate > bDate) {
        return 1*k;
      }
      if (aDate < bDate) {
        return -1*k;
      }
      return 0;
    });
  }

  sortFileBySize(files, k) {
    return files.sort(function (a, b) {
      const aSize = a.type === 'file' ? a.size : SortingService.fileService.getFolderSize(a.path);
      const bSize = b.type === 'file' ? b.size : SortingService.fileService.getFolderSize(b.path);
      if (aSize > bSize) {
        return 1*k;
      }
      if (aSize < bSize) {
        return -1*k;
      }
      return 0;
    });
  }

  sortFileByType(files, k) {
    return files.sort(function (a, b) {
      const aType = a.type === 'folder' ? 'File folder' : SortingService.getFileType(a.path);
      const bType = b.type === 'folder' ? 'File folder' : SortingService.getFileType(b.path);
      if (aType > bType) {
        return 1*k;
      }
      if (aType < bType) {
        return -1*k;
      }
      return 0;
    });
  }

  static getFileType(path) {
    const key = path.replace(/.*\./, '');
    return this.fileType.file[key];
  }
}

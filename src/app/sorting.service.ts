import { Injectable, Injector } from '@angular/core';
import { FileService } from './file.service';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  static fileService = new FileService();

  sortFileByName(files, k) {
    return files.sort(function (a, b) {
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
}

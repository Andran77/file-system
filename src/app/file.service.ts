import { Injectable } from '@angular/core';

export interface File {
  path: string;
  modificationDate: string;
  type: string;
  size?: number;
}

const today = new Date().toLocaleString();
const yesterday = new Date(new Date().getTime() - 86400000).toLocaleString();

@Injectable({
  providedIn: 'root'
})
export class FileService {

  files: Array<File> =  [
    {
      path: 'university',
      modificationDate: today,
      type: 'folder'
    },
    {
      path: 'university/faculties',
      modificationDate: '2018-10-10',
      type: 'folder'
    },
    {
      path: 'university/faculties/mathematics',
      modificationDate: '2018-10-10',
      type: 'folder'
    },
    {
      path: 'university/faculties/phisics',
      modificationDate: '2018-10-10',
      type: 'folder'
    },
    {
      path: 'university/faculties/mathematics/subjects.txt',
      modificationDate: '2018-08-08',
      type: 'file',
      size: 1
    },
    {
      path: 'university/faculties/mathematics/doctors.doc',
      modificationDate: '2018-09-09',
      type: 'file',
      size: 1.25
    },
    {
      path: 'university/faculties/phisics/subjects.txt',
      modificationDate: '2018-10-10',
      type: 'file',
      size: 2
    },
    {
      path: 'university/students',
      modificationDate: '2018-05-05',
      type: 'folder'
    },
    {
      path: 'university/students/certificates.pdf',
      modificationDate: '2018-02-02',
      type: 'file',
      size: 10
    },
    {
      path: 'university/students/scores.csv',
      modificationDate: '2018-03-03',
      type: 'file',
      size: 18.6
    },
    {
      path: 'university/students/bio.pdf',
      modificationDate: '2018-05-05',
      type: 'file',
      size: 18.6
    },
    {
      path: 'university/rules.pdf',
      modificationDate: yesterday,
      type: 'file',
      size: 0.02
    }
  ]

  getFiles() {
    return [ ...this.files ];
  }

  getFilesStartsWith(path) {
    return this.files.find(file => file.path === path)
  }

  getFolderSize(path) {
    let folderSize = 0;
    this.files.forEach(file => {
      if (file.type === 'file' && file.path.startsWith(path)) {
        folderSize += file.size;
      }
    })
    return folderSize;
  }
}

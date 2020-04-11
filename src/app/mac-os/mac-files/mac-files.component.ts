import { Component, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { FileService, File } from '../../file.service'

@Component({
  selector: 'app-mac-files',
  templateUrl: './mac-files.component.html',
  styleUrls: ['./mac-files.component.scss']
})
export class MacFilesComponent {

  @Input() files: Array<File>;
  @Input() path: String;
  @Output() selectedFolder = new EventEmitter<string>();

  fileItems: Array<File> = [];
  arrayItems: Array<String> = [];

  constructor(public fileService: FileService) { }

  ngOnChanges(changes: SimpleChange) {
    this.arrayItems = [];
    this.fileItems = changes['files'].currentValue.filter(file => {
      let path = file.path.replace(this.path, '');
      path = path.replace(/\/.*/, '');
      if (this.arrayItems.indexOf(path) === -1) {
        this.arrayItems.push(path);
        return true;
      } else {
        return false;
      }
    })
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

import { Component, OnInit } from '@angular/core';
import { FileService, File } from '../file.service';

@Component({
  selector: 'app-mac-os',
  templateUrl: './mac-os.component.html',
  styleUrls: ['./mac-os.component.scss']
})
export class MacOsComponent implements OnInit {

  showTags:Boolean = true;
  showCloud:Boolean = true;
  showFav:Boolean = true;

  filePath: Array<String> = [];
  files: Array<File> = [];
  currentPath: String = '';

  constructor(public fileService: FileService){
  }

  ngOnInit(): void {
    this.files = this.getCurrentFiles();
  }

  selectedFolder(event) {
    this.currentPath = event + '/';
    this.files = this.getCurrentFiles();
  }

  getCurrentFiles() {
    const regPath = this.currentPath ? this.currentPath.replace(/\//g, '\\/') : '';
    return this.fileService.getFiles().filter(file => {
      const regex = new RegExp('^(' + regPath + ').*$')
      return regex.test(file.path);
    })
  }

  goBack() {
    this.currentPath = this.currentPath.replace(/([a-z]*\/)*([a-z]*\/)/, (fullValue, firstPart, secondPart) => {
      return fullValue; // firstPart ? firstPart : '';
    })
  }
}

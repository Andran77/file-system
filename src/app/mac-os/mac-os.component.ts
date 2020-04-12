import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  fullPath: string = '';
  currentPath: string = '';

  constructor(public fileService: FileService, private router: Router ){
  }

  ngOnInit(): void {
  }

  selectedFolder(event) {
    this.currentPath = this.getCurrentPath(event);
    this.fullPath = event + '/';
  }

  goBack() {
    this.fullPath = this.fullPath.replace(/([a-z]*\/)$/, '');
    this.currentPath = this.getCurrentPath(this.fullPath.replace(/\/$/, ''));
  }

  getCurrentPath(path) {
    return path.replace(/^([a-z]*[\/])*([a-z]*)$/, (full, parent, current) => {
      return current;
    })
  }

  goHome() {
    this.router.navigate(['home']);
  }
}

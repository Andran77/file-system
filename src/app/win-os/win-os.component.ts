import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../file.service';

@Component({
  selector: 'app-win-os',
  templateUrl: './win-os.component.html',
  styleUrls: ['./win-os.component.scss']
})

export class WinOsComponent implements OnInit {

  fullPath: string = '';
  currentPath: string = '';
  currentPaths: Array<string> = [];
  historyPath: Array<string> = [];
  searchText: string = '';

  constructor(
    public fileService: FileService,
    private router: Router,
  ){
  }

  ngOnInit() {
    const path = this.router.url.slice(5);
    if (this.fileService.getFilesStartsWith(path)) {
      this.fullPath = path ? path + '/' : '';
      this.currentPath = path ? this.currentPath = this.getCurrentPath(path) : '';
      this.currentPaths = path.split('/').filter(item => item)
    } else {
      this.router.navigate(['win']);
    }
  }

  ngDoCheck() {
    const path = this.router.url.slice(4);
    if (this.fileService.getFilesStartsWith(path) && path.replace(/\//g, '') !== this.fullPath.replace(/\//g, '')) {
      window.location.reload();
    }
  }

  selectedFolder(event) {
    this.fullPath = event + '/';
    this.historyPath = [];
    this.searchText = '';
    this.currentPath = this.getCurrentPath(event);
    this.currentPaths.push(this.currentPath);
    this.router.navigate([`win/${event}`]);
  }

  goBack() {
    if (!this.currentPath) return;

    this.currentPaths.pop()
    this.searchText = '';
    this.historyPath.push(this.currentPath);
    this.fullPath = this.fullPath.replace(/([a-z]*\/)$/, '');
    this.currentPath = this.getCurrentPath(this.fullPath.replace(/\/$/, ''));
    this.router.navigate([`win/${this.fullPath}`]);
  }

  goPrew() {
    if (!this.historyPath.length) return;

    this.searchText = '';
    const path = this.historyPath.pop();
    this.fullPath += path + '/';
    this.currentPath = path;
    this.currentPaths.push(this.currentPath);
    this.router.navigate([`win/${this.fullPath}`]);
  }

  getCurrentPath(path) {
    return path.replace(/^([a-z]*[\/])*([a-z]*)$/, (full, parent, current) => {
      return current;
    })
  }

  goHome() {
    this.router.navigate(['home']);
  }

  clearSearch() {
    this.searchText = '';
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  historyPath: Array<string> = [];
  searchText: string = '';

  constructor(
    public fileService: FileService,
    private router: Router,
    private route: ActivatedRoute
  ){
  }

  ngOnInit(): void {
    // let path;
    // this.route.params.subscribe(data => {
    //   path = data.id;
    // })
    // if (path) {
    //   if (this.fileService.getFilesStartsWith(path)) {
    //     this.fullPath = path + '/';
    //     this.currentPath = this.getCurrentPath(path);
    //   } else {
    //     this.router.navigate(['mac']);
    //   }
    // } else {
    //   console.log('test')
    // } 
  }

  selectedFolder(event) {
    this.searchText = '';
    this.historyPath = [];
    this.currentPath = this.getCurrentPath(event);
    this.fullPath = event + '/';
  }

  goBack() {
    this.historyPath.push(this.currentPath);
    this.fullPath = this.fullPath.replace(/([a-z]*\/)$/, '');
    // this.router.navigate([`mac/${this.fullPath}`]);
    this.currentPath = this.getCurrentPath(this.fullPath.replace(/\/$/, ''));
  }

  goPrew() {
    if (!this.historyPath.length) return;

    const path = this.historyPath.pop();
    this.fullPath += path + '/';
    this.currentPath = path;
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

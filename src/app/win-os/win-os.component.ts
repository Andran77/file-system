import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FileService } from '../file.service';

@Component({
  selector: 'app-win-os',
  templateUrl: './win-os.component.html',
  styleUrls: ['./win-os.component.scss']
})

export class WinOsComponent implements OnInit {

  constructor(
    public fileService: FileService,
    private router: Router,
    private route: ActivatedRoute
  ){
  }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['home']);
  }

}

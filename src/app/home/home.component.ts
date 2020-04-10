import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog,private router: Router ) {
  }

  ngOnInit() {
    this.openDialog();
  }

  openDialog() {
    console.log('aksdhakjdh')
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        width: '250px',
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.openDialog();
      } else {
        switch(result) {
          case 'mac':
            this.router.navigate(['mac']);
            break;
          case 'windows':
            this.router.navigate(['win']);
            break;
        }
      }
    });
  }

}

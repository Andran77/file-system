import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-mac-os',
  templateUrl: './mac-os.component.html',
  styleUrls: ['./mac-os.component.scss']
})
export class MacOsComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry){
    this.matIconRegistry.addSvgIcon(
      `folder`,
      `../../assets/img/icon/mac/folder.png`
    );
  }

  ngOnInit(): void {
  }

}

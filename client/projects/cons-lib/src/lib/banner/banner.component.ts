import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Output() public menuClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public onMenuClick(): void {
    this.menuClick.emit();
  }
}

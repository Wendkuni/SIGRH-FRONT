import {Component, ElementRef, ViewChild} from '@angular/core';
import {LayoutService} from './service/app.layout.service';
import {StyleClassModule} from "primeng/styleclass";
import {NgClass} from "@angular/common";
import {DropdownModule} from "primeng/dropdown";

@Component({
  selector: 'mrt-topbar',
  standalone: true,
  imports: [
    StyleClassModule,
    NgClass,
    DropdownModule
  ],
  templateUrl: './app.topbar.component.html'
})
export class AppTopbarComponent {

  @ViewChild('menuButton') menuButton!: ElementRef;

  @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef;

  constructor(public layoutService: LayoutService, public el: ElementRef) {
  }

  activeItem!: number;
  exercices: any[] = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

  get mobileTopbarActive(): boolean {
    return this.layoutService.state.topbarMenuActive;
  }

  onMenuButtonClick() {
    this.layoutService.onMenuToggle();
  }


  onMobileTopbarMenuButtonClick() {
    this.layoutService.onTopbarMenuToggle();
  }

}

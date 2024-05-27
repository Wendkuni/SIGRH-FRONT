import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    ViewChild,
} from '@angular/core';
import { AppMenuProfileComponent } from './app.menuprofile.component';
import { LayoutService } from './service/app.layout.service';
import {AppMenuComponent} from "./app.menu.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'mrt-sidebar',
  templateUrl: './app.sidebar.component.html',
  imports: [AppMenuProfileComponent, AppMenuComponent, NgIf],
  standalone: true
})
export class AppSidebarComponent implements OnDestroy {
    timeout: any = null;

    @ViewChild(AppMenuProfileComponent) menuProfile!: AppMenuProfileComponent;

    @ViewChild('menuContainer') menuContainer!: ElementRef;

    constructor(public layoutService: LayoutService, public el: ElementRef) {}

    resetOverlay() {
        if (this.layoutService.state.overlayMenuActive) {
            this.layoutService.state.overlayMenuActive = false;
        }
    }

    get menuProfilePosition(): string {
        return this.layoutService.config().menuProfilePosition;
    }

    onMouseEnter() {
        if (!this.layoutService.state.anchored) {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
            this.layoutService.state.sidebarActive = true;
        }
    }

    onMouseLeave() {
        if (!this.layoutService.state.anchored) {
            if (!this.timeout) {
                this.timeout = setTimeout(
                    () => (this.layoutService.state.sidebarActive = false),
                    300
                );
            }
        }
    }

    anchor() {
        this.layoutService.state.anchored = !this.layoutService.state.anchored;
    }

    ngOnDestroy() {
        this.resetOverlay();
    }
}

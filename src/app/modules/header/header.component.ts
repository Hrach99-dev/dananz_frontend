import {Component} from "@angular/core";

@Component({
  selector: "d-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {

  public isMobileMenuOpened: boolean = false;

  constructor() {
  }

  public changeMobileNavigationVisibilityMode = (): void => {
    this.isMobileMenuOpened = !this.isMobileMenuOpened;
  }
}

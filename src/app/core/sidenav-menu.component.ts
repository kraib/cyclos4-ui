import { ChangeDetectionStrategy, Component, Injector, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { BaseComponent } from 'app/shared/base.component';
import { RootMenuEntry, MenuType, MenuEntry } from 'app/shared/menu';
import { MenuService } from 'app/shared/menu.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'sidenav-menu',
  templateUrl: 'sidenav-menu.component.html',
  styleUrls: ['sidenav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavMenuComponent extends BaseComponent implements OnInit {
  constructor(
    injector: Injector,
    private menuService: MenuService) {
    super(injector);
  }

  @Input()
  sidenav: MatSidenav;

  roots: Observable<RootMenuEntry[]>;

  ngOnInit() {
    super.ngOnInit();
    this.roots = this.menuService.menu(MenuType.SIDENAV);
  }

  onMenuClicked(entry: MenuEntry) {
    this.close();
  }

  close() {
    this.sidenav.close();
  }
}

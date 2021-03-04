import {Component, OnInit} from '@angular/core';
import {SidebarService} from '../../../../services/sidebar.service';
import {ThemeSettingsComponent} from '../../theme-settings/theme-settings.component';
import {AppSettingsComponent} from '../../app-settings/app-settings.component';
import {ChartConfigComponent} from '../../chart-config/chart-config.component';

@Component({
    selector: 'dsw-menu-settings',
    templateUrl: './menu-settings.component.html',
    styleUrls: ['./../menu.component.scss']
})
export class MenuSettingsComponent implements OnInit {

    constructor(private sbs: SidebarService) {
    }

    ngOnInit(): void {
    }

    showThemeSettings() {
        this.sbs.sidebarToggle.next({component: ThemeSettingsComponent});
    }

    showAppSettings() {
        this.sbs.sidebarToggle.next({component: AppSettingsComponent});
    }

    showChartsSettings() {
        this.sbs.sidebarToggle.next({component: ChartConfigComponent});
    }
}

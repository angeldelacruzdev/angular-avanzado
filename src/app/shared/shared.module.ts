import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [HeaderComponent, BreadcrumbsComponent, SidebarComponent],
  exports: [HeaderComponent, BreadcrumbsComponent, SidebarComponent],
  imports: [CommonModule],
})
export class SharedModule {}

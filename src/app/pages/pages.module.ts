import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    ProgressComponent,
  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    ProgressComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class PagesModule {}

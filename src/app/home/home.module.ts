import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { BlogListModule } from '../blog-list/blog-list.module';
import { SidenavModule } from '../shared/components/sidenav/sidenav.module';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, HeaderModule, SidenavModule],
})
export class HomeModule {}

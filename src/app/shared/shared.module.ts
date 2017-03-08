import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToArrayPipe } from './pipes/to-array.pipe';
import { HeaderBrandingComponent } from './components/header/header-branding/header-branding.component';
import { HeaderNotificationComponent } from './components/header/header-notification/header-notification.component';
import { HeaderUserComponent } from './components/header/header-user/header-user.component';
import { HeaderFileComponent } from './components/header/header-file/header-file.component';
import { UttamComponent } from './uttam/uttam.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, NavbarComponent, ToArrayPipe, HeaderBrandingComponent, HeaderNotificationComponent, HeaderUserComponent, HeaderFileComponent, UttamComponent],
  exports:[HeaderComponent, FooterComponent, NavbarComponent, ToArrayPipe, HeaderBrandingComponent, HeaderNotificationComponent, HeaderUserComponent, HeaderFileComponent]
})
export class SharedModule { }

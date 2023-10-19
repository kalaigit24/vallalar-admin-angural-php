import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { CommonModule } from "@angular/common";
import { SuiModule} from 'ng2-semantic-ui';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MembersComponent ,MemberViewForm,MemberDelete} from './members/members.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { WelcometextComponent,WelcomeForm,PictureViewwelcome } from './welcometext/welcometext.component';
import { QuoteComponent,QuoteForm } from './quote/quote.component';
import { HomebannerComponent,HomeBannerForm,PictureViewHomeBanner} from './homebanner/homebanner.component';
import { ScrolltextComponent,ScrollForm } from './scrolltext/scrolltext.component';
import { AboutchruchComponent,AboutChurchForm,PictureViewAboutChurch } from './aboutchruch/aboutchruch.component';
import { GalleryComponent,GalleryForm ,PictureViewGallery} from './gallery/gallery.component';
import { ContactsComponent,ContactViewForm } from './contacts/contacts.component';
import { KartharinsathamComponent,PictureViewKarthar,KartharChurchForm } from './kartharinsatham/kartharinsatham.component';
import { JohnydavismessageComponent,PictureViewAboutMessage,MessageForm,VideoForm,AudioForm,PictureViewAboutAudio } from './johnydavismessage/johnydavismessage.component';
import { JamydavismessageComponent,JamyPictureViewAboutMessage,JamyMessageForm,JamyVideoForm,JamyAudioForm,JamyPictureViewAboutAudio } from './jamydavismessage/jamydavismessage.component';
import { AdminComponent,AdminForm ,PictureViewUser} from './admin/admin.component';
 import { EventpageComponent,EventForm, PictureViewEvent, EventImageForm } from './eventpage/eventpage.component';
import { DonationPageComponent,DonationViewForm } from './donation-page/donation-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    MembersComponent,
    MemberViewForm,
    MemberDelete,
    ConfirmationDialogComponent,
    WelcometextComponent,
    PictureViewwelcome,
    QuoteComponent,
    QuoteForm,
    HomebannerComponent,
    HomeBannerForm,
    PictureViewHomeBanner,
    ScrolltextComponent,
    ScrollForm,
    AboutchruchComponent,
    AboutChurchForm,
    PictureViewAboutChurch,
    GalleryComponent,
    PictureViewGallery,
    GalleryForm,
    ContactsComponent,
    ContactViewForm,
    KartharinsathamComponent,
    PictureViewKarthar,
    KartharChurchForm,
    JohnydavismessageComponent,
    PictureViewAboutMessage,
    MessageForm,
    VideoForm,
    AudioForm,
    PictureViewAboutAudio,
    JamydavismessageComponent,
    JamyPictureViewAboutMessage,
    JamyMessageForm,
    JamyVideoForm,
    JamyAudioForm,
    JamyPictureViewAboutAudio,
    WelcomeForm,
    AdminComponent,
    AdminForm,
    PictureViewUser,
    PictureViewHomeBanner,
    EventpageComponent,
    EventForm,
    EventImageForm,
    PictureViewEvent,
    DonationPageComponent,
    DonationViewForm,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule,
    MatTabsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    SuiModule, 
    TooltipModule.forRoot(),
    NgxSpinnerModule,
    NgbModule,
    AngularEditorModule,
    FlexLayoutModule,
    PdfViewerModule,
    NgxYoutubePlayerModule
  ],
  entryComponents: [
    MembersComponent,
    MemberViewForm,
    MemberDelete,
    ConfirmationDialogComponent,
    WelcomeForm,
    AdminForm,
    PictureViewUser,
    QuoteForm,
    HomeBannerForm,
    PictureViewHomeBanner,
    ScrollForm,
    AboutChurchForm,
    PictureViewAboutChurch,
    GalleryForm,
    PictureViewGallery,
    ContactViewForm,
    PictureViewKarthar,
    KartharChurchForm,
    PictureViewAboutMessage,
    MessageForm,
    VideoForm,
    AudioForm,
    PictureViewAboutAudio,
    PictureViewwelcome,
    JamyPictureViewAboutMessage,
    JamyMessageForm,
    JamyVideoForm,
    JamyAudioForm,
    JamyPictureViewAboutAudio,
    EventForm,
    EventImageForm,
    PictureViewEvent,
    DonationViewForm
  ],
  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

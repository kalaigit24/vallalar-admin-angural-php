import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { WelcometextComponent } from './welcometext/welcometext.component';
import { QuoteComponent } from './quote/quote.component';
import { HomebannerComponent } from './homebanner/homebanner.component';
import { ScrolltextComponent } from './scrolltext/scrolltext.component';
import { AboutchruchComponent } from './aboutchruch/aboutchruch.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { KartharinsathamComponent } from './kartharinsatham/kartharinsatham.component';
import { JohnydavismessageComponent } from './johnydavismessage/johnydavismessage.component';
import { JamydavismessageComponent } from './jamydavismessage/jamydavismessage.component';
import { AdminComponent } from './admin/admin.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { DonationPageComponent } from './donation-page/donation-page.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'members', component: MembersComponent},
  {path: 'welcometext', component: WelcometextComponent},
  {path: 'quote', component: QuoteComponent},
  {path: 'homebanner', component: HomebannerComponent},
  {path: 'scrolltext', component: ScrolltextComponent},
  {path: 'aboutchruch', component: AboutchruchComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'articles', component: KartharinsathamComponent},
  {path: 'trustmessage', component: JohnydavismessageComponent},
  // {path: 'pastortwomessage', component: JamydavismessageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'eventpage', component: EventpageComponent },
  {path: 'donation', component: DonationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }


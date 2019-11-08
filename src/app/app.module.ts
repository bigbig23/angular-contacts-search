import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    AddContactComponent,
    NewContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

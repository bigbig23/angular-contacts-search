import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';


const routes: Routes = [
 {path:'about',component:AboutComponent},
 {path:'editContact/:id',component:EditContactComponent},
 {path:'contacts',component:ContactsComponent},
 {path:'add-contact',component: AddContactComponent}, //here are replacing it with new-contact component just to test it differently in separate component
 //{path:'add-contact',component: NewContactComponent}, ///test in finished not let;s change our path add-component
 {path:'', redirectTo:'/about', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

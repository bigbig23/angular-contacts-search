import { Component, OnInit } from '@angular/core';
import { GetContactsService } from 'src/app/services/get-contacts.service';
import { Router } from '@angular/router';
import { Contact } from 'src/model/model.contact';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

   pageContact:any;
   motCle:string="";
   size:number=5;
   currentPage:number=0;

   pages:Array<number>;

  constructor(private getCon:GetContactsService,private router:Router) { }

  ngOnInit() {
    //this.searchContact();
   
   
  }

  searchContact(){
    this.getCon.serachConts(this.motCle,this.size,this.currentPage).subscribe((data:any) =>{
      this.pageContact = data;
      this.pages = new Array(data.totalPages);
    },erro => console.log(erro))
  }

  search(){
    this.searchContact();
  }


  gotToPage(i){
    this.currentPage=i;
    this.searchContact();
  }


  onEditContact(id:number){
    this.router.navigate(["editContact",id]); //now let's go to editContact component to recieve data with activatedRout method
   }


   onDeleteContact(c:Contact){
     let confirm=window.confirm('Are you sure you want to delete it ?')
     if(confirm==true){
      this.getCon.deleteContact(c.id).subscribe(data =>{
        //the data is sent and being deleted, just lets delete it from our pageContents list, otherwise it won't disappear
        this.pageContact.content.splice(this.pageContact.content.indexOf(c),1);
 
      },error =>{
        console.log(error)
      })
   }
    
   }


}

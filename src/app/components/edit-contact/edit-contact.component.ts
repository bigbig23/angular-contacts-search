import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/model/model.contact';
import { GetContactsService } from 'src/app/services/get-contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact:Contact=new Contact();
  mode:number=1;
  idContact:number;
  constructor(private getContact:GetContactsService, private activatedRoute:ActivatedRoute,private router:Router) {
    this.idContact = activatedRoute.snapshot.params['id'];
   }

  ngOnInit() {
    this.getContactById();
  }

  getContactById(){
    this.getContact.getContactById(this.idContact).subscribe((data:any) =>{
      this.contact =data;
      console.log(data)
    }, erro =>{
      console.log(erro)
    })
  }


  updateContact(){
    this.getContact.updateContact(this.contact).subscribe(data =>{
      console.log(data)
      alert('mis a jour')
      this.router.navigate(['contacts']) //when its updated , it goes to contacts path
    },erro =>{
      alert('problem' +erro)
    })
  }



}

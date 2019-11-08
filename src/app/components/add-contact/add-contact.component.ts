import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/model/model.contact';
import { GetContactsService } from 'src/app/services/get-contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  //WE DID THE SAME SOLUTION FOR THIS CLASS WITH NEW-CONTACT CLASS WITH A DIFFERENT WAY(FORM)
  //THERE WE USED <form></form>
/*
- we dont need to declare contact as it's bcoz we created a separted class
  contact={
    nom:'',
    prenom:'',
    dataNaissance:null,
    email:'',
    tel:null
  }
*/
contact:Contact=new Contact();
mode:number=1;


  constructor(private getContact:GetContactsService) { }

  ngOnInit() {
  }


  saveContact(){
    //console.log(this.contact) to diagnose things befoe,
    this.getContact.saveContact(this.contact).subscribe((data:any) =>{
      console.log(data)
      this.contact = data; //it's filled now with id, but without it the mode2 show the data 
      this.mode=2; //once the data is added, i show it
    },erro =>{
      console.log(erro)
    })

  }


}

import { Component, OnInit } from '@angular/core';
import { GetContactsService } from 'src/app/services/get-contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  //here are replacing the add-contact component just for testing 

  //Test is finished with form, now let's go back to our add-contact component

  mode:number=1;
  form;
  constructor(private getContact:GetContactsService) { }

  ngOnInit() {
  }


  onSaveContact(dataForm){
    //console.log(dataForm)
    this.getContact.saveContact(dataForm).subscribe(data=>{
      //console.log(data)
      this.form = data;
      this.mode=2;
    },erro=>{
      console.log(JSON.parse(erro._body).message); //getting the error as json which is useful
    })
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Contact } from 'src/model/model.contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetContactsService {

  url ="http://localhost:8080/app/contacts/searchContact?mc=5&size=9&page=0";
  //"http://localhost:8080/app/contacts/searchContact?mc=5&size=9&page=0";

  baseUrl="http://localhost:8080/app/contacts/";
  constructor(private http:HttpClient) { }
 

  serachConts(mc:string,size:number,page:number){
    return this.http.get("http://localhost:8080/app/contacts/searchContact?mc="+mc+"&size="+size+"&page="+page);
  }


  saveContact(contact:Contact){
    return this.http.post(this.baseUrl, contact)
  }

  getContactById(id:number){
    return this.http.get(this.baseUrl+id);
    
  }


  updateContact(contact:Contact){
    return this.http.put(this.baseUrl, contact)
  }

  deleteContact(id:number){
    return this.http.delete(this.baseUrl+id)
  }



}

export class Contact{
    id:any=null; //it's null bcoz when u send data with id to backend and if there is already this id, it causes problme
    nom:string="";
    prenom:string="";
    email:string;
    dateNaissance:Date;
    tel:number=0;
    photo:string=""


    //WE CAN DECLARE CONSTRUCTOR BUT WE DONT NEED IT
    //EITHE  CONSTRUCTOR OR THE ABOVE FIELD IS SUFFICIENT
   
}
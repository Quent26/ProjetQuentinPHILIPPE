import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  board: string;
  errorMessage: string;
  utilisateurForm:FormGroup;
  users:User[];
  user:User;

  constructor(
    private userService: UserService,
    private formBuilder:FormBuilder,
    private us:UserService
    ){ }

  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }

  initUtilEditForm(){
    this.utilisateurForm=this.formBuilder.group({
      nom:[this.user.nom],
      prenom:[this.user.prenom]
    });
  }
  
  findAll(){
    return this.us.findAll().subscribe(res=>{
      console.log('...',res)
      this.users=res
      console.log('LIste des utilisateur: ', this.users)
    });
  }

  findById(tempId:number){
    this.us.findById(tempId).subscribe(res=>{
      this.user=res;
      this.initUtilEditForm();
    });
  }

  saveUtilisateur(){
    console.log('new utilisateur',this.utilisateurForm.value);
    this .us.save(this.utilisateurForm.value)
    .subscribe(res=>{
      console.log('...',res);
      this.initUtilEditForm();
      this.findAll();
    });
  }
  deleteUtilisateur(id:number){
    this.us.delete(id).subscribe
    (res=>{console.log('supprimer utilisateur: ',res);
    this.findAll();
  });
  }

}

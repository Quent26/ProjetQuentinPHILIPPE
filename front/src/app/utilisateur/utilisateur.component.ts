import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../services/utlisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  utilisateurForm:FormGroup;
  utilisateurs:Utilisateur[];
  utilisateur:Utilisateur;

  constructor(
    private formBuilder:FormBuilder,
    private us:UtilisateurService
  ) { }

  ngOnInit() {
  }

  initUtilEditForm(){
    this.utilisateurForm=this.formBuilder.group({
      nom:[this.utilisateur.nom],
      prenom:[this.utilisateur.prenom]
    });
  }

  findAll(){
    return this.us.findAll().subscribe(res=>{
      console.log('...',res)
      this.utilisateurs=res
      console.log('LIste des utilisateur: ', this.utilisateurs)
    });
  }

  findById(tempId:number){
    this.us.findById(tempId).subscribe(res=>{
      this.utilisateur=res;
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

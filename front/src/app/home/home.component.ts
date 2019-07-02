import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProjetService } from '../services/projet.service';
import { Projet } from '../models/projet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projets:Projet[];

  info: any;

  constructor(
    private token: TokenStorageService, 
    private formBuilder:FormBuilder, 
    private projetService:ProjetService,
    ) { }

  ngOnInit() {
    this.findAll();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
     
    
    };
 
   
  }
 
  logout() {
    this.token.signOut();
    window.location.reload();
  }
  
  findAll(){
    return this.projetService.findAll().subscribe(res=>{
      console.log('Liste des projets: ',res)
      this.projets=res
      console.log('Liste des projets:',this.projets)
    });
  }
}

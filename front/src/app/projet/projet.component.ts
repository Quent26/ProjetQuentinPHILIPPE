import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Projet } from '../models/projet';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  projetForm:FormGroup;
  projets:Projet[];
  projet:Projet;


  constructor(
    private formBuilder:FormBuilder, 
    private ps:ProjetService,
    
    ) { }

  ngOnInit() {
    this.findAll();
  }

/* initProjetForm(){
    this.projetForm=this.formBuilder.group({
      nom:[''],
      description:[''],
      budget:[''],
    });
  }*/

  initProjEditForm(){
    this.projetForm=this.formBuilder.group({
      nom:[this.projet.nom],
      description:[this.projet.description],
      budget:[this.projet.budget],
      PoseurDeProjet:[this.projet.poseurDeProjet],
      categorie:[this.projet.categorie.type_de_don],
    });
  }
  findAll(){
    return this.ps.findAll().subscribe(res=>{
      console.log('Liste des projets: ',res)
      this.projets=res
      console.log('Liste des projets:',this.projets)
    });
  }
  findById(tempId:number){
    this.ps.findById(tempId).subscribe(res=>{
      this.projet=res;
      this.initProjEditForm();
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Projet } from '../models/projet';
import { ProjetService } from '../services/projet.service';
import { Categorie } from '../models/categorie';
import { CategorieService } from '../services/categorie.service';
import { PoseurDeProjet } from '../models/poseur-de-projet';
import { PoseurDeProjetService } from '../services/poseur-de-projet.service';

@Component({
  selector: 'app-new-projet',
  templateUrl: './new-projet.component.html',
  styleUrls: ['./new-projet.component.css']
})
export class NewProjetComponent implements OnInit {
  projetForm:FormGroup;
  projets:Projet[];
  projet:Projet;
  categories:Categorie[];
  categorieForm:FormGroup;
  poseurs:PoseurDeProjet[];
  poseurForm:FormGroup;
  poseur:PoseurDeProjet;

  constructor(
    private formBuilder:FormBuilder, 
    private ps:ProjetService,
    private cs : CategorieService,
    private poseurService: PoseurDeProjetService

  ) { }

  ngOnInit() {
    this.initProjetForm();
    this.findAll();
    this.findAllPoseurs();
  }

  initProjetForm(){
    this.projetForm = this.formBuilder.group({
      nom:[''],
      budget:[''],
      description:[''],
      categorie:[''],
      nomPorteurDeProjet:['']
    });
  }
  /*
  initProjEditForm(){
    this.projetForm=this.formBuilder.group({
      nom:[this.projet.nom],
      description:[this.projet.description],
      budget:[this.projet.budget],
      PoseurDeProjet:[this.projet.poseurDeProjet],
      categorie:[this.projet.categorie],
    });
  }
  */

  saveProjet(){
//let p:Projet=this.projetForm.value;

    console.log("nouveau projet", this.projetForm.value);
    this.ps.save(this.projetForm.value)
    .subscribe(res=>{
      console.log('...',res);
      this.initProjetForm();
      
    });
  }
  findAll(){
    return this.cs.findAll()
    .subscribe(res=>{
      this.categories = res;

    });
  }
  findAllPoseurs(){
    return this.poseurService.findAll()   
    .subscribe(res=>{
      console.log('...',res)
      this.poseurs=res
      console.log('liste des poseurs de projet: ',this.poseurs)
    });
  }

}

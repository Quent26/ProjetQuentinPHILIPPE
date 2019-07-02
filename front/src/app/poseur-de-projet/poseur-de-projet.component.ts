import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PoseurDeProjet } from '../models/poseur-de-projet';
import { PoseurDeProjetService } from '../services/poseur-de-projet.service';

@Component({
  selector: 'app-poseur-de-projet',
  templateUrl: './poseur-de-projet.component.html',
  styleUrls: ['./poseur-de-projet.component.css']
})
export class PoseurDeProjetComponent implements OnInit {
  poseurForm:FormGroup;
  poseurs:PoseurDeProjet[];
  poseur:PoseurDeProjet;

  constructor(
    private formBuilder:FormBuilder,
    private ps : PoseurDeProjetService
  ) { }

  ngOnInit() {
    this.initPoseurForm();
    this.findAll();
  }

  initPoseurForm(){
    this.poseurForm=this.formBuilder.group({
      nomPorteurDeProjet:[''],
      presentation:['']

    });
  }

  findAll(){
    return this.ps.findAll().subscribe(res=>{
      console.log('...',res)
      this.poseurs = res
      console.log('liste des poseurs de projet: ',this.poseurs)
    });
  }

  findById(tempId:number){
    this.ps.findById(tempId).subscribe(res=>{
      this.poseur=res;
      this.initPoseurForm();
    });
  }

  savePoseur(){
    console.log('new porteur de projet',this.poseurForm.value);
    this.ps.save(this.poseurForm.value)
    .subscribe(res=>{
      console.log('...',res);
      this.initPoseurForm();
      this.findAll();
    });
  }

  deletePoseur(id:number){
    this.ps.delete(id).subscribe
    (res=>{console.log('supprimer porteur: ',res);
    this.findAll();
  });
  }

}

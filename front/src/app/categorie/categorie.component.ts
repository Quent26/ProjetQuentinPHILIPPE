import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Categorie } from '../models/categorie';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categorieForm:FormGroup;
  categories:Categorie[];
  categorie:Categorie;


  constructor(
    private formBuilder:FormBuilder,
    private cs:CategorieService
  ) { }

  ngOnInit() {
    this.initCatForm();
  }

  initCatForm(){
    this.categorieForm=this.formBuilder.group({
      type_de_don:['']
    });
  }

findAll(){
  return this.cs.findAll().subscribe(res=>{
    console.log('...',res)
    this.categories=res;
    console.log('liste des categories: '+this.categories)
  });
}
findById(tempId){
  this.cs.findById(tempId).subscribe(res=>{
    this.categorie=res;;
  });
}
saveCategorie(){
  console.log("nouvelle categorie", this.categorieForm.value);
  let cat:Categorie=this.categorieForm.value;
  this.cs.save(cat)
  .subscribe(res=>{this.categorie = res;
    console.log('...',this.categorie);
    this.initCatForm();
  });
}
}

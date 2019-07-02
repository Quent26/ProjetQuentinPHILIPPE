import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Don } from '../models/don';
import { DonService } from '../services/don.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.css']
})
export class DonComponent implements OnInit {
  donForm:FormGroup;
  dons:Don[];
  don:Don;

  constructor(
    private formBuilder:FormBuilder,
    private ds: DonService
  ) { }

  ngOnInit() {
  }

  initDonEditForm(){
    this.donForm=this.formBuilder.group({
      typeDeDon:[this.don.typeDeDon]
    });
  }

  findAll(){
    return this.ds.findAll().subscribe(res=>{
      console.log('...',res)
      this.dons=res
      console.log('tous les dons: ', this.dons)
    });
  }

  saveDon(){
    console.log('don de la valeur: ', this.donForm.value);
    this.ds.save(this.donForm.value)
    .subscribe(res=>{
      console.log('...',res);
      this.initDonEditForm();
      this.findAll();
    });
  }

}

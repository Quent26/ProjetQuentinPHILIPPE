import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FaireDon } from '../models/faire-don';
import { FaireDonService } from '../services/faire-don.service';

@Component({
  selector: 'app-faire-don',
  templateUrl: './faire-don.component.html',
  styleUrls: ['./faire-don.component.css']
})
export class FaireDonComponent implements OnInit {
  fairedonForm:FormGroup;
  fd:FaireDon;
  fdAll:FaireDon[];

  constructor(
    private formBuilder:FormBuilder,
    private fds:FaireDonService
  ) { }

  ngOnInit() {
    this.initFaireDonForm();
    this.findAll();
  }

  initFaireDonForm(){
    this.fairedonForm=this.formBuilder.group({
      montant:['']
    });
  }

  saveFaireDon(){
    console.log("déposer un don",this.fairedonForm.value);
    this.fds.save(this.fairedonForm.value)
    .subscribe(res=>{
      console.log('...',res);
      this.initFaireDonForm();
    });
  }

  findAll(){
    return this.fds.findAll()
    .subscribe(res=>{
      this.fdAll = res;

    });
  }

}

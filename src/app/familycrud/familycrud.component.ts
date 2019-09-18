import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {FamilyService} from '../family.service';



@Component({
  selector: 'app-familycrud',
  templateUrl: './familycrud.component.html',
  styleUrls: ['./familycrud.component.scss']
})
export class FamilycrudComponent implements OnInit {
  familyAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private familyService: FamilyService) { }






  get familyid() {
    return this.familyForm.get('familyid');
  }

  get CFN() {
    return this.familyForm.get('CFN');
  }
  get familyName() {
    return this.familyForm.get('familyName');
  }
  get CLN() {
    return this.familyForm.get('CLN');
  }
  get firstName() {
    return this.familyForm.get('firstName');
  }
  get lccStaff() {
    return this.familyForm.get('lccStaff');
  }
  get lastName() {
    return this.familyForm.get('lastName');
  }


  ngOnInit() {
    this.familyForm = this.formBuilder.group({
      familyid: [''],
      CFN: [''],
      familyName: [''],
      CLN: [''],
      firstName: [''],
      lccStaff: [''],
      lastName: [''],


    });
  }

}

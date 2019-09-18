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
    return this.familyAddForm.get('familyid');
  }

  get DOB() {
    return this.familyAddForm.get('DOB');
  }
  get familyName() {
    return this.familyAddForm.get('familyName');
  }
  get marital() {
    return this.familyAddForm.get('marital');
  }
  get otherMarital() {
    return this.familyAddForm.get('otherMarital');
  }
  get firstName() {
    return this.familyAddForm.get('firstName');
  }
  get lastName() {
    return this.familyAddForm.get('lastName');
  }
  get race() {
    return this.familyAddForm.get('race');
  }
  get sex() {
    return this.familyAddForm.get('sex');
  }
  get otherRace() {
    return this.familyAddForm.get('otherRace');
  }
  get address1() {
    return this.familyAddForm.get('address1');
  }
  get yis() {
    return this.familyAddForm.get('yis');
  }
  get address2() {
    return this.familyAddForm.get('address2');
  }
  get noy() {
    return this.familyAddForm.get('noy');
  }
  get city() {
    return this.familyAddForm.get('city');
  }
  get hg() {
    return this.familyAddForm.get('hg');
  }
  get zip() {
    return this.familyAddForm.get('zip');
  }
  get otherGrade() {
    return this.familyAddForm.get('otherGrade');
  }
  get phone1() {
    return this.familyAddForm.get('phone1');
  }
  get type1() {
    return this.familyAddForm.get('type1');
  }
  get employment() {
    return this.familyAddForm.get('employment');
  }
  get phone2() {
    return this.familyAddForm.get('phone2');
  }
  get type2() {
    return this.familyAddForm.get('type2');
  }
  get otherEmploy() {
    return this.familyAddForm.get('otherGrade');
  }
  get relation() {
    return this.familyAddForm.get('relation');
  }
  get email() {
    return this.familyAddForm.get('email');
  }
  get email2() {
    return this.familyAddForm.get('email2');
  }
  get otherRelation() {
    return this.familyAddForm.get('otherRelation');
  }

  ngOnInit() {
    this.familyAddForm = this.formBuilder.group({
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

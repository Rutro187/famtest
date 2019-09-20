import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {FamilyService} from '../family.service';
import {races} from '../Models/Interfaces/Race';
import {sexes} from '../Models/Interfaces/Sex';
import {maritals} from '../Models/Interfaces/Marital';
import {yearsinUSes} from '../Models/Interfaces/YearsinUS';
import {highestgrades} from '../Models/Interfaces/HighestGrade';
import {usStates} from '../Models/Interfaces/State';
import {types} from '../Models/Interfaces/Type';
import {employments} from '../Models/Interfaces/Employment';
import {relations} from '../Models/Interfaces/Relation';
import {texts} from '../Models/Interfaces/text';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-familycrud',
  templateUrl: './familycrud.component.html',
  styleUrls: ['./familycrud.component.scss']
})
export class FamilycrudComponent implements OnInit {
  familyAddForm: FormGroup;
  submitted = false;
  raceOpts = races;
  sexOpts = sexes;
  maritalOpts = maritals;
  yearsinUSesOpts = yearsinUSes;
  highestgradesOpts = highestgrades;
  statesOpts = usStates;
  typeOpts = types;
  employmentOpts = employments;
  relationOpts = relations;
  textOpts = texts;
  constructor(private formBuilder: FormBuilder, private familyService: FamilyService) { }

  addFamily() {
    const data = {
      DOB: this.DOB,
      familyName: this.familyName,
      marital: this.marital,
      otherMarital: this.otherMarital,
      firstName: this.firstName,
      lastName: this.lastName,
      race: this.race,
      sex: this.sex,
      otherRace: this.otherRace,
      address1: this.address1,
      yis: this.yis,
      address2: this.address2,
      noy: this.noy,
      city: this.city,
      hg: this.hg,
      state: this.state,
      zip: this.zip,
      otherGrade: this.otherGrade,
      phone1: this.phone1,
      type1: this.type1,
      employment: this.employment,
      phone2: this.phone2,
      type2: this.type2,
      otherEmploy: this.otherEmploy,
      canText: this.canText,
      relation: this.relation,
      email: this.email,
      email2: this.email2,
      otherRelation: this.otherRelation,
    };
    this.familyService.add(data);
  }




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
  get state() {
    return this.familyAddForm.get('state');
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

  get canText() {
    return this.familyAddForm.get('canText');
  }

  ngOnInit() {
    this.familyAddForm = this.formBuilder.group({
      familyid: [''],
      DOB: [''],
      familyName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      marital: [''],
      otherMarital: [''],
      race: [''],
      sex: [''],
      otherRace: [''],
      address1: [''],
      yis: [''],
      address2: [''],
      noy: [''],
      city: [''],
      hg: [''],
      zip: [''],
      otherGrade: [''],
      phone1: [''],
      type1: [''],
      employment: [''],
      phone2: [''],
      type2: [''],
      otherEmploy: [''],
      relation: [''],
      email: [''],
      email2: [''],
      otherRelation: [''],
      canText: [''],
      state: ['NE - Nebraska'],






    });
  }

}
